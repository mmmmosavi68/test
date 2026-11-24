import HeroSection from "@/components/modules/home/HeroSection";
import ExamsGrid from "@/components/modules/home/ExamsGrid";
import CalendarBox from "@/components/modules/home/CalendarBox";
// import NewsBox from "@/components/modules/home/NewsBox";
import CoursesGrid from "@/components/modules/home/CoursesGrid";
import ReferencesBox from "@/components/modules/home/RefrenceBox";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* ۱. هیرو سکشن (اطلاعیه ویژه و آخرین اطلاعیه‌ها) */}
      <HeroSection />

      {/* ۲. دسترسی سریع به سامانه‌های آزمونی (باکس‌های ۶ تایی ظریف) */}
     <ExamsGrid />

      {/* ۳. بخش دوقسمتی پایین: تقویم آزمون‌ها و اخبار زنده پروژه */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CalendarBox />
        {/* <NewsBox /> */}
        <ReferencesBox/>
      </div>

      <CoursesGrid />
    </div>
  );
}
