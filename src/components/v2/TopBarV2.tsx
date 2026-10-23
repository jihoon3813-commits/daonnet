"use client";

import React from "react";
import Link from "next/link";
import { useDaon } from "@/context/DaonContext";

export default function TopBarV2() {
  const { openCert, openLookup, openAdmin, userPoints } = useDaon();

  return (
    <div className="hidden lg:block bg-[#172c37] text-[#e3e6e5] text-[11px] tracking-[0.5px] py-2 px-5 border-b border-[#243d4a]">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-2 whitespace-nowrap">
        {/* 좌측: 슬로건 & 24시간 긴급상담 */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-6">
          <span>
            소중한 기억을 위한 준비, 다온넷이 함께합니다
            <a
              href="#premium-249"
              className="ml-3 text-[#d9bc86] hover:underline hidden sm:inline"
            >
              프리미엄 249 · 498만 환급보증 알아보기 ↗
            </a>
          </span>
          <span className="hidden md:inline text-[#4c626d]">|</span>
          <a
            href="tel:1877-8816"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#e3e6e5] hover:text-[#d9bc86] transition"
          >
            <span className="text-[#b8c2c4]">365일 24시간 장례·추모 긴급상담:</span>
            <strong className="text-[#d9bc86] font-semibold tracking-wider">
              1877-8816
            </strong>
          </a>
        </div>

        {/* 우측: 보증서 · 내 신청조회 · 포인트 · 관리자 · 버전 전환 */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-[11px]">
          <button
            onClick={openCert}
            className="text-[#e3e6e5] hover:text-[#d9bc86] transition cursor-pointer"
          >
            모바일 보증서(498만) ↗
          </button>

          <span className="text-[#4c626d]">·</span>

          <button
            onClick={openLookup}
            className="text-[#e3e6e5] hover:text-[#d9bc86] transition cursor-pointer"
          >
            내 신청조회
          </button>

          <span className="text-[#4c626d]">·</span>

          <button
            onClick={openCert}
            className="text-[#e3e6e5] hover:text-[#d9bc86] transition cursor-pointer flex items-center gap-1"
          >
            <span className="text-[#b8c2c4]">쇼핑포인트</span>
            <strong className="text-[#d9bc86] font-semibold">
              {userPoints.toLocaleString()}P
            </strong>
          </button>

          <span className="text-[#4c626d]">·</span>

          <button
            onClick={openAdmin}
            className="text-[#94a3a8] hover:text-white transition cursor-pointer"
            title="관리자 접수 현황 대시보드"
          >
            관리자
          </button>

          <Link
            href="/"
            className="ml-1 px-2 py-0.5 border border-[#4c626d] text-[#d9bc86] hover:bg-[#243d4a] transition text-[10px]"
          >
            기존 메인(V1) 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
