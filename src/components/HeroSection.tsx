"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Phone,
  Landmark,
  ShieldCheck,
  HeartHandshake,
  Gift,
} from "lucide-react";

interface HeroSectionProps {
  onSearch: (region: string, type: string, keyword: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [keyword, setKeyword] = useState("");

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedRegion, selectedType, keyword);
    const target = document.getElementById("memorial-parks");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative navy-gradient text-white py-8 sm:py-14 lg:py-20 overflow-hidden">
      {/* 은은한 배경 패턴 */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          {/* 좌측: 타이틀 및 핵심 요약 뱃지 */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur px-3 sm:px-4 py-1.5 rounded-full border border-[#C5A059]/40 text-[#E5C98B] text-[11px] sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shrink-0"></span>
              <span>전국 주요 추모공원 특별지원 · 프리미엄 라이프케어</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-snug sm:leading-tight tracking-tight">
              소중한 기억이 머무는 곳,<br />
              <span className="text-[#E5C98B]">전국 어디든 희망하시는 추모공원</span>을<br />
              다온넷이 특별 지원합니다.
            </h1>

            <p className="text-gray-300 text-xs sm:text-base leading-relaxed max-w-2xl font-normal">
              직영 <strong className="text-white font-bold">안성 유토피아 추모관</strong>부터 전국 주요 추모공원 봉안당(1단 기준) 지원은 물론,{" "}
              <strong className="text-[#E5C98B] font-bold">10년 만기 498만 원 환급보증서</strong>와{" "}
              <strong className="text-white font-bold">249만 쇼핑포인트</strong>,{" "}
              <strong className="text-white font-bold">2박 3일 무료 숙박권</strong>까지 하나로 담았습니다.
            </p>

            {/* 핵심 4대 뱃지 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <div className="bg-white/10 backdrop-blur p-3 sm:p-3.5 rounded-2xl border border-white/15 hover:border-[#C5A059]/50 transition">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-300 whitespace-nowrap">
                  <Landmark className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>추모공원 특별지원</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-white mt-1 whitespace-nowrap">
                  봉안당 1단 기준
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#E5C98B] mt-0.5 whitespace-nowrap">전국 시설 10~70% 할인</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-3 sm:p-3.5 rounded-2xl border border-[#C5A059] shadow-inner">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[#E5C98B] font-bold whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>10년 공증 환급보증</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-[#E5C98B] mt-1 whitespace-nowrap">
                  4,980,000원
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-300 mt-0.5 whitespace-nowrap">가입 2년 후 양도 가능</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-3 sm:p-3.5 rounded-2xl border border-white/15 hover:border-[#C5A059]/50 transition">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-300 whitespace-nowrap">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>후불장례 이행보증</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-white mt-1 whitespace-nowrap">
                  1,980,000원
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#E5C98B] mt-0.5 whitespace-nowrap">365일 24시간 의전접수</div>
              </div>

              <div className="bg-white/10 backdrop-blur p-3 sm:p-3.5 rounded-2xl border border-white/15 hover:border-[#C5A059]/50 transition">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-300 whitespace-nowrap">
                  <Gift className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>포인트 + 지원금</span>
                </div>
                <div className="text-sm sm:text-lg font-black text-white mt-1 whitespace-nowrap">
                  249만P + 40만원
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#E5C98B] mt-0.5 whitespace-nowrap">삼칠그라·2박3일 숙박권</div>
              </div>
            </div>
          </div>

          {/* 우측: 빠른 추모공원 검색 위젯 */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border-t-4 border-[#C5A059]">
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-black text-[#0F1E36] flex items-center gap-1.5 whitespace-nowrap">
                  <Search className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <span>전국 추모공원 빠른 찾기</span>
                </h2>
                <span className="text-[11px] sm:text-xs bg-blue-50 text-[#0F1E36] font-extrabold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  전국 56개소
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                장례 발생 전 희망 장지 상담 및 우수 위치(로얄석) 사전 지정이 가능합니다.
              </p>

              <form onSubmit={handleQuickSearch} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    희망 권역 선택
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0F1E36] bg-gray-50/50"
                  >
                    <option value="ALL">전국 전체 (55개 주요 추모시설)</option>
                    <option value="CAPITAL">수도권 (서울·경기·인천 - 유토피아 직영 포함 24개)</option>
                    <option value="CHUNG_GANG">충청·강원권 (세종·대전·천안·춘천 등 15개)</option>
                    <option value="YEONGNAM">경상·영남권 (부산·대구·창원·울산 등 11개)</option>
                    <option value="HONAM_JEJU">전라·호남·제주권 (광주·전주·임실·제주 등 6개)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    시설 구분
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0F1E36] bg-gray-50/50"
                  >
                    <option value="ALL">모든 유형 (봉안당 / 수목장 / 공원묘원 / 공설)</option>
                    <option value="직영">다온넷 직영 (안성 유토피아추모관)</option>
                    <option value="재단">재단법인 추모공원</option>
                    <option value="사설">프리미엄 사설 봉안당·수목장</option>
                    <option value="공설">전국 시·군 공설 추모시설 (입소 원스톱 절차)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    시설명 또는 지역명 검색
                  </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="예: 유토피아, 용인, 분당, 파주, 부산, 천안..."
                    className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0F1E36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full navy-gradient text-white font-black py-3.5 rounded-xl shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#C5A059]" />
                  <span>선택한 조건으로 추모공원 조회하기</span>
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  직계가족 자유 양도 가능
                </span>
                <span className="flex items-center gap-1 font-bold text-[#0F1E36]">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  상담: 1877-8816
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
