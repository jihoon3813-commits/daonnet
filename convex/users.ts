import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 이메일로 회원가입 (이메일로만 가입)
export const registerWithEmail = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const password = args.password.trim();

    // 이메일 유효성 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "올바른 이메일 형식을 입력해주세요." };
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
      role: "user",
      createdAt: Date.now(),
    });

    return {
      success: true,
      message: "회원가입이 완료되었습니다.",
      user: {
        id: userId,
        email,
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
      role: u.role ?? "user",
      createdAt: u.createdAt,
    }));
  },
});
