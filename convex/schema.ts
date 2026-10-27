import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 관리자 계정 설정 테이블
  adminSettings: defineTable({
    username: v.string(),
    password: v.string(),
    updatedAt: v.number(),
  }).index("by_username", ["username"]),

  // 이메일 기반 일반 회원 테이블
  users: defineTable({
    email: v.string(),
    password: v.string(),
    role: v.optional(v.string()), // "user" | "admin"
    createdAt: v.number(),
  }).index("by_email", ["email"]),

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
    website: v.optional(v.string()), // 공식 홈페이지 링크
    supportBenefit: v.string(),
    imageStorageId: v.optional(v.id("_storage")), // 업로드된 이미지 스토리지 ID
    imageUrl: v.optional(v.string()), // 외부 URL 또는 직접 입력 URL
    order: v.optional(v.number()),
    createdAt: v.optional(v.number()),
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

  // 사이트 설정 (푸터 내용 및 개인정보 동의 내용)
  siteSettings: defineTable({
    companyName: v.string(),
    department: v.string(),
    callCenterTitle: v.string(),
    callCenterPhone: v.string(),
    mallName: v.string(),
    mallUrl: v.string(),
    callCenterSubtext: v.string(),
    noticeText: v.string(),
    copyright: v.string(),
    privacyTitle: v.string(),
    privacySummary: v.string(),
    privacyPolicy: v.string(),
    termsOfService: v.optional(v.string()),
    updatedAt: v.optional(v.number()),
  }),
});
