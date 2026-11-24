"use client";

import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";
import { examCalendar } from "@/constants/data";

export default function CalendarBox() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#0b3168]" />
            <h3 className="text-sm font-black text-gray-800">تقویم آزمون‌ها</h3>
          </div>
        </div>

        <div className="space-y-3">
          {examCalendar.map((item) => (
            <div key={item.id} className="flex items-start gap-3 group">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md font-mono shrink-0 mt-0.5">{item.date}</span>
              <p className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors line-clamp-1 cursor-pointer">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Link href="/calendar" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-[#0b3168] transition-colors group mt-4">
        <span>مشاهده جدول زمان‌بندی آزمون‌ها</span>
        <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}
