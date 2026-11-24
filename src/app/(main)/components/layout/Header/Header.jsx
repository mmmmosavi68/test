"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Calendar, FileText, Shield, Layers, LogIn, ChevronLeft } from "lucide-react";
import MegaMenu from "./MegaMenu";

// آیتم‌های منو همراه با آیکون‌های متناسب ستادی
const NAV_ITEMS = [
  { label: "خانه", href: "/", icon: Home },
  { label: "آرشیو اطلاعیه‌ها", href: "/news", icon: FileText },
  { label: "تقویم آزمون‌ها", href: "/calendar", icon: Calendar },
  { label: "میز خدمت الکترونیک", href: "/services", icon: Layers },
  { label: "حوزه امنیت و زیرساخت", href: "/infrastructure", icon: Shield },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // بستن منوی موبایل در صورت تغییر مسیر (Route)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // قفل کردن اسکرول صفحه هنگام باز بودن منوی موبایل
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* 🌟 هدر اصلی پورتال */}
      <header className="sticky top-0 z-50 w-full bg-[#0b3168]/95 backdrop-blur-md border-b border-white/10 text-white shadow-md transition-all">
        {/* نوار اطلاعیه متحرک بالای هدر */}
        <div className="bg-[#0b3168] text-white text-xs py-2 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 text-white font-bold px-2 py-0.5 rounded text-[10px] animate-pulse">مهم</span>
            <p className="font-medium">اطلاعیه مهم: مهلت ثبت نام پنجاه و سومین دوره آزمون دستیاری تخصصی تمدید شد.</p>
          </div>
          <Link href="/news/1" className="border border-white/30 hover:bg-white/10 px-3 py-1 rounded text-[11px] transition-all">
            مشاهده اطلاعیه
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* بخش راست: لوگو و عنوان پورتال */}
          <div className="flex items-center gap-3 shrink-0">
            {/* آیکون وکتوری شبیه‌ساز آرم ستاد */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[#0b3168] shadow-md border border-white/10">
              <Shield className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <Link href="/" className="text-sm font-black tracking-tight hover:text-amber-400 transition-colors">
                سامانه یکپارچه سنجش پزشکی
              </Link>
              <span className="text-[9px] text-slate-300 font-bold hidden sm:inline">وزارت بهداشت، درمان و آموزش پزشکی</span>
            </div>
          </div>

          {/* 💻 بخش وسط: منوی دسکتاپ (مخفی در موبایل و تبلت) */}
          <nav className="hidden lg:flex items-center gap-1">
            <MegaMenu />
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition-all duration-200 relative group ${
                    isActive ? "bg-white/10 text-amber-400 border border-white/10 shadow-sm" : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-slate-400 group-hover:text-white"}`} />
                  <span>{item.label}</span>

                  {/* خط متحرک زیر آیتم غیرفعال در حالت هاور */}
                  {!isActive && <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />}
                </Link>
              );
            })}
          </nav>

          {/* بخش چپ: دکمه ورود/میز خدمت دسکتاپ و دکمه همبرگری موبایل */}
          <div className="flex items-center gap-2">
            {/* دکمه ورود پورتال (مخفی در موبایل) */}
            <Link
              href="/auth/login"
              className="hidden sm:flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-[#0b3168] px-4 py-2 rounded-xl text-xs font-black transition-all shadow-md group cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>ورود به پورتال ستادی</span>
            </Link>

            {/* 📱 دکمه منوی همبرگری (مخصوص موبایل و تبلت) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 📱 دکمه‌ها و منوی کشویی موبایل و تبلت (Drawer Menu) */}
      <div className={`fixed inset-0 z-90 lg:hidden transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* لایه تیره پس‌زمینه (Overlay) */}
        <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" />

        {/* منوی کشویی اصلی از سمت راست */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[#08244d] border-l border-white/5 text-white p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-6">
            {/* هدر داخلی منوی موبایل */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-[#0b3168]">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs font-black">منوی دسترسی سریع</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* لیست آیتم‌های ناوبری موبایل */}
            <nav className="flex flex-col gap-1.5">
              <MegaMenu />

              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-black transition-all ${
                      isActive ? "bg-amber-400 text-[#0b3168] shadow-md font-black" : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#0b3168]" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronLeft className={`w-3.5 h-3.5 opacity-60 ${isActive ? "text-[#0b3168]" : "text-slate-500"}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* دکمه پایین منوی موبایل */}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/auth/login"
              className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#0b3168] py-3 rounded-xl text-xs font-black shadow-md transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>ورود به پورتال ستادی</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
