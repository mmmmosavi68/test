

"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  ArrowRight, 
  ChevronLeft, 
  Home, 
  Globe, 
  ShieldCheck, 
  Layers, 
  Server,
  Activity,
  RefreshCw,
  Database,
  KeyRound,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const GRADIENTS = [
  "from-amber-300 via-amber-200 to-yellow-400", 
  "from-cyan-300 via-teal-200 to-emerald-400", 
  "from-white via-slate-100 to-slate-300", 
  "from-sky-300 via-blue-200 to-indigo-400", 
];

export default function ReferenceDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const sourceItem = {
    name: "سامانه جامع آزمون‌های علوم پزشکی",
    code: "SRC-MEDICAL-EXAMS",
    type: "پورتال سازمانی ستادی",
    lastSync: "۱۴۰۵/۰۴/۱۲ - ۱۰:۳۰",
    status: "فعال و آنلاین",
    syncMethod: "Rest API (JSON)",
    recordsCount: "+۴۵۰,۰۰۰ رکورد",
    securityLevel: "سطح ۱ (رمزنگاری TLS 1.3)",
    description: "این منبع وظیفه یکپارچه‌سازی و ثبت اطلاعات متقاضیان، صدور کارت ورود به جلسه، فرآیند تصحیح پاسخ‌نامه‌های نوری و مدیریت مستندات پذیرش مقاطع تخصصی و دکتری مرکز سنجش آموزش پزشکی را بر عهده دارد.",
    coverage: "شامل اطلاعات ثبت‌نامی، کارنامه‌ها، و سوابق تحصیلی ۱۰ کلان‌منطقه آمایشی علوم پزشکی کشور.",
  };

  const [randomGradient, setRandomGradient] = useState("from-white via-slate-100 to-slate-200");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * GRADIENTS.length);
    setRandomGradient(GRADIENTS[randomIndex]);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in pb-12" dir="rtl">
      
      {/* 🌟 هیرو سکشن اختصاصی زیرساخت */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 pt-12 pb-10 px-6">
        
        {/* پترن وکتوری هندسی متراکم (۱۶ پیکسل) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="tight-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tight-grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* ناوبری و محتوای هیرو */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          
          {/* دکمه بازگشتِ شیشه‌ای */}
          <button
            onClick={() => router.back()}
            className="absolute top-0 left-0 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-black border border-white/10 transition-all cursor-pointer group"
          >
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span>بازگشت</span>
          </button>

          {/* نوار Breadcrumb فنی */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 pt-2">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>داشبورد</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <Link href="/sources" className="hover:text-white transition-colors">
              <span>کاتالوگ منابع داده‌ای</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-black truncate max-w-xs">{sourceItem.name}</span>
          </div>

          {/* شناسه یکتای سیستم به عنوان تگ متمایزکننده */}
          <div className="font-mono text-[10px] tracking-wider bg-slate-950/60 text-slate-300 border border-white/10 px-3 py-1 rounded-md shadow-inner">
            {sourceItem.code}
          </div>

          {/* عنوان منبع */}
          <h1 className={`text-2xl md:text-3xl font-black leading-relaxed tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r ${randomGradient} drop-shadow-sm`}>
            {sourceItem.name}
          </h1>

          {/* نوار وضعیت شیشه‌ای متصل (Badge Grid) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1.5 rounded-xl">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {sourceItem.status}
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 text-slate-300 border border-white/5 text-xs font-semibold px-3 py-1.5 rounded-xl">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              {sourceItem.type}
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 text-slate-300 border border-white/5 text-xs font-semibold px-3 py-1.5 rounded-xl">
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              سینک: {sourceItem.lastSync}
            </span>
          </div>

        </div>
      </div>

      {/* 📋 بدنه اصلی: معماری داشبورد-محور زیرساخت */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* ستون راست (۲ سوم عرض): متریک‌ها و شناسنامه منبع */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 📊 مینی‌داشبورد وضعیت ماتریسی */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
              <span className="text-gray-400 text-[11px] font-black flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-600" /> حجم هسته داده
              </span>
              <span className="text-gray-800 font-mono font-black text-sm md:text-base">{sourceItem.recordsCount}</span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
              <span className="text-gray-400 text-[11px] font-black flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-amber-500" /> متد ارتباطی
              </span>
              <span className="text-gray-800 font-mono font-black text-xs md:text-sm">{sourceItem.syncMethod}</span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
              <span className="text-gray-400 text-[11px] font-black flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-purple-500" /> پروتکل امنیتی
              </span>
              <span className="text-gray-700 font-bold text-[11px] leading-tight">{sourceItem.securityLevel}</span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
              <span className="text-gray-400 text-[11px] font-black flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-500" /> پایداری ماهانه
              </span>
              <span className="text-emerald-600 font-mono font-black text-sm md:text-base">۹۹.۹۸٪</span>
            </div>
          </div>

          {/* مستندات فنی و تعاریف عملکردی */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-6">
            <div className="space-y-2.5">
              <h2 className="text-gray-800 font-black text-sm md:text-base flex items-center gap-2">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                شرح وظایف و معماری تبادل داده
              </h2>
              <p className="text-xs md:text-sm font-semibold text-gray-600 leading-7 text-justify">{sourceItem.description}</p>
            </div>

            <div className="h-px bg-gray-50 w-full" />

            <div className="space-y-2.5">
              <h2 className="text-gray-800 font-black text-sm md:text-base flex items-center gap-2">
                <span className="w-1 h-3.5 bg-blue-600 rounded-full" />
                دامنه نفوذ و موجودیت‌های تحت پوشش
              </h2>
              <p className="text-xs md:text-sm font-semibold text-gray-600 leading-7 text-justify">{sourceItem.coverage}</p>
            </div>
          </div>
        </div>

        {/* ستون چپ (۱ سوم عرض): عملیات یکپارچه‌سازی و پایش سیستم */}
        <div className="space-y-6">
          
          {/* جعبه ابزارهای عملیاتی منبع */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-gray-400 pb-2 border-b border-gray-50 uppercase tracking-wider">Gateway Actions</h3>
            <div className="space-y-2.5">
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-gray-100 text-slate-700 transition-all cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#0b3168]" />
                  <span className="text-xs font-black">مشاهده کاتالوگ وب سرویس</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-[-2px] transition-transform" />
              </button>

              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-gray-100 text-slate-700 transition-all cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-black">نقشه نگاشت فیلدها (Mapping)</span>
                </div>
                <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* کادر وضعیت پایش فنی زیرساخت اطلاعاتی */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 relative overflow-hidden text-slate-100">
            <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl" />
            <h4 className="text-xs font-black text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>پروتکل پایش و حریم خصوصی</span>
            </h4>
            <p className="text-[11px] font-bold text-slate-400 leading-relaxed text-justify">
              دسترسی به داده‌های این منبع صرفاً از طریق توکن‌های احراز هویت شده لایه زیرساخت مقدور است. لاگ تراکنش‌ها و متدهای بازخوانی فراخوانی شده، به صورت آنی در مرکز کنترل امنیت پایش و آرشیو می‌گردد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}