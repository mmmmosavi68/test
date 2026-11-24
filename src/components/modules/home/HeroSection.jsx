"use client";

import Link from "next/link";
import { Bell, Calendar, ChevronLeft, Clock, FileText } from "lucide-react";
import { latestAnnouncements, specialNotice } from "@/constants/data";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {/* 🌟 کادر سمت راست: اطلاعیه ویژه با حفظ کامل کلاس lg:col-span-2 و استایل ترانسفورماتور */}
      <div className="lg:col-span-2 bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-xl border border-white/5">
        {/* ۱. پترن وکتوری هندسی فشرده و متراکم (۱۶ پیکسل) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="hero-special-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-special-grid)" />
          </svg>
        </div>

        {/* ۲. هاله نور شعاعی وسط برای عمق گرافیکی شیک */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* خط هویت بصری طلایی لبه پایین کادر */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        {/* بخش آیکون‌های گرافیکی اورجینال سمت چپ در پس‌زمینه */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 opacity-15 pointer-events-none select-none z-0">
          <Calendar className="w-20 h-20 stroke-[1] text-amber-400" />
          <Clock className="w-14 h-14 stroke-[1]" />
          <FileText className="w-16 h-16 stroke-[1]" />
        </div>

        {/* محتوای متنی با پویایی بالا */}
        <div className="relative z-10 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3.5 py-1.5 rounded-xl text-xs font-black shadow-sm">
            <Bell className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{specialNotice.badge || "اطلاعیه آنی"}</span>
          </div>

          {/* ۳. عنوان با گرادینت متنی درخشان نقره‌ای-سفید */}
          <h2 className="text-xl md:text-2xl font-black leading-snug bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-200 drop-shadow-sm">{specialNotice.title}</h2>

          <p className="text-slate-400 text-xs font-semibold leading-relaxed text-justify max-w-lg">{specialNotice.description}</p>
        </div>

        {/* دکمه اکشن شیشه‌ای لوکس پورتالی */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
          <Link href={specialNotice.link} className="inline-block">
            <button className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl font-black text-xs border border-white/10 shadow-sm transition-all flex items-center gap-2 group cursor-pointer">
              <span>مشاهده اطلاعیه و دریافت فایل</span>
              <ChevronLeft className="w-4 h-4 text-amber-400 transition-transform group-hover:-translate-x-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* 🔹 کادر سمت چپ: آخرین اطلاعیه‌ها (کاملاً دست‌نخورده و منطبق بر استایل قبلی شما) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="flex items-center gap-2 pb-3 mb-3">
            <Bell className="w-4 h-4 text-[#0b3168]" />
            <h3 className="text-sm font-bold text-[#0b3168]">آخرین اطلاعیه‌ها</h3>
          </div>

          <div className="space-y-1">
            {latestAnnouncements.map((item) => (
              <Link href={`/news/${item.id}`} key={item.id} className="block border-t border-gray-100 first:border-t-0">
                <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all group">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                    <p className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-1">{item.title}</p>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 font-mono bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100/50 shrink-0">{item.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 mt-3">
          <Link href="/news" className="flex items-center justify-center gap-1 text-xs font-bold text-blue-600 hover:text-[#0b3168] transition-colors group">
            <span>مشاهده همه اطلاعیه‌ها</span>
            <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
