"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";

export default function FloatingBarV2() {
  const { openCert, openContract } = useDaon();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#f7f5ef]/95 backdrop-blur-md border-t border-[#dedfd7] px-3 sm:px-[5%] py-2 sm:py-[10px] shadow-[0_-8px_24px_rgba(23,44,55,0.08)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2 sm:gap-3 whitespace-nowrap">
        {/* 좌측: 24시간 전화상담 */}
        <a
          href="tel:1877-8816"
          className="flex items-center gap-2.5 sm:gap-3 text-[#26373b] hover:text-[#947b50] transition shrink-0"
        >
          <span
            className="hidden sm:flex w-[36px] h-[36px] bg-[#172c37] text-[#d9bc86] items-center justify-center text-[15px] shrink-0"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ∞
          </span>
          <div>
            <small className="block text-[9px] sm:text-[10px] text-[#747b78] tracking-[0.3px] sm:tracking-[0.5px]">
              <span className="hidden sm:inline">365일 </span>24시간 긴급상담
            </small>
            <strong
              className="block text-[15px] sm:text-[19px] font-normal text-[#172c37] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              1877-8816
            </strong>
          </div>
        </a>

        {/* 우측: 보증서 & 가입상담 버튼 */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={openCert}
            className="border border-[#b6bcb7] hover:border-[#172c37] bg-[#f7f5ef] text-[#26373b] px-[10px] sm:px-[18px] py-[8px] sm:py-[10px] text-[11px] sm:text-[12px] font-medium transition cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">모바일 </span>보증서(498만)
          </button>

          <button
            onClick={() => openContract()}
            className="bg-[#172c37] hover:bg-[#26373b] text-white px-[12px] sm:px-[22px] py-[8px] sm:py-[10px] text-[11px] sm:text-[12px] font-semibold inline-flex items-center gap-[8px] sm:gap-[12px] transition cursor-pointer whitespace-nowrap shrink-0"
          >
            <span><span className="hidden sm:inline">온라인 </span>간편가입·상담</span>
            <span className="text-[#d9bc86]">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
