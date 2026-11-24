"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft } from "lucide-react";

const menuData = [
  {
    id: "m1",
    title: "کارشناسی ارشد",
    exams: [
      {
        id: "e1",
        title: "کارشناسی ارشد پزشکی",
        link: "#",
        processes: [
          { name: "ثبت نام", url: "#" },
          { name: "کارت ورود", url: "#" },
        ],
      },
      { id: "e2", title: "علوم قرآنی", link: "#", processes: [{ name: "نتایج", url: "#" }] },
    ],
  },
  { id: "m2", title: "دندانپزشکی", exams: [{ id: "e3", title: "دانشنامه تخصصی", link: "#", processes: [{ name: "ثبت نام", url: "#" }] }] },
];

export default function Navbar() {
  const [activeCat, setActiveCat] = useState(menuData[0].id);
  const [activeExam, setActiveExam] = useState(menuData[0].exams[0].id);

  return (
    <div className="relative group">
      {/* دکمه اصلی منو در هدر */}
      <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black text-white hover:bg-white/10 transition-all">
        <span>آزمون ها</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {/* کانتینر مگامنو */}
      <div className="absolute top-full right-0 w-[700px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
        <div className="flex h-[300px]">
          {/* ستون اول: دسته بندی */}
          <div className="w-1/3 bg-slate-50 py-2 border-l border-slate-100">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCat(cat.id)}
                className={`w-full text-right px-4 py-3 text-xs font-bold transition-all ${activeCat === cat.id ? "bg-white text-[#0b3168] border-r-4 border-[#0b3168]" : "text-slate-600 hover:bg-white/50"}`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* ستون دوم: آزمون ها */}
          <div className="w-1/3 bg-white py-2 border-l border-slate-100 overflow-y-auto">
            {menuData
              .find((c) => c.id === activeCat)
              ?.exams.map((exam) => (
                <button
                  key={exam.id}
                  onMouseEnter={() => setActiveExam(exam.id)}
                  className={`w-full text-right px-4 py-3 text-[11px] font-bold transition-all ${activeExam === exam.id ? "text-[#0b3168] bg-blue-50" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  {exam.title}
                </button>
              ))}
          </div>

          {/* ستون سوم: فرآیندها */}
          <div className="w-1/3 bg-white py-2 px-4 flex flex-col gap-1">
            <span className="text-[10px] text-slate-400 font-black mb-2">فرآیندها</span>
            {menuData
              .find((c) => c.id === activeCat)
              ?.exams.find((e) => e.id === activeExam)
              ?.processes.map((proc, i) => (
                <Link key={i} href={proc.url} className="text-[11px] text-slate-600 hover:text-[#0b3168] hover:bg-slate-50 p-2 rounded-lg transition-all">
                  {proc.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
