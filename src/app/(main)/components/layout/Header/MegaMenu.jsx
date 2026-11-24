"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, Layers } from "lucide-react";

// داده‌های نمونه (در صورت نیاز جایگزین کنید)
const menuData = [
  {
    id: "m1",
    title: "کارشناسی ارشد",
    exams: [
      {
        id: "e1",
        title: "کارشناسی ارشد",
        processes: [
          { name: "ثبت نام", url: "Content.aspx?click=1" },
          { name: "تقویم آزمون", url: "Content.aspx?click=1" },
          { name: "منابع آزمون ها", url: "Content.aspx?click=1" },
        ],
      },
      {
        id: "e2",
        title: "علوم قرآنی و حدیث در سلامت",
        processes: [
          { name: "مشاهده کارنامه علمی", url: "Content.aspx?click=2" },
          { name: "نتایج کتبی آزمون - مرحله اصلی", url: "Content.aspx?click=2" },
        ],
      },
    ],
  },
  {
    id: "m2",
    title: "دندانپزشکی",
    exams: [
      {
        id: "e3",
        title: "دانشنامه تخصصی دندانپزشکی",
        processes: [
          { name: "ثبت نام", url: "Content.aspx?click=4" },
          { name: "ویرایش", url: "Content.aspx?click=4" },
        ],
      },
      {
        id: "e4",
        title: "دستیاری دندانپزشکی",
        processes: [
          { name: "کلید اولیه سوالات", url: "Content.aspx?click=5" },
          { name: "سیستم دانشگاه", url: "Content.aspx?click=5" },
        ],
      },
      { id: "e5", title: "ارتقاء دندانپزشکی", processes: [{ name: "قوانین آزمون ها", url: "Content.aspx?click=30" }] },
      { id: "e6", title: "صلاحیت بالینی دندانپزشکی", processes: [{ name: "مشاهده و چاپ فرم ثبت نام", url: "Content.aspx?click=35" }] },
      { id: "e7", title: "بهداشتکاران دهان و دندان", processes: [{ name: "بایگانی", url: "Content.aspx?click=56" }] },
    ],
  },
  {
    id: "m3",
    title: "داروسازی",
    exams: [
      {
        id: "e8",
        title: "جامع داروسازی",
        processes: [
          { name: "نتیجه نهایی آزمون - مرحله اصلی", url: "Content.aspx?click=42" },
          { name: "فراموشی کد رهگیری", url: "Content.aspx?click=42" },
        ],
      },
    ],
  },
  {
    id: "m4",
    title: "تخصصی و فوق تخصصی پزشکی",
    exams: [
      { id: "e9", title: "دانشنامه تخصصی پزشکی", processes: [{ name: "مشاهده پاسخنامه", url: "Content.aspx?click=11" }] },
      { id: "e10", title: "دانشنامه فوق تخصصی پزشکی", processes: [{ name: "کلید نهایی سوالات", url: "Content.aspx?click=16" }] },
      { id: "e11", title: "دستیاری تخصصی پزشکی", processes: [{ name: "ثبت نام", url: "Content.aspx?click=12" }] },
      { id: "e12", title: "پذیرش مستقیم دستیاری", processes: [{ name: "مشاهده و چاپ رشته محل های ثبت شده", url: "Content.aspx?click=55" }] },
      { id: "e13", title: "دستیاری فوق تخصصی پزشکی", processes: [{ name: "تقویم آزمون", url: "Content.aspx?click=31" }] },
      { id: "e14", title: "ارتقاء دستیاری و گواهینامه تخصصی", processes: [{ name: "قوانین آزمون ها", url: "Content.aspx?click=13" }] },
      { id: "e15", title: "پزشک خانواده", processes: [{ name: "بایگانی", url: "Content.aspx?click=14" }] },
      { id: "e16", title: "فلوشیپ", processes: [{ name: "مشاهده کارنامه علمی", url: "Content.aspx?click=15" }] },
      { id: "e17", title: "MPH", processes: [{ name: "نتایج کتبی آزمون - مرحله اصلی", url: "Content.aspx?click=17" }] },
    ],
  },
  {
    id: "m5",
    title: "دکتری تخصصی Ph.D",
    exams: [
      { id: "e18", title: "Ph.D اعزام", processes: [{ name: "فراموشی کد رهگیری", url: "Content.aspx?click=18" }] },
      { id: "e19", title: "دکتری تخصصی Ph.D", processes: [{ name: "ثبت نام", url: "Content.aspx?click=28" }] },
      { id: "e20", title: "Ph.D داروسازی", processes: [{ name: "ویرایش", url: "Content.aspx?click=10" }] },
      { id: "e21", title: "دوره تكميلي تخصصی علوم آزمايشگاهي", processes: [{ name: "سیستم دانشگاه", url: "Content.aspx?click=41" }] },
    ],
  },
  {
    id: "m6",
    title: "جامع علوم پایه/پیش کارورزی",
    exams: [
      { id: "e22", title: "علوم پایه", processes: [{ name: "کلید اولیه سوالات", url: "Content.aspx?click=19" }] },
      { id: "e23", title: "پیش کارورزی", processes: [{ name: "مشاهده پاسخنامه", url: "Content.aspx?click=29" }] },
    ],
  },
  {
    id: "m7",
    title: "زبان",
    exams: [{ id: "e24", title: "MHLE", processes: [{ name: "ثبت نام", url: "Content.aspx?click=20" }] }],
  },
  {
    id: "m8",
    title: "زبان",
    exams: [{ id: "e25", title: "MHLE", processes: [{ name: "ثبت نام", url: "Content.aspx?click=20" }] }],
  },
  {
    id: "m9",
    title: "زبان",
    exams: [{ id: "e26", title: "MHLE", processes: [{ name: "ثبت نام", url: "Content.aspx?click=20" }] }],
  },
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCat, setActiveCat] = useState();
  const [activeExam, setActiveExam] = useState();
  const [mobileActiveCat, setMobileActiveCat] = useState(null);
  const [mobileView, setMobileView] = useState("main"); // مقادیر: "main", "cat", "exam"
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);

  const menuRef = useRef(null);

  // بستن منو با کلیک در خارج از کادر
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef} dir="rtl">
      {/* دکمه اصلی */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-black transition-all ${
          isOpen ? "bg-amber-400 text-[#0b3168] shadow-md" : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-2.5">
          {/* آیکون لایه‌ها */}
          <Layers className={`w-4 h-4 ${isOpen ? "text-[#0b3168]" : "text-slate-400"}`} />
          <span>آزمون‌ها</span>
        </div>

        {/* آیکون جهت‌نما */}
        <ChevronLeft className={`w-3.5 h-3.5 opacity-60 transition-transform ${isOpen ? "rotate-90 text-[#0b3168]" : "text-slate-500"}`} />
      </button>

      {/* کانتینر مگامنو */}
      <div
        className={`absolute top-full right-0 z-[60] overflow-hidden transition-all duration-300 shadow-2xl
            w-full lg:w-[750px]
            bg-[#08244d] lg:bg-white
    rounded-2xl border border-slate-100
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* --- نمایش دسکتاپ --- */}
        <div className="hidden lg:flex h-[320px]">
          {/* ستون اول: دسته‌ها (کلیکی) */}
          <div className="w-1/3 bg-slate-50 py-2 border-l border-slate-100 overflow-y-auto">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCat(cat.id);
                  setActiveExam(cat.exams[0].id); // تغییر آزمون پیش‌فرض با تغییر دسته
                }}
                className={`w-full text-right px-5 py-3 text-xs font-bold transition-all  rounded-lg
                  ${activeCat === cat.id ? "bg-[#0b3168]/95 text-white border-[#1c4782]" : "text-slate-600 hover:text-[#0b3168] hover:bg-blue-100 px-3 py-2 rounded-lg transition-all"}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* ستون دوم: آزمون‌ها */}
          <div className="w-1/3 bg-white py-2 border-l border-slate-100 overflow-y-auto">
            {menuData
              .find((c) => c.id === activeCat)
              ?.exams.map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => setActiveExam(exam.id)}
                  className={`w-full text-right px-5 py-3 text-[11px] font-bold transition-all rounded-lg ${activeExam === exam.id ? "bg-[#0b3168]/95 text-white border-[#1c4782]" : "text-slate-600 hover:text-[#0b3168] hover:bg-blue-100 px-3 py-2 rounded-lg transition-all"}`}
                >
                  {exam.title}
                </button>
              ))}
          </div>

          {/* ستون سوم: فرآیندها */}
          <div className="w-1/3 bg-white py-2 px-5 flex flex-col gap-1">
            <span className={`text-[10px] text-emerald-700 text-center font-black p-2 rounded-full border bg-emerald-100 border-emerald-300 text-emerald-600"}`}>فرآیندهای فعال / درحال اجرا</span>
            {menuData
              .find((c) => c.id === activeCat)
              ?.exams.find((e) => e.id === activeExam)
              ?.processes?.map((proc, i) => (
                <Link key={i} href={proc.url} className="text-[11px] text-slate-600 hover:text-[#0b3168] hover:bg-blue-50 px-3 py-2 rounded-lg transition-all">
                  {proc.name}
                </Link>
              ))}
          </div>
        </div>

        {/* --- نمایش موبایل (آکاردئونی کلیکی) --- */}
        <div className="lg:hidden p-0 max-h-[80vh] w-full overflow-y-auto bg-[#0b3168]/95">
          {mobileView === "main" ? (
            // سطح ۱: نمایش دسته‌ها
            <div className="flex flex-col">
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCat(cat);
                    setMobileView("exam"); // رفتن به سطح آزمون‌ها
                  }}
                  className="w-full text-right px-6 py-4 text-xs font-bold border-b border-white/10 flex justify-between items-center hover:bg-white/5"
                >
                  {cat.title}
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
          ) : mobileView === "exam" ? (
            // سطح ۲: نمایش آزمون‌ها
            <div className="flex flex-col">
              <button onClick={() => setMobileView("main")} className="flex items-center gap-2 p-4 text-amber-400 font-bold border-b border-white/10">
                <ChevronRight className="w-4 h-4" /> بازگشت
              </button>
              <div className="px-6 py-3 font-bold text-slate-400 text-[13px]  text-center">{selectedCat?.title}</div>
              {selectedCat?.exams.map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => {
                    setSelectedExam(exam);
                    setMobileView("process"); // رفتن به سطح فرآیندها
                  }}
                  className="w-full text-right px-6 py-4 text-xs font-bold border-b border-white/10 flex justify-between items-center hover:bg-white/5"
                >
                  {exam.title}
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
          ) : (
            // سطح ۳: نمایش فرآیندها
            <div className="flex flex-col">
              <button onClick={() => setMobileView("exam")} className="flex items-center gap-2 p-4 text-amber-400 font-bold border-b border-white/10">
                <ChevronRight className="w-4 h-4" /> بازگشت
              </button>
              <div className="px-6 py-3 font-bold text-slate-400 text-[13px] text-center">{selectedExam?.title}</div>
              {selectedExam?.processes.map((proc, i) => (
                <Link key={i} href={proc.url} className="px-6 py-3 text-xs border-b border-white/5 hover:bg-white/5 block">
                  {proc.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
