import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 상담 & 계약 신청 등록
export const createConsultation = mutation({
  args: {
    productSet: v.string(),
    productName: v.string(),
    amount: v.number(),
    healthFood: v.string(),
    paymentMethod: v.string(),
    customerName: v.string(),
    phone: v.string(),
    address: v.string(),
    preferredPark: v.optional(v.string()),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const consultationId = await ctx.db.insert("consultations", {
      ...args,
      status: "신청접수",
      createdAt: Date.now(),
    });

    // 신청 즉시 가상 모바일 보증서 1건 자동 생성 (조회용)
    const certNumber = `DAON-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    await ctx.db.insert("certificates", {
      certNumber,
      customerName: args.customerName,
      phone: args.phone,
      productName: args.productName,
      guaranteeAmount: args.productSet === "Set2" ? 4980000 : 1980000,
      funeralAmount: 1980000,
      memorialTier: "봉안당 1단 기준",
      points: args.productSet === "Set2" ? 2490000 : 1000000,
      issuedDate: new Date().toISOString().split("T")[0],
      status: "발급접수완료",
    });

    return { consultationId, certNumber };
  },
});

// 전체 상담/계약 목록 조회 (관리자용)
export const listConsultations = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    const items = await ctx.db
      .query("consultations")
      .withIndex("by_created_at")
      .order("desc")
      .take(limit);
    return items;
  },
});

// 상태 업데이트 (관리자용)
export const updateStatus = mutation({
  args: {
    id: v.id("consultations"),
    status: v.string(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      notes: args.notes,
    });
  },
});

// 고객 전화번호로 신청 내역 및 보증서 조회
export const lookupByPhone = query({
  args: {
    phone: v.string(),
    customerName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const cleanPhone = args.phone.replace(/[^0-9]/g, "");
    
    // DB의 모든 consultation 중 전화번호 일치 항목 필터
    const all = await ctx.db.query("consultations").collect();
    const matchedConsultations = all.filter((c: Record<string, unknown>) => {
      const phoneStr = String(c.phone || "");
      const cClean = phoneStr.replace(/[^0-9]/g, "");
      const matchPhone = cClean.includes(cleanPhone) || cleanPhone.includes(cClean);
      if (args.customerName && args.customerName.trim().length > 0) {
        const nameStr = String(c.customerName || "");
        return matchPhone && nameStr.includes(args.customerName.trim());
      }
      return matchPhone;
    });

    const certs = await ctx.db.query("certificates").collect();
    const matchedCerts = certs.filter((c: Record<string, unknown>) => {
      const phoneStr = String(c.phone || "");
      const cClean = phoneStr.replace(/[^0-9]/g, "");
      return cClean.includes(cleanPhone) || cleanPhone.includes(cClean);
    });

    return {
      consultations: matchedConsultations,
      certificates: matchedCerts,
    };
  },
});

// 통계 지표 조회
export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("consultations").collect();
    const pending = all.filter(c => c.status === "신청접수").length;
    const processing = all.filter(c => c.status === "상담진행중").length;
    const completed = all.filter(c => c.status === "계약완료" || c.status === "보증서발급").length;
    return {
      total: all.length,
      pending,
      processing,
      completed,
    };
  },
});
