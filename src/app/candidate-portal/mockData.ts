// app/candidate-portal/mockData.ts

export interface TestUser {
  nationalCode: string;
  fullName: string;
  fatherName: string;
  examType: 'MHLE' | 'MASTER';
  examTitle: string;
  major: string;
}

export const mockUsers: Record<string, TestUser> = {
  "1234567890": {
    nationalCode: "1234567890",
    fullName: "امیرحسین رضایی",
    fatherName: "محمد",
    examType: "MHLE",
    examTitle: "آزمون زبان انگلیسی عمومی وزارت بهداشت (MHLE) - دوره ۷۵",
    major: "عمومی"
  },
  "0987654321": {
    nationalCode: "0987654321",
    fullName: "سارا احمدی",
    fatherName: "علیرضا",
    examType: "MASTER",
    examTitle: "آزمون کارشناسی ارشد ناپیوسته رشته‌های علوم پزشکی سال ۱۴۰۵",
    major: "مهندسی پزشکی (بیوالکتریک)"
  }
};

export const sampleUniversities = [
  { id: "1", name: "دانشگاه علوم پزشکی تهران - روزانه" },
  { id: "2", name: "دانشگاه علوم پزشکی شهید بهشتی - روزانه" },
  { id: "3", name: "دانشگاه علوم پزشکی ایران - روزانه" },
  { id: "4", name: "دانشگاه علوم پزشکی شیراز - روزانه" },
  { id: "5", name: "دانشگاه علوم پزشکی اصفهان - پردیس خودگردان" },
];

// مقادیر تستی جدید برای تراکنش‌ها و آزمون‌ها
export const mockTransactions = [
  { id: 'TRX-9821', title: 'خرید کارت اعتباری آزمون ارشد ۱۴۰۵', amount: '۱,۵۰۰,۰۰۰ ریال', date: '۱۴۰۴/۱۲/۱۵', status: 'SUCCESS', refId: '۹۸۷۶۵۴۳۲۱۰۱۲', gateway: 'بانک ملت' },
  { id: 'TRX-4412', title: 'هزینه بررسی مدارک پزشکی و سهمیه', amount: '۵۰۰,۰۰۰ ریال', date: '۱۴۰۴/۱۲/۱۶', status: 'FAILED', refId: '---', gateway: 'بانک ملی (انصراف کاربر)' },
  { id: 'TRX-3091', title: 'خرید کارت اعتباری آزمون زبان MHLE', amount: '۲,۰۰۰,۰۰۰ ریال', date: '۱۴۰۵/۰۲/۱۰', status: 'SUCCESS', refId: '۱۲۳۴۵۶۷۸۹۰۱۲', gateway: 'بانک سامان' },
];

export const mockActiveExams = [
  { id: 'EX-DOCTOR', title: 'آزمون دکتری تخصصی (Ph.D) رشته‌های علوم پزشکی سال ۱۴۰۵', deadline: '۱۴۰۵/۰۵/۲۰', status: 'در حال ثبت‌نام' },
  { id: 'EX-ESTEKHDAM', title: 'آزمون استخدامی متمرکز وزارت بهداشت سال ۱۴۰۵', deadline: '۱۴۰۵/۰۶/۰۵', status: 'در حال ثبت‌نام' },
];

export const mockUserExams = [
  { id: '1', title: 'آزمون کارشناسی ارشد ناپیوسته رشته‌های علوم پزشکی سال ۱۴۰۵', major: 'مهندسی پزشکی (بیوالکتریک)', status: 'فرآیند فعال / دریافت کارت و کارنامه' },
  { id: '2', title: 'آزمون زبان انگلیسی عمومی وزارت بهداشت (MHLE) - دوره ۷۵', major: 'زبان انگلیسی عمومی', status: 'پایان یافته / آرشیو شده' }
];

// مراحل فرآیند هر آزمون، از ثبت‌نام تا اعلام نتیجه
export type ExamStageStatus = 'DONE' | 'ACTIVE' | 'PENDING';

export interface ExamProcessStage {
  id: string;
  title: string;
  status: ExamStageStatus;
  date?: string;
  description: string;
  details: { label: string; value: string }[];
}

export const mockExamProcess: Record<string, ExamProcessStage[]> = {
  // آزمون کارشناسی ارشد - در جریان
  '1': [
    {
      id: 'register',
      title: 'ثبت‌نام اولیه و تکمیل فرم',
      status: 'DONE',
      date: '۱۴۰۴/۱۰/۰۵',
      description: 'اطلاعات هویتی و تحصیلی داوطلب با موفقیت ثبت و ذخیره شد.',
      details: [
        { label: 'تاریخ ثبت‌نام', value: '۱۴۰۴/۱۰/۰۵' },
        { label: 'کد رهگیری', value: 'REG-88231' },
        { label: 'وضعیت اطلاعات هویتی', value: 'تایید شده' },
      ]
    },
    {
      id: 'documents',
      title: 'بارگذاری و بررسی مدارک',
      status: 'DONE',
      date: '۱۴۰۴/۱۰/۱۲',
      description: 'مدارک تحصیلی و سهمیه داوطلب توسط کارشناسان بررسی و تایید شد.',
      details: [
        { label: 'مدرک تحصیلی', value: 'تایید شده' },
        { label: 'مدرک سهمیه', value: 'تایید شده' },
        { label: 'تاریخ تایید نهایی', value: '۱۴۰۴/۱۰/۱۲' },
      ]
    },
    {
      id: 'payment',
      title: 'پرداخت هزینه ثبت‌نام',
      status: 'DONE',
      date: '۱۴۰۴/۱۲/۱۵',
      description: 'هزینه کارت اعتباری آزمون با موفقیت از طریق درگاه بانکی پرداخت شد.',
      details: [
        { label: 'مبلغ پرداختی', value: '۱,۵۰۰,۰۰۰ ریال' },
        { label: 'شماره تراکنش', value: 'TRX-9821' },
        { label: 'درگاه پرداخت', value: 'بانک ملت' },
      ]
    },
    {
      id: 'card',
      title: 'دریافت کارت ورود به جلسه',
      status: 'ACTIVE',
      description: 'کارت ورود به جلسه از تاریخ اعلام‌شده در همین سامانه قابل دریافت و چاپ خواهد بود.',
      details: [
        { label: 'زمان تقریبی انتشار کارت', value: '۱۴۰۵/۰۲/۱۸' },
        { label: 'محل برگزاری', value: 'به‌زودی اعلام می‌شود' },
        { label: 'وضعیت فعلی', value: 'در انتظار انتشار' },
      ]
    },
    {
      id: 'exam',
      title: 'برگزاری آزمون',
      status: 'PENDING',
      description: 'زمان برگزاری آزمون بر اساس تقویم رسمی سازمان سنجش آموزش پزشکی اعلام می‌شود.',
      details: [
        { label: 'تاریخ برگزاری', value: '۱۴۰۵/۰۲/۲۵' },
        { label: 'ساعت شروع', value: '۰۸:۳۰ صبح' },
        { label: 'نوع آزمون', value: 'کتبی متمرکز' },
      ]
    },
    {
      id: 'result',
      title: 'اعلام نتیجه و کارنامه',
      status: 'PENDING',
      description: 'پس از تصحیح اوراق، کارنامه نهایی داوطلب از همین سامانه قابل مشاهده خواهد بود.',
      details: [
        { label: 'زمان تقریبی اعلام نتیجه', value: '۱۴۰۵/۰۴/۱۰' },
        { label: 'نحوه اطلاع‌رسانی', value: 'پیامک و سامانه' },
        { label: 'وضعیت', value: 'هنوز اعلام نشده' },
      ]
    },
  ],
  // آزمون زبان MHLE - آرشیو شده و تکمیل شده
  '2': [
    {
      id: 'register',
      title: 'ثبت‌نام اولیه و تکمیل فرم',
      status: 'DONE',
      date: '۱۴۰۴/۰۱/۱۰',
      description: 'ثبت‌نام داوطلب در آزمون زبان MHLE تکمیل شد.',
      details: [
        { label: 'تاریخ ثبت‌نام', value: '۱۴۰۴/۰۱/۱۰' },
        { label: 'کد رهگیری', value: 'REG-55011' },
      ]
    },
    {
      id: 'documents',
      title: 'بارگذاری و بررسی مدارک',
      status: 'DONE',
      date: '۱۴۰۴/۰۱/۱۵',
      description: 'مدارک هویتی داوطلب بررسی و تایید شد.',
      details: [
        { label: 'وضعیت مدارک', value: 'تایید شده' },
      ]
    },
    {
      id: 'payment',
      title: 'پرداخت هزینه ثبت‌نام',
      status: 'DONE',
      date: '۱۴۰۵/۰۲/۱۰',
      description: 'هزینه کارت اعتباری آزمون پرداخت شد.',
      details: [
        { label: 'مبلغ پرداختی', value: '۲,۰۰۰,۰۰۰ ریال' },
        { label: 'شماره تراکنش', value: 'TRX-3091' },
        { label: 'درگاه پرداخت', value: 'بانک سامان' },
      ]
    },
    {
      id: 'card',
      title: 'دریافت کارت ورود به جلسه',
      status: 'DONE',
      date: '۱۴۰۵/۰۲/۲۰',
      description: 'کارت ورود به جلسه دریافت و توسط داوطلب چاپ شد.',
      details: [
        { label: 'شماره صندلی', value: '۳۳۱۲' },
        { label: 'محل برگزاری', value: 'دانشگاه علوم پزشکی تهران' },
      ]
    },
    {
      id: 'exam',
      title: 'برگزاری آزمون',
      status: 'DONE',
      date: '۱۴۰۵/۰۳/۰۱',
      description: 'آزمون در تاریخ مقرر و بدون مغایرت برگزار شد.',
      details: [
        { label: 'تاریخ برگزاری', value: '۱۴۰۵/۰۳/۰۱' },
        { label: 'نوع آزمون', value: 'کتبی متمرکز' },
      ]
    },
    {
      id: 'result',
      title: 'اعلام نتیجه و کارنامه',
      status: 'DONE',
      date: '۱۴۰۵/۰۳/۲۰',
      description: 'کارنامه نهایی داوطلب منتشر و در سامانه قابل مشاهده است.',
      details: [
        { label: 'نمره کل', value: '۸۲ از ۱۰۰' },
        { label: 'وضعیت قبولی', value: 'قبول' },
      ]
    },
  ]
};