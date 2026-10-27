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
  PhoneCall,
  ShieldCheck,
  UserCheck,
  Settings,
  Coins,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function Header() {
  const { openContract, openCert, openLookup, openAdmin, userPoints } = useDaon();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-40 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-4 h-16 lg:h-20 flex justify-between items-center gap-2 sm:gap-3">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group shrink-0 whitespace-nowrap">
          <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-full navy-gradient flex items-center justify-center text-[#C5A059] shadow-md group-hover:scale-105 transition transform shrink-0">
            <Infinity className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.5]" />
          </div>
          <div className="whitespace-nowrap">
            <span className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-[#0F1E36] block leading-none">
              DAONNET
            </span>
            <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-normal mt-0.5 sm:mt-1 block whitespace-nowrap">
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
        <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
          <button
            onClick={openCert}
            className="hidden sm:flex items-center gap-1.5 px-3 xl:px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs xl:text-sm font-bold text-[#0F1E36] hover:bg-gray-50 transition whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#0F1E36] shrink-0" />
            <span>마이 보증서</span>
          </button>
          <button
            onClick={() => openContract()}
            className="gold-gradient text-white px-2.5 sm:px-3.5 xl:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs xl:text-sm font-extrabold shadow hover:opacity-95 transition flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>가입·상담</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          {/* 모바일 더보기(햄버거) 토글 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="더보기 메뉴 열기"
            className="lg:hidden flex items-center gap-1 px-2.5 py-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs font-bold text-[#0F1E36] shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 text-[#0F1E36]" />
                <span>닫기</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-[#0F1E36]" />
                <span>더보기</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 더보기 드롭다운 (상단 얇은 가로바 기능 통합) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3.5 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* 상단바 통합 영역: 쇼핑포인트 & 긴급상담 & 조회/보증서 */}
          <div className="bg-[#091324] text-white rounded-2xl p-3.5 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#C5A059]">
                <Coins className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>나의 쇼핑포인트</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCert();
                }}
                className="text-sm font-black text-[#E5C98B] flex items-center gap-1"
              >
                <span>{userPoints.toLocaleString()} P</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCert();
                }}
                className="bg-[#0F1E36] hover:bg-[#162a4a] border border-[#C5A059]/40 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 font-bold text-gray-100"
              >
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>모바일 보증서(498만)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLookup();
                }}
                className="bg-[#0F1E36] hover:bg-[#162a4a] border border-gray-700 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 font-bold text-gray-200"
              >
                <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>내 신청조회</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-0.5 text-xs">
              <a
                href="tel:1877-8816"
                className="flex items-center gap-1.5 text-gray-300 font-semibold"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>24시간 긴급상담:</span>
                <strong className="text-white font-black tracking-wider">1877-8816</strong>
              </a>
            </div>
          </div>

          {/* 섹션 이동 메뉴 */}
          <div className="space-y-1">
            <a
              href="#memorial-parks"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-gray-800 p-2.5 rounded-xl hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                전국 추모공원 찾기 (56개 시설)
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#premium-249"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-gray-800 p-2.5 rounded-xl hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-500 shrink-0" />
                다온 프리미엄 249 상품 구성
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#refund-guarantee"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-red-600 p-2.5 rounded-xl bg-red-50/60 hover:bg-red-50"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-500 shrink-0" />
                498만원 공증 환급보증서 안내
              </span>
              <ChevronRight className="w-4 h-4 text-red-400" />
            </a>
            <a
              href="#daon-mall"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-gray-800 p-2.5 rounded-xl hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-blue-600 shrink-0" />
                다온넷 회원 전용 포인트몰 (249만P)
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#happy-class"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-gray-800 p-2.5 rounded-xl hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                해피클래스 2박 3일 숙박권 & 크루즈
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContract();
              }}
              className="w-full text-center py-3 rounded-xl gold-gradient font-black text-sm text-white shadow"
            >
              온라인 멤버십 가입·상담 신청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
