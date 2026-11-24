"use client";

import { useRef, useState } from "react";
import { ChevronLeft, GraduationCap, Award, BookOpen, Stethoscope, Languages, ShieldCheck } from "lucide-react";
import { examCategories } from "@/constants/data";

const iconMap = {
  dastyari: Stethoscope,
  phd: GraduationCap,
  board: Award,
  "oloom-payeh": BookOpen,
  mhle: Languages,
  balini: ShieldCheck,
};

export default function ExamsGrid() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // مدیریت رویداد کلیک موس و شروع درگ
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // مدیریت خروج موس از کادر اسلایدر
  const handleMouseLeave = () => {
    setIsDown(false);
  };

  // مدیریت رها کردن کلیک موس
  const handleMouseUp = () => {
    setIsDown(false);
  };

  // حرکت اسلایدر با تکان دادن موس (حالت درگ واقعی)
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // سرعت حرکت اسلایدر را اینجا تنظیم کن
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="space-y-4 select-none">
      <div className="text-right">
        <h2 className="text-lg font-black text-slate-800">آزمون‌ها</h2>
        <p className="text-gray-400 text-[11px] font-bold mt-0.5">دسترسی سریع به سامانه‌های آزمونی (با موس بکشید)</p>
      </div>

      {/* کانتینر اصلی اسلایدر با قابلیت درگ و اسکرول مخفی */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-4 overflow-x-auto pb-4 scrollbar-none cursor-grab active:cursor-grabbing scroll-smooth snap-x`}
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {examCategories.map((exam) => {
          const IconComponent = iconMap[exam.id] || Stethoscope;
          const isActive = exam.status === "فعال";

          return (
            <div
              key={exam.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col justify-between items-center text-center transition-all hover:shadow-md min-w-[170px] max-w-[170px] shrink-0 snap-center"
            >
              {/* بخش بالای کارت */}
              <div className="flex flex-col items-center space-y-3 w-full pointer-events-none">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                    isActive ? `${exam.theme?.bg || "bg-blue-50/70"} ${exam.theme?.border || "border-blue-100"} ${exam.theme?.text || "text-blue-600"}` : "bg-gray-50 border-gray-100 text-gray-400"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xs font-black text-gray-800">{exam.title}</h3>
                  <p className="text-[10px] text-gray-400 font-bold leading-normal line-clamp-2 px-1">{exam.desc}</p>
                </div>
              </div>

              {/* بخش پایین */}
              <div className="w-full mt-4 pt-3 border-t border-gray-50 flex items-center justify-between pointer-events-none">
                <span
                  className={`text-[12px] font-black px-2 py-0.5 rounded-full border ${isActive ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-gray-50 border-gray-100 text-gray-400"}`}
                >
                  {exam.status}
                </span>
                <ChevronLeft className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
