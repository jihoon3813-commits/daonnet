"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDaon } from "@/context/DaonContext";

export default function HeaderV2() {
  const { openContract, openCert, openLookup, openAdmin, userPoints } = useDaon();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-[64px] md:h-[93px] px-4 sm:px-[5%] bg-[#f7f5ef]/95 backdrop-blur-sm border-b border-[#e5e4dc] flex items-center gap-3 lg:gap-8">
      <div className="w-full max-w-[1400px] mx-auto flex items-center gap-3 xl:gap-8 whitespace-nowrap">
        {/* 로고 */}
        <a
          href="#home"
          className="flex items-center gap-2 sm:gap-2.5 leading-[1.1] text-[#26373b] group shrink-0 whitespace-nowrap"
        >
          <span
            className="text-[34px] sm:text-[43px] md:text-[54px] font-normal tracking-[-3px] sm:tracking-[-4px] text-[#172c37] select-none shrink-0"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ∞
          </span>
          <div className="whitespace-nowrap">
            <span
              className="block text-[18px] sm:text-[21px] md:text-[24px] font-semibold tracking-[1.5px] sm:tracking-[2px] text-[#172c37]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              DAONNET
            </span>
            <small className="block text-[8px] md:text-[9px] tracking-[0.5px] xl:tracking-[2px] text-[#747b78] mt-1 font-normal whitespace-nowrap">
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
        <div className="ml-auto lg:ml-0 flex items-center gap-1.5 sm:gap-2.5 shrink-0 whitespace-nowrap">
          <button
            onClick={openCert}
            className="hidden sm:inline-block border border-[#b6bcb7] text-[#26373b] hover:border-[#172c37] hover:bg-[#efeee7] text-[12px] font-medium px-[14px] xl:px-[16px] py-[10px] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            마이 보증서
          </button>

          <button
            onClick={() => openContract()}
            className="border border-[#172c37] bg-[#172c37] text-[#f7f5ef] hover:bg-[#26373b] text-[11px] sm:text-[12px] font-semibold px-[11px] sm:px-[14px] xl:px-[18px] py-[8px] sm:py-[10px] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            가입·상담 ↗
          </button>

          {/* 모바일 더보기 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="더보기 메뉴 열기"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden border border-[#b6bcb7] bg-[#efeee7] hover:bg-[#e5e4dc] text-[11px] font-semibold text-[#26373b] px-2.5 py-[8px] flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>{mobileMenuOpen ? "✕ 닫기" : "☰ 더보기"}</span>
          </button>
        </div>
      </div>

      {/* 모바일 더보기 드롭다운 메뉴 (상단 얇은 가로바 기능 통합) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[64px] md:top-[93px] left-0 right-0 bg-[#f7f5ef] border-b border-[#dedfd7] px-5 py-5 shadow-[0_20px_25px_rgba(0,0,0,0.1)] grid gap-3.5 text-[13px] font-medium text-[#26373b] max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* 상단 가로바 통합 박스: 쇼핑포인트 & 보증서 & 내 신청조회 & 24시간 상담 */}
          <div className="bg-[#172c37] text-[#e3e6e5] p-3.5 space-y-3">
            <div className="flex items-center justify-between border-b border-[#2c4654] pb-2.5">
              <span className="text-[11px] text-[#b8c2c4]">나의 쇼핑포인트</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCert();
                }}
                className="text-[14px] font-semibold text-[#d9bc86] flex items-center gap-1 cursor-pointer"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <span>{userPoints.toLocaleString()} P</span>
                <span className="text-[11px] font-sans">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCert();
                }}
                className="bg-[#213a48] hover:bg-[#294656] border border-[#d9bc86]/40 text-[#f5e6c8] py-2 px-2.5 font-semibold text-center cursor-pointer"
              >
                모바일 보증서(498만) ↗
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLookup();
                }}
                className="bg-[#213a48] hover:bg-[#294656] border border-[#3a5564] text-[#e3e6e5] py-2 px-2.5 font-semibold text-center cursor-pointer"
              >
                내 신청조회
              </button>
            </div>

            <div className="flex items-center justify-between pt-0.5 text-[11px]">
              <a
                href="tel:1877-8816"
                className="text-[#e3e6e5] flex items-center gap-1.5"
              >
                <span className="text-[#b8c2c4]">24시간 긴급상담:</span>
                <strong className="text-[#d9bc86] font-semibold tracking-wider">
                  1877-8816
                </strong>
              </a>

              <div className="flex items-center gap-2.5 text-[10px]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAdmin();
                  }}
                  className="text-[#94a3a8] hover:text-white underline cursor-pointer"
                >
                  관리자
                </button>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-0.5 border border-[#4c626d] text-[#d9bc86]"
                >
                  1안(기존) 보기
                </Link>
              </div>
            </div>
          </div>

          <a
            href="#support"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 hover:text-[#947b50] flex justify-between items-center"
          >
            <span>01. 추모공원 4대 특별지원 안내</span>
            <span className="text-[#947b50] text-xs">→</span>
          </a>
          <a
            href="#memorial-parks"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 hover:text-[#947b50] flex justify-between items-center"
          >
            <span>02. 전국 55개 추모공원 둘러보기</span>
            <span className="text-[#947b50] text-xs">→</span>
          </a>
          <a
            href="#premium-249"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 hover:text-[#947b50] flex justify-between items-center"
          >
            <span>03. 다온 프리미엄 249 상품 구성</span>
            <span className="text-[#947b50] text-xs">→</span>
          </a>
          <a
            href="#refund-guarantee"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 text-[#947b50] font-semibold flex justify-between items-center"
          >
            <span>04. 10년 공증 498만 원 환급보증서</span>
            <span className="text-xs">↗</span>
          </a>
          <a
            href="#daon-mall"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 hover:text-[#947b50] flex justify-between items-center"
          >
            <span>05. 다온넷 회원 전용몰 (2,490,000P)</span>
            <span className="text-[#947b50] text-xs">→</span>
          </a>
          <a
            href="#happy-class"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-[#dedfd7]/60 hover:text-[#947b50] flex justify-between items-center"
          >
            <span>06. 해피클래스 2박 3일 숙박권 & 크루즈</span>
            <span className="text-[#947b50] text-xs">→</span>
          </a>
          <div className="pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContract();
              }}
              className="w-full bg-[#172c37] text-white py-3 text-[12px] font-semibold cursor-pointer"
            >
              온라인 맞춤 가입·상담 신청하기 ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
