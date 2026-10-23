import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 온라인 계약 & 상담 신청 테이블
  consultations: defineTable({
    productSet: v.string(), // "Set2" | "Set1"
    productName: v.string(),
    amount: v.number(),
    healthFood: v.string(),
    paymentMethod: v.string(),
    customerName: v.string(),
    phone: v.string(),
    address: v.string(),
    preferredPark: v.optional(v.string()),
    status: v.string(), // "신청접수" | "상담진행중" | "계약완료" | "보증서발급"
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_phone", ["phone"])
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),

  // 전국 추모공원 DB
  memorialParks: defineTable({
    region: v.string(),
    regionLabel: v.string(),
    loc: v.string(),
    name: v.string(),
    type: v.string(),
    addr: v.string(),
    desc: v.string(),
    featured: v.optional(v.boolean()),
    phone: v.optional(v.string()),
    supportBenefit: v.string(),
  })
    .index("by_region", ["region"])
    .index("by_type", ["type"]),

  // 회원 모바일 보증서
  certificates: defineTable({
    certNumber: v.string(),
    customerName: v.string(),
    phone: v.string(),
    productName: v.string(),
    guaranteeAmount: v.number(),
    funeralAmount: v.number(),
    memorialTier: v.string(),
    points: v.number(),
    issuedDate: v.string(),
    status: v.string(),
  }).index("by_phone", ["phone"]),
});
