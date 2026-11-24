import Link from "next/link";
import { Phone, MapPin, Mail, Globe, Shield, ChevronLeft } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b3168] text-slate-200 border-t-4 border-amber-400 mt-auto">
      {/* بخش اول: پیوندها و دسترسی‌های سریع با پس‌زمینه سرمه‌ای ملایم‌تر */}
      <div className="bg-slate-900/30 border-b border-white/10 py-5">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-bold">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
            <Link href="/" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>صفحه اصلی</span>
            </Link>
            <Link href="/news" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>آرشیو اخبار و اطلاعیه‌ها</span>
            </Link>
            <Link href="/calendar" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>تقویم آزمون‌های سال جاری</span>
            </Link>
            <Link href="/faq" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>سوالات متداول داوطلبان</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>ارتباط با ستاد مرکزی</span>
            </Link>
          </div>

          {/* نشان هویت یا آیکون مرکز */}
          <div className="flex items-center gap-2 font-black text-amber-400">
            <Shield className="w-4 h-4" />
            <span className="text-[11px] text-white">مرکز سنجش آموزش پزشکی کشور</span>
          </div>
        </div>
      </div>

      {/* بخش دوم: اطلاعات ارتباطی با باکس‌های تیره ظریف */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-white/5 text-xs font-semibold text-slate-300">
        {/* آدرس */}
        <div className="flex items-start gap-3 md:col-span-2">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold block">نشانی ستاد مرکزی:</span>
            <span className="leading-relaxed text-slate-200">تهران، خیابان آزادی، بین خیابان اوستا و دکتر قریب، پلاک ۱۲۵</span>
          </div>
        </div>

        {/* تلفن گویا */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold block">تلفن گویا و روابط عمومی:</span>
            <span className="font-mono text-slate-200" dir="ltr">
              +98 (21) 81452000
            </span>
          </div>
        </div>

        {/* پست الکترونیک */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold block">پست الکترونیک رسمی:</span>
            <span className="font-mono text-slate-200">info@sanjeshp.ir</span>
          </div>
        </div>
      </div>

      {/* بخش سوم: نوار کپی‌رایت حقوقی ته فوتر */}
      <div className="bg-slate-950/40 py-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] font-bold text-slate-400">
          <p>تمامی حقوق مادی و معنوی این سامانه متعلق به مرکز سنجش آموزش پزشکی وزارت بهداشت، درمان و آموزش پزشکی می‌باشد. © ۱۴۰۵</p>
          <div className="flex items-center gap-1 text-slate-500 font-mono text-[9px]">
            <Globe className="w-3 h-3" />
            <span>v2.1.0-official</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
