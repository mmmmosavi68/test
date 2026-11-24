"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, Lock, User, Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // هدایت کاربر به صفحه اصلی پس از ورود موفقیت‌آمیز
        router.push("/");
        router.refresh();
      } else {
        setError(data.message || "اطلاعات وارد شده صحیح نیست.");
      }
    } catch (err) {
      setError("ارتباط با سرور برقرار نشد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-[#0b3168] p-6 text-center text-white relative">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
          </div>
          <h1 className="text-lg font-bold">ورود به پورتال سنجش پزشکی</h1>
          <p className="text-xs text-blue-200 mt-1">ویژه داوطلبان، پزشکان و مدیران سیستم</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* نمایش پیغام خطا در صورت وجود */}
          {error && <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold p-3 rounded-xl text-center">{error}</div>}

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 block">کد ملی / شماره نظام پزشکی</label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute top-3 right-3" />
              <input
                type="text"
                required
                disabled={loading}
                placeholder="مثال: 0012345678"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl py-2.5 pr-10 pl-4 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-left"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-600 block">رمز عبور</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute top-3 right-3" />
              <input
                type={showPassword ? "text" : "password"}
                required
                disabled={loading}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl py-2.5 pr-10 pl-10 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-left font-mono"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 left-3 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 bg-slate-50 border-gray-300" />
              <span className="text-xs font-semibold text-gray-500">مرا به خاطر بسپار</span>
            </label>
            <Link href="/forgot" className="text-xs font-bold text-blue-600 hover:underline">
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0b3168] hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-sm transition-colors text-sm mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>در حال بررسی اطلاعات...</span>
              </>
            ) : (
              <span>ورود به سامانه</span>
            )}
          </button>
        </form>

        <div className="bg-slate-50 px-6 py-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500 font-medium">
            داوطلب جدید هستید؟{" "}
            <Link href="/register" className="text-blue-600 font-bold hover:underline">
              ثبت‌نام در سامانه
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
