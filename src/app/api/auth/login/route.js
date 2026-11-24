import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // شبیه‌سازی بررسی اطلاعات داوطلب/پزشک در دیتابیس
    // نام کاربری تست: 0012345678 | رمز عبور تست: 123456
    if (username === "0012345678" && password === "123456") {
      return NextResponse.json(
        {
          success: true,
          message: "ورود موفقیت‌آمیز بود",
          user: { name: "دکتر میر محمد موسوی", role: "doctor" },
        },
        { status: 200 },
      );
    }

    // در صورت اشتباه بودن اطلاعات
    return NextResponse.json({ success: false, message: "کد ملی یا رمز عبور اشتباه است" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "خطایی در سرور رخ داده است" }, { status: 500 });
  }
}
