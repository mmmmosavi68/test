"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Search, Database, Layers, CheckCircle2, FileText, ArrowLeftRight, HelpCircle } from "lucide-react";

export default function ExamReferences() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const referenceData = [
    {
      id: "arshad",
      category: "کارشناسی ارشد",
      icon: "🎓",
      links: [
        { slug: "arshad-1405", title: "منابع آزمون ورودي دوره كارشناسي ارشد ناپيوسته رشته هاي گروه پزشكي سال تحصيلي 1405-1406", date: "۱۴۰۵" }
      ]
    },
    {
      id: "dandan-board",
      category: "دانشنامه تخصصی دندانپزشکی",
      icon: "🦷",
      links: [
        { slug: "dandan-ortho-1405", title: "اطلاعیه اصلاح منابع آزمون ارتقای دستیاری رشته ارتودانتیکس سال 1405", type: "اصلاحیه" },
        { slug: "dandan-board-1405", title: "منابع آزمون ارتقاء و دانشنامه/ گواهینامه تخصصی پروتزهای دندانی ۱۴۰۵ و ۱۴۰۶", date: "۱۴۰۵-۱۴۰۶" },
        { slug: "dandan-tarmimi-1405", title: "اصلاحیه منابع آزمون دانشنامه/گواهینامه تخصصی دندانپزشکی ترمیمی سال 1405", type: "اصلاحیه" },
        { slug: "dandan-general-1405", title: "منابع آزمون های دانشنامه/گواهینامه و ارتقای رشته های تخصصی دندانپزشکی سال 1405", date: "۱۴۰۵" }
      ]
    },
    {
      id: "dandan-dastyar",
      category: "دستیاری دندانپزشکی",
      icon: "🩺",
      links: [
        { slug: "dastyari-dandan-40", title: "منابع آزمون دستیاری دندانپزشکی دوره 40 - سال 1405", date: "دوره ۴۰" }
      ]
    },
    {
      id: "dandan-meli",
      category: "ملی دندانپزشکی",
      icon: "🏛️",
      links: [
        { slug: "dandan-meli-25-26", title: "منابع آزمون ملی دانش آموختگان دندان پزشکی در سال 1405 (دوره های 25 و 26)، همان منابع دی ماه 1404 می باشد.", type: "مهم" },
        { slug: "dandan-meli-24", title: "منابع آزمون ملی دی ماه 1404- دوره 24", date: "دوره ۲۴" }
      ]
    },
    {
      id: "darosazi",
      category: "داروسازی (ارزشیابی/ارتقاء/Ph.D)",
      icon: "💊",
      links: [
        { slug: "darosazi-kharezj", title: "منابع آزمون ارزشيابي دانش آموختگان رشته داروسازي خارج از كشور سال 1405", type: "بین‌الملل" },
        { slug: "darosazi-ertegha-kharej", title: "منابع آزمون ارتقاء دانش آموختگان خارج از کشور سال 1405", type: "بین‌الملل" },
        { slug: "darosazi-phd-1405", title: "منابع آزمون پذیرش دستیاری سال 1405 (Ph.D داروسازی)", date: "۱۴۰۵" },
        { slug: "darosazi-jame-1405", title: "منابع آزمون پایان دوره سال 1405 (جامع داروسازی)", date: "جامع" }
      ]
    },
    {
      id: "pezeshki-takhasos",
      category: "دانشنامه و دستیاری پزشکی",
      icon: "🏥",
      links: [
        { slug: "pezeshki-hazfiat-1405", title: "حذفیات منابع رشته تخصصی جراحی کلیه و مجاری ادراری تناسلی آزمون ارتقاء، گواهینامه و دانشنامه تخصصی سال 1405", type: "حذفیات" },
        { slug: "pezeshki-poost-articles", title: "اعلام مقالات (منتخب) رشته پوست منابع آزمون دانشنامه تخصصی سال 1405", type: "مقالات" },
        { slug: "pezeshki-poost-moo-1405", title: "اصلاحیه منابع آزمون هاي ارتقاء ، گواهینامه و دانشنامه تخصصی سال 1405 رشته پوست و مو", type: "اصلاحیه" },
        { slug: "pezeshki-pishgiri-1405", title: "اصلاحیه منابع آزمون های ارتقاء، گواهینامه و دانشنامه تخصصی سال 1405 (پزشکی پیشگیری و اجتماعی)", type: "اصلاحیه" },
        { slug: "pezeshki-ghalb-1405", title: "اصلاحیه منابع آزمون های ارتقاء، گواهینامه و دانشنامه تخصصی و فوق تخصصی سال 1405 (بیماری های قلب و عروق)", type: "اصلاحیه" },
        { slug: "pezeshki-ertegha-1405", title: "منابع آزمون های ارتقاء، گواهینامه و دانشنامه تخصصی سال 1405", date: "۱۴۰۵" },
        { slug: "dastyari-54", title: "منابع پنجاه و چهارمين دوره آزمون پذیرش دستيار تخصصي - سال 1406", date: "۱۴۰۶" },
        { slug: "dastyari-53", title: "منابع آزمون پنجاه و سومين دوره آزمون پذیرش دستيار تخصصي - سال 1405", date: "۱۴۰۵" },
        { slug: "pezeshki-fogh-takhasos-44", title: "منابع چهل و چهارمین دوره آزمون پذیرش دستیار فوق تخصصی 1405", date: "فوق‌تخصصی" }
      ]
    },
    {
      id: "oloom-payeh",
      category: "علوم پایه، فلوشیپ و پزشک خانواده",
      icon: "🧬",
      links: [
        { slug: "oloom-pezeshki-1406", title: "منابع آزمون جامع علوم پايه پزشكي - رشته دكتراي پزشكي عمومي (بهمن 1405 تا بهمن 1406)", date: "علوم پایه" },
        { slug: "oloom-dandan-1406", title: "منابع آزمون جامع علوم پایه دندانپزشکی - بهمن 1405 و سال 1406", date: "علوم پایه" },
        { slug: "oloom-pishkarvarzi-1406", title: "منابع آزمونهاي پيشكارورزي از ابتداي بهمن 1405 تا پایان بهمن 1406", date: "پیش‌کارورزی" },
        { slug: "family-physician-1405", title: "منابع آزمون ارتقاء دستياران رشته تخصصي پزشكي خانواده", date: "پزشک خانواده" },
        { slug: "fellowship-radiology-1405", title: "ویرایش منابع درسی آزمون دوره تکمیلی تخصصی فلوشیپ در رشته رادیولوژی کودکان سال 1405", type: "فلوشیپ" }
      ]
    },
    {
      id: "others",
      category: "سایر آزمون‌ها (انتقالی/لیسانس به پزشکی)",
      icon: "📂",
      links: [
        { slug: "trans-72-units", title: "منابع آزمون انتقال به داخل رشته پزشکی و دندانپزشکی (امتحان 72 واحدی) از مرداد 1405", type: "انتقال به داخل" },
        { slug: "bachelor-to-medical-1405", title: "منابع آزمون پذیرش دانشجوی دوره دکتری پزشکی عمومی از مقطع کارشناسی سال 1405", type: "لیسانس به پزشکی" },
        { slug: "nursing-competency", title: "منابع آزمون صلاحیت حرفه‌ای پرستاران", type: "صلاحیت پرستاری" }
      ]
    }
  ];

  const filteredData = referenceData
    .map((group) => {
      const matchingLinks = group.links.filter((link) =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...group, links: matchingLinks };
    })
    .filter((group) => {
      if (activeTab !== "all" && group.id !== activeTab) return false;
      return group.links.length > 0;
    });

  // محاسبه تعداد کل رکوردهای مچ‌شده برای نمایش در هیرو
  const totalRecordsCount = filteredData.reduce((acc, curr) => acc + curr.links.length, 0);

  // تابع کمکی برای رنگ‌بندی بج‌ها بر اساس نوع مدرک/اصلاحیه
  const getTypeStyles = (type) => {
    if (!type) return "bg-slate-100 text-slate-600 border-slate-200/60";
    if (type.includes("اصلاحیه")) return "bg-amber-50 text-amber-600 border-amber-200/50";
    if (type.includes("مهم") || type.includes("حذفیات")) return "bg-rose-50 text-rose-600 border-rose-200/50";
    if (type.includes("بین‌الملل")) return "bg-purple-50 text-purple-600 border-purple-200/50";
    return "bg-blue-50 text-blue-600 border-blue-200/50";
  };

  return (
    <div className="space-y-10 animate-fade-in pb-16" dir="rtl">
      
      {/* 🌌 هیرو سکشن مدرن و تاریک (Data-Centric Hero) */}
      <div className="relative bg-gradient-to-br from-[#0b3168] via-[#08244d] to-slate-950 text-white rounded-3xl overflow-hidden shadow-xl border border-white/5 pt-14 pb-12 px-6">
        
        {/* پترن شبکه وکتوری ۱۶ پیکسلی ساختاریافته */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="archive-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archive-grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_75%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-md font-mono font-bold">
            مرکز مستندات و دایرکتوری داده
          </span>
          
          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            دانشنامه و آرشیو مراجع آزمون‌ها
          </h1>
          
          <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
            سرفصل‌های رسمی مصوب، آخرین اصلاحیه‌ها، ساختار ضرایب و حذفیات منابع ابلاغی معاونت آموزشی و مرکز سنجش آموزش پزشکی کشور.
          </p>

          {/* ابزار سرچ تجمیع‌شده در قلب هیرو */}
          <div className="w-full max-w-xl relative pt-4">
            <input
              type="text"
              placeholder="جستجوی آنی در عناوین، رشته‌ها، اصلاحیه‌ها (مثال: ارشد، پوست، فلوشیپ)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/90 text-slate-200 border border-white/10 shadow-inner rounded-2xl px-5 py-4 pr-12 text-xs focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all text-right backdrop-blur-md placeholder-slate-500"
            />
            <Search className="absolute right-4 top-[31px] text-slate-500 w-4 h-4" />
            
            {/* شمارنده نتایج زنده */}
            <div className="absolute left-4 top-[32px] font-mono text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded-md border border-white/5">
              {totalRecordsCount} مورد یافت شد
            </div>
          </div>
        </div>
      </div>

      {/* 🎛️ سیستم ناوبری کپسولی دسته‌بندی‌ها */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
            activeTab === "all"
              ? "bg-slate-950 text-white border-slate-950 shadow-md"
              : "bg-white text-slate-600 hover:bg-slate-50 border-slate-100 shadow-xs"
          }`}
        >
          📂 همه مراجع داده‌ای
        </button>
        {referenceData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 border ${
              activeTab === tab.id
                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                : "bg-white text-slate-600 hover:bg-slate-50 border-slate-100 shadow-xs"
            }`}
          >
            <span className="text-sm shrink-0">{tab.icon}</span>
            <span>{tab.category.split(" (")[0]}</span>
          </button>
        ))}
      </div>

      {/* 📚 نما‌ی کارتی و ساختاریافته محتوا */}
      {filteredData.length > 0 ? (
        <div className="space-y-8 max-w-5xl mx-auto">
          {filteredData.map((group) => (
            <div key={group.id} className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 hover:shadow-md transition-all duration-300">
              
              {/* هدر بخش کارتی */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-lg bg-slate-50 border border-slate-100 p-2 rounded-xl shadow-xs">{group.icon}</span>
                  <h2 className="text-xs md:text-sm font-black text-gray-800">سرفصل‌ها و مستندات {group.category}</h2>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-gray-100">
                  <Database className="w-3 h-3 text-slate-400" />
                  <span>{group.links.length} رکورد</span>
                </div>
              </div>

              {/* گرید لینک‌های زیرمجموعه */}
              <div className="grid grid-cols-1 gap-3">
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    href={`/examrefrence/${link.slug}`}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-xl border border-gray-100/70 hover:border-blue-200 bg-slate-50/20 hover:bg-blue-50/10 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3.5 max-w-3xl">
                      <div className="w-6 h-6 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-blue-200 group-hover:bg-blue-50/30 transition-colors">
                        <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <p className="text-xs text-gray-600 font-bold leading-relaxed group-hover:text-slate-900 transition-colors">
                        {link.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 mr-9 md:mr-0 w-full md:w-auto justify-between md:justify-end">
                      {/* تگ و بج تخصصی وضعیت مدرک */}
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-md border tracking-wide shadow-3xs ${getTypeStyles(link.type || link.date)}`}>
                        {link.type || link.date || "جدید"}
                      </span>
                      
                      {/* دکمه اکشن هدایت */}
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-blue-600 group-hover:text-[#0b3168] transition-colors">
                        <span>سند عملکردی</span>
                        <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* 🔍 استیت عدم یافتن نتیجه */
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 max-w-md mx-auto shadow-xs">
          <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6 text-slate-400" />
          </div>
          <h3 className="text-xs font-black text-gray-700">هیچ سندی یافت نشد</h3>
          <p className="text-[11px] text-gray-400 font-semibold mt-1.5 px-6 leading-relaxed">
            عبارت یا فیلتر انتخاب شده با هیچ‌یک از پروتکل‌ها یا شناسه مراجع آزمون‌های موجود مطابقت ندارد.
          </p>
        </div>
      )}
    </div>
  );
}