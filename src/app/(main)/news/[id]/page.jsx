"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowRight, Share2, Printer, Bookmark, ChevronLeft, Home, FileText } from "lucide-react";
import { latestAnnouncements } from "@/constants/data";
import { useState, useEffect } from "react";

// ۱. تعریف لیستی از گرادینت‌های فوق‌العاده شیک و خوانا روی پس‌زمینه تیره
const GRADIENTS = [
  "from-amber-300 via-amber-200 to-yellow-400", // طلایی درخشان (ستادی)
  "from-cyan-300 via-teal-200 to-emerald-400", // فیروزه‌ای ساحلی (مدرن)
  "from-white via-slate-100 to-slate-300", // نقره‌ای یخی (مینیمال و رسمی)
  "from-sky-300 via-blue-200 to-indigo-400", // آبی آسمانی زنده
  "from-pink-300 via-rose-200 to-amber-300", // مرجانی پورتالی شیک
];

export default function NewsDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  // پیدا کردن خبر بر اساس ID
  const newsItem = latestAnnouncements.find((item) => item.id.toString() === id) || {
    title: "اطلاعیه پنجاه و سومین دوره آزمون دستیاری تخصصی",
    date: "۱۴۰۵/۰۴/۱۰",
    content:
      "متن کامل اطلاعیه صادر شده از سوی دبیرخانه شورای آموزش پزشکی و تخصصی در خصوص تمدید مهلت ثبت‌نام، اصلاحات دفترچه راهنما و نحوه ارسال مدارک داوطلبان محترم متقاضی شرکت در پنجاه و سومین دوره آزمون دستیاری تخصصی علوم پزشکی سال تحصیلی ۱۴۰۵-۱۴۰۶.",
  };

  // ۱. تعریف لیستی از گرادینت‌های فوق‌العاده شیک و خوانا روی پس‌زمینه تیره
  const GRADIENTS = [
    "from-amber-300 via-amber-200 to-yellow-400", // طلایی درخشان (ستادی)
    "from-cyan-300 via-teal-200 to-emerald-400", // فیروزه‌ای ساحلی (مدرن)
    "from-white via-slate-100 to-slate-300", // نقره‌ای یخی (مینیمال و رسمی)
    "from-sky-300 via-blue-200 to-indigo-400", // آبی آسمانی زنده
    "from-pink-300 via-rose-200 to-amber-300", // مرجانی پورتالی شیک
  ];

  // ۲. تعریف استیت برای ذخیره گرادینت انتخاب شده
  const [randomGradient, setRandomGradient] = useState("from-white via-slate-100 to-slate-200");

  useEffect(() => {
    // انتخاب تصادفی یک گرادینت در زمان لود شدن صفحه در سمت کلاینت
    const randomIndex = Math.floor(Math.random() * GRADIENTS.length);
    setRandomGradient(GRADIENTS[randomIndex]);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* ⚠️ هیرو سکشن کاملاً منطبق با معماری دقیق ProductDetailHero - همه چی وسط چینه! */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 py-12 px-6">
        {/* ۱. پترن وکتوری هندسی فشرده و متراکم (۱۶ پیکسل - مشابه ترانسفورماتور) */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="tight-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tight-grid)" />
          </svg>
        </div>

        {/* ۲. 🌟 هاله نور شعاعی وسط کادر برای ایجاد عمق و زیبایی */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* نوار جداکننده پایین هیرو با گرادینت افقی */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        {/* ۳. ناوبری و محتوا - کاملاً وسط چین */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* دکمه بازگشتِ شیشه‌ای (Glassmorphism) در سمت چپ (از کدهای ترانسفورماتور) */}
          <button
            onClick={() => router.back()}
            className="absolute top-0 left-0 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-black border border-white/10 transition-all cursor-pointer group"
          >
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span>بازگشت</span>
          </button>

          {/* نوار Breadcrumb بالای عنوان */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 pt-2">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>خانه</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <Link href="/news" className="hover:text-white transition-colors">
              <span>اخبار و اطلاعیه‌ها</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-black truncate max-w-xs">{newsItem.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 font-black text-[10px] px-3.5 py-1.5 rounded-lg shadow-sm">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span>اطلاعیه رسمی مرکز سنجش و آموزش پزشکی</span>
          </div>

          {/* ۴. 🌟 عنوان وسط‌چین با گرادینت متنی نقره‌ای-سفیدِ شیک */}
          <h1 className={`text-2xl md:text-4xl font-black leading-relaxed tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r ${randomGradient} drop-shadow-sm`}>
            {newsItem.title}
          </h1>

          {/* متادیتا با باکس‌های شیشه‌ای پایینی */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-300 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>تاریخ انتشار:</span>
              <span className="font-mono text-white">{newsItem.date}</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-300 font-semibold">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>مرجع صدور:</span>
              <span className="text-white">روابط عمومی مرکز سنجش</span>
            </div>
          </div>
        </div>
      </div>

      {/* ۲. بدنه اصلی: ترکیب دو ستونه تصویر، متن و ابزارها */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ستون راست (۲ سوم عرض): تصویر و متن خبر */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-8 space-y-6">
          {/* باکس تصویر خبر با افکت گرید ظریف */}
          <div className="w-full h-64 md:h-80 bg-slate-50 rounded-xl overflow-hidden relative border border-gray-100 flex items-center justify-center text-gray-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#efefef_1px,transparent_1px),linear-gradient(to_bottom,#efefef_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

            <FileText className="w-16 h-16 opacity-20 text-[#0b3168] relative z-20" strokeWidth={1} />
            <span className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-md z-20 border border-white/10">
              مستندات و بخشنامه‌های پیوست
            </span>
          </div>

          {/* متن اصلی اطلاعیه با تایپوگرافی رسمی و خوانا */}
          <article className="text-sm font-semibold text-gray-600 leading-8 text-justify space-y-4">
            <p className="text-gray-800 font-black text-base leading-relaxed mb-4">
              پیرو تصمیمات اتخاذ شده در آخرین جلسه شورای معاونین آموزش علوم پزشکی، جزئیات اجرایی فرآیند به شرح ذیل ابلاغ می‌گردد:
            </p>
            <p>{newsItem.content}</p>
            <p>
              داوطلبان گرامی موظف هستند پیش از پایان مهلت اعلام شده، با ورود به سامانه یکپارچه نسبت به بررسی وضعیت مدارک ارسالی خود اقدام نمایند. بدیهی است عدم تکمیل مدارک در بازه زمانی مقرر به منزله
              انصراف از فرآیند آزمون تلقی خواهد شد و هیچ‌گونه درخواستی پس از این تاریخ قابل بررسی نخواهد بود.
            </p>
          </article>
        </div>

        {/* ستون چپ (۱ سوم عرض): جعبه ابزار و اطلاعیه‌های مرتبط */}
        <div className="space-y-6">
          {/* جعبه عملیات و اشتراک‌گذاری */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-gray-800 pb-2 border-b border-gray-50">ابزارهای اطلاع‌رسانی</h3>
            <div className="grid grid-cols-3 gap-2">
              <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl hover:bg-slate-50 border border-gray-50 text-gray-500 transition-all cursor-pointer group">
                <Printer className="w-4 h-4 text-slate-600 group-hover:text-[#0b3168]" />
                <span className="text-[10px] font-bold">چاپ خبر</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl hover:bg-slate-50 border border-gray-50 text-gray-500 transition-all cursor-pointer group">
                <Share2 className="w-4 h-4 text-blue-600 group-hover:scale-105 transition-transform" />
                <span className="text-[10px] font-bold">اشتراک</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl hover:bg-slate-50 border border-gray-50 text-gray-500 transition-all cursor-pointer group">
                <Bookmark className="w-4 h-4 text-amber-500 group-hover:text-amber-600" />
                <span className="text-[10px] font-bold">نشان کردن</span>
              </button>
            </div>
          </div>

          {/* کادر راهنمای ستادی با استایل ترانسفورماتوری زرد/سرمه‌ای */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 border border-amber-200/60 p-5 rounded-2xl space-y-2 relative overflow-hidden">
            <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-amber-200/20 rounded-full blur-xl" />
            <h4 className="text-xs font-black text-amber-900 flex items-center gap-1.5">
              <span>پشتیبانی فنی داوطلبان</span>
            </h4>
            <p className="text-[11px] font-bold text-amber-800/80 leading-relaxed text-justify">
              در صورت بروز هرگونه مشکل در ثبت‌نام یا ویرایش اطلاعات پورتال، می‌توانید از طریق بخش میز خدمت الکترونیک درخواست خود را ثبت نمایید تا در اسرع وقت کارشناسان سیستم با شما تماس بگیرند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
