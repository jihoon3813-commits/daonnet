"use client";

import React, { useState } from "react";
import { RESORT_LIST } from "@/data/pointMall";
import { PACKAGE_TOURS, PACKAGE_COUNTRIES, PackageTour } from "@/data/packageTours";
import { useDaon } from "@/context/DaonContext";
import PackageDetailModal from "./PackageDetailModal";
import {
  Sparkles,
  Hotel,
  Users,
  Compass,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Plane,
  ChevronRight,
} from "lucide-react";

export default function HappyClassSectionV2() {
  const { openContract } = useDaon();
  const [selectedCountry, setSelectedCountry] = useState<string>("전체");
  const [selectedPkg, setSelectedPkg] = useState<PackageTour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filteredPackages =
    selectedCountry === "전체"
      ? PACKAGE_TOURS
      : PACKAGE_TOURS.filter((p) => p.country === selectedCountry);

  const handleOpenDetail = (pkg: PackageTour) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 1. MORE MOMENTS, MORE LIFE — 라이프 혜택 4대 비주얼 카드 & 전국 50곳 제휴 숙박 & 해외 패키지 여행 */}
      <section
        id="happy-class"
        className="bg-[#eeeee6] py-[48px] sm:py-[68px] lg:py-[96px] px-5 sm:px-[6%] border-t border-[#dedfd7]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* 섹션 헤더 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-[12px] sm:gap-[20px] mb-[26px] sm:mb-[35px]">
            <div>
              <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[10px] sm:mb-[14px] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#947b50]" />
                <span>MORE MOMENTS, MORE LIFE · 해피클래스 &amp; 패키지 여행 &amp; 크루즈</span>
              </div>
              <h2
                className="text-[24px] sm:text-[35px] font-medium leading-[1.45] sm:leading-[1.5] tracking-[-1px] sm:tracking-[-1.2px] text-[#26373b] m-0"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                일상에도 이어지는 다온의 혜택
              </h2>
            </div>

            <p className="text-[12px] sm:text-[14px] text-[#747b78] m-0">
              준비하는 마음만큼, 지금의 행복도 소중하니까요.
              <br />
              전국 50곳 2박 3일 무료 숙박권, <strong>해외 5개국 패키지 여행 우대</strong>, 럭셔리 크루즈 특전을 만나보세요.
            </p>
          </div>

          {/* 4대 라이프 비주얼 카드 (.life-grid) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[14px] sm:gap-[18px] mb-[36px] sm:mb-[50px]">
            {/* 01 / STAY */}
            <div
              onClick={() => openContract("[해피클래스 2박 3일 숙박권 문의] ")}
              className="h-[250px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group rounded-xl sm:rounded-none"
              style={{
                background:
                  "linear-gradient(0deg, rgba(25, 51, 44, 0.9), rgba(25, 51, 44, 0.2)), url('/assets/stay.jpg') center/cover, #667e6a",
              }}
            >
              <span className="text-[9px] tracking-[2px] uppercase">
                01 / STAY · 전국 50여 곳
              </span>
              <div>
                <small className="text-[9px] tracking-[2px] text-[#e1c897] uppercase block">
                  HAPPY CLASS ACCOMMODATION
                </small>
                <h3
                  className="text-[20px] sm:text-[23px] font-normal my-[6px] sm:my-[8px]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  잠시 쉬어가는 여유
                </h3>
                <p className="text-[12px] text-[#e3e6e5] m-0 leading-relaxed">
                  전국 50여 곳 2박 3일 무료 숙박권 (1박 15만원 상당)
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </p>
              </div>
            </div>

            {/* 02 / PACKAGE TOUR (강조!) */}
            <a
              href="#package-tour-section"
              className="h-[250px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group rounded-xl sm:rounded-none border-2 border-[#e1c897]/60 shadow-[0_4px_20px_rgba(225,200,151,0.25)]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(18, 38, 58, 0.92), rgba(18, 38, 58, 0.25)), url('https://api.tlabal.co.kr/api/assets/itinerary/7-mt6v20ts-18ijwou.jpg') center/cover, #1d3557",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[2px] uppercase text-[#fef08a] font-bold">
                  02 / PACKAGE · 해외 5개국
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#E8172A] text-white text-[10px] font-bold">
                  회원 우대
                </span>
              </div>
              <div>
                <small className="text-[9px] tracking-[2px] text-[#e1c897] uppercase block">
                  EXCLUSIVE PACKAGE TOUR
                </small>
                <h3
                  className="text-[20px] sm:text-[23px] font-normal my-[6px] sm:my-[8px] text-white"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  패키지 여행 우대
                </h3>
                <p className="text-[12px] text-[#e3e6e5] m-0 leading-relaxed">
                  베트남·태국·라오스 등 단독 우대 (문의: 1533-6041)
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform text-[#e1c897]">
                    ↓
                  </span>
                </p>
              </div>
            </a>

            {/* 03 / CRUISE */}
            <div
              onClick={() => openContract("[럭셔리 크루즈 회원 우대 문의] ")}
              className="h-[250px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group rounded-xl sm:rounded-none"
              style={{
                background:
                  "linear-gradient(0deg, rgba(24, 55, 68, 0.9), rgba(24, 55, 68, 0.2)), url('/assets/sea.jpg') center/cover, #7b9ca5",
              }}
            >
              <span className="text-[9px] tracking-[2px] uppercase">
                03 / CRUISE · 전담 데스크
              </span>
              <div>
                <small className="text-[9px] tracking-[2px] text-[#e1c897] uppercase block">
                  TRAVEL &amp; LEISURE
                </small>
                <h3
                  className="text-[20px] sm:text-[23px] font-normal my-[6px] sm:my-[8px]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  더 넓은 세상으로
                </h3>
                <p className="text-[12px] text-[#e3e6e5] m-0 leading-relaxed">
                  초호화 크루즈 회원 특별 할인가 및 기항지 특전
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </p>
              </div>
            </div>

            {/* 04 / HEALTH & GIFT */}
            <a
              href="#health-support"
              className="h-[250px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between bg-[#ded9c9] text-[#172c37] relative overflow-hidden cursor-pointer group rounded-xl sm:rounded-none border-2 border-[#947b50]/40 hover:border-[#947b50] transition shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[2px] uppercase">
                  04 / HEALTH &amp; SUPPORT
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#172c37] text-[#d9bc86] text-[10px] font-bold">
                  단독 특전
                </span>
              </div>

              {/* 타이포그래피 아트워크 (.shopping-art) */}
              <div
                className="text-[64px] sm:text-[80px] text-[#a5977c] absolute left-[42%] top-[34px] -rotate-[12deg] border border-[#b3a991] px-[16px] shadow-[8px_8px_#c3bcaa] select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                d<span className="text-[22px]">＋</span>
              </div>

              <div className="relative z-10">
                <small className="text-[9px] tracking-[2px] text-[#7b6845] uppercase block">
                  SPECIAL COMPLIMENTARY
                </small>
                <h3
                  className="text-[20px] sm:text-[23px] font-normal my-[6px] sm:my-[8px] text-[#172c37]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  건강과 생활의 든든함
                </h3>
                <p className="text-[12px] text-[#26373b] m-0 leading-relaxed">
                  건강식품 58만 상당(택1) + 위로지원금 40만
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform text-[#947b50]">
                    ↓
                  </span>
                </p>
              </div>
            </a>
          </div>

          {/* ========================================================================= */}
          {/* ★ 다온넷 패키지 여행 우대 혜택 섹션 (요구사항 1, 2, 3 반영 완벽 구현) ★ */}
          {/* ========================================================================= */}
          <div
            id="package-tour-section"
            className="mb-[40px] sm:mb-[60px] bg-white rounded-2xl sm:rounded-3xl border border-[#e5dfd3] shadow-[0_15px_45px_-15px_rgba(23,44,55,0.08)] overflow-hidden"
          >
            {/* 상단 럭셔리 골드/레드 포인트 라인 */}
            <div className="h-[4px] bg-gradient-to-r from-[#c5a059] via-[#E8172A] to-[#c5a059] w-full" />

            <div className="p-6 sm:p-9 lg:p-10">
              {/* 패키지 여행 섹션 헤더 */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-7 border-b border-[#eee7da] gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] text-[11px] font-bold tracking-wider uppercase mb-2.5">
                    <Plane className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>DAONNET EXCLUSIVE TRAVEL BENEFIT</span>
                  </div>

                  <h3
                    className="text-[24px] sm:text-[30px] font-bold text-[#1a2d36] leading-[1.3] m-0"
                    style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                  >
                    다온넷 패키지 여행 우대 혜택
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#64748b] mt-1.5 mb-0">
                    베트남·태국·라오스·필리핀·중국 등 엄선된 해외 인기 패키지 여행을 <strong>다온넷 회원 특별 우대가</strong>로 예약하세요.
                  </p>
                </div>

                {/* 전담 상담 번호 (1533-6041) 헤더 배너 */}
                <div className="flex items-center gap-3 bg-[#fdfbf7] p-3 sm:p-3.5 rounded-xl border border-[#e8dfcf] shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#172c37] text-[#c5a059] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8c734b] font-semibold">
                      패키지 여행 전담 상담 데스크
                    </div>
                    <a
                      href="tel:1533-6041"
                      className="text-[18px] sm:text-[20px] font-black text-[#172c37] hover:text-[#c5a059] transition-colors block leading-tight"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      1533-6041
                    </a>
                  </div>
                </div>
              </div>

              {/* 국가별 탭 필터 (전체, 베트남, 태국, 라오스, 필리핀, 중국) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
                {PACKAGE_COUNTRIES.map((country) => {
                  const isActive = selectedCountry === country;
                  const count =
                    country === "전체"
                      ? PACKAGE_TOURS.length
                      : PACKAGE_TOURS.filter((p) => p.country === country).length;

                  return (
                    <button
                      key={country}
                      type="button"
                      onClick={() => setSelectedCountry(country)}
                      className={`px-4 py-2 rounded-xl text-[13px] font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#172c37] text-white shadow-sm"
                          : "bg-[#f8fafc] text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b] border border-[#e2e8f0]"
                      }`}
                    >
                      <span>{country}</span>
                      <span
                        className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 첨부 2번 이미지 형태의 썸네일 카드 그리드 */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => handleOpenDetail(pkg)}
                    className="bg-white rounded-2xl border border-[#e5e7eb] hover:border-[#c5a059] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col group"
                  >
                    {/* 카드 썸네일 이미지 & 상단 좌측 빨간색 배지 (첨부 2번 디자인 1:1) */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={pkg.heroImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback
                          e.currentTarget.src = `https://tlabal.co.kr/images/pkg-${pkg.slug}.jpg`;
                        }}
                      />
                      {/* 빨간색 라운드 국가 배지 (첨부 2번 이미지와 일치) */}
                      <span className="absolute top-3.5 left-3.5 bg-[#E8172A] text-white text-[12px] font-bold px-3 py-1 rounded-md shadow-sm">
                        {pkg.country}
                      </span>

                      {/* 호버 오버레이 안내 */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#172c37] text-[12.5px] font-bold shadow-lg flex items-center gap-1">
                          상세보기 ↗
                        </span>
                      </div>
                    </div>

                    {/* 카드 본문 (제목, 칩, 부가정보) */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* 상품명 */}
                        <h4 className="text-[17px] sm:text-[18px] font-bold text-[#111827] group-hover:text-[#c5a059] transition-colors line-clamp-1 m-0">
                          {pkg.name}
                        </h4>

                        {/* 알약 모양 칩 (3박 5일, 쇼핑 3회) */}
                        <div className="flex flex-wrap items-center gap-2 mt-3 mb-3">
                          <span className="bg-[#f1f3f5] text-[#495057] text-[12px] font-medium px-2.5 py-1 rounded-md">
                            {pkg.nights}박 {pkg.days}일
                          </span>
                          <span className="bg-[#f1f3f5] text-[#495057] text-[12px] font-medium px-2.5 py-1 rounded-md">
                            쇼핑 {pkg.shoppingCount}회
                          </span>
                          {pkg.hasOptionalTour && (
                            <span className="bg-[#f0f9ff] text-[#0284c7] text-[12px] font-medium px-2.5 py-1 rounded-md">
                              선택관광
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 하단 최소 출발 인원 및 우대 안내 */}
                      <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[13px] text-[#6b7280]">
                        <span>최소 출발 {pkg.minDeparturePax}명</span>
                        <span className="text-[12px] font-semibold text-[#c5a059] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          일정 확인하기 &gt;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 하단 패키지 여행 전담 문의 바 (1533-6041 강조) */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#172c37] via-[#203a48] to-[#172c37] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059] text-[#172c37] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] sm:text-[14px] font-bold text-white">
                      다온넷 패키지 여행 예약 &amp; 우대 상담 문의
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-[#cbd5e1]">
                      원하시는 일정과 여행지를 말씀해 주시면 회원 전용 특별 혜택으로 상세히 안내해 드립니다.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="tel:1533-6041"
                    className="px-4 py-2 rounded-xl bg-[#c5a059] hover:bg-[#d9bc86] text-[#172c37] font-black text-[16px] sm:text-[18px] flex items-center gap-2 transition shadow-sm"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>1533-6041</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => openContract("[패키지 여행 우대 상담 신청] ")}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-[12.5px] transition cursor-pointer"
                  >
                    간편 상담 ↗
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 해피클래스 전국 50여 곳 주요 제휴 숙박시설 리스트 & 이용 기준 (고급화 리디자인) */}
          <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-[#e5dfd3] shadow-[0_15px_45px_-15px_rgba(23,44,55,0.08)] overflow-hidden relative">
            {/* 상단 럭셔리 골드 액센트 라인 */}
            <div className="h-[3px] bg-gradient-to-r from-[#d9bc86]/20 via-[#c5a059] to-[#d9bc86]/20 w-full" />

            <div className="p-6 sm:p-9 lg:p-11 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* 좌측: 숙박 & 크루즈 VIP 혜택 안내 */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f1e7] border border-[#e2d5c0] text-[#936f38] text-[11px] font-semibold tracking-wider uppercase mb-3">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" />
                    <span>PREMIUM BENEFIT GUIDE</span>
                  </div>

                  <h3
                    className="text-[23px] sm:text-[27px] font-medium text-[#1a2d36] leading-[1.38] m-0"
                    style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                  >
                    해피클래스 2박 3일 무료숙박권
                    <br />
                    <span className="text-[#8c734b]">&amp; 럭셔리 크루즈 VIP 가이드</span>
                  </h3>

                  {/* 혜택 금액 강조 배너 */}
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#faf7f0] to-[#f4eee1] border border-[#e8dfcf] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-[#8c734b] font-semibold tracking-wide">
                        멤버십 기본 제공 가치
                      </div>
                      <div className="text-[17px] sm:text-[19px] font-bold text-[#172c37] mt-0.5" style={{ fontFamily: "Georgia, serif" }}>
                        총 300,000원 <span className="text-[13px] font-normal text-[#666] font-sans">상당 혜택</span>
                      </div>
                    </div>
                    <div className="text-right border-l border-[#decbb0] pl-3.5 shrink-0">
                      <span className="inline-block text-[11px] font-semibold text-[#8c734b] bg-white px-2 py-0.5 rounded border border-[#e2d5c0]">
                        1박 15만원 × 2박
                      </span>
                      <div className="text-[11px] text-[#787f7b] mt-0.5">전국 50곳 자유이용</div>
                    </div>
                  </div>

                  {/* 핵심 혜택 3-Point */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#faf9f5] border border-[#eee9dc]">
                      <div className="w-7 h-7 rounded-full bg-[#eee5d3] text-[#8c734b] flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[13px] text-[#1c2e37] font-semibold">
                          직계가족 양도 가능
                        </strong>
                        <p className="text-[12px] text-[#717875] leading-relaxed m-0 mt-0.5">
                          본인은 물론 부모님 효도 여행이나 자녀 가족에게 자유롭게 양도하여 이용하실 수 있습니다.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#faf9f5] border border-[#eee9dc]">
                      <div className="w-7 h-7 rounded-full bg-[#eee5d3] text-[#8c734b] flex items-center justify-center shrink-0 mt-0.5">
                        <Hotel className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[13px] text-[#1c2e37] font-semibold">
                          엄선된 전국 50여 개 숙박 네트워크
                        </strong>
                        <p className="text-[12px] text-[#717875] leading-relaxed m-0 mt-0.5">
                          인천·부산·강원·제주 등 전국 주요 거점 호텔/리조트/펜션을 시즌에 맞춰 자유롭게 예약하세요.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-[#faf9f5] border border-[#eee9dc]">
                      <div className="w-7 h-7 rounded-full bg-[#eee5d3] text-[#8c734b] flex items-center justify-center shrink-0 mt-0.5">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-[13px] text-[#1c2e37] font-semibold">
                          초호화 크루즈 회원 우대
                        </strong>
                        <p className="text-[12px] text-[#717875] leading-relaxed m-0 mt-0.5">
                          VIP 전용 특별 할인가 및 기항지 특전 제공 (최소 6개월 이전 사전 예약 필수)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 정비비 & 이용 유의사항 안내 (투명 정찰제) */}
                  <div className="mt-3.5 p-3 rounded-lg border border-[#e7e1d5] bg-white text-[11px] text-[#6d7572] leading-[1.65]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#26373b] mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8c734b]" />
                      <span>투명한 정찰제 이용 기준</span>
                    </div>
                    <div>· 숙박 청소비: 평일 19,000원 / 주말 39,000원 별도 (실비 기준 투명 운영)</div>
                    <div className="text-[10px] text-[#8f9693]">· 성수기 및 특정 객실 유형에 따라 추가 요금이 발생할 수 있습니다.</div>
                  </div>
                </div>

                {/* 예약 데스크 카드 (컨시어지 콜센터) */}
                <div className="rounded-xl bg-gradient-to-br from-[#172c37] via-[#14252f] to-[#0d1a21] text-white p-4.5 border border-[#2c4452] shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] tracking-[1.5px] text-[#d9bc86] uppercase font-medium">
                        <Phone className="w-3 h-3 text-[#d9bc86]" />
                        <span>RESERVATION CONCIERGE</span>
                      </div>
                      <div className="text-[14px] font-semibold text-white mt-1">
                        숙박·크루즈 예약 및 상담센터
                      </div>
                    </div>
                    <a
                      href="tel:1877-8816"
                      className="px-3 py-1.5 rounded-lg bg-[#c5a059] hover:bg-[#d9bc86] text-[#172c37] font-bold text-[14px] flex items-center gap-1.5 transition-all shadow-sm group shrink-0"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      <span>1877-8816</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a4b4bb]">
                    <span>연중무휴 전문 상담원 연결</span>
                    <button
                      type="button"
                      onClick={() => openContract("[해피클래스 2박 3일 숙박권/크루즈 예약 문의] ")}
                      className="text-[#d9bc86] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      온라인 간편 예약 신청 ↗
                    </button>
                  </div>
                </div>
              </div>

              {/* 우측: 전국 6대 권역 50여 곳 제휴 숙박시설 리스트 */}
              <div className="lg:col-span-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#e5dfd3] gap-2">
                  <div>
                    <div className="text-[11px] font-semibold text-[#936f38] uppercase tracking-wider">
                      AFFILIATED NETWORK
                    </div>
                    <h4
                      className="text-[18px] sm:text-[20px] font-medium text-[#1c2e37] m-0"
                      style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                    >
                      전국 6대 권역 제휴 호텔·리조트·펜션
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5efe2] text-[#8c734b] text-[11px] font-bold border border-[#e2d5c0] w-fit">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" />
                    <span>2박 3일 숙박권 적용처</span>
                  </span>
                </div>

                {/* 6대 권역 카드 그리드 */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {RESORT_LIST.map((group, idx) => {
                    const themes = [
                      "도심 & 오션스테이",
                      "해운대 오션뷰",
                      "수도권 근교 휴양",
                      "동해 바다 & 마운틴",
                      "명산 호반 & 온천",
                      "남해안 & 제주 트립",
                    ];
                    const theme = themes[idx] || "힐링 리조트";

                    return (
                      <div
                        key={idx}
                        className="bg-[#faf8f4] hover:bg-white rounded-xl p-3.5 border border-[#e7e1d5] hover:border-[#c5a059] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_-6px_rgba(197,160,89,0.15)] group flex flex-col justify-between"
                      >
                        <div>
                          {/* 권역 번호 및 지역 */}
                          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#eae4d8]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-md bg-[#172c37] text-[#d9bc86] text-[10px] font-bold flex items-center justify-center font-mono">
                                0{idx + 1}
                              </span>
                              <strong className="text-[12.5px] font-bold text-[#1f313a] group-hover:text-[#8c734b] transition-colors">
                                {group.region}
                              </strong>
                            </div>
                            <span className="text-[10px] font-medium text-[#8c734b] bg-[#f2ebd9] px-2 py-0.5 rounded-full shrink-0">
                              {theme}
                            </span>
                          </div>

                          {/* 개별 호텔/리조트 뱃지 태그 리스트 */}
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {group.places.map((place, pIdx) => (
                              <span
                                key={pIdx}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#e4ded5] text-[#2c3d42] text-[11.5px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-hover:border-[#d9cbba] hover:!border-[#c5a059] hover:!bg-[#fffdf9] hover:!text-[#8c734b] transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                                {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 하단 신뢰 안내문 */}
                <div className="mt-4 pt-3 border-t border-[#e5dfd3]/80 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#7c8380] gap-2">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#936f38] shrink-0" />
                    <span>직계가족 양도 시 가족관계증명서 확인 후 간편 이용 가능합니다.</span>
                  </div>
                  <div className="text-[10.5px] text-[#8e9592]">
                    ※ 제휴 시설 리스트는 시즌 및 협약 현황에 따라 일부 변경될 수 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 패키지 여행 상세 모달 */}
      <PackageDetailModal
        pkg={selectedPkg}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
      />
    </>
  );
}
