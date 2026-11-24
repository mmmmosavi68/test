"use client";

import Link from "next/link";
import { BookOpen, ChevronLeft } from "lucide-react";

export default function ReferencesBox() {
  // دیتای هماهنگ با شناسه‌های یکتای سیستم روتینگ پروژه شما
  const latestReferences = [
    {
      id: "arshad-1405",
      title: "منابع آزمون ورودی کارشناسی ارشد ناپیوسته رشته‌های گروه پزشکی ۱۴۰۵",
      category: "ارشد",
    },
    {
      id: "dastyari-54",
      title: "منابع پنجاه و چهارمین دوره آزمون پذیرش دستیار تخصصی پزشکی",
      category: "دستیاری",
    },
    {
      id: "dandan-board-1405",
      title: "منابع آزمون دانشنامه و گواهی‌نامه تخصصی پروتزهای دندانی",
      category: "بورد دندان",
    },
    {
      id: "darosazi-kharezj",
      title: "منابع آزمون ارزشیابی دانش‌آموختگان داروسازی خارج از کشور",
      category: "داروسازی",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[280px]">
      <div>
        {/* هدر باکس با آیکون کتاب */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0b3168]" />
            <h3 className="text-sm font-black text-gray-800">آخرین منابع آزمون‌ها</h3>
          </div>
        </div>

        {/* لیست منابع با قابلیت کلیک و انتقال به صفحه همان منبع */}
        <div className="space-y-3">
          {latestReferences.map((ref) => (
            <div 
              key={ref.id} 
              className="flex items-center justify-between group border-b border-dashed border-gray-100 pb-2 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors shrink-0" />
                <Link 
                  href={`/examrefrence/${ref.id}`}
                  className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors truncate cursor-pointer"
                >
                  {ref.title}
                </Link>
              </div>
              <span className="text-[9px] font-black px-1.5 py-0.5 bg-slate-100 text-gray-500 rounded-md shrink-0">
                {ref.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* دکمه ورود به آرشیو جامع مراجع */}
<Link 
  href="/examrefrence" 
  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-[#0b3168] transition-colors group mt-4"
>
  <span>ورود به آرشیو منابع آزمون</span>
  <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
</Link>
    </div>
  );
}