import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      {/* هدر رسمی سازمان در بالای تمام صفحات این بخش */}
      <Header />

      {/* محتوای متغیر هر صفحه در این قسمت رندر می‌شود */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* فوتر سایت */}
      <Footer />
    </>
  );
}
