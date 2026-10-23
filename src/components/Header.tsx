"use client";

import React, { useState } from "react";
import {
  Infinity,
  MapPin,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Gift,
  Building2,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function Header() {
  const { openContract, openCert } = useDaon();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-40 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center gap-3">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2.5 xl:gap-3 group shrink-0 whitespace-nowrap">
          <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full navy-gradient flex items-center justify-center text-[#C5A059] shadow-md group-hover:scale-105 transition transform shrink-0">
            <Infinity className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.5]" />
          </div>
          <div className="whitespace-nowrap">
            <span className="text-xl xl:text-2xl font-black tracking-tight text-[#0F1E36] block leading-none">
              DAONNET
            </span>
            <span className="text-[11px] text-gray-500 font-medium tracking-normal mt-1 block whitespace-nowrap">
              함께 나누는 다온넷 라이프케어
            </span>
          </div>
        </a>

        {/* 데스크탑 GNB */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 font-bold text-gray-700 text-[13px] xl:text-sm whitespace-nowrap">
          <a
            href="#memorial-parks"
            className="text-[#0F1E36] hover:text-[#C5A059] flex items-center gap-1.5 py-2 transition whitespace-nowrap shrink-0"
          >
            <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>전국 추모공원 찾기</span>
          </a>
          <a
            href="#premium-249"
            className="hover:text-[#C5A059] flex items-center gap-1.5 py-2 transition whitespace-nowrap shrink-0"
          >
            <CreditCard className="w-4 h-4 text-gray-400 shrink-0" />
            <span>다온 프리미엄 249</span>
          </a>
          <a
            href="#refund-guarantee"
            className="hover:text-[#C5A059] flex items-center gap-1.5 py-2 transition text-red-600 font-extrabold whitespace-nowrap shrink-0"
          >
            <span>498만 환급보증</span>
          </a>
          <a
            href="#daon-mall"
            className="hover:text-[#C5A059] flex items-center gap-1.5 py-2 transition whitespace-nowrap shrink-0"
          >
            <Gift className="w-4 h-4 text-blue-600 shrink-0" />
            <span>다온넷 전용몰</span>
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none whitespace-nowrap shrink-0">
              249만P
            </span>
          </a>
          <a
            href="#happy-class"
            className="hover:text-[#C5A059] flex items-center gap-1.5 py-2 transition whitespace-nowrap shrink-0"
          >
            <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>해피클래스 숙박·크루즈</span>
          </a>
        </nav>

        {/* 우측 액션 버튼 */}
        <div className="flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
          <button
            onClick={openCert}
            className="hidden sm:flex items-center gap-1.5 px-3 xl:px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs xl:text-sm font-bold text-[#0F1E36] hover:bg-gray-50 transition whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#0F1E36] shrink-0" />
            <span>마이 보증서</span>
          </button>
          <button
            onClick={() => openContract()}
            className="gold-gradient text-white px-3.5 xl:px-4 py-2.5 rounded-xl text-xs xl:text-sm font-extrabold shadow hover:opacity-95 transition flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>멤버십 가입·상담</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          {/* 모바일 햄버거 토글 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-black shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#memorial-parks"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-gray-800 p-2 rounded-lg hover:bg-gray-50"
          >
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            전국 추모공원 찾기 (55개 시설)
          </a>
          <a
            href="#premium-249"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-gray-800 p-2 rounded-lg hover:bg-gray-50"
          >
            <CreditCard className="w-4 h-4 text-gray-500" />
            다온 프리미엄 249 상품 구성
          </a>
          <a
            href="#refund-guarantee"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-red-600 p-2 rounded-lg hover:bg-red-50"
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            498만원 공증 환급보증서
          </a>
          <a
            href="#daon-mall"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-gray-800 p-2 rounded-lg hover:bg-gray-50"
          >
            <Gift className="w-4 h-4 text-blue-600" />
            다온넷 회원 전용 포인트 특가몰 (2,490,000P)
          </a>
          <a
            href="#happy-class"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-bold text-gray-800 p-2 rounded-lg hover:bg-gray-50"
          >
            <Building2 className="w-4 h-4 text-emerald-600" />
            해피클래스 2박 3일 숙박권 & 크루즈
          </a>
          <div className="pt-2 border-t flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCert();
              }}
              className="w-full text-center py-2.5 rounded-lg border border-gray-300 font-bold text-sm text-[#0F1E36]"
            >
              마이 모바일 보증서 확인
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
