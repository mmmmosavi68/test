"use client";

import { useState } from "react";
import { PlayCircle, ClipboardCheck, Video, FileText, ArrowLeft, HelpCircle, Monitor } from "lucide-react";

export default function ExamGuidanceGrid() {
  // دیتای ماک متناسب با فعالیت‌های سنجش، آزمون آزمایشی و ویدیوهای راهنما
  const guidanceItems = [
    {
      id: "mock-exam-1405",
      type: "آزمون آزمایشی",
      badgeStyle: "bg-rose-50 text-rose-700 border-rose-100",
      title: "شبیه‌ساز آزمون جامع علوم پایه پزشکی (بهمن ۱۴۰۵)",
      description: "سنجش آمادگی داوطلبان همراه با صدور کارنامه تحلیلی و رتبه‌دهی کشوری بر اساس آخرین تغییرات سرفصل‌ها.",
      actionText: "ورود به شبیه‌ساز آزمون",
      metaIcon: <ClipboardCheck className="w-4 h-4 text-slate-400" />,
      metaText: "۱۸۰ دقیقه • ۲۰۰ سوال",
      status: "برگزاری آنلاین",
      statusStyle: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      id: "video-guide-reg",
      type: "فیلم راهنما",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-100",
      title: "راهنمای ویدیویی فرآیند ثبت‌نام و بارگذاری مدارک",
      description: "آموزش گام‌به‌گام کار با سامانه جدید سنجش، نحوه احراز هویت و رفع خطاهای متداول در ارسال مستندات.",
      actionText: "مشاهده ویدیو آموزشی",
      metaIcon: <Video className="w-4 h-4 text-slate-400" />,
      metaText: "مدت زمان: ۱۲ دقیقه",
      status: "مستند رسانه‌ای",
      statusStyle: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      id: "video-guide-software",
      type: "فیلم راهنما",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-100",
      title: "آشنایی با محیط نرم‌افزار آزمون‌های الکترونیک",
      description: "شرح کامل قابلیت‌های کلاینت آزمون، نحوه نشانه‌گذاری سوالات، مدیریت زمان و ثبت نهایی پاسخ برگ دیجیتال.",
      actionText: "مشاهده ویدیو آموزشی",
      metaIcon: <Monitor className="w-4 h-4 text-slate-400" />,
      metaText: "مدت زمان: ۱۸ دقیقه",
      status: "راهنمای کلاینت",
      statusStyle: "text-slate-600 bg-slate-50 border-slate-200/60"
    },
    {
      id: "workshop-analysis",
      type: "کارگاه توجیهی",
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-100",
      title: "فیلم تحلیل ساختار ضرایب و حذفیات منابع جدید",
      description: "نسخه ضبط شده وبینار توجیهی معاونت آموزشی در خصوص تغییرات مراجع آزمون‌های دانشنامه و ارتقاء تخصصی.",
      actionText: "بازپخش کارگاه",
      metaIcon: <FileText className="w-4 h-4 text-slate-400" />,
      metaText: "سند توجیهی مراجع",
      status: "آرشیو رسانه‌ای",
      statusStyle: "text-amber-600 bg-amber-50 border-amber-100"
    }
  ];

  return (
    <section className="space-y-6" dir="rtl">
      {/* عنوان بخش متناسب با پورتال سنجش */}
      <div className="border-r-4 border-[#0b3168] pr-3">
        <h2 className="text-base md:text-lg font-black text-gray-800">راهنماهای رسانه‌ای و آزمون‌های شبیه‌ساز</h2>
        <p className="text-gray-400 text-[11px] mt-1 font-semibold">
          ابزارهای آماده‌سازی، فیلم‌های آموزشی و پلتفرم‌های سنجش آنلاین داوطلبان
        </p>
      </div>

      {/* شبکه کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {guidanceItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* بخش بالایی کارت */}
            <div className="p-5 pb-4 space-y-3 relative">
              {/* نوع آیتم (بج) */}
              <span className={`inline-block text-[10px] font-black px-2.5 py-0.5 rounded-md border ${item.badgeStyle}`}>
                {item.type}
              </span>

              {/* آیکون پس‌زمینه مینی‌مال برای راهنماهای ویدیویی */}
              {item.type === "فیلم راهنما" && (
                <PlayCircle className="w-14 h-14 text-blue-600/[0.03] absolute top-2 left-4 pointer-events-none" />
              )}
              {item.type === "آزمون آزمایشی" && (
                <ClipboardCheck className="w-14 h-14 text-rose-600/[0.03] absolute top-2 left-4 pointer-events-none" />
              )}

              <h3 className="text-xs md:text-sm font-black text-gray-800 leading-relaxed group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* بخش پایینی کارت */}
            <div className="px-5 pb-4 space-y-3">
              <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                {/* مشخصات فنی / زمانی */}
                <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100/50">
                  {item.metaIcon}
                  <span>{item.metaText}</span>
                </div>

                {/* وضعیت دسترسی */}
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${item.statusStyle}`}>
                  {item.status}
                </span>
              </div>

              {/* دکمه اکشن عملیاتی */}
              <button className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-black bg-slate-50 text-slate-700 border border-slate-100 group-hover:bg-[#0b3168] group-hover:text-white group-hover:border-[#0b3168] transition-all cursor-pointer">
                <span>{item.actionText}</span>
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}