"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";
import { User, LogIn, LogOut } from "lucide-react";
import Link from "next/link";

export default function TopBarV2() {
  const { openCert, userPoints, user, openAuth, logout } = useDaon();

  return (
    <div className="hidden lg:block bg-[#172c37] text-[#e3e6e5] text-[11px] tracking-[0.5px] py-2 px-5 border-b border-[#243d4a]">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-2 whitespace-nowrap">
        {/* 좌측: 슬로건 & 24시간 긴급상담 */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-6">
          <span>소중한 기억을 위한 준비, 다온넷이 함께합니다</span>
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

        {/* 우측: 쇼핑포인트 · 회원가입/로그인 · 관리자 */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-[11px]">
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

          {user ? (
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-[#d9bc86] font-semibold flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{user.email}</span>
              </span>
              <button
                onClick={logout}
                className="text-[#94a3a8] hover:text-white transition cursor-pointer flex items-center gap-0.5"
              >
                <LogOut className="w-3 h-3" />
                <span>로그아웃</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuth("login")}
                className="text-[#e3e6e5] hover:text-white transition cursor-pointer flex items-center gap-1"
              >
                <LogIn className="w-3 h-3 text-[#d9bc86]" />
                <span>로그인</span>
              </button>
              <span className="text-[#4c626d]">/</span>
              <button
                onClick={() => openAuth("register")}
                className="text-[#d9bc86] hover:text-white font-semibold transition cursor-pointer"
              >
                회원가입
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
