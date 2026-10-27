"use client";

import React, { useState } from "react";
import { useDaon } from "@/context/DaonContext";
import { HEALTH_GIFT_PRODUCTS, CONSOLATION_BENEFIT } from "@/data/pointMall";
import {
  Gift,
  Coins,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Award,
  ArrowRight,
  Info,
} from "lucide-react";

export default function SpecialHealthGiftSectionV2() {
  const { openContract } = useDaon();
  const [selectedGift, setSelectedGift] = useState<string>("samchilgra-365");

  const handleApplyGift = (giftName: string) => {
    openContract(`[건강기능식품(${giftName}) 무료증정 & 위로지원금 40만원 신청] `);
  };

  return (
    <section
      id="health-support"
      className="bg-[#f2f0e6] py-6 sm:py-14 lg:py-20 px-4 sm:px-[6%] border-t border-[#dedfd7] relative overflow-hidden"
    >
      {/* 배경 장식 럭셔리 워터마크 */}
      <div
        className="absolute right-[-40px] top-[40px] text-[120px] sm:text-[180px] lg:text-[260px] text-[#26373b]/[0.025] font-serif pointer-events-none select-none font-bold"
        style={{ fontFamily: "Georgia, serif" }}
      >
        BENEFIT
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* 상단 섹션 헤더 */}
        <div className="text-center max-w-[880px] mx-auto mb-4 sm:mb-[52px]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#e8e2d2] border border-[#cfc6b0] text-[#7d6738] text-[10px] sm:text-[11px] font-bold tracking-[1.5px] sm:tracking-[2px] uppercase mb-2 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#947b50]" />
            <span>DAONNET SPECIAL BENEFIT · 프리미엄 단독 특전</span>
          </div>

          <h2
            className="text-[20px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.3] sm:leading-[1.3] tracking-[-0.8px] sm:tracking-[-1.2px] text-[#172c37] m-0 mb-2 sm:mb-4 break-keep"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            시중가 58만원 상당 건강식품 무료 증정
            <br className="hidden sm:inline" />
            <span className="text-[#947b50] font-normal"> ＋ </span>
            현금 위로지원금 <span className="text-[#a16207] underline decoration-[#d9bc86] decoration-4 underline-offset-6">40만원</span> 별도 지급
          </h2>

          <p className="text-[11.5px] sm:text-[15px] text-[#5e6562] leading-[1.65] sm:leading-[1.7] m-0 break-keep">
            다온 프리미엄 회원님만을 위해 준비한 파격적인 2대 특전입니다.
            최고급 프리미엄 건강기능식품(삼칠그라 365 또는 경남제약 알부민 프라임 맥스 택1)을{" "}
            <strong className="text-[#172c37] font-semibold">100% 무료 증정</strong>하며,
            <strong className="text-[#a16207] font-semibold"> 현금 위로지원금 40만원</strong>까지 별도로 드립니다.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ★ 특별 현금 위로지원금 40만원 하이라이트 배너 ★ */}
        {/* ========================================================================= */}
        <div className="mb-4 sm:mb-[48px] bg-gradient-to-r from-[#172c37] via-[#243d4c] to-[#172c37] text-white rounded-xl sm:rounded-3xl p-3.5 sm:p-8 lg:p-10 shadow-md border sm:border-2 border-[#d9bc86]/50 relative overflow-hidden">
          {/* 황금빛 광택 효과 */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#d9bc86]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 sm:gap-8">
            <div className="space-y-2 sm:space-y-4 max-w-[700px]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#d9bc86]/20 border border-[#d9bc86]/50 text-[#f5dfa8] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-[#f5dfa8]" />
                <span>SPECIAL CASH BENEFIT · 별도 현금 지급 특전</span>
              </div>

              <h3
                className="text-[17px] sm:text-[32px] font-bold text-[#f7f5ef] leading-[1.3] m-0 break-keep"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                회원님을 위한 특별 위로지원금{" "}
                <span className="text-[#ffd56b] whitespace-nowrap">400,000원</span> 현금 별도 지급
              </h3>

              <p className="text-[11.5px] sm:text-[14px] text-[#cfd8d6] leading-[1.65] m-0 break-keep">
                건강기능식품 무료 증정 혜택과 중복으로 적용됩니다!
                지정 계좌로 <strong className="text-white font-semibold">현금 40만원</strong>을 직접 지급해 드립니다.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 pt-1 text-[10.5px] sm:text-[12px] text-[#e0e7e5]">
                <span className="flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd56b] shrink-0" />
                  건강식품(58만원 상당)과 별도 중복 지급
                </span>
                <span className="flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd56b] shrink-0" />
                  현금 400,000원 직접 계좌 입금 지원
                </span>
                <span className="flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffd56b] shrink-0" />
                  다온넷 회원 가입 및 약관 기준 보증
                </span>
              </div>
            </div>

            {/* 위로지원금 금액 카드 비주얼 */}
            <div className="bg-[#0f1d24]/85 border border-[#d9bc86] sm:border-2 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-center lg:w-[320px] shrink-0 shadow-inner flex flex-col justify-between">
              <span className="text-[9.5px] sm:text-[10px] tracking-[1.5px] text-[#d9bc86] font-bold uppercase block mb-0.5">
                DAON CONSOLATION FUND
              </span>
              <div className="text-[12px] sm:text-[13px] text-[#cbd5e1] font-medium mb-1">
                특별 현금 위로지원금
              </div>
              <div
                className="text-[26px] sm:text-[40px] font-black text-[#ffd56b] tracking-tight leading-none my-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                400,000<span className="text-[16px] sm:text-[22px] font-bold text-white ml-1">원</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#94a3b8] mb-2 sm:mb-4">
                (현금 별도 지급 · 세부 지급조건 기준 확인)
              </div>

              <button
                onClick={() => handleApplyGift("위로지원금 40만원 및 건강식품")}
                className="w-full bg-[#d9bc86] hover:bg-[#e6c995] text-[#172c37] font-bold py-2.5 sm:py-3 px-3 rounded-lg sm:rounded-xl text-[11.5px] sm:text-[13px] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>위로지원금 혜택 신청하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ★ 건강기능식품 택 1 무료 제공 (삼칠그라 365 vs 경남제약 알부민 프라임) ★ */}
        {/* ========================================================================= */}
        <div className="mb-3 sm:mb-[24px]">
          <div className="flex items-center justify-between mb-2.5 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-[#947b50]" />
              <h3
                className="text-[17px] sm:text-[26px] font-bold text-[#172c37] m-0"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                프리미엄 건강기능식품 택 1 무료 증정 (58만원 상당)
              </h3>
            </div>
            <span className="hidden sm:inline-block text-[12px] font-semibold text-[#8c744d] bg-[#f7f5ef] px-3 py-1 border border-[#cfc6b0]">
              전원 무료 배송 · 본사 정품
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {HEALTH_GIFT_PRODUCTS.map((gift) => {
              const isSelected = selectedGift === gift.id;

              return (
                <article
                  key={gift.id}
                  onClick={() => setSelectedGift(gift.id)}
                  className={`bg-[#f7f5ef] rounded-xl sm:rounded-3xl border sm:border-2 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#947b50] shadow-md ring-1 ring-[#947b50]"
                      : "border-[#d8dcd3] hover:border-[#b4bba8] shadow-xs"
                  }`}
                >
                  <div>
                    {/* 상단 뱃지 & 헤더 */}
                    <div className="p-3 sm:p-6 pb-2.5 sm:pb-4 bg-gradient-to-b from-[#eeeae0] to-[#f7f5ef] border-b border-[#e2decb] flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block text-[9.5px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 bg-[#172c37] text-[#d9bc86] rounded mb-1 sm:mb-2">
                          {gift.badge}
                        </span>
                        <h4
                          className="text-[15px] sm:text-[20px] font-bold text-[#172c37] leading-[1.3] m-0"
                          style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                        >
                          {gift.name}
                        </h4>
                        <p className="text-[11px] sm:text-[12px] text-[#747b78] mt-0.5 sm:mt-1 m-0">
                          {gift.subTitle}
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
                          isSelected
                            ? "border-[#947b50] bg-[#947b50] text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                      </div>
                    </div>

                    {/* 상품 이미지 영역 (모바일 h-[140px] 축소) */}
                    <div className="relative h-[140px] sm:h-[300px] bg-white flex items-center justify-center p-3 border-b border-[#e2decb] overflow-hidden group">
                      <img
                        src={gift.imageUrl}
                        alt={gift.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-[#172c37]/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium">
                        {gift.specification}
                      </div>
                    </div>

                    {/* 상세 특징 리스트 */}
                    <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-2.5">
                      <div className="text-[10px] sm:text-[11px] font-bold text-[#8c744d] uppercase tracking-wider mb-1 sm:mb-2">
                        KEY HIGHLIGHTS
                      </div>
                      <ul className="space-y-1 sm:space-y-2">
                        {gift.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-1.5 text-[11px] sm:text-[13px] text-[#334155] leading-relaxed break-keep"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#947b50] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* 시중가 vs 회원 결제금액 비교 */}
                      <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#dedfd7] space-y-1 bg-[#eae7dd]/70 p-2.5 sm:p-3.5 rounded-xl">
                        <div className="flex justify-between text-[11px] sm:text-[12px] text-[#8a8f8c]">
                          <span>온라인 시중가</span>
                          <span className="line-through">{gift.marketPrice.toLocaleString()}원</span>
                        </div>
                        <div className="flex justify-between items-baseline text-[12px] sm:text-[14px]">
                          <span className="font-bold text-[#172c37]">
                            다온 프리미엄 회원가
                          </span>
                          <span className="text-[15px] sm:text-[20px] font-extrabold text-[#947b50]">
                            0원 (전액 무료 증정)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 카드 하단 신청 버튼 */}
                  <div className="p-3 sm:p-6 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyGift(gift.name);
                      }}
                      className={`w-full py-2.5 sm:py-3 px-3 rounded-xl text-[12px] sm:text-[13px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                        isSelected
                          ? "bg-[#172c37] hover:bg-[#243d4c] text-white shadow"
                          : "bg-[#e5dfd0] hover:bg-[#d8d1c0] text-[#172c37]"
                      }`}
                    >
                      <Gift className="w-3.5 h-3.5 text-[#d9bc86]" />
                      <span>[{gift.name.split(" ")[0]}] 무료 증정 신청하기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 혜택 총 합산 배너 */}
        <div className="bg-[#e7e3d6] border border-[#d2ccb9] rounded-xl sm:rounded-2xl p-3.5 sm:p-7 mb-4 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#d9bc86]/30 border border-[#947b50] flex items-center justify-center text-[#947b50] shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#947b50]" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[12px] font-bold text-[#7d6738] tracking-wider uppercase">
                TOTAL BENEFIT SUMMARY
              </div>
              <div className="text-[13px] sm:text-[17px] font-bold text-[#172c37] break-keep">
                건강식품(약 580,000원 상당) ＋ 현금 위로지원금(400,000원)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-stretch sm:self-center justify-between sm:justify-end">
            <div className="text-right">
              <span className="text-[10px] sm:text-[11px] text-[#747b78] block">총 혜택 가치</span>
              <strong
                className="text-[20px] sm:text-[28px] font-extrabold text-[#172c37]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                약 980,000<span className="text-[13px] sm:text-[16px] font-medium text-[#947b50]">원 상당</span>
              </strong>
            </div>

            <button
              onClick={() => handleApplyGift("건강식품 택1 & 위로지원금 40만원")}
              className="bg-[#947b50] hover:bg-[#836c44] text-white font-bold px-3.5 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[11.5px] sm:text-[13px] transition cursor-pointer shadow"
            >
              특전 상담 ↗
            </button>
          </div>
        </div>

        {/* 필수 안내 및 고지사항 (제공 이미지 4 기준) */}
        <div className="bg-[#f7f5ef] border border-[#dcdad0] rounded-xl p-4 sm:p-5 text-[11px] sm:text-[12px] text-[#747b78] space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-1.5 text-[#5e6562] font-bold text-[12px] mb-1">
            <Info className="w-4 h-4 text-[#947b50]" />
            <span>건강기능식품 증정 및 위로지원금 지급 관련 안내 / 필수 고지사항</span>
          </div>
          <p className="m-0">
            • <strong>건강식품 증정:</strong> 삼칠그라 365 또는 경남제약 알부민 프라임 맥스 중 1종을 선택하실 수 있으며, 온라인 제공자료상 약 580,000원 ~ 598,000원 상당의 정품 세트가 무료 배송됩니다.
          </p>
          <p className="m-0">
            • <strong>위로지원금 지급:</strong> 건강식품 증정과 별도로 회원님의 든든한 일상을 응원하기 위해 현금 400,000원을 지정 계좌로 지급해 드립니다.
          </p>
          <p className="m-0">
            • <strong>운영 기준:</strong> 건강식품 세부 규격·배송 및 위로지원금 지급 시점·조건은 다온넷 최종 회원 가입 규정 및 운영 기준에 따릅니다.
          </p>
          <p className="m-0">
            • <strong>이행증서 발급:</strong> 장례 및 추모공원 이행증서는 실물 또는 모바일로 안전하게 발급되며, 서비스 발생 시 다온넷 고객센터(1877-8816) 접수 후 즉시 모든 혜택이 적용됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
