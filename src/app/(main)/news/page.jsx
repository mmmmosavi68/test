"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, User, Search, ChevronLeft, Home, Filter, FileText, ArrowLeft } from "lucide-react";
import { latestAnnouncements } from "@/constants/data";

// دسته‌بندی‌های فرضی برای فیلتر کردن اطلاعیه‌ها
const CATEGORIES = ["همه", "دست‌یاری", "دکتری (PhD)", "بورد تخصصی", "اطلاعیه عمومی"];

export default function AllNewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");

  // فیلتر کردن اطلاعیه‌ها بر اساس جستجو و دسته‌بندی انتخاب شده
  const filteredAnnouncements = latestAnnouncements.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    // در دنیای واقعی داده‌ها کاتگوری دارند، اینجا برای نمونه همه را نشان می‌دهیم یا فیلتر فرضی می‌زنیم
    const matchesCategory = selectedCategory === "همه" || true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* ۱. هیرو سکشن صفحه اخبار و اطلاعیه‌ها با بافت هندسی متراکم ترانسفورماتور */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 py-10 px-6 md:px-12">
        {/* پترن وکتوری هندسی فشرده (۱۶ پیکسل) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="archive-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archive-grid)" />
          </svg>
        </div>

        {/* هاله نور شعاعی ملایم در پس‌زمینه */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        {/* محتوای هیرو و Breadcrumb */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>خانه</span>
            </Link>
            <ChevronLeft className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 font-black">آرشیو اخبار و اطلاعیه‌ها</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">آرشیو اطلاعیه‌ها و بخشنامه‌ها</h1>
            <p className="text-slate-400 text-xs font-semibold">دسترسی یکپارچه به آخرین مستندات، تمدید مهلت‌ها و نتایج آزمون‌های علوم پزشکی کشور</p>
          </div>
        </div>
      </div>

      {/* ۲. بخش فیلترها و ابزار جستجو */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* باکس جستجو */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="جستجو در عنوان یا متن اطلاعیه..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 rounded-xl pr-10 pl-4 py-2 text-xs font-semibold text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0b3168]/30 focus:bg-white transition-all"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-2.5" />
        </div>

        {/* فیلتر تب‌ها (دکمه‌های کاتگوری) */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap border ${
                selectedCategory === cat ? "bg-[#0b3168] text-white border-[#0b3168] shadow-sm" : "bg-slate-50 text-gray-500 border-slate-100 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ۳. لیست کارت‌های اخبار و اطلاعیه‌ها */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md hover:-translate-y-0.5 duration-200 group relative overflow-hidden"
            >
              {/* خط هویتی ظریف کناری در حالت هاور */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#0b3168] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

              {/* بخش اطلاعات خبر */}
              <div className="flex items-start gap-4 max-w-3xl">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100/70 text-slate-400 shrink-0 group-hover:bg-[#0b3168]/5 group-hover:text-[#0b3168] transition-colors">
                  <FileText className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block bg-slate-100 text-slate-600 font-bold text-[9px] px-2 py-0.5 rounded-md">سنجش آموزش پزشکی</span>
                  <h2 className="text-sm font-black text-gray-800 group-hover:text-[#0b3168] transition-colors leading-relaxed">{news.title}</h2>
                  <p className="text-gray-400 text-[11px] font-bold leading-relaxed line-clamp-1">
                    {news.desc || "جهت مشاهده متن کامل بخشنامه، اصلاحات دفترچه راهنما و نحوه ارسال مدارک به صفحه جزئیات مراجعه فرمایید."}
                  </p>
                </div>
              </div>

              {/* بخش تاریخ و دکمه ورود */}
              <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-50 shrink-0">
                <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-semibold bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100/50">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-mono">{news.date}</span>
                </div>

                <Link href={`/news/${news.id}`} className="flex items-center gap-1 text-xs font-black text-[#0b3168] hover:text-amber-500 transition-colors group/btn">
                  <span>مشاهده اطلاعیه</span>
                  <ArrowLeft className="w-3.5 h-3.5 transform transition-transform group-hover/btn:-translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          /* وضعیت خالی بودن لیست */
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center space-y-3">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-gray-300 mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-gray-700">اطلاعیه‌ای پیدا نشد</h3>
            <p className="text-gray-400 text-xs font-semibold">عبارت دیگری را جستجو کنید یا فیلتر دسته‌بندی را تغییر دهید.</p>
          </div>
        )}
      </div>
    </div>
  );
}
