import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 회원가입 (이름, 연락처, 주소, 이메일 아이디, 비밀번호)
export const registerWithEmail = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    name: v.string(),
    phone: v.string(),
    address: v.string(),
    zonecode: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const password = args.password.trim();
    const name = args.name.trim();
    const phone = args.phone.trim();
    const address = args.address.trim();
    const zonecode = args.zonecode?.trim() || "";

    if (!name) {
      return { success: false, message: "이름(성함)을 입력해주세요." };
    }

    if (!phone) {
      return { success: false, message: "휴대폰 번호를 입력해주세요." };
    }

    if (!address) {
      return { success: false, message: "주소를 입력해주세요." };
    }

    // 이메일 유효성 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "올바른 이메일 형식을 입력해주세요 (예: user@example.com)." };
    }

    if (!password || password.length < 4) {
      return { success: false, message: "비밀번호는 4자 이상이어야 합니다." };
    }

    // 중복 확인
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      return { success: false, message: "이미 가입된 이메일 주소입니다." };
    }

    const userId = await ctx.db.insert("users", {
      email,
      password,
      name,
      phone,
      address,
      zonecode,
      role: "user",
      createdAt: Date.now(),
    });

    return {
      success: true,
      message: "회원가입이 완료되었습니다.",
      user: {
        id: userId,
        email,
        name,
        phone,
        address,
        role: "user",
      },
    };
  },
});

// 이메일 로그인
export const loginWithEmail = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const password = args.password.trim();

    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!user) {
      return { success: false, message: "가입되지 않은 이메일입니다." };
    }

    if (user.password !== password) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
    }

    return {
      success: true,
      message: "로그인 성공",
      user: {
        id: user._id,
        email: user.email,
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        role: user.role ?? "user",
      },
    };
  },
});

// 전체 회원 목록 조회 (관리자용)
export const listUsers = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").order("desc").collect();
    return users.map((u) => ({
      _id: u._id,
      email: u.email,
      name: u.name || "-",
      phone: u.phone || "-",
      address: u.address || "-",
      role: u.role ?? "user",
      createdAt: u.createdAt,
    }));
  },
});
