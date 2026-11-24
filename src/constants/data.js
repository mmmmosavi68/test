export const navLinks = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "آزمون‌ها", href: "/exams" },
  { id: 3, title: "اخبار", href: "/news" },
  { id: 4, title: "تقویم آزمون‌ها", href: "/calendar" },
  { id: 5, title: "سوالات متداول", href: "/faq" },
  { id: 6, title: "ارتباط با ما", href: "/contact" },
];

export const latestAnnouncements = [
  { id: 1, date: "۱۴۰۴/۰۳/۱۵", title: "اعلام نتایج آزمون MHLE" },
  { id: 2, date: "۱۴۰۴/۰۳/۱۲", title: "تمدید مهلت ثبت نام آزمون دستیاری تخصصی" },
  { id: 3, date: "۱۴۰۴/۰۳/۱۰", title: "انتشار تقویم آزمون‌های سال ۱۴۰۵" },
  { id: 4, date: "۱۴۰۴/۰۳/۰۸", title: "اصلاحیه کارت ورود به جلسه آزمون بورد" },
];

export const specialNotice = {
  badge: "اطلاعیه مهم",
  title: "ثبت نام پنجاه و سومین دوره آزمون دستیاری تخصصی",
  description: "مهلت ثبت نام تا ۲۰ مرداد ۱۴۰۵ تمدید شد.",
  link: "/news/dastyari-53",
};

export const examCategories = [
  {
    id: "dastyari",
    title: "دستیاری تخصصی",
    desc: "ثبت نام، کارت ورود به جلسه و نتایج",
    status: "فعال",
    theme: { bg: "bg-blue-50/70", border: "border-blue-100", text: "text-blue-600" },
  },
  {
    id: "phd",
    title: "دستیاری فوق تخصصی",
    desc: "اطلاعیه‌ها، ثبت نام و نتایج",
    status: "فعال",
    theme: { bg: "bg-cyan-50/70", border: "border-cyan-100", text: "text-cyan-600" },
  },
  {
    id: "board",
    title: "بورد تخصصی",
    desc: "آزمون‌های دانشنامه تخصصی (بورد)",
    status: "فعال",
    theme: { bg: "bg-orange-50/70", border: "border-orange-100", text: "text-orange-500" },
  },
  {
    id: "oloom-payeh",
    title: "علوم پایه",
    desc: "اطلاعیه‌ها و ثبت نام علوم پایه",
    status: "غیرفعال",
    theme: { bg: "bg-indigo-50/70", border: "border-indigo-100", text: "text-indigo-600" },
  },
  {
    id: "mhle",
    title: "MHLE",
    desc: "آزمون زبان وزارت بهداشت",
    status: "فعال",
    theme: { bg: "bg-purple-50/70", border: "border-purple-100", text: "text-purple-600" },
  },
  {
    id: "balini",
    title: "صلاحیت بالینی",
    desc: "اطلاعیه‌ها و نتایج صلاحیت بالینی",
    status: "فعال",
    theme: { bg: "bg-emerald-50/70", border: "border-emerald-100", text: "text-emerald-600" },
  },
  {
    id: "phd-pharma",
    title: "دکتری داروسازی",
    desc: "منابع و ثبت‌نام دکتری داروسازی",
    status: "فعال",
    theme: { bg: "bg-pink-50/70", border: "border-pink-100", text: "text-pink-600" },
  },
  {
    id: "arshad",
    title: "کارشناسی ارشد",
    desc: "آزمون ورودی کارشناسی ارشد پزشکی",
    status: "فعال",
    theme: { bg: "bg-teal-50/70", border: "border-teal-100", text: "text-teal-600" },
  },
  {
    id: "estekhdami",
    title: "آزمون استخدامی",
    desc: "جذب و استخدام کادر درمان وزارت بهداشت",
    status: "فعال",
    theme: { bg: "bg-amber-50/70", border: "border-amber-100", text: "text-amber-600" },
  },
  {
    id: "parastari",
    title: "صلاحیت پرستاری",
    desc: "ثبت‌نام دوره جدید صلاحیت حرفه‌ای",
    status: "غیرفعال",
    theme: { bg: "bg-rose-50/70", border: "border-rose-100", text: "text-rose-600" },
  },
];
export const specializedCourses = [
  {
    id: 1,
    title: "دوره جامع آمادگی آزمون صلاحیت بالینی پزشکی",
    duration: "۴۸ ساعت",
    lecturer: "دکتر مهدوی",
    level: "تخصصی",
    price: "رایگان (ویژه کادر درمان)",
  },
  {
    id: 2,
    title: "کارگاه تکنیک‌های پاسخ‌دهی سریع در آزمون MHLE",
    duration: "۱۶ ساعت",
    lecturer: "استاد کریمی",
    level: "پیشرفته",
    price: "ثبت‌نام فعال",
  },
  {
    id: 3,
    title: "آشنایی با ساختار و قوانین آزمون‌های بورد و دانشنامه",
    duration: "۸ ساعت",
    lecturer: "دکتر حسینی",
    level: "عمومی",
    price: "ظرفیت محدود",
  },
];

export const examCalendar = [
  { id: 1, date: "۱۴۰۵/۰۴/۱۲", title: "آزمون زبان انگلیسی عمومی وزارت بهداشت (MHLE)" },
  { id: 2, date: "۱۴۰۵/۰۵/۰۲", title: "آزمون کتبی دانشنامه تخصصی و فوق تخصصی (بورد)" },
  { id: 3, date: "۱۴۰۵/۰۵/۲۳", title: "آزمون مرحله اول انفرادی المپیاد علمی دانشجویان" },
  { id: 4, date: "۱۴۰۵/۰۶/۰۶", title: "آزمون‌های جامع علوم پایه پزشکی و دندانپزشکی" },
];

export const newsArchive = [
  { id: 1, category: "دستیاری", title: "راهنمای ثبت‌نام پنجاه و سومین دوره آزمون دستیاری" },
  { id: 2, category: "اطلاعیه", title: "اطلاعیه شماره ۲ در خصوص نحوه برگزاری آزمون صلاحیت بالینی" },
  { id: 3, category: "نتایج", title: "اعلام اسامی پذیرفته‌شدگان نهایی آزمون ارشد علوم پزشکی" },
  { id: 4, category: "بورد", title: "زمان و مکان برگزاری بخش شفاهی آزمون بورد تخصصی ۱۴۰۵" },
];
