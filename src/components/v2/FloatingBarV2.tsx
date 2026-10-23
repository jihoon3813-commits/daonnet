"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";

export default function FloatingBarV2() {
  const { openCert, openContract } = useDaon();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#f7f5ef]/95 backdrop-blur-md border-t border-[#dedfd7] px-[5%] py-[10px] shadow-[0_-8px_24px_rgba(23,44,55,0.08)]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
        {/* 좌측: 24시간 전화상담 */}
        <a
          href="tel:1877-8816"
          className="flex items-center gap-3 text-[#26373b] hover:text-[#947b50] transition"
        >
          <span
            className="hidden sm:flex w-[36px] h-[36px] bg-[#172c37] text-[#d9bc86] items-center justify-center text-[15px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ∞
          </span>
          <div>
            <small className="block text-[10px] text-[#747b78] tracking-[0.5px]">
              365일 24시간 장례·추모공원 긴급상담
            </small>
            <strong
              className="block text-[17px] sm:text-[19px] font-normal text-[#172c37] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              1877-8816
            </strong>
          </div>
        </a>

        {/* 우측: 보증서 & 가입상담 버튼 */}
        <div className="flex items-center gap-2">
          <button
            onClick={openCert}
            className="border border-[#b6bcb7] hover:border-[#172c37] bg-[#f7f5ef] text-[#26373b] px-[14px] sm:px-[18px] py-[10px] text-[11px] sm:text-[12px] font-medium transition cursor-pointer"
          >
            <span className="hidden sm:inline">모바일 </span>보증서(498만)
          </button>

          <button
            onClick={() => openContract()}
            className="bg-[#172c37] hover:bg-[#26373b] text-white px-[16px] sm:px-[22px] py-[10px] text-[11px] sm:text-[12px] font-semibold inline-flex items-center gap-[12px] transition cursor-pointer"
          >
            <span>온라인 간편가입·상담</span>
            <span className="text-[#d9bc86]">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
