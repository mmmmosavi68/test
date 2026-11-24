import localFont from "next/font/local";
import "./globals.css";

// تعریف فونت وزیرمتن با نسخه‌های معمولی و ضخیم
const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn", // تعریف یک متغیر برای تلویند
});

export const metadata = {
  title: "سازمان سنجش پزشکی",
  description: "سامانه رسمی اطلاع‌رسانی، آزمون‌ها و دوره‌های تخصصی علوم پزشکی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">{children}</body>
    </html>
  );
}
