import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const DEFAULT_SITE_SETTINGS = {
  companyName: "주식회사 다온넷 (DAONNET Co., Ltd.)",
  department: "다온 프리미엄 249 라이프케어 사업본부",
  callCenterTitle: "고객상담센터 (365일 24시간 장례·추모 접수)",
  callCenterPhone: "1877-8816",
  mallName: "다온넷.kr",
  mallUrl: "http://다온넷.kr",
  callCenterSubtext: "장례·추모공원 사전 예약 및 로얄석 상담 상시 운영",
  noticeText: `• 장례·추모공원 이행증서는 실물 또는 모바일로 발급되며, 서비스 발생 시 반드시 고객센터(1877-8816) 접수 후 혜택이 적용됩니다.
• 추모공원·숙박·크루즈 등 제휴 서비스는 이용 시점의 제휴 여부, 시설 객실 현황, 시즌 및 운영규정에 따라 제한 또는 추가비용이 발생할 수 있습니다.
• 환급보증서 498만 원은 보증서 금액 기준이며, 실제 환급 절차·지급형태·조건은 환급보증서 및 반환 지급약정 내용을 우선합니다.`,
  copyright: "© 2026 DAONNET Co., Ltd. All rights reserved.",
  privacyTitle: "[필수] 개인정보 수집·이용 및 상담 신청 안내에 동의합니다.",
  privacySummary: "(수집 목적: 249 상품 상담 및 장지 안내, 보증서 발급 / 상담 완료 후 안전 파기)",
  privacyPolicy: `1. 개인정보 수집 및 이용 목적
- 다온 프리미엄 249 라이프케어 멤버십 상담 및 가입 접수 안내
- 498만 원 환급보증서 발급 및 본인 확인
- 전국 55개 제휴 추모공원·장사시설 맞춤 안내 및 로얄석 사전 예약
- 해피클래스 2박 3일 숙박권 및 다온넷 포인트몰 혜택 제공

2. 수집하는 개인정보 항목
- 필수항목: 신청자 성명, 연락처(휴대폰 번호), 주소(배송/계약지)
- 선택항목: 희망 추모공원(장지), 건강식품 사은품 선택(삼칠그라/알부민)

3. 개인정보의 보유 및 이용 기간
- 상담 신청 접수일로부터 상담 완료 및 서비스 제공 완료 시까지 보유 및 이용합니다.
- 관련 법령(전자상거래 등에서의 소비자보호에 관한 법률 등)에 의거 보존할 필요가 있는 경우 해당 법정 기간 동안 안전하게 보관 후 파기합니다.

4. 개인정보 제공 동의 거부 권리
- 고객님께서는 개인정보 수집 및 이용 동의를 거부하실 권리가 있습니다. 단, 필수 정보 수집 동의 거부 시 온라인 상담 및 가입 접수가 제한될 수 있습니다.`,
  termsOfService: `제1조 (목적)
본 약관은 주식회사 다온넷(이하 "회사")이 제공하는 라이프케어 및 추모공원 멤버십 서비스의 이용조건 및 절차 등에 관한 사항을 규정함을 목적으로 합니다.

제2조 (회원의 권리와 의무)
회원은 본 약관 및 회사가 공지하는 이용 지침을 준수하여야 하며, 정당한 권익을 보호받을 권리가 있습니다.`,
};

// 사이트 설정 조회 (푸터 및 개인정보 동의)
export const getSettings = query({
  args: {},
  handler: async (ctx) => {
    const settings = await ctx.db.query("siteSettings").first();
    if (!settings) {
      return {
        ...DEFAULT_SITE_SETTINGS,
        isCustomized: false,
      };
    }
    return {
      ...DEFAULT_SITE_SETTINGS,
      ...settings,
      isCustomized: true,
    };
  },
});

// 사이트 설정 저장 (푸터 및 개인정보 동의)
export const updateSettings = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("siteSettings").first();
    const now = Date.now();

    if (existing) {
      await ctx.db.patch(existing._id, {
        companyName: args.companyName.trim(),
        department: args.department.trim(),
        callCenterTitle: args.callCenterTitle.trim(),
        callCenterPhone: args.callCenterPhone.trim(),
        mallName: args.mallName.trim(),
        mallUrl: args.mallUrl.trim(),
        callCenterSubtext: args.callCenterSubtext.trim(),
        noticeText: args.noticeText.trim(),
        copyright: args.copyright.trim(),
        privacyTitle: args.privacyTitle.trim(),
        privacySummary: args.privacySummary.trim(),
        privacyPolicy: args.privacyPolicy.trim(),
        termsOfService: args.termsOfService ? args.termsOfService.trim() : undefined,
        updatedAt: now,
      });
      return { success: true, message: "사이트 설정이 성공적으로 저장되었습니다." };
    } else {
      await ctx.db.insert("siteSettings", {
        companyName: args.companyName.trim(),
        department: args.department.trim(),
        callCenterTitle: args.callCenterTitle.trim(),
        callCenterPhone: args.callCenterPhone.trim(),
        mallName: args.mallName.trim(),
        mallUrl: args.mallUrl.trim(),
        callCenterSubtext: args.callCenterSubtext.trim(),
        noticeText: args.noticeText.trim(),
        copyright: args.copyright.trim(),
        privacyTitle: args.privacyTitle.trim(),
        privacySummary: args.privacySummary.trim(),
        privacyPolicy: args.privacyPolicy.trim(),
        termsOfService: args.termsOfService ? args.termsOfService.trim() : undefined,
        updatedAt: now,
      });
      return { success: true, message: "사이트 설정이 성공적으로 생성 및 저장되었습니다." };
    }
  },
});

// 사이트 설정을 기본값으로 초기화
export const resetSettings = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("siteSettings").first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        ...DEFAULT_SITE_SETTINGS,
        updatedAt: Date.now(),
      });
    } else {
      await ctx.db.insert("siteSettings", {
        ...DEFAULT_SITE_SETTINGS,
        updatedAt: Date.now(),
      });
    }
    return { success: true, message: "기본값으로 복원되었습니다." };
  },
});
