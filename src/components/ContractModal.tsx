"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Search,
  MapPin,
  Gift,
  ShieldCheck,
  Award,
  ChevronDown,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";
import { formatPhoneNumber } from "@/utils/format";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

declare global {
  interface Window {
    daum?: any;
  }
}

export default function ContractModal() {
  const { isContractOpen, closeContract, preferredParkInput, addConsultation, openCert } =
    useDaon();

  const [healthFood, setHealthFood] = useState("삼칠그라 365 (59.8만원 상당)");
  const [paymentMethod, setPaymentMethod] = useState("신용카드 (지정 PG 결제)");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");

  // 주소 분리 관리
  const [zonecode, setZonecode] = useState("");
  const [baseAddress, setBaseAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [preferredPark, setPreferredPark] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const settings = useQuery(api.settings.getSettings);
  const privacyTitle = settings?.privacyTitle || "[필수] 개인정보 수집·이용 및 상담 신청 안내에 동의합니다.";
  const privacySummary = settings?.privacySummary || "(수집 목적: 249 상품 상담 및 장지 안내, 보증서 발급 / 상담 완료 후 안전 파기)";
  const privacyPolicy = settings?.privacyPolicy || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedCertNum, setCompletedCertNum] = useState<string | null>(null);

  const detailInputRef = useRef<HTMLInputElement>(null);

  // Daum 우편번호 스크립트 로드
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.daum?.Postcode) return;

    const existingScript = document.getElementById("daum-postcode-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "daum-postcode-script";
      script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (preferredParkInput) {
      setPreferredPark(preferredParkInput);
    }
  }, [preferredParkInput]);

  if (!isContractOpen) return null;

  // 다음 우편번호 검색 팝업 실행
  const handleOpenAddressSearch = () => {
    if (!window.daum || !window.daum.Postcode) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 클릭해 주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: function (data: any) {
        // 도로명 주소 또는 지본 주소 선택
        let addr = data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
        let extraAddr = "";

        // 도로명 주소일 때 법정동 및 건물명(괄호 내용) 조합
        if (data.userSelectedType === "R") {
          // 법정동명이 있을 경우 추가 (법정리는 제외)
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고 공동주택일 경우 추가
          if (data.buildingName !== "" || data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          // 괄호 포함 추가 항목 생성
          if (extraAddr !== "") {
            extraAddr = ` (${extraAddr})`;
          }
        }

        // 괄호 안 내용까지 포함한 최종 기본 주소 세팅
        const fullBaseAddress = `${addr}${extraAddr}`;
        setZonecode(data.zonecode || "");
        setBaseAddress(fullBaseAddress);

        // 상세주소 입력창으로 포커스 이동
        setTimeout(() => {
          if (detailInputRef.current) {
            detailInputRef.current.focus();
          }
        }, 100);
      },
    }).open();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      alert("성함과 연락처를 모두 입력해 주세요.");
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 8) {
      alert("올바른 연락처(전화번호)를 입력해 주세요.");
      return;
    }

    // 기본주소와 상세주소 조합
    const formattedAddress = baseAddress.trim()
      ? `${zonecode ? `[${zonecode}] ` : ""}${baseAddress.trim()} ${detailAddress.trim()}`.trim()
      : "상담 시 확인 예정";

    setIsSubmitting(true);
    try {
      const productName = "Set 2. 다온 프리미엄 249 (삼칠그라 & 밸런스케어)";
      const amount = 2490000;

      const certNumber = await addConsultation({
        productSet: "Set2",
        productName,
        amount,
        healthFood,
        paymentMethod,
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: formattedAddress,
        preferredPark: preferredPark.trim() || undefined,
        notes: "웹사이트 온라인 간편 계약/상담 신청 (단일 249 프리미엄 상품)",
      });

      setCompletedCertNum(certNumber);
    } catch (err) {
      console.error(err);
      alert("신청 처리 중 오류가 발생했습니다. 고객센터(1877-8816)로 문의해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setCompletedCertNum(null);
    closeContract();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-scrollbar">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(15,30,54,0.2)] max-h-[92vh] overflow-y-auto no-scrollbar border border-amber-100/80 animate-scale-up"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* 헤더 영역 - 밝고 세련된 프리미엄 스타일 */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-bold text-[#A37D32] tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>DAONNET PREMIUM LIFEMEMBERSHIP</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F1E36] tracking-tight">
              다온 프리미엄 249 상품 신청 및 장지 상담
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              신청 즉시 전문 상담원이 1:1 맞춤 배정되어 혜택 안내 및 계약을 도와드립니다.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer -mr-1"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completedCertNum ? (
          /* 신청 완료 화면 */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h4 className="text-2xl font-black text-[#0F1E36]">
              상담 및 계약 신청이 안전하게 접수되었습니다
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              고객님의 신청 정보가 다온넷 본사 고객지원센터에 안전하게 접수되었습니다.
              전문 라이프케어 상담원이 신속히 안내 전화를 드리겠습니다.
            </p>

            <div className="bg-[#FAF8F5] border border-amber-200/90 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-md mx-auto shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-amber-100">
                <span className="text-gray-500 font-medium">임시 발급 보증서 번호</span>
                <strong className="text-[#0F1E36] font-mono text-sm font-bold bg-white px-2 py-0.5 rounded border border-amber-200">
                  {completedCertNum}
                </strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">신청인</span>
                <strong className="text-[#0F1E36] font-semibold">{customerName} 님</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">신청 상품</span>
                <strong className="text-[#0F1E36] font-semibold">다온 프리미엄 249 (498만 공증 보증)</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">선택 사은품</span>
                <strong className="text-[#A37D32] font-semibold">{healthFood}</strong>
              </div>
              {baseAddress && (
                <div className="flex justify-between items-start pt-1">
                  <span className="text-gray-500 shrink-0 mr-2">배송/상담 주소</span>
                  <strong className="text-[#0F1E36] text-right font-medium text-[11px] leading-snug">
                    {zonecode && `[${zonecode}] `}
                    {baseAddress} {detailAddress}
                  </strong>
                </div>
              )}
              <div className="flex justify-between items-center pt-2 border-t border-amber-100">
                <span className="text-gray-500">장례·추모 24시 긴급 문의</span>
                <strong className="text-[#C5A059] font-bold">1877-8816 (24시간)</strong>
              </div>
            </div>

            <div className="flex gap-2.5 pt-3">
              <button
                type="button"
                onClick={() => {
                  handleResetAndClose();
                  openCert();
                }}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#0F1E36] font-bold py-3.5 rounded-xl text-xs sm:text-sm transition cursor-pointer"
              >
                모바일 보증서 확인
              </button>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="flex-1 gold-gradient text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm shadow-md hover:brightness-105 transition cursor-pointer"
              >
                확인 완료
              </button>
            </div>
          </div>
        ) : (
          /* 신청 폼 */
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {/* 단일 상품 카드 (249만원 전용 + 제공항목에 건강기능식품 포함) */}
            <div className="rounded-2xl border-2 border-[#C5A059] bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F0] to-[#F5EFE3] p-4 sm:p-5 shadow-sm relative overflow-hidden">
              {/* 상단 뱃지 & 타이틀 */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-amber-200/70">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F1E36] text-[#C5A059] flex items-center justify-center font-black text-xs shadow-sm">
                    VIP
                  </div>
                  <div>
                    <h4 className="font-black text-[#0F1E36] text-base sm:text-lg tracking-tight">
                      다온 프리미엄 249 라이프케어
                    </h4>
                    <p className="text-[11px] text-amber-900/80 font-medium">
                      10년 100% 환급보증 + 장지 + 의전 + 건강식품 + 리조트·여행 풀패키지
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-red-600 text-white font-black text-[10px] px-2 py-0.5 rounded shadow-sm mb-0.5">
                    10년 498만 환급보증
                  </div>
                  <div className="font-black text-[#0F1E36] text-lg sm:text-xl tracking-tight">
                    2,490,000<span className="text-xs font-bold text-gray-600 ml-0.5">원</span>
                  </div>
                </div>
              </div>

              {/* 제공 항목 상세 리스트 (8대 핵심 혜택) */}
              <div className="pt-3">
                <div className="text-[11px] font-bold text-amber-950/70 mb-2 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>249 상품 전체 제공 항목 (8대 핵심 혜택)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">프리미엄 건강기능식품</strong> 증정
                      <span className="text-[10px] text-amber-700 block">(삼칠그라 365 or 알부민 택1 · 최고 59.8만원)</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">10년 환급보증서</strong> (498만원)
                      <span className="text-[10px] text-gray-500 block">법무법인 공증 확정보증 (200% 반환)</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">전국 55개 추모공원 봉안당</strong>
                      <span className="text-[10px] text-gray-500 block">개인단(1단) 안치 특별 지원 혜택</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">VIP 198 후불제 장례 의전</strong>
                      <span className="text-[10px] text-gray-500 block">다온넷 직영 24시 장례의전 보증</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">249만 쇼핑 복지 포인트</strong>
                      <span className="text-[10px] text-gray-500 block">다온넷 전용 폐쇄몰 100% 사용</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">해피클래스 리조트 2박 3일권</strong>
                      <span className="text-[10px] text-gray-500 block">전국 50여 곳 제휴 콘도·호텔 무료 숙박권</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">패키지 여행 특가 혜택</strong>
                      <span className="text-[10px] text-gray-500 block">인기 해외 패키지 회원 우대가 & 맞춤 플래너</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 bg-white/70 backdrop-blur-xs p-2 rounded-xl border border-amber-100">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span className="leading-snug">
                      <strong className="text-[#0F1E36] font-bold">특별 위로지원금 40만원</strong>
                      <span className="text-[10px] text-gray-500 block">장례 발생 시 현금 40만원 별도 지원 혜택</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 건강식품 & 결제수단 선택 */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[#0F1E36]">
                    <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
                    사은 건강기능식품 선택 <span className="text-red-500">*</span>
                  </span>
                  <span className="text-[10px] text-amber-700 font-medium">택1 무료 증정</span>
                </label>
                <div className="relative">
                  <select
                    value={healthFood}
                    onChange={(e) => setHealthFood(e.target.value)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] shadow-xs cursor-pointer pr-8 font-medium"
                  >
                    <option value="삼칠그라 365 (59.8만원 상당)">
                      삼칠그라 365 (59.8만원 상당 / 활력·혈행 개선)
                    </option>
                    <option value="경남제약 알부민 프라임 맥스 (58만원 상당)">
                      경남제약 저분자 콜라겐 알부민 프라임 맥스 (58만원 상당)
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5 text-[#0F1E36]">
                  희망 결제 수단
                </label>
                <div className="relative">
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] shadow-xs cursor-pointer pr-8 font-medium"
                  >
                    <option value="신용카드 (지정 PG 결제)">신용카드 (무이자 할부 / 지정 PG 결제)</option>
                    <option value="CMS (자동이체)">CMS (자동이체 분납 상담)</option>
                    <option value="계좌이체 / 현금">계좌이체 / 무통장입금</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 고객 성명 및 연락처 */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  구매자 성명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] bg-white shadow-xs transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  구매자 연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={13}
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                  placeholder="예: 010-1234-5678"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] bg-white shadow-xs transition"
                />
              </div>
            </div>

            {/* 주소 검색 및 상세주소 입력 영역 (사용자 핵심 요구사항) */}
            <div className="space-y-2 bg-[#FBFBFA] p-3.5 rounded-2xl border border-gray-200/80">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#0F1E36] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>건강식품 배송 받으실 주소 (또는 상담 희망지역)</span>
                </label>
                <span className="text-[10px] text-gray-500">주소검색 필수 연동</span>
              </div>

              {/* 1행: 우편번호 표시 & 주소 검색 버튼 */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={zonecode}
                  placeholder="우편번호"
                  onClick={handleOpenAddressSearch}
                  className="w-28 border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm bg-white font-mono text-gray-700 text-center cursor-pointer focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleOpenAddressSearch}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#0F1E36] hover:bg-[#1a2f52] text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98"
                >
                  <Search className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>우편번호 / 주소 검색</span>
                </button>
                {zonecode && (
                  <span className="text-[11px] text-emerald-600 font-semibold hidden sm:inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 주소 확인 완료
                  </span>
                )}
              </div>

              {/* 2행: 기본 주소 (조회해서 나오는 괄호 안 내용까지 포함) */}
              <div>
                <input
                  type="text"
                  readOnly
                  value={baseAddress}
                  onClick={handleOpenAddressSearch}
                  placeholder="주소 검색 버튼을 눌러 도로명 또는 지번 주소를 선택해 주세요"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm bg-white text-gray-800 placeholder-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] shadow-xs"
                />
                {baseAddress && (
                  <p className="text-[10px] text-gray-500 mt-1 pl-1">
                    ※ 동·건물명 등 괄호 안 법정 참고항목이 자동으로 포함되었습니다.
                  </p>
                )}
              </div>

              {/* 3행: 상세 주소 (동·호수 등 직접 입력) */}
              <div>
                <input
                  ref={detailInputRef}
                  type="text"
                  value={detailAddress}
                  onChange={(e) => setDetailAddress(e.target.value)}
                  placeholder="동·호수, 층수 등 상세 주소를 입력해 주세요 (예: 102동 1502호)"
                  className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] shadow-xs transition"
                />
              </div>
            </div>

            {/* 희망 추모공원 (선택 사항) */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                희망 추모공원 (선택 사항)
              </label>
              <input
                type="text"
                value={preferredPark}
                onChange={(e) => setPreferredPark(e.target.value)}
                placeholder="예: 유토피아추모관, 용인공원, 시안추모공원 등 (미정 시 상담 안내)"
                className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40 focus:border-[#C5A059] bg-white shadow-xs transition"
              />
            </div>

            {/* 약관 동의 */}
            <div className="pt-1">
              <div className="flex items-start justify-between gap-2">
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 accent-[#0F1E36] cursor-pointer"
                  />
                  <span className="leading-snug">
                    {privacyTitle}
                    <span className="text-gray-400 block text-[11px] mt-0.5">
                      {privacySummary}
                    </span>
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowPolicyModal(true)}
                  className="text-[11px] text-gray-500 hover:text-[#0F1E36] underline shrink-0 cursor-pointer ml-1"
                >
                  전문보기
                </button>
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-gradient text-white font-black py-4 rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-3"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  접수 처리 중입니다...
                </span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white drop-shadow-xs" />
                  <span className="text-sm sm:text-base">다온 프리미엄 249 상담 및 계약 신청하기 (1877-8816)</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* 개인정보 수집 및 이용 방침 전문 서브모달 */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#0F1E36] text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-bold text-sm sm:text-base">개인정보 수집 및 이용 방침 전문</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="text-gray-300 hover:text-white p-1 rounded-full cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 overflow-y-auto flex-1 text-xs text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50/70">
              {privacyPolicy || "등록된 개인정보 처리방침이 없습니다."}
            </div>
            <div className="p-3.5 bg-white border-t border-gray-100 text-right">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-4 py-2 bg-[#0F1E36] hover:bg-[#1b355e] text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
