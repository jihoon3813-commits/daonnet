"use client";

import React, { useState } from "react";
import { useDaon } from "@/context/DaonContext";

export default function HeaderV2() {
  const { openContract, openCert } = useDaon();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-[75px] md:h-[93px] px-[5%] bg-[#f7f5ef]/95 backdrop-blur-sm border-b border-[#e5e4dc] flex items-center gap-5 lg:gap-8">
      <div className="w-full max-w-[1400px] mx-auto flex items-center gap-4 xl:gap-8 whitespace-nowrap">
        {/* 로고 */}
        <a
          href="#home"
          className="flex items-center gap-2.5 leading-[1.1] text-[#26373b] group shrink-0 whitespace-nowrap"
        >
          <span
            className="text-[43px] md:text-[54px] font-normal tracking-[-4px] text-[#172c37] select-none shrink-0"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ∞
          </span>
          <div className="whitespace-nowrap">
            <span
              className="block text-[21px] md:text-[24px] font-semibold tracking-[2px] text-[#172c37]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              DAONNET
            </span>
            <small className="block text-[8px] md:text-[9px] tracking-[1px] xl:tracking-[2px] text-[#747b78] mt-1.5 font-normal whitespace-nowrap">
              기억을 잇고, 삶을 돌보다 · 다온넷 라이프케어
            </small>
          </div>
        </a>

        {/* 데스크탑 GNB */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-[27px] ml-auto text-[12px] font-semibold text-[#26373b] whitespace-nowrap">
          <a
            href="#support"
            className="hover:text-[#9c804d] transition py-1 whitespace-nowrap shrink-0"
          >
            추모공원 특별지원
          </a>
          <a
            href="#memorial-parks"
            className="hover:text-[#9c804d] transition py-1 whitespace-nowrap shrink-0"
          >
            전국 55개 추모공원
          </a>
          <a
            href="#premium-249"
            className="hover:text-[#9c804d] transition py-1 whitespace-nowrap shrink-0"
          >
            다온 프리미엄 249
          </a>
          <a
            href="#refund-guarantee"
            className="text-[#947b50] hover:text-[#172c37] transition py-1 font-bold whitespace-nowrap shrink-0"
          >
            498만 환급보증
          </a>
          <a
            href="#daon-mall"
            className="hover:text-[#9c804d] transition py-1 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>다온넷 전용몰</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#172c37] text-[#d9bc86] font-medium leading-none whitespace-nowrap shrink-0">
              249만P
            </span>
          </a>
          <a
            href="#happy-class"
            className="hover:text-[#9c804d] transition py-1 whitespace-nowrap shrink-0"
          >
            해피클래스·크루즈
          </a>
        </nav>

        {/* 우측 액션 버튼 */}
        <div className="ml-auto lg:ml-0 flex items-center gap-2.5 shrink-0 whitespace-nowrap">
          <button
            onClick={openCert}
            className="hidden sm:inline-block border border-[#b6bcb7] text-[#26373b] hover:border-[#172c37] hover:bg-[#efeee7] text-[12px] font-medium px-[14px] xl:px-[16px] py-[10px] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            마이 보증서
          </button>

          <button
            onClick={() => openContract()}
            className="border border-[#172c37] bg-[#172c37] text-[#f7f5ef] hover:bg-[#26373b] text-[11px] sm:text-[12px] font-semibold px-[14px] xl:px-[18px] py-[9px] sm:py-[10px] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            상담·가입 신청 ↗
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden text-[22px] text-[#26373b] px-1 cursor-pointer"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[75px] left-0 right-0 bg-[#f7f5ef] border-b border-[#dedfd7] px-[6%] py-6 shadow-[0_20px_20px_rgba(0,0,0,0.06)] grid gap-4 text-[14px] font-medium text-[#26373b]">
          <a
            href="#support"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 hover:text-[#947b50]"
          >
            01. 추모공원 4대 특별지원 안내
          </a>
          <a
            href="#memorial-parks"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 hover:text-[#947b50]"
          >
            02. 전국 55개 추모공원 둘러보기
          </a>
          <a
            href="#premium-249"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 hover:text-[#947b50]"
          >
            03. 다온 프리미엄 249 상품 구성
          </a>
          <a
            href="#refund-guarantee"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 text-[#947b50] font-semibold"
          >
            04. 10년 공증 498만 원 환급보증서
          </a>
          <a
            href="#daon-mall"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 hover:text-[#947b50]"
          >
            05. 다온넷 회원 전용몰 (2,490,000P)
          </a>
          <a
            href="#happy-class"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-[#dedfd7]/60 hover:text-[#947b50]"
          >
            06. 해피클래스 2박 3일 숙박권 & 크루즈
          </a>
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCert();
              }}
              className="flex-1 border border-[#b6bcb7] py-2.5 text-[12px] font-semibold text-[#26373b]"
            >
              모바일 보증서(498만) 확인
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContract();
              }}
              className="flex-1 bg-[#172c37] text-white py-2.5 text-[12px] font-semibold"
            >
              맞춤 가입·상담 신청 ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
