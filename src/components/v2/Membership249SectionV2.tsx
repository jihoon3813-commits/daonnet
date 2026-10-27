"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";
import {
  ShieldCheck,
  HeartHandshake,
  Landmark,
  Coins,
  Palmtree,
  Gift,
  Sparkles,
  Info,
} from "lucide-react";

export default function Membership249SectionV2() {
  const { openContract, openCert } = useDaon();

  return (
    <>
      {/* 1. 다크 슬레이트 네이비 멤버십 & 498만 환급보증 하이라이트 (.membership) */}
      <section
        id="premium-249"
        className="relative overflow-hidden text-white py-[54px] sm:py-[76px] lg:py-[100px] px-5 sm:px-[7%] lg:px-[8%]"
      >
        {/* 배경 라이프스타일 이미지 & 시네마틱 럭셔리 오버레이 */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/assets/lifestyle-hero.jpg"
            alt="여유롭고 품격 있는 프리미엄 라이프케어"
            className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000"
          />
          {/* 다크 에메랄드/슬레이트 네이비 그라데이션 딤드 레이어 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1820]/96 via-[#0d222b]/90 to-[#09171e]/94 backdrop-blur-[1px]" />
          {/* 은은한 샴페인 골드 앰비언트 글로우 */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d9bc86]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#2a4d57]/30 rounded-full blur-[100px] pointer-events-none" />
          {/* 상하단 자연스러운 블렌딩 */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#081318]/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#081318]/70 to-transparent" />
        </div>

        <div
          id="refund-guarantee"
          className="relative z-10 max-w-[1180px] mx-auto grid lg:grid-cols-2 gap-[40px] sm:gap-[52px] lg:gap-[80px] items-center"
        >
          {/* 좌측: 상품 설명 및 가격, 498만 환급보증 안내 */}
          <div>
            {/* 세련된 골드 캡슐 뱃지 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d9bc86]/10 border border-[#d9bc86]/30 backdrop-blur-md mb-[16px] sm:mb-[20px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c583] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[2.2px] sm:tracking-[2.8px] text-[#f0ddb8] font-semibold uppercase">
                DAON PREMIUM MEMBERSHIP · 10년 공증 환급보증서 발급
              </span>
            </div>

            <h2
              className="text-[26px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.38] sm:leading-[1.44] tracking-[-1px] sm:tracking-[-1.5px] m-0 mb-[16px] sm:mb-[20px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              내일을 위한 준비에,
              <br />
              <span className="bg-gradient-to-r from-[#fcf4e4] via-[#edd29b] to-[#c99f57] bg-clip-text text-transparent font-semibold drop-shadow-sm">
                498만 원 환급보증의 안심을 더하다.
              </span>
            </h2>

            <p className="text-[#c2cfd3] text-[13px] sm:text-[14.5px] leading-[1.82] sm:leading-[1.88] m-0 font-light">
              가입금액 <strong className="text-white font-medium">249만 원(VAT 포함)</strong>으로 추모공원·후불장례 보증부터 쇼핑·여행·건강식품까지.
              안전한 납입과 든든한 보장을 위해 <strong className="text-[#edd29b] font-medium">10년 공증 4,980,000원 환급보증서</strong>가 발행되며,
              가입 <strong className="text-white font-medium">2년 만기 후 자유롭게 양도·양수</strong>가 가능합니다.
            </p>

            {/* 가격 & 환급보증 글래스 패널 (.price) */}
            <div className="my-[24px] sm:my-[32px] p-5 sm:p-6 rounded-2xl bg-[#0f242e]/75 backdrop-blur-md border border-[#d9bc86]/25 shadow-[0_16px_36px_rgba(0,0,0,0.35)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#d9bc86]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <small className="block text-[11px] font-medium text-[#9ab0b9] tracking-wide mb-1">
                  다온 프리미엄 249 (실제 가입판매가)
                </small>
                <strong
                  className="block text-[28px] sm:text-[40px] tracking-[0.5px] sm:tracking-[1px] font-normal text-white leading-[1.15] mt-1 whitespace-nowrap"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  2,490,000
                  <span className="text-[13px] sm:text-[15px] ml-[4px] sm:ml-[6px] font-sans font-light text-[#cbd6da]">원</span>
                </strong>
                <span className="block text-[10.5px] sm:text-[11px] text-[#8ea4ae] mt-1.5">
                  VAT 포함 · 전 혜택 올인원 보장
                </span>
              </div>

              <div className="sm:border-l sm:border-[#2f4955] sm:pl-6 pt-3 sm:pt-0 border-t border-[#2f4955]/70 sm:border-t-0">
                <div className="flex items-center justify-between mb-1">
                  <small className="block text-[11px] font-semibold text-[#ebd29f] tracking-wide">
                    10년 공증 환급보증서 발행 금액
                  </small>
                  <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#d9bc86]/20 text-[#edd5a6] border border-[#d9bc86]/35 font-medium whitespace-nowrap">
                    200% 보증
                  </span>
                </div>
                <strong
                  className="block text-[28px] sm:text-[40px] tracking-[0.5px] sm:tracking-[1px] font-normal text-[#edd29b] leading-[1.15] mt-1 whitespace-nowrap drop-shadow"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  4,980,000
                  <span className="text-[13px] sm:text-[15px] ml-[4px] sm:ml-[6px] font-sans font-light text-[#edd5a6]">원</span>
                </strong>
                <span className="block text-[10.5px] sm:text-[11px] text-[#a4b8bf] mt-1.5">
                  2년 후 양도·양수 · 에스엘부티크호텔 약정
                </span>
              </div>
            </div>

            {/* 버튼 인터랙션 */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-3.5">
              <button
                onClick={() => openContract()}
                className="group relative overflow-hidden bg-gradient-to-r from-[#dfbe85] via-[#edd5a6] to-[#d6b16e] text-[#11242e] hover:brightness-105 px-[22px] sm:px-[26px] py-[15px] sm:py-[17px] rounded-xl text-[13.5px] font-bold inline-flex items-center justify-between gap-[20px] sm:gap-[26px] shadow-[0_10px_25px_rgba(217,188,134,0.3)] hover:shadow-[0_14px_30px_rgba(217,188,134,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>가입 및 보증서 신청하기</span>
                <span className="w-5 h-5 rounded-full bg-[#11242e]/10 flex items-center justify-center text-[12px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>

              <button
                onClick={openCert}
                className="backdrop-blur-md bg-white/[0.05] text-white border border-[#d9bc86]/40 hover:border-[#edd5a6] hover:bg-[#d9bc86]/15 hover:text-[#f8edd6] px-[20px] sm:px-[24px] py-[15px] sm:py-[17px] rounded-xl text-[13.5px] font-semibold inline-flex items-center justify-between gap-[18px] sm:gap-[22px] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
              >
                <span>모바일 보증서(498만) 견본 보기</span>
                <span className="text-[#ebd29f]">↗</span>
              </button>
            </div>
          </div>

          {/* 우측: 틸트 멤버십 카드 & 보증 요약 (.membership-right) */}
          <div className="pt-[4px] sm:pt-[6px]">
            {/* VIP 멤버십 증서 카드 */}
            <div
              onClick={openCert}
              title="클릭하여 모바일 보증서 상세 보기"
              className="group aspect-[1.65] max-w-[450px] mx-auto mb-[24px] sm:mb-[32px] rounded-[14px] p-[22px_24px] sm:p-[28px_32px] border border-[#d9bc86]/40 text-[#f1dec0] shadow-[0_22px_50px_rgba(0,0,0,0.55),0_0_20px_rgba(217,188,134,0.15)] sm:-rotate-[2.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-400 cursor-pointer flex flex-col justify-between relative overflow-hidden backdrop-blur-xl"
              style={{
                background:
                  "radial-gradient(ellipse at 90% 10%, rgba(100, 130, 122, 0.45), transparent 60%), linear-gradient(135deg, #2b4042 0%, #15292e 50%, #0d1e23 100%)",
              }}
            >
              {/* 반사 쉬머 하이라이트 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none group-hover:opacity-80 transition-opacity" />

              <div
                className="flex justify-between items-start text-[16px] sm:text-[18px] tracking-[3px] text-[#f2e2c4] font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <div className="flex items-center gap-2">
                  <span>DAONNET</span>
                  <span className="text-[10px] tracking-normal px-1.5 py-0.5 rounded border border-[#d9bc86]/40 text-[#d9bc86] font-sans">
                    PREMIUM
                  </span>
                </div>
                <span className="text-[26px] sm:text-[30px] leading-[0.7] text-[#edd5a6]">∞</span>
              </div>

              <div className="my-auto pt-2 sm:pt-3">
                <small className="block text-[8.5px] tracking-[1.8px] sm:tracking-[2.2px] text-[#a9c1bd] uppercase font-semibold">
                  PREMIUM MEMBERSHIP &amp; GUARANTEE CERTIFICATE
                </small>
                <strong
                  className="block mt-[6px] sm:mt-[8px] text-[17px] sm:text-[22px] font-normal leading-[1.42] text-[#fbedd5] drop-shadow"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  마음을 담은 준비, 삶을 채우는 혜택.
                  <br />
                  <span className="text-[#ebd29f] font-semibold">환급보증서 4,980,000원 발행</span>
                </strong>
              </div>

              <div className="text-[8.5px] tracking-[1.2px] flex justify-between items-center pt-2.5 sm:pt-3 border-t border-[#d9bc86]/30 text-[#cad7d6]">
                <span className="font-mono">DAON PREMIUM 249 · 10-YEAR NOTARIZED</span>
                <span className="text-[7.5px] font-semibold text-[#ebd29f] flex items-center gap-1 group-hover:underline">
                  CLICK TO PREVIEW ↗
                </span>
              </div>
            </div>

            {/* 미니 혜택 4대 그리드 - 세련된 글래스 카드 스타일 (.benefit-mini) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-[#d9bc86]/30 hover:border-[#d9bc86]/60 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#ebd29f] text-[11px]">✦</span>
                  <b className="block text-[13px] font-semibold text-[#ebd29f]">
                    10년 공증 환급보증
                  </b>
                </div>
                <span className="text-[#b4c3c6] text-[11px] leading-[1.5] block">
                  4,980,000원 증서 발행 (2년 후 양도 가능)*
                </span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#7cd1b8] text-[11px]">✦</span>
                  <b className="block text-[13px] font-medium text-white">
                    추모공원 특별지원
                  </b>
                </div>
                <span className="text-[#b4c3c6] text-[11px] leading-[1.5] block">
                  직영 유토피아 및 전국 봉안당 1단 기준*
                </span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#7cd1b8] text-[11px]">✦</span>
                  <b className="block text-[13px] font-medium text-white">
                    후불장례 이행보증
                  </b>
                </div>
                <span className="text-[#b4c3c6] text-[11px] leading-[1.5] block">
                  1,980,000원 장례보증 · 24시간 의전*
                </span>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#7cd1b8] text-[11px]">✦</span>
                  <b className="block text-[13px] font-medium text-white">
                    포인트 · 숙박 · 사은품
                  </b>
                </div>
                <span className="text-[#b4c3c6] text-[11px] leading-[1.5] block">
                  2,490,000P + 2박3일 숙박 + 삼칠그라 + 40만원*
                </span>
              </div>
            </div>

            <small className="block text-[10.5px] text-[#93a6ab] mt-[16px] leading-[1.6]">
              * 주요 서비스 미이용 시 약정 및 보증서 조건에 따라 반환 지급되며, 시설·서비스별 적용 조건이 있습니다.
            </small>
          </div>
        </div>
      </section>

      {/* 2. 다온 프리미엄 249 — 7대 핵심 보증 패키지 상세 그리드 */}
      <section className="bg-gradient-to-b from-[#f9f8f4] via-[#f4f2ea] to-[#f8f7f2] py-[56px] sm:py-[76px] lg:py-[100px] border-b border-[#dedfd7]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-[6%]">
          {/* 섹션 상단 헤더 & 금액 요약 */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-[32px] sm:mb-[44px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#947b50]/10 border border-[#947b50]/20 text-[#8d7854] text-[11px] font-bold tracking-[2px] mb-3 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#947b50]" />
                <span>ALL-IN-ONE 7 PRIVILEGES</span>
              </div>
              <h2
                className="text-[26px] sm:text-[36px] font-medium leading-[1.35] sm:leading-[1.4] tracking-[-1px] sm:tracking-[-1.2px] text-[#1c2e33] m-0"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                다온 프리미엄 249, <span className="text-[#947b50] font-semibold">7대 핵심 패키지</span> 구성
              </h2>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-[#dedfd7] rounded-2xl p-4 sm:px-6 sm:py-3.5 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#947b50]/10 flex items-center justify-center text-[#947b50] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-[#747b78] font-medium">총 판매금액 (VAT 포함)</div>
                <div className="text-[17px] sm:text-[19px] font-bold text-[#172c37]">
                  2,490,000<span className="text-[13px] font-normal text-[#5e6562] ml-0.5">원</span>
                  <span className="text-[12px] font-normal text-[#8d7854] ml-2 pl-2 border-l border-[#dedfd7] hidden sm:inline">
                    평생 안심 &amp; 즉시 혜택
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6개 핵심 혜택 카드 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                num: "01",
                tag: "보증 혜택 01",
                sub: "100% 환급 약정",
                value: "4,980,000원",
                title: "10년 공증 환급보증서",
                desc: "10년 공증 환급증서 발급. 가입 2년 후 양도·양수가 가능하며, 주요 서비스 미이용 시 반환 지급약정 및 보증서 조건에 따라 안전하게 반환 지급됩니다.",
                note: "실물 또는 모바일 보증서 발급 · (주)에스엘부티크호텔 약정",
                highlight: true,
                badge: "BEST 핵심 보증",
                icon: ShieldCheck,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086163/%EC%95%84%EC%9D%B4%EB%B3%B4%EB%A6%AC_%EC%9D%B8%EC%A6%9D%EC%84%9C%EC%99%80_%EA%B3%A8%EB%93%9C_%EC%94%B0-1_x7rxoq.png",
              },
              {
                num: "02",
                tag: "보증 혜택 02",
                sub: "24시간 안심 의전",
                value: "1,980,000원",
                title: "후불장례 이행보증",
                desc: "전국장례통합 서비스를 통해 365일 24시간 장례접수 가능. 물가 상승 대비형으로 전문 인력·용품·차량 등 라이프케어 통합 의전을 지원합니다.",
                note: "1구좌당 1회 원칙 · 직계가족 양도 가능",
                icon: HeartHandshake,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086165/%EB%B0%B1%EA%B5%AD%ED%99%94%EC%99%80_%EB%B0%B1%ED%95%A9%EC%9D%98_%EA%B3%A0%EC%9A%94%ED%95%9C_%EC%B6%94%EB%AA%A8_%EA%B3%B5%EA%B0%84-2_yg95hq.png",
              },
              {
                num: "03",
                tag: "보증 혜택 03",
                sub: "전국 주요 추모관",
                value: "봉안당 1단 기준",
                title: "전국 추모공원 특별지원",
                desc: "직영 유토피아 추모관을 포함한 전국 주요 추모공원 이용 안내 및 봉안함 제공. 유토피아 외 제휴 시설은 정가 대비 10~70% 할인가가 적용됩니다.",
                note: "사전 로얄석 지정 및 직계가족 양도 가능",
                icon: Landmark,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086164/%EB%B4%84%EB%B9%9B_%EB%A8%B8%EB%AC%B4%EB%8A%94_%EA%B3%A0%EC%9A%94%ED%95%9C_%EC%B6%94%EB%AA%A8%EA%B3%B5%EC%9B%90-3_o5jpb3.png",
              },
              {
                num: "04",
                tag: "즉시 혜택 04",
                sub: "전용몰 포인트",
                value: "2,490,000 P",
                title: "다온넷 전용몰 쇼핑포인트",
                desc: "회원가입 및 본인 인증 즉시 다온넷.kr 전용 폐쇄몰에서 현금처럼 차감하여 특가 상품을 구매할 수 있는 249만 포인트를 지급합니다.",
                note: "최대 80% 포인트 차감 할인 구매",
                icon: Coins,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086162/%EC%95%84%EC%9D%B4%EB%B3%B4%EB%A6%AC_%EC%87%BC%ED%95%91%EA%B3%BC_%EC%83%B4%ED%8E%98%EC%9D%B8_%EA%B3%A8%EB%93%9C-4_za80ok.png",
              },
              {
                num: "05",
                tag: "레저 혜택 05",
                sub: "호텔 & 크루즈",
                value: "2박 3일 숙박권",
                title: "해피클래스 & 크루즈 우대",
                desc: "전국 약 50개 제휴 호텔·리조트·펜션 2박 3일 무료 숙박권(1박 15만 원 상당) 제공 및 럭셔리 크루즈 여행 회원 전용 할인가 혜택을 제공합니다.",
                note: "청소비 별도 (평일 1.9만 / 주말 3.9만)",
                icon: Palmtree,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086163/%ED%95%B4%EB%B3%80_%EB%A6%AC%EC%A1%B0%ED%8A%B8%EC%99%80_%ED%81%AC%EB%A3%A8%EC%A6%88%EC%9D%98_%ED%9C%B4%EC%8B%9D-5_p3ynl2.png",
              },
              {
                num: "06·07",
                tag: "특별 지원 06·07",
                sub: "건강식품 + 현금",
                value: "58만원 상당",
                subValue: "+ 현금 40만원",
                title: "건강식품 & 위로지원금",
                desc: "온라인가 58~59.8만 원 상당의 삼칠그라 365(또는 경남제약 알부민 맥스) 무료 증정 및 등급별 위로지원금 현금 400,000원을 지급합니다.",
                note: "건강식품 1~3일 내 무료배송",
                icon: Gift,
                image:
                  "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086165/%EC%95%84%EC%9D%B4%EB%B3%B4%EB%A6%AC_%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%9C%84_%EC%9B%B0%EB%8B%88%EC%8A%A4_%EA%B8%B0%ED%94%84%ED%8A%B8-6_hqqw1h.png",
              },
            ].map((item) => (
              <article
                key={item.num}
                className={`group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-b from-[#fdfbf6] to-[#f6efe1] border-2 border-[#b89a62] shadow-[0_10px_30px_rgba(184,154,98,0.15)] ring-1 ring-[#b89a62]/20 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(184,154,98,0.24)]"
                    : "bg-white border border-[#e1dfd5] hover:border-[#b89a62]/60 shadow-[0_4px_18px_rgba(23,44,55,0.04)] hover:shadow-[0_14px_32px_rgba(23,44,55,0.09)] hover:-translate-y-1"
                }`}
              >
                {/* 상단 썸네일 이미지 & 오버레이 배지/정보 */}
                <div className="relative w-full h-[185px] sm:h-[195px] overflow-hidden bg-[#eeebe2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* 시네마틱 앰비언트 그라데이션 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1820]/85 via-[#0a1820]/20 to-black/30 pointer-events-none" />

                  {/* 좌상단: 혜택 분류 뱃지 */}
                  <div className="absolute top-3.5 left-3.5 backdrop-blur-md bg-[#0a1820]/75 border border-white/20 text-[#f6efe1] px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                    <item.icon className="w-3.5 h-3.5 text-[#ebd29f]" />
                    <span className="tracking-wide">{item.tag}</span>
                  </div>

                  {/* 하이라이트 핵심 보증 배지 (우상단) */}
                  {item.highlight && (
                    <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-[#c5a66a] to-[#947b50] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wider flex items-center gap-1.5 backdrop-blur-sm border border-[#f5dfb3]/40">
                      <Sparkles className="w-3 h-3 text-[#fdf6e6]" />
                      <span>{item.badge}</span>
                    </div>
                  )}

                  {/* 이미지 하단: 서브 라벨 & 가치/금액 하이라이트 */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white pointer-events-none">
                    <span className="text-[12px] text-[#edd5a6] font-medium tracking-tight drop-shadow">
                      {item.sub}
                    </span>

                    <div className="text-right drop-shadow-md">
                      {"subValue" in item && item.subValue ? (
                        <div className="flex flex-col items-end leading-tight">
                          <span
                            className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {item.value}
                          </span>
                          <span
                            className="text-[11.5px] sm:text-[12px] font-semibold text-[#ebd29f] tracking-tight mt-0.5"
                            style={{ fontFamily: "Georgia, serif" }}
                          >
                            {item.subValue}
                          </span>
                        </div>
                      ) : (
                        <span
                          className={`font-bold tracking-tight text-white ${
                            item.value.includes("원") || item.value.includes("P")
                              ? "text-[17px] sm:text-[19px]"
                              : "text-[15px] sm:text-[17px]"
                          }`}
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 카드 본문 텍스트 영역 */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* 타이틀 */}
                    <h3
                      className="text-[18px] sm:text-[19px] font-medium text-[#26373b] mb-2.5 flex items-baseline gap-2 tracking-tight"
                      style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                    >
                      <span
                        className="text-[#947b50] font-bold text-[15px]"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {item.num}.
                      </span>
                      <span className="font-semibold text-[#1f2f34]">{item.title}</span>
                    </h3>

                    {/* 상세 설명 */}
                    <p className="text-[13px] text-[#55605d] leading-[1.75] m-0 mb-4 break-keep min-h-[58px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* 하단 약정 및 유의사항 */}
                  <div className="mt-auto pt-3.5 border-t border-[#eceae0] flex items-start gap-1.5 text-[11.5px] text-[#747e7b] leading-[1.55] break-keep">
                    <Info className="w-3.5 h-3.5 text-[#947b50] shrink-0 mt-0.5" />
                    <span>{item.note}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FUNERAL CARE — 아치 아트워크 & 24시간 의전 절차 (.funeral 레이아웃) */}
      <section
        id="funeral"
        className="py-[48px] sm:py-[68px] lg:py-[96px] px-5 sm:px-[6%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[32px] sm:gap-[45px] lg:gap-[100px] items-center border-b border-[#dedfd7]"
      >
        {/* 좌측 아치 아트워크 (.funeral-art) */}
        <div className="bg-[#e7e5db] rounded-2xl text-center p-[24px_20px_18px] sm:p-[36px_40px_24px] self-stretch flex flex-col justify-center shadow-sm">
          <div
            className="relative h-[280px] sm:h-[380px] border border-[#d1cbb9] overflow-hidden mx-auto w-full max-w-[360px] shadow-sm group"
            style={{
              borderRadius: "200px 200px 0 0",
            }}
          >
            <img
              src="https://res.cloudinary.com/lyjyvy54/image/upload/v1793086165/%ED%9D%B0_%EA%B5%AD%ED%99%94%EC%99%80_%EC%95%84%EC%B9%A8%EB%B9%9B%EC%9D%98_%ED%8F%89%EC%98%A8%ED%95%9C_%EC%B6%94%EB%AA%A8_de3gi4.png"
              alt="흰 국화와 아침빛의 평온한 추모 - 다온넷 후불장례 및 추모 의전"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <small className="text-[10px] sm:text-[11px] tracking-[1.5px] sm:tracking-[2px] mt-[16px] sm:mt-[22px] text-[#8a8d7e] font-medium">
            마지막 순간까지, 정성을 다하는 마음 · 198만 원 후불장례 이행보증
          </small>
        </div>

        {/* 우측 설명 (.funeral-copy) */}
        <div>
          <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[12px] sm:mb-[17px] uppercase">
            FUNERAL CARE · 365일 24시간 통합 의전
          </div>
          <h2
            className="text-[24px] sm:text-[35px] font-medium leading-[1.45] sm:leading-[1.55] tracking-[-1px] sm:tracking-[-1.2px] text-[#26373b] m-0 mb-[14px] sm:mb-[18px]"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            경황없는 순간에도,
            <br />
            곁에서 차근차근.
          </h2>
          <p className="text-[#747b78] text-[13px] sm:text-[14px] leading-[1.8] mb-[20px]">
            장례가 발생하면 먼저 다온넷 24시간 고객센터(1877-8816)로 연락해 주세요.
            198만 원 후불장례 이행보증부터 희망 추모공원 안치까지 원스톱으로 안내합니다.
          </p>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              01
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                365일 24시간 긴급 장례 접수
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                고객센터(1877-8816) 전화 한 통으로 전국 어디서나 즉시 의전팀 출동 및 접수 안내
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              02
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                198만 원 후불장례 이행보증 지원
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                물가 상승 대비형으로 전문 장례지도사 인력·수의·관·차량 등 약정 항목 체계적 지원
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              03
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                전국 55개 추모공원 장지 및 안치 연계
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                직영 안성 유토피아 추모관(봉안당 1단 기준) 및 전국 제휴·공설 장지 원스톱 절차 지원
              </p>
            </div>
          </div>

          <a
            href="tel:1877-8816"
            className="inline-block pt-[15px] pb-[5px] border-b border-[#9c9f91] text-[12px] font-semibold text-[#26373b] hover:text-[#947b50] mt-[18px]"
          >
            24시간 장례·추모 상담 1877-8816 ↗
          </a>
        </div>
      </section>

      {/* 4. YOUR NEXT STEP — 4단계 주문·결제·서비스 이용 흐름 (.process 레이아웃) */}
      <section className="py-[68px] lg:py-[90px] px-[6%] max-w-[1200px] mx-auto text-center">
        <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[14px] uppercase">
          YOUR NEXT STEP · ONE-STOP PROCESS
        </div>
        <h2
          className="text-[28px] sm:text-[35px] font-medium leading-[1.55] tracking-[-1.2px] text-[#26373b] m-0"
          style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
        >
          첫 상담부터 사후 환급까지, 어렵지 않도록.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mt-[45px]">
          {[
            {
              num: "01",
              title: "가입 및 간편 결제",
              desc: "신용카드(지정 PG사), CMS(자동이체), 계좌이체 등 편리한 방식으로 다온 프리미엄 249를 신청합니다.",
              image:
                "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086164/%EB%A9%A4%EB%B2%84%EC%8B%AD_%EA%B0%80%EC%9E%85%EA%B3%BC_%EA%B0%84%ED%8E%B8_%EA%B2%B0%EC%A0%9C-1_sqrve4.png",
            },
            {
              num: "02",
              title: "보증서 및 즉시 혜택 발급",
              desc: "498만 환급보증서·장례보증서·추모공원증서·봉안함·2박3일 숙박권·249만P·삼칠그라가 발급됩니다.",
              image:
                "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086166/%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84_%EB%B3%B4%EC%A6%9D%EC%84%9C%EC%99%80_%EB%A9%A4%EB%B2%84%EC%8B%AD_%ED%98%9C%ED%83%9D-2_cd4pli.png",
            },
            {
              num: "03",
              title: "라이프케어 서비스 이용",
              desc: "전용몰 포인트 즉시 차감 쇼핑, 전국 50곳 해피클래스 숙박/크루즈 예약 및 24시간 의전을 이용합니다.",
              image:
                "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086165/%EB%9F%AD%EC%85%94%EB%A6%AC_%EB%9D%BC%EC%9D%B4%ED%94%84_%EC%BC%80%EC%96%B4_%EB%A9%A4%EB%B2%84%EC%8B%AD-4_wpseyf.png",
            },
            {
              num: "04",
              title: "양도·양수 및 안심 환급",
              desc: "가입 2년 후 자유 양도·양수가 가능하며, 10년 만기 미이용 시 약정 조건에 따라 498만 원을 반환 지급합니다.",
              image:
                "https://res.cloudinary.com/lyjyvy54/image/upload/v1793086164/%ED%9A%8C%EC%9B%90%EA%B6%8C_%EC%96%91%EB%8F%84%EC%99%80_%EC%95%88%EC%A0%84%ED%95%9C_%EC%A1%B0%EA%B1%B4%EB%B6%80_%ED%99%98%EA%B8%89-3_hpwjdk.png",
            },
          ].map((step) => (
            <article
              key={step.num}
              className="border-t border-[#dedfd7] pt-[22px] text-left group flex flex-col"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-[18px] bg-[#f7f5ed] border border-[#e7e4d8] shadow-[0_4px_16px_rgba(38,55,59,0.04)] group-hover:shadow-[0_12px_28px_rgba(184,154,98,0.18)] group-hover:border-[#b89a62]/60 transition-all duration-300">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <span
                className="text-[26px] sm:text-[28px] text-[#b1a082] leading-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {step.num}
              </span>
              <h3 className="text-[16px] font-semibold text-[#26373b] mt-[10px] mb-[6px]">
                {step.title}
              </h3>
              <p className="text-[12px] sm:text-[11.5px] text-[#747b78] leading-[1.65] m-0 break-keep">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
