"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Home, ChevronLeft, ChevronRight, Clock, Award, ShieldAlert, CheckCircle2 } from "lucide-react";

// دیتای نمونه آزمون‌های سال جاری وزارت بهداشت
const MOCK_EXAMS = [
  { id: 1, title: "پنجاه و سومین دوره آزمون دستیاری تخصصی پزشکی", date: "۱۴۰۵/۰۴/۱۵", status: "در حال ثبت‌نام", type: "تخصصی" },
  { id: 2, title: "آزمون زبان انگلیسی عمومی وزارت بهداشت (MHLE) - دوره ۷5", date: "۱۴۰۵/۰۴/۲۹", status: "آینده", type: "عمومی" },
  { id: 3, title: "آزمون دکتری تخصصی علوم پزشکی (PhD)", date: "۱۴۰۵/۰۵/۱۲", status: "آینده", type: "تخصصی" },
  { id: 4, title: "آزمون سراسری کارشناسی ارشد رشته‌های گروه پزشکی", date: "۱۴۰۵/۰۵/۲۶", status: "پایان یافته", type: "کارشناسی ارشد" },
  { id: 5, title: "آزمون صلاحیت بالینی پزشکی عمومی - دوره مرداد", date: "۱۴۰۵/۰۶/۰۵", status: "آینده", type: "عمومی" },
  { id: 6, title: "آزمون بورد تخصصی و فوق تخصصی پزشکی (دانشنامه)", date: "۱۴۰۵/۰۶/۱۹", status: "آینده", type: "تخصصی" },
  { id: 7, title: "آزمون پیش‌کارورزی و علوم پایه پزشکی و دندانپزشکی", date: "۱۴۰۵/۰۷/۱۰", status: "آینده", type: "عمومی" },
];

const ITEMS_PER_PAGE = 4; // تعداد آیتم‌ها در هر صفحه

export default function ExamCalendarPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // محاسبات مربوط به صفحه‌بندی
  const totalPages = Math.ceil(MOCK_EXAMS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExams = MOCK_EXAMS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // تابع تعیین رنگ استاتوس آزمون‌ها
  const getStatusStyle = (status) => {
    switch (status) {
      case "در حال ثبت‌نام":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "پایان یافته":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200/60";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* ۱. هیرو سکشن تقویم با بافت هندسی فشرده ترانسفورماتور */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 py-10 px-6 md:px-12">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="calendar-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#calendar-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>خانه</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-black">تقویم آزمون‌های سال جاری</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">جدول زمان‌بندی و تقویم آزمون‌ها</h1>
            <p className="text-slate-400 text-xs font-semibold">برنامه زمانی دقیق برگزاری، مهلت ثبت‌نام و مواعد کلیدی آزمون‌های علوم پزشکی سال تحصیلی ۱۴۰۵-۱۴۰۶</p>
          </div>
        </div>
      </div>

      {/* ۲. بخش بدنه اصلی: ساختار خط زمانی (Timeline) */}
      <div className="relative border-r-2 border-slate-100 mr-4 md:mr-8 pr-6 md:pr-10 space-y-8">
        {currentExams.map((exam) => (
          <div key={exam.id} className="relative group animate-fade-in">
            {/* دایره نشانگر روی خط زمانی */}
            <div className="absolute -right-[31px] md:-right-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0b3168] group-hover:scale-110 transition-transform z-10 shadow-sm" />

            {/* کارت اطلاعات آزمون */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-blue-50 text-[#0b3168] font-black text-[9px] px-2 py-0.5 rounded-md border border-blue-100/40">{exam.type}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${getStatusStyle(exam.status)}`}>{exam.status}</span>
                </div>

                <h3 className="text-sm md:text-base font-black text-gray-800 group-hover:text-[#0b3168] transition-colors">{exam.title}</h3>
              </div>

              {/* باکس تاریخ و جزییات سمت چپ کارت */}
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-100/50 p-3 rounded-xl shrink-0 self-start md:self-auto w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[#0b3168]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-gray-400 font-bold block">تاریخ برگزاری:</span>
                    <span className="text-xs font-mono font-bold text-gray-700">{exam.date}</span>
                  </div>
                </div>

                <Link href={`/calendar/${exam.id}`} className="text-xs font-black text-blue-600 hover:text-[#0b3168] flex items-center gap-0.5 md:mr-4 transition-colors">
                  <span>جزئیات آزمون</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ۳. کامپوننت هوشمند صفحه‌بندی (Pagination) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-500 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                currentPage === index + 1 ? "bg-[#0b3168] text-white border-[#0b3168] shadow-sm" : "bg-white text-gray-500 border-gray-100 hover:bg-slate-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-500 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
