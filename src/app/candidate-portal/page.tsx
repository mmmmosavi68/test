'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  mockTransactions,
  mockActiveExams,
  mockUserExams,
  mockExamProcess,
  ExamProcessStage,
} from './mockData'; // یا از هر مسیری که داده‌ها هستند

export default function CandidatePortal() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ---------- ورود با شماره تلفن ----------
  const [loginStep, setLoginStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (loginStep !== 'otp' || resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [loginStep, resendTimer]);

  const handleSendCode = () => {
    if (!/^09\d{9}$/.test(phone)) {
      setPhoneError('شماره تلفن همراه را به‌درستی و بدون فاصله وارد کنید (مثال: 09123456789)');
      return;
    }
    setPhoneError('');
    setIsSendingCode(true);
    setTimeout(() => {
      setIsSendingCode(false);
      setOtp(['', '', '', '']);
      setOtpError('');
      setResendTimer(60);
      setLoginStep('otp');
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    }, 900);
  };

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];
    newOtp[index] = digit.slice(-1);
    setOtp(newOtp);
    setOtpError('');
    if (digit && index < 3) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const code = otp.join('');
    if (code.length < 4) {
      setOtpError('لطفاً هر ۴ رقم کد تایید را وارد کنید.');
      return;
    }
    if (code !== '1234') {
      setOtpError('کد وارد شده صحیح نیست. لطفاً دوباره تلاش کنید.');
      return;
    }
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginStep('phone');
    setPhone('');
    setPhoneError('');
    setOtp(['', '', '', '']);
    setOtpError('');
    setView('dashboard');
    setActiveTab('profile');
  };

  // منوی ناوبری
  const [activeTab, setActiveTab] = useState('profile');

  // نمای فعلی: داشبورد یا صفحه‌ی جزئیات فرآیند یک آزمون
  const [view, setView] = useState<'dashboard' | 'exam-process'>('dashboard');
  const [processExamId, setProcessExamId] = useState<string | null>(null);
  const [activeStage, setActiveStage] = useState<ExamProcessStage | null>(null);

  const processExam = mockUserExams.find((e) => e.id === processExamId) || null;
  const processStages = processExamId ? mockExamProcess[processExamId] || [] : [];

  const openExamProcess = (exam: (typeof mockUserExams)[number]) => {
    setCurrentExam(exam);
    setProcessExamId(exam.id);
    setActiveStage(null);
    setView('exam-process');
  };

  // ذخیره آزمون انتخاب شده فعلی کاربر
  const [currentExam, setCurrentExam] = useState(mockUserExams[0]);

  // وضعیت آکاردئون تراکنش‌ها (ذخیره ID تراکنش باز شده)
  const [openTransactionId, setOpenTransactionId] = useState<string | null>(null);

  // فیلدهای تکمیلی پروفایل
  const [profileData, setProfileData] = useState({
    fullName: 'سارا احمدی',
    fatherName: 'علیرضا',
    nationalCode: '0987654321',
    birthDate: '۱۳۷۸/۰۵/۲۰',
    identityNumber: '۱۲۴۵',
    quota: 'سهمیه آزاد',
    militaryStatus: 'معافیت تحصیلی ',
    phone: '۰۹۱۲۳۴۵۶۷۸۹'
  });

  const toggleTransaction = (id: string) => {
    setOpenTransactionId(openTransactionId === id ? null : id);
  };

  const stageStatusLabel = (status: ExamProcessStage['status']) =>
    status === 'DONE' ? 'انجام شده' : status === 'ACTIVE' ? 'در حال انجام' : 'در انتظار';

  // ---------- صفحه‌ی ورود ----------
  if (!isAuthenticated) {
    return (
      <div
        dir="rtl"
        className={`min-h-screen flex items-center justify-center p-4 font-[vazir,sans-serif] transition-colors duration-300 ${
          isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
        }`}
      >
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`fixed top-5 left-5 text-xs px-3 py-1.5 rounded-lg border transition-all ${
            isDarkMode
              ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
              : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
          }`}
        >
          {isDarkMode ? '☀️ روشن' : '🌙 تیره'}
        </button>

        <div
          className={`w-full max-w-4xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          {/* پنل برندینگ */}
          <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-900 p-10 text-white relative overflow-hidden">
            <div className="absolute -left-12 -top-12 w-56 h-56 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -right-16 bottom-0 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl mb-6 border border-white/20">
                🩺
              </div>
              <h1 className="text-2xl font-bold leading-relaxed">
                میز خدمت داوطلب
                <br />
                آزمون‌های علوم پزشکی
              </h1>
              <p className="text-sm text-emerald-100/80 mt-4 leading-7">
                ثبت‌نام، پیگیری مدارک، دریافت کارت ورود به جلسه و مشاهده کارنامه، همه در یک‌جا.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-xs text-emerald-200/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              اتصال امن و رمزنگاری‌شده
            </div>
          </div>

          {/* پنل فرم ورود */}
          <div className={`p-8 sm:p-10 flex flex-col justify-center ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
            {loginStep === 'phone' && (
              <div>
                <h2 className="text-xl font-bold mb-1">ورود داوطلب</h2>
                <p className="text-xs text-slate-400 mb-6">
                  شماره تلفن همراه خود را وارد کنید تا کد تایید برایتان پیامک شود.
                </p>

                <label className="block text-xs text-slate-400 mb-1.5">شماره تلفن همراه</label>
                <div
                  className={`flex items-center border rounded-xl px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-emerald-500/40 ${
                    isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                  } ${phoneError ? 'border-red-500' : ''}`}
                >
                  <span className="text-slate-400 text-sm ml-2">📱</span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={11}
                    dir="ltr"
                    placeholder="09xxxxxxxxx"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/[^0-9]/g, ''));
                      setPhoneError('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendCode()}
                    className="bg-transparent outline-none text-sm w-full text-left tracking-wider"
                  />
                </div>
                {phoneError && <p className="text-xs text-red-500 mt-2">{phoneError}</p>}

                <button
                  onClick={handleSendCode}
                  disabled={isSendingCode}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                >
                  {isSendingCode ? 'در حال ارسال کد...' : 'ارسال کد تایید'}
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-5 leading-6">
                  با ورود به سامانه، قوانین و مقررات آزمون‌های وزارت بهداشت را می‌پذیرید.
                </p>
              </div>
            )}

            {loginStep === 'otp' && (
              <div>
                <button
                  onClick={() => setLoginStep('phone')}
                  className="text-xs text-slate-400 hover:text-emerald-500 mb-4 transition-colors"
                >
                  ← ویرایش شماره تلفن
                </button>
                <h2 className="text-xl font-bold mb-1">کد تایید را وارد کنید</h2>
                <p className="text-xs text-slate-400 mb-6">
                  کد ۴ رقمی ارسال‌شده به شماره{' '}
                  <span dir="ltr" className="font-mono font-bold text-slate-300">
                    {phone}
                  </span>{' '}
                  را وارد کنید.
                </p>

                <div dir="ltr" className="flex gap-3 justify-center mb-2">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className={`w-12 h-14 text-center text-lg font-bold rounded-xl border outline-none transition-all focus:ring-2 focus:ring-emerald-500/40 ${
                        isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      } ${otpError ? 'border-red-500' : ''}`}
                    />
                  ))}
                </div>

                {otpError && <p className="text-xs text-red-500 text-center mt-2">{otpError}</p>}
                <p className="text-[11px] text-slate-400 text-center mt-3">برای مشاهده دمو، کد ۱۲۳۴ را وارد کنید.</p>

                <div className="flex justify-center mt-4">
                  {resendTimer > 0 ? (
                    <span className="text-xs text-slate-400">ارسال مجدد کد تا {resendTimer} ثانیه دیگر</span>
                  ) : (
                    <button onClick={handleSendCode} className="text-xs text-emerald-500 hover:underline">
                      ارسال مجدد کد
                    </button>
                  )}
                </div>

                <button
                  onClick={handleVerifyOtp}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                >
                  تایید و ورود به سامانه
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen font-[vazir,sans-serif] flex flex-col md:flex-row transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
      dir="rtl"
    >
      {/* SIDEBAR */}
      <aside
        className={`w-full md:w-72 border-l p-6 flex flex-col justify-between print:hidden transition-colors ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-slate-400">میز خدمت داوطلب</span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                isDarkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? '☀️ روشن' : '🌙 تیره'}
            </button>
          </div>

          {/* User Info Capsule */}
          <div className={`p-4 rounded-xl border mb-6 ${isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h2 className={`font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>{profileData.fullName}</h2>
            <p className="text-xs text-slate-400 mt-1">کد ملی: {profileData.nationalCode}</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveTab('profile');
                setView('dashboard');
              }}
              className={`w-full text-right px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'profile' && view === 'dashboard'
                  ? 'bg-emerald-600 text-white font-bold'
                  : isDarkMode
                  ? 'hover:bg-slate-800 text-slate-400'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              👤 پروفایل داوطلب
            </button>
            <button
              onClick={() => {
                setActiveTab('my-exams');
                setView('dashboard');
              }}
              className={`w-full text-right px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'my-exams' || view === 'exam-process'
                  ? 'bg-emerald-600 text-white font-bold'
                  : isDarkMode
                  ? 'hover:bg-slate-800 text-slate-400'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              📝 آزمون‌های من
            </button>
            <button
              onClick={() => {
                setActiveTab('active-exams');
                setView('dashboard');
              }}
              className={`w-full text-right px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'active-exams' && view === 'dashboard'
                  ? 'bg-emerald-600 text-white font-bold'
                  : isDarkMode
                  ? 'hover:bg-slate-800 text-slate-400'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              ⚡ آزمون‌های فعال
            </button>
            <button
              onClick={() => {
                setActiveTab('transactions');
                setView('dashboard');
              }}
              className={`w-full text-right px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'transactions' && view === 'dashboard'
                  ? 'bg-emerald-600 text-white font-bold'
                  : isDarkMode
                  ? 'hover:bg-slate-800 text-slate-400'
                  : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              💳 تاریخچه تراکنش‌ها
            </button>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className={`w-full mt-8 border py-2 rounded-xl text-sm transition-all ${
            isDarkMode
              ? 'border-slate-700 text-slate-400 hover:border-red-500 hover:text-red-400'
              : 'border-slate-300 text-slate-500 hover:border-red-500 hover:text-red-600'
          }`}
        >
          خروج از سامانه
        </button>
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8">
        {/* MAIN DYNAMIC CONTAINER */}
        <div
          className={`border rounded-2xl p-6 shadow-xl min-h-[520px] transition-colors ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* صفحه‌ی جزئیات فرآیند یک آزمون (تایم‌لاین مراحل) */}
          {view === 'exam-process' && processExam && (
            <div>
              <button
                onClick={() => setView('dashboard')}
                className="text-xs text-slate-400 hover:text-emerald-500 mb-4 transition-colors flex items-center gap-1"
              >
                ← بازگشت به آزمون‌های من
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4 mb-6">
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{processExam.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">رشته: {processExam.major}</p>
                </div>
                <span className={`inline-block text-[11px] px-3 py-1 rounded-full self-start ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-700'}`}>
                  {processExam.status}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-6">روی هر مرحله کلیک کنید تا جزئیات آن را ببینید.</p>

              <div className="relative">
                {processStages.map((stage, idx) => (
                  <div key={stage.id} className="flex gap-4 relative">
                    {idx !== processStages.length - 1 && (
                      <div
                        className={`absolute right-[19px] top-10 bottom-[-8px] w-0.5 ${
                          stage.status === 'DONE' ? 'bg-emerald-500' : isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
                        }`}
                      />
                    )}

                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                        stage.status === 'DONE'
                          ? 'bg-emerald-600 text-white'
                          : stage.status === 'ACTIVE'
                          ? 'bg-amber-500 text-white ring-4 ring-amber-500/20'
                          : isDarkMode
                          ? 'bg-slate-800 text-slate-500'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {stage.status === 'DONE' ? '✓' : idx + 1}
                    </div>

                    <button
                      onClick={() => setActiveStage(stage)}
                      className={`flex-1 text-right mb-6 p-4 rounded-2xl border transition-all ${
                        isDarkMode ? 'border-slate-800 bg-slate-950/40 hover:border-emerald-700' : 'border-slate-200 bg-slate-50 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex justify-between items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm">{stage.title}</h4>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${
                                stage.status === 'DONE'
                                  ? 'bg-emerald-500/10 text-emerald-500'
                                  : stage.status === 'ACTIVE'
                                  ? 'bg-amber-500/10 text-amber-500'
                                  : 'bg-slate-500/10 text-slate-400'
                              }`}
                            >
                              {stageStatusLabel(stage.status)}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{stage.description}</p>
                        </div>
                        <span className="text-slate-400 text-xs whitespace-nowrap">جزئیات ←</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ۱. تکمیل پروفایل داوطلب */}
          {view === 'dashboard' && activeTab === 'profile' && (
            <div>
              <h3 className={`text-lg font-bold mb-6 border-b pb-4 ${isDarkMode ? 'text-emerald-400 border-slate-800' : 'text-emerald-600 border-slate-200'}`}>تکمیل و ویرایش اطلاعات شناسنامه‌ای</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">نام و نام خانوادگی</label>
                  <input type="text" value={profileData.fullName} onChange={(e) => setProfileData({...profileData, fullName: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">نام پدر</label>
                  <input type="text" value={profileData.fatherName} onChange={(e) => setProfileData({...profileData, fatherName: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">کد ملی</label>
                  <input type="text" disabled value={profileData.nationalCode} className="w-full border rounded-xl px-4 py-2.5 text-sm opacity-50 cursor-not-allowed bg-slate-800" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">شماره شناسنامه</label>
                  <input type="text" value={profileData.identityNumber} onChange={(e) => setProfileData({...profileData, identityNumber: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">تاریخ تولد</label>
                  <input type="text" value={profileData.birthDate} onChange={(e) => setProfileData({...profileData, birthDate: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">تلفن همراه</label>
                  <input type="text" value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">سهمیه آزمون</label>
                  <select value={profileData.quota} onChange={(e) => setProfileData({...profileData, quota: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`}>
                    <option value="سهمیه آزاد">سهمیه آزاد (مناطق)</option>
                    <option value="سهمیه ایثارگران ۲۵ درصد">سهمیه ایثارگران ۲۵ درصد</option>
                    <option value="سهمیه ایثارگران ۵ درصد">سهمیه ایثارگران ۵ درصد</option>
                    <option value="سهمیه استعداد درخشان">استعداد درخشان (بدون آزمون)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-slate-400 mb-1">وضعیت نظام وظیفه (مخصوص آقایان)</label>
                  <input type="text" value={profileData.militaryStatus} onChange={(e) => setProfileData({...profileData, militaryStatus: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'}`} />
                </div>
              </div>
              <button onClick={() => alert('تغییرات پروفایل با موفقیت ثبت شد')} className="mt-6 bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-6 py-2.5 rounded-xl transition-all float-left">ذخیره نهایی تغییرات</button>
            </div>
          )}

          {/* ۲. لیست آزمون‌های من */}
          {view === 'dashboard' && activeTab === 'my-exams' && (
            <div>
              <h3 className={`text-lg font-bold mb-4 border-b pb-4 ${isDarkMode ? 'text-emerald-400 border-slate-800' : 'text-emerald-600 border-slate-200'}`}>آزمون‌های ثبت‌نام شده داوطلب</h3>
              <p className="text-xs text-slate-400 mb-6">برای پیگیری مراحل ثبت‌نام تا اعلام نتیجه هر آزمون، آن را از لیست زیر انتخاب کنید.</p>

              <div className="space-y-4">
                {mockUserExams.map((exam) => (
                  <div key={exam.id} className={`p-5 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${currentExam.id === exam.id ? 'border-emerald-500 bg-emerald-500/5' : isDarkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'}`}>
                    <div>
                      <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{exam.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">رشته ثبت‌نامی: {exam.major}</p>
                      <span className={`inline-block text-[10px] mt-2 px-2 py-0.5 rounded-full ${exam.id === '1' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>{exam.status}</span>
                    </div>
                    <button
                      onClick={() => openExamProcess(exam)}
                      className={`text-xs px-4 py-2 rounded-xl border transition-all ${currentExam.id === exam.id ? 'bg-emerald-600 text-white border-transparent' : isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                    >
                      {currentExam.id === exam.id ? '✨ آزمون فعال فعلی' : '🔎 انتخاب و مدیریت'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ۳. آزمون‌های فعال کشور */}
          {view === 'dashboard' && activeTab === 'active-exams' && (
            <div>
              <h3 className={`text-lg font-bold mb-4 border-b pb-4 ${isDarkMode ? 'text-emerald-400 border-slate-800' : 'text-emerald-600 border-slate-200'}`}>فهرست آزمون‌های فعال و در حال ثبت‌نام کشوری</h3>
              <div className="space-y-4">
                {mockActiveExams.map((exam) => (
                  <div key={exam.id} className={`p-5 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isDarkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'}`}>
                    <div>
                      <h4 className="font-bold text-sm">{exam.title}</h4>
                      <p className="text-xs text-amber-400 mt-1">⏳ مهلت ثبت نام و ارسال مدارک: تا {exam.deadline}</p>
                    </div>
                    <button onClick={() => alert(`هدایت به فرآیند پرداخت و خرید کارت اعتباری برای: ${exam.title}`)} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all whitespace-nowrap">
                      📝 ثبت‌نام و تکمیل مدارک
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ۴. تاریخچه تراکنش‌ها (آکاردئونی) */}
          {view === 'dashboard' && activeTab === 'transactions' && (
            <div>
              <h3 className={`text-lg font-bold mb-4 border-b pb-4 ${isDarkMode ? 'text-emerald-400 border-slate-800' : 'text-emerald-600 border-slate-200'}`}>سوابق پرداخت و تراکنش‌های مالی</h3>
              <div className="space-y-3">
                {mockTransactions.map((trx) => {
                  const isOpen = openTransactionId === trx.id;
                  return (
                    <div key={trx.id} className={`border rounded-xl overflow-hidden transition-all ${isDarkMode ? 'border-slate-800 bg-slate-950/20' : 'border-slate-200 bg-white'}`}>
                      {/* Accordion Trigger Header */}
                      <div
                        onClick={() => toggleTransaction(trx.id)}
                        className={`p-4 flex justify-between items-center cursor-pointer select-none transition-colors ${isDarkMode ? 'hover:bg-slate-800/60' : 'hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${trx.status === 'SUCCESS' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                          <span className="text-sm font-medium">{trx.title}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                          <span className="font-mono">{trx.date}</span>
                          <span className={`font-bold ${trx.status === 'SUCCESS' ? 'text-emerald-400' : 'text-red-400'}`}>
                            {trx.status === 'SUCCESS' ? 'موفق' : 'ناموفق'}
                          </span>
                          <span>{isOpen ? '🔼' : '🔽'}</span>
                        </div>
                      </div>

                      {/* Accordion Content Panels */}
                      {isOpen && (
                        <div className={`p-4 border-t text-xs grid grid-cols-2 sm:grid-cols-4 gap-4 ${isDarkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-100 bg-slate-50/50'}`}>
                          <div>
                            <span className="text-slate-400 block mb-1">مبلغ پرداختی</span>
                            <span className="font-bold text-sm">{trx.amount}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block mb-1">شناسه تراکنش پورتال</span>
                            <span className="font-mono font-bold">{trx.id}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block mb-1">شماره مرجع بانکی (RefID)</span>
                            <span className="font-mono font-bold">{trx.refId}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block mb-1">درگاه پرداخت شتاب</span>
                            <span className="font-bold">{trx.gateway}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ۵. کارت ورود به جلسه (وابسته به آزمون فعال فعلی) */}
          {view === 'dashboard' && activeTab === 'card' && (
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-lg font-bold">کارت ورود به جلسه</h3>
                <button onClick={() => window.print()} className="bg-emerald-600 text-white text-xs px-4 py-2 rounded-xl">🖨️ چاپ کارت</button>
              </div>
              <div className="w-full max-w-xl bg-white text-black p-6 rounded-xl border border-slate-300 shadow-md">
                <div className="text-center border-b pb-3 mb-4">
                  <h4 className="font-bold text-sm">کارت ورود به جلسه آزمون‌های وزارت بهداشت</h4>
                  <p className="text-xs font-semibold mt-1">{currentExam.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <p><strong>داوطلب:</strong> {profileData.fullName}</p>
                  <p><strong>کد ملی:</strong> {profileData.nationalCode}</p>
                  <p><strong>رشته امتحانی:</strong> {currentExam.major}</p>
                  <p><strong>شماره صندلی:</strong> ۵۴۲۱</p>
                </div>
              </div>
            </div>
          )}

          {/* ۶. کارنامه و نتایج علمی */}
          {view === 'dashboard' && activeTab === 'results' && (
            <div>
              <h3 className="text-lg font-bold mb-4 border-b pb-4">کارنامه علمی و اعلام نتایج</h3>
              <p className="text-xs text-slate-400 mb-4">کارنامه زیر مربوط به آزمون انتخاب شده یعنی <strong>{currentExam.title}</strong> می‌باشد.</p>
              <div className={`p-4 border rounded-xl ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50'}`}>
                <span className="text-xs text-slate-400">وضعیت نهایی آزمون</span>
                <p className="text-sm font-bold text-emerald-400 mt-1">تراز کسب شده: ۶,۸۴۵ - مجاز به انتخاب رشته دوره‌های روزانه</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* مودال جزئیات مرحله‌ی فرآیند آزمون */}
      {activeStage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveStage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-2xl border shadow-2xl p-6 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeStage.status === 'DONE'
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : activeStage.status === 'ACTIVE'
                      ? 'bg-amber-500/10 text-amber-500'
                      : 'bg-slate-500/10 text-slate-400'
                  }`}
                >
                  {stageStatusLabel(activeStage.status)}
                </span>
                <h4 className="font-bold text-base mt-2">{activeStage.title}</h4>
                {activeStage.date && <p className="text-[11px] text-slate-400 mt-0.5">{activeStage.date}</p>}
              </div>
              <button onClick={() => setActiveStage(null)} className="text-slate-400 hover:text-red-500 text-lg leading-none">✕</button>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-6">{activeStage.description}</p>

            <div className="space-y-2">
              {activeStage.details.map((d, i) => (
                <div key={i} className={`flex justify-between items-center text-xs p-2.5 rounded-lg ${isDarkMode ? 'bg-slate-950/60' : 'bg-slate-50'}`}>
                  <span className="text-slate-400">{d.label}</span>
                  <span className="font-bold">{d.value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveStage(null)}
              className="w-full mt-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
