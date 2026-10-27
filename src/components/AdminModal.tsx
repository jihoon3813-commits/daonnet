"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X, ShieldAlert, Lock, ArrowRight, ExternalLink } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function AdminModal() {
  const { isAdminOpen, closeAdmin } = useDaon();
  const router = useRouter();

  if (!isAdminOpen) return null;

  const handleGoToAdminPage = () => {
    closeAdmin();
    window.open("/admin", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#172c37] rounded-2xl sm:rounded-3xl max-w-md w-full p-4 sm:p-8 shadow-2xl border border-[#2b4b5e] text-white animate-scale-up relative">
        <button
          onClick={closeAdmin}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F1E36] text-[#C5A059] border border-[#C5A059]/30 mb-2 sm:mb-3 shadow-lg">
            <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-[#C5A059] block">
            DAONNET ADMIN CONSOLE
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1 break-keep">
            다온넷 통합 관리자 콘솔
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-300 mt-1.5 break-keep leading-relaxed">
            상담신청 이력 관리, 추모공원 등록/수정/삭제 및 이미지·공식홈페이지 연동,
            가입 회원 관리, 비밀번호 변경을 지원합니다.
          </p>
        </div>

        <div className="p-3 sm:p-4 bg-[#0F1E36]/90 border border-[#2b4b5e] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 space-y-1 text-xs text-center">
          <div className="flex items-center justify-center gap-1.5 text-[#C5A059] font-bold">
            <Lock className="w-3.5 h-3.5" />
            <span>보안 접속 안내</span>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-[11px]">
            인가된 관리자 계정으로만 접근이 가능합니다.
          </p>
        </div>

        <button
          onClick={handleGoToAdminPage}
          className="w-full py-3 sm:py-3.5 bg-[#C5A059] hover:bg-[#d9b36a] text-[#0F1E36] font-black text-xs sm:text-sm tracking-wider rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <span>관리자 대시보드 바로가기</span>
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <div className="mt-3 sm:mt-4 text-center">
          <button
            onClick={closeAdmin}
            className="text-xs text-gray-400 hover:text-white transition cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
