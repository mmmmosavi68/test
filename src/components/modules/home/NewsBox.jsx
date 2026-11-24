"use client";

import Link from "next/link";
import { FileText, ChevronLeft } from "lucide-react";
import { newsArchive } from "@/constants/data";

export default function NewsBox() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0b3168]" />
            <h3 className="text-sm font-black text-gray-800">اخبار و اطلاعیه‌ها</h3>
          </div>
        </div>

        <div className="space-y-3">
          {newsArchive.map((news) => (
            <div key={news.id} className="flex items-center justify-between group border-b border-dashed border-gray-100 pb-2 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors" />
                <p className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors truncate cursor-pointer">{news.title}</p>
              </div>
              <span className="text-[9px] font-black px-1.5 py-0.5 bg-slate-100 text-gray-500 rounded-md shrink-0">{news.category}</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/news" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-[#0b3168] transition-colors group mt-4">
        <span>ورود به آرشیو اخبار</span>
        <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}
