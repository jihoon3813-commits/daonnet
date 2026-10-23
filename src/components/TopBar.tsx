"use client";

import React from "react";
import { ShieldCheck, PhoneCall, Sparkles, UserCheck, Settings } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function TopBar() {
  const { openCert, openLookup, openAdmin, userPoints } = useDaon();

  return (
    <div className="bg-[#091324] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-[#C5A059] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="tracking-wider">DAONNET INFINITE CARE</span>
          </span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-gray-300">
            <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>365일 24시간 장례·추모공원 긴급상담센터:</span>
            <strong className="text-white font-extrabold tracking-wider">1877-8816</strong>
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={openCert}
            className="hover:text-white flex items-center gap-1 transition px-1.5 py-0.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-gray-200">모바일 보증서(498만)</span>
          </button>

          <span className="text-gray-700">|</span>

          <button
            onClick={openLookup}
            className="hover:text-white flex items-center gap-1 text-gray-300 transition px-1.5 py-0.5"
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>내 신청조회</span>
          </button>

          <span className="text-gray-700">|</span>

          <div
            onClick={openCert}
            className="cursor-pointer bg-[#0F1E36] px-2.5 py-1 rounded text-white border border-[#C5A059]/40 hover:border-[#C5A059] transition flex items-center gap-1"
          >
            <span className="text-gray-400 text-[11px]">쇼핑포인트:</span>
            <strong className="text-[#C5A059] font-bold">
              {userPoints.toLocaleString()} P
            </strong>
          </div>

          <button
            onClick={openAdmin}
            title="관리자 접수 현황 대시보드"
            className="text-gray-500 hover:text-gray-300 p-1 transition"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
