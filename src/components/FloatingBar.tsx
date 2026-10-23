"use client";

import React from "react";
import { PhoneCall, Award, ChevronRight } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function FloatingBar() {
  const { openCert, openContract } = useDaon();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-40 py-2 sm:py-2.5 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3 whitespace-nowrap">
        {/* 전화번호 안내 */}
        <a
          href="tel:1877-8816"
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0F1E36] text-[#C5A059] flex items-center justify-center text-lg group-hover:scale-105 transition transform shadow shrink-0">
            <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] text-gray-500 font-semibold leading-tight">
              <span className="hidden sm:inline">365일 </span>24시간 긴급상담
            </div>
            <div className="text-sm sm:text-lg font-black text-[#0F1E36] tracking-wider leading-none mt-0.5">
              1877-8816
            </div>
          </div>
        </a>

        {/* 액션 버튼 2종 */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={openCert}
            className="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#0F1E36] text-[11px] sm:text-sm font-bold transition flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0" />
            <span className="hidden sm:inline">모바일 </span>보증서(498만)
          </button>

          <button
            onClick={() => openContract()}
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl gold-gradient text-white text-[11px] sm:text-sm font-black shadow-md hover:opacity-95 transition flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="hidden sm:inline">온라인 </span>간편가입·상담
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
