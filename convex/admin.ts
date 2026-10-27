import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "admin1234";

// 관리자 로그인
export const login = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const trimmedUsername = args.username.trim();
    const trimmedPassword = args.password.trim();

    // adminSettings 레코드 확인
    let admin = await ctx.db
      .query("adminSettings")
      .withIndex("by_username", (q) => q.eq("username", trimmedUsername))
      .first();

    // 만약 기본 admin 계정이 아직 생성되지 않은 상태이고 요청한 계정이 "admin"인 경우 초기화
    if (!admin && trimmedUsername === DEFAULT_ADMIN_USERNAME) {
      const id = await ctx.db.insert("adminSettings", {
        username: DEFAULT_ADMIN_USERNAME,
        password: DEFAULT_ADMIN_PASSWORD,
        updatedAt: Date.now(),
      });
      admin = await ctx.db.get(id);
    }

    if (!admin) {
      return { success: false, message: "존재하지 않는 관리자 아이디입니다." };
    }

    if (admin.password !== trimmedPassword) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
    }

    // 간단한 세션 토큰 (클라이언트 검증용)
    const sessionToken = `admin_sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    return {
      success: true,
      message: "로그인 성공",
      username: admin.username,
      token: sessionToken,
    };
  },
});

// 관리자 비밀번호 변경
export const changePassword = mutation({
  args: {
    username: v.string(),
    currentPassword: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, args) => {
    const trimmedUsername = args.username.trim();
    const currentPassword = args.currentPassword.trim();
    const newPassword = args.newPassword.trim();

    if (!newPassword || newPassword.length < 4) {
      return { success: false, message: "새 비밀번호는 4자 이상이어야 합니다." };
    }

    let admin = await ctx.db
      .query("adminSettings")
      .withIndex("by_username", (q) => q.eq("username", trimmedUsername))
      .first();

    // 초기 admin 계정이 DB에 없다면 확인
    if (!admin && trimmedUsername === DEFAULT_ADMIN_USERNAME) {
      if (currentPassword === DEFAULT_ADMIN_PASSWORD) {
        await ctx.db.insert("adminSettings", {
          username: DEFAULT_ADMIN_USERNAME,
          password: newPassword,
          updatedAt: Date.now(),
        });
        return { success: true, message: "비밀번호가 성공적으로 변경되었습니다." };
      } else {
        return { success: false, message: "현재 비밀번호가 일치하지 않습니다." };
      }
    }

    if (!admin) {
      return { success: false, message: "관리자 계정을 찾을 수 없습니다." };
    }

    if (admin.password !== currentPassword) {
      return { success: false, message: "현재 비밀번호가 일치하지 않습니다." };
    }

    await ctx.db.patch(admin._id, {
      password: newPassword,
      updatedAt: Date.now(),
    });

    return { success: true, message: "비밀번호가 성공적으로 변경되었습니다." };
  },
});

// 관리자 계정 초기화 여부 확인 쿼리
export const getAdminStatus = query({
  args: {},
  handler: async (ctx) => {
    const admin = await ctx.db.query("adminSettings").first();
    return {
      initialized: !!admin,
      defaultUsername: DEFAULT_ADMIN_USERNAME,
    };
  },
});
