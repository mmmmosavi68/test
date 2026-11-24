"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, Home, ChevronLeft, ArrowRight, Clock, FileText, CheckCircle2, Download, ShieldCheck, AlertCircle } from "lucide-react";

export default function ExamDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  // در دنیای واقعی دیتا از دیتابیس یا فایل constants بر اساس id واکشی می‌شود
  const examInfo = {
    title: "پنجاه و سومین دوره آزمون دستیاری تخصصی پزشکی سال تحصیلی ۱۴۰۵-۱۴۰۶",
    type: "تخصصی ستادی",
    date: "۱۴۰۵/۰۴/۱۵",
    registrationDeadline: "۱۴۰۵/۰۴/۱۰",
    status: "در حال ثبت‌نام",
    description:
      "این آزمون به منظور پذیرش پزشکان عمومی واجد شرایط در رشته‌های تخصصی بالینی پزشکی در کلیه دانشگاه‌های علوم پزشکی کشور برگزار می‌گردد. کلیه فرآیندهای ثبت‌نام، دریافت کارت ورود به جلسه، انتخاب رشته و اعلام نتایج به صورت کاملاً الکترونیک انجام خواهد شد.",
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* ۱. هیرو سکشن صفحه داخلی آزمون - همه چیز وسط‌چین با گرید فشرده ۱۶ پیکسلی */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 py-12 px-6">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="detail-exam-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#detail-exam-grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* دکمه بازگشت شیشه‌ای */}
          <button
            onClick={() => router.back()}
            className="absolute top-0 left-0 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-xl text-xs font-black border border-white/10 transition-all cursor-pointer group"
          >
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span>بازگشت</span>
          </button>

          {/* نوار Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 pt-2">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>خانه</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <Link href="/calendar" className="hover:text-white transition-colors">
              <span>تقویم آزمون‌ها</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-black truncate max-w-xs">جزئیات آزمون</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 font-black text-[10px] px-3 py-1 rounded-lg">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span>وضعیت سیستم: {examInfo.status}</span>
          </div>

          <h1 className="text-xl md:text-2xl font-black leading-relaxed max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-200 drop-shadow-sm">
            {examInfo.title}
          </h1>
        </div>
      </div>

      {/* ۲. بدنه اصلی دو ستونه */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ستون راست (۲ سوم): توضیحات، گام‌های فرآیند و مدارک */}
        <div className="lg:col-span-2 space-y-6">
          {/* توضیحات عمومی آزمون */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-black text-gray-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0b3168]" />
              <span>راهنمای کلی و توصیفی آزمون</span>
            </h2>
            <p className="text-sm font-semibold text-gray-600 leading-7 text-justify">{examInfo.description}</p>
          </div>

          {/* چک‌لیست مدارک مورد نیاز (باکس‌های مینی‌مال ستادی) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-sm font-black text-gray-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0b3168]" />
              <span>مدارک الزامی جهت بارگذاری در پورتال</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "تصویر کارت ملی و صفحه اول شناسنامه",
                "تصویر گواهی فراغت از تحصیل یا موافقت‌نامه شرکت در آزمون",
                "گواهی پایان یا معافیت از طرح لایحه نیروی انسانی",
                "عکس پرسنلی ۴×۳ با زمینه سفید مربوط به سال جاری",
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100/70 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ستون چپ (۱ سوم): مواعد کلیدی و دکمه‌های دانلود ابزاری */}
        <div className="space-y-6">
          {/* جعبه اطلاعات زمانی و بنر تاریخ‌ها */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-gray-800 pb-2 border-b border-gray-50">زمان‌بندی‌های کلیدی</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>تاریخ برگزاری آزمون:</span>
                </div>
                <span className="font-mono text-xs font-black text-gray-800">{examInfo.date}</span>
              </div>

              <div className="flex items-center justify-between bg-amber-50/50 p-3 rounded-xl border border-amber-100/40">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>آخرین مهلت ثبت‌نام:</span>
                </div>
                <span className="font-mono text-xs font-black text-amber-900">{examInfo.registrationDeadline}</span>
              </div>
            </div>
          </div>

          {/* دکمه‌های عملیاتی دانلودی و ثبت‌نام سریع */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <h3 className="text-xs font-black text-gray-800 pb-2 border-b border-gray-50">میز خدمت الکترونیک آزمون</h3>

            <button className="w-full bg-[#0b3168] hover:bg-[#07244d] text-white font-black text-xs py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>ورود به سامانه ثبت‌نام و ویرایش</span>
            </button>

            <button className="w-full bg-slate-50 hover:bg-slate-100 text-gray-700 font-bold text-xs py-3.5 rounded-xl border border-slate-200/60 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Download className="w-4 h-4 text-slate-500" />
              <span>دانلود دفترچه راهنمای شرکت در آزمون</span>
            </button>
          </div>

          {/* کادر اخطار و توجه ستادی */}
          <div className="bg-rose-50/50 border border-rose-100/70 p-4 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-black text-rose-900">تذکر بسیار مهم</h4>
              <p className="text-[11px] font-bold text-rose-800/80 leading-relaxed text-justify">
                متقاضیان محترم موظف هستند پیش از واریز هزینه ثبت‌نام، شرایط و ضوابط اختصاصی مندرج در دفترچه راهنما را به طور کامل مطالعه نمایند. هزینه ثبت‌نام به هیچ عنوان مسترد نخواهد شد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
