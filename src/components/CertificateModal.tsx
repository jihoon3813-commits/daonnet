"use client";

import React from "react";
import {
  X,
  Award,
  ShieldCheck,
  Landmark,
  Coins,
  Palmtree,
  Plane,
  HeartPulse,
  Sparkles,
  CheckCircle2,
  FileCheck,
  PhoneCall,
  Lock,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function CertificateModal() {
  const { isCertOpen, closeCert, userPoints, certificates } = useDaon();

  if (!isCertOpen) return null;

  const latestCert = certificates[0] || {
    certNumber: "DAON-2026-881601",
    customerName: "다온넷 VIP 정회원",
    guaranteeAmount: 4980000,
    funeralAmount: 1980000,
    memorialTier: "봉안당 1단 기준 (유토피아 직영 및 전국)",
    points: 2490000,
    issuedDate: "2026-03-15",
    status: "공증 환급 유효 (10년)",
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* 모달 래퍼 (밝고 고급스러운 프리미엄 라이트 테마) */}
      <div className="relative bg-[#FCFBF8] text-slate-800 rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(15,30,54,0.25),0_0_35px_rgba(217,188,134,0.2)] max-h-[92vh] overflow-y-auto border border-amber-200/90 animate-scale-up">
        {/* 럭셔리 골드 앰비언트 글로우 백그라운드 */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-5 w-60 h-60 bg-teal-50/50 rounded-full blur-3xl pointer-events-none" />

        {/* 상단 헤더 */}
        <div className="relative z-10 flex justify-between items-start border-b border-amber-100 pb-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-[#9C752B] text-[10px] tracking-[2.2px] font-bold uppercase mb-1.5">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>DAONNET OFFICIAL GUARANTEE PASS</span>
            </div>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#0F1E36] tracking-tight"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              다온넷 모바일 이행보증서 &amp; 포인트 월렛
            </h3>
            <p className="text-gray-500 text-[11px] sm:text-xs mt-1">
              10년 공증 환급보증 498만 원 및 VIP 라이프케어 올인원 디지털 자산 패스
            </p>
          </div>

          <button
            onClick={closeCert}
            className="w-9 h-9 rounded-full bg-gray-100/80 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 text-gray-500 hover:text-[#0F1E36] flex items-center justify-center transition cursor-pointer shrink-0 ml-3"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 증서 발급 메타 정보 바 (Official Certificate Meta Bar) */}
        <div className="relative z-10 bg-[#F9F7F3] border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 mb-5 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="block text-[10.5px] text-gray-500">증서 고유번호</span>
              <strong className="text-[#0F1E36] font-mono tracking-wider text-[12.5px] font-bold">
                {latestCert.certNumber}
              </strong>
            </div>
            <div>
              <span className="block text-[10.5px] text-gray-500">발급 대상</span>
              <strong className="text-[#0F1E36] text-[12px] font-semibold flex items-center gap-1">
                <span>{latestCert.customerName}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-[#9C752B] border border-amber-300/80 font-mono font-bold">
                  VIP
                </span>
              </strong>
            </div>
            <div>
              <span className="block text-[10.5px] text-gray-500">발급일자</span>
              <strong className="text-gray-700 text-[12px] font-medium font-mono">
                {latestCert.issuedDate}
              </strong>
            </div>
            <div>
              <span className="block text-[10.5px] text-gray-500">보증 유효성</span>
              <div className="inline-flex items-center gap-1 text-emerald-700 text-[11px] font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span>{latestCert.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3대 핵심 보증서 카드 그리드 (The 3 Core Guarantee Certificates) */}
        <div className="relative z-10 grid sm:grid-cols-3 gap-3.5 mb-5">
          {/* 제1호 보증서: 10년 공증 환급보증서 */}
          <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFF4DF] border-2 border-[#D9BC86] rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-md group">
            {/* 상단 반사 쉬머 */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9BC86]/15 rounded-full blur-xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-[#0F1E36] font-extrabold bg-[#E5C583] px-2 py-0.5 rounded shadow-xs">
                  제1호 보증서
                </span>
                <Award className="w-4 h-4 text-[#B38A38]" />
              </div>

              <div
                className="text-sm font-bold text-[#0F1E36] mt-2.5"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                10년 공증 환급보증서
              </div>

              <div
                className="text-2xl font-bold text-[#A37D32] mt-2 tracking-tight drop-shadow-xs"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {latestCert.guaranteeAmount.toLocaleString()}
                <span className="text-sm font-sans font-normal ml-0.5 text-gray-600">원</span>
              </div>

              <span className="inline-block text-[9.5px] text-[#A37D32] font-semibold mt-0.5">
                (가입금액 249만 원 대비 200% 보증)
              </span>
            </div>

            <div className="text-[10.5px] text-gray-700 mt-3 pt-2.5 border-t border-[#D9BC86]/40 leading-snug">
              가입 2년 후 양도·양수 가능
              <span className="block text-[9.5px] text-gray-500 mt-0.5">
                (주)에스엘부티크호텔 반환약정
              </span>
              <span className="block text-[9.5px] text-[#8C6B28] font-bold mt-1 bg-amber-100/70 border border-amber-200/80 px-1.5 py-0.5 rounded text-center">
                환급보증서 발행 : 에스엘부티끄
              </span>
            </div>
          </div>

          {/* 제2호 보증서: 후불장례 이행증서 */}
          <div className="bg-white border border-gray-200/90 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-gray-600 font-semibold bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
                  제2호 보증서
                </span>
                <ShieldCheck className="w-4 h-4 text-teal-600" />
              </div>

              <div
                className="text-sm font-bold text-[#0F1E36] mt-2.5"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                후불장례 이행증서
              </div>

              <div
                className="text-2xl font-bold text-[#0F1E36] mt-2 tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {latestCert.funeralAmount.toLocaleString()}
                <span className="text-sm font-sans font-normal ml-0.5 text-gray-500">원</span>
              </div>

              <span className="inline-block text-[9.5px] text-gray-500 mt-0.5">
                (전국 표준 고품격 의전 패키지)
              </span>
            </div>

            <div className="text-[10.5px] text-gray-700 mt-3 pt-2.5 border-t border-gray-100 leading-snug">
              365일 24시간 전국 의전 지원
              <span className="block text-[9.5px] text-gray-500 mt-0.5">
                전문 장례지도사 즉시 출동
              </span>
            </div>
          </div>

          {/* 제3호 보증서: 추모공원 이행증서 */}
          <div className="bg-white border border-gray-200/90 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-gray-600 font-semibold bg-gray-100 border border-gray-200 px-2 py-0.5 rounded">
                  제3호 보증서
                </span>
                <Landmark className="w-4 h-4 text-teal-600" />
              </div>

              <div
                className="text-sm font-bold text-[#0F1E36] mt-2.5"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                추모공원 이행증서
              </div>

              <div
                className="text-[17px] font-bold text-[#0F1E36] mt-2 leading-tight"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                봉안당 1단 기준
              </div>

              <span className="inline-block text-[9.5px] text-gray-500 mt-0.5">
                (유토피아 직영 및 전국 56곳)
              </span>
            </div>

            <div className="text-[10.5px] text-gray-700 mt-3 pt-2.5 border-t border-gray-100 leading-snug">
              전국 제휴시설 10~70% 할인
              <span className="block text-[9.5px] text-gray-500 mt-0.5">
                전문 장지 상담사 현장 동행
              </span>
            </div>
          </div>
        </div>

        {/* 부가 혜택 월렛 현황 (Digital Asset & Privilege Wallet) */}
        <div className="relative z-10 bg-[#F9F7F3] border border-amber-200/80 rounded-2xl p-4 sm:p-5 mb-5 space-y-3.5 shadow-xs">
          <div className="text-[11px] font-bold text-[#9C752B] tracking-wider uppercase flex items-center justify-between pb-2 border-b border-amber-200/60">
            <span className="flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-[#C5A059]" />
              MEMBERSHIP WALLET ASSETS
            </span>
            <span className="text-[10px] font-medium text-gray-500">실시간 보유 자산 현황</span>
          </div>

          {/* 1. 보유 쇼핑포인트 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-1 border-b border-gray-200/60">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                <Coins className="w-4 h-4 text-[#9C752B]" />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] text-gray-800 font-bold block">
                  보유 쇼핑포인트 (다온넷.kr 전용몰)
                </span>
                <span className="text-[10px] text-gray-500">다온 전용 복지몰에서 전액 현금 동일 사용</span>
              </div>
            </div>
            <strong
              className="text-[#9C752B] font-bold text-lg sm:text-xl font-mono self-end sm:self-auto tracking-wide"
            >
              {userPoints.toLocaleString()} <span className="text-xs font-sans text-gray-500 font-normal">P</span>
            </strong>
          </div>

          {/* 2. 무료 숙박권 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-1 border-b border-gray-200/60">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                <Palmtree className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] text-gray-800 font-bold block">
                  해피클래스 리조트 무료 숙박권
                </span>
                <span className="text-[10px] text-gray-500">전국 50여 곳 특급 호텔·콘도 이용 &amp; 크루즈 연계</span>
              </div>
            </div>
            <strong className="text-gray-900 font-bold text-xs sm:text-sm self-end sm:self-auto">
              2박 3일권 <span className="text-gray-500 font-normal">(전국 50곳 이용)</span>
            </strong>
          </div>

          {/* 3. 패키지 여행 우대 혜택 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-1 border-b border-gray-200/60">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] text-gray-800 font-bold block">
                  패키지 여행 우대 혜택
                </span>
                <span className="text-[10px] text-gray-500">동남아·중국 등 인기 해외 패키지 회원 특별 할인가 &amp; 전담 플래너</span>
              </div>
            </div>
            <strong className="text-[#0F1E36] font-bold text-xs sm:text-sm self-end sm:self-auto">
              회원 전용 우대가 <span className="text-gray-500 font-normal">(1:1 맞춤 예약)</span>
            </strong>
          </div>

          {/* 4. 건강식품 & 위로지원금 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 py-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <HeartPulse className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] text-gray-800 font-bold block">
                  제공 사은 건강식품 및 위로지원금
                </span>
                <span className="text-[10px] text-gray-500">가입 즉시 배송 및 장례 발생 시 위로금 지원</span>
              </div>
            </div>
            <strong className="text-[#9C752B] font-bold text-xs sm:text-sm self-end sm:self-auto">
              삼칠그라 365 + 위로금 400,000원
            </strong>
          </div>
        </div>

        {/* 공식 법적 보증 직인 및 안내 푸터 (Official Seal & Security Note) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-white border border-gray-200 mb-5 text-[10.5px] text-gray-600 shadow-2xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <FileCheck className="w-3.5 h-3.5 text-[#9C752B]" />
            </div>
            <div className="leading-tight">
              <div className="text-[#0F1E36] font-bold">
                (주)다온넷 × (주)에스엘부티크호텔 상호 이행보증 약정
              </div>
              <div className="text-gray-500 text-[9.5px] mt-0.5">
                공증인가 법무법인 10년 공증 검증 완료 · 전자문서 보안 등록
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600 bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
            <Lock className="w-3 h-3 text-teal-600" />
            <span>SECURE-PASS: #DAON-8816-VERIFIED</span>
          </div>
        </div>

        {/* 하단 버튼 인터랙션 */}
        <div className="relative z-10 space-y-2">
          <button
            onClick={closeCert}
            className="w-full bg-gradient-to-r from-[#D9BC86] via-[#E8CFA0] to-[#CCA76B] hover:brightness-105 text-[#0F1E36] font-bold py-3.5 rounded-xl shadow-[0_10px_25px_rgba(217,188,134,0.35)] hover:shadow-[0_14px_30px_rgba(217,188,134,0.45)] transition cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <span>확인 완료 · 월렛 닫기</span>
          </button>

          <div className="text-center text-[10.5px] text-gray-500 pt-1">
            보증서 관련 문의 및 회원 상담: 다온넷 고객센터{" "}
            <a
              href="tel:1877-8816"
              className="text-[#9C752B] font-bold hover:underline inline-flex items-center gap-0.5"
            >
              <PhoneCall className="w-3 h-3 inline" /> 1877-8816
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
