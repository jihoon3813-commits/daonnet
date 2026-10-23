"use client";

import React, { useState } from "react";
import { useDaon } from "@/context/DaonContext";

interface HeroSectionV2Props {
  onSearch: (region: string, type: string, keyword: string) => void;
}

export default function HeroSectionV2({ onSearch }: HeroSectionV2Props) {
  const { openContract, openCert } = useDaon();
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
    <>
      {/* 1. 에디토리얼 히어로 배너 */}
      <section
        id="home"
        className="relative min-h-[480px] sm:min-h-[600px] lg:min-h-[670px] text-white px-5 sm:px-[7%] lg:px-[8%] pt-[36px] sm:pt-[68px] lg:pt-[86px] pb-[36px] sm:pb-[56px] flex flex-col justify-between overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10, 29, 27, 0.9), rgba(14, 32, 27, 0.45) 75%), url('/assets/forest.jpg')",
          backgroundPosition: "center 55%",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1200px] w-full mx-auto relative z-10">
          <div className="max-w-[760px]">
            <div className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[2.7px] text-[#e1c897] font-semibold mb-[12px] sm:mb-[17px] uppercase">
              A PLACE FOR EVERLASTING MEMORIES · 전국 56개 추모공원 특별지원
            </div>

            <h1
              className="text-[26px] sm:text-[44px] lg:text-[54px] leading-[1.38] sm:leading-[1.45] tracking-[-1px] sm:tracking-[-1.8px] font-normal text-white m-0 mb-[16px] sm:mb-[22px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              소중한 기억이
              <br />
              평온히 머무는 곳,
              <br />
              <span className="text-[#e1c897]">전국 어디든 다온넷과 함께.</span>
            </h1>

            <p className="text-[#dde1d9] text-[12px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] max-w-[630px] m-0">
              직영 <strong className="text-white font-semibold">안성 유토피아 추모관</strong>부터 전국 56개 주요 추모공원 봉안당(1단 기준) 특별지원은 물론,{" "}
              <strong className="text-[#e1c897] font-semibold">10년 공증 498만 원 환급보증서</strong>와{" "}
              <strong className="text-white font-semibold">249만 쇼핑포인트</strong>,{" "}
              <strong className="text-white font-semibold">해피클래스 2박 3일 숙박권</strong>까지 하나로 담았습니다.
            </p>

            {/* 액션 버튼 */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-[14px] mt-[24px] sm:mt-[32px]">
              <a
                href="#memorial-parks"
                className="bg-[#d9bc86] text-[#172c37] hover:bg-[#e5cba0] px-[16px] sm:px-[24px] py-[13px] sm:py-[15px] text-[12px] sm:text-[13px] font-semibold inline-flex items-center justify-between gap-[12px] sm:gap-[28px] transition whitespace-nowrap"
              >
                <span>추모공원 찾기</span>
                <span>↗</span>
              </a>

              <button
                onClick={() => openContract()}
                className="text-white border border-[#a2aaa2] hover:border-[#d9bc86] hover:text-[#d9bc86] px-[16px] sm:px-[24px] py-[13px] sm:py-[15px] text-[12px] sm:text-[13px] font-semibold inline-flex items-center justify-between gap-[12px] sm:gap-[28px] transition cursor-pointer whitespace-nowrap"
              >
                <span>맞춤 상담·가입</span>
                <span>→</span>
              </button>

              <button
                onClick={openCert}
                className="col-span-2 sm:col-span-1 justify-center text-[#e1c897] border border-[#e1c897]/40 hover:border-[#e1c897] px-[16px] sm:px-[20px] py-[12px] sm:py-[15px] text-[12px] font-medium inline-flex items-center gap-[14px] transition cursor-pointer whitespace-nowrap"
              >
                <span>498만 모바일 보증서 보기</span>
                <span>↗</span>
              </button>
            </div>

            {/* 핵심 4대 보장 요약 라인 (에디토리얼 스타일) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 mt-[28px] sm:mt-[42px] pt-[18px] sm:pt-[22px] border-t border-white/20 max-w-[740px]">
              <div>
                <div className="text-[10px] tracking-[1px] sm:tracking-[1.5px] text-[#e1c897] uppercase whitespace-nowrap">
                  01 · 추모공원 특별지원
                </div>
                <div
                  className="text-[16px] sm:text-[20px] text-white mt-1 font-normal whitespace-nowrap"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  봉안당 1단 기준
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#c6cfc7] mt-0.5">
                  직영 및 전국 10~70% 할인
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[1px] sm:tracking-[1.5px] text-[#e1c897] uppercase whitespace-nowrap">
                  02 · 10년 공증 환급보증
                </div>
                <div
                  className="text-[16px] sm:text-[20px] text-[#d9bc86] mt-1 font-medium whitespace-nowrap"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  4,980,000<span className="text-[12px] sm:text-[13px] ml-0.5 font-sans">원</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#c6cfc7] mt-0.5">
                  가입 2년 후 자유 양도 가능
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[1px] sm:tracking-[1.5px] text-[#e1c897] uppercase whitespace-nowrap">
                  03 · 후불장례 이행보증
                </div>
                <div
                  className="text-[16px] sm:text-[20px] text-white mt-1 font-normal whitespace-nowrap"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  1,980,000<span className="text-[12px] sm:text-[13px] ml-0.5 font-sans">원</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#c6cfc7] mt-0.5">
                  365일 24시간 의전 (1877-8816)
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[1px] sm:tracking-[1.5px] text-[#e1c897] uppercase whitespace-nowrap">
                  04 · 포인트 + 지원금
                </div>
                <div
                  className="text-[16px] sm:text-[20px] text-white mt-1 font-normal whitespace-nowrap"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  249만P + 40만원
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#c6cfc7] mt-0.5">
                  삼칠그라·2박3일 무료 숙박권
                </div>
              </div>
            </div>

            <div className="hidden sm:block text-[9px] tracking-[2px] text-[#c6cfc7] mt-[28px]">
              MEMORIAL PARK · 4,980,000 GUARANTEE · LIFE CARE · MEMBERSHIP
            </div>
          </div>
        </div>

        {/* 우측 세로 캡션 */}
        <div
          className="hidden md:block absolute right-[40px] top-[180px] text-[11px] tracking-[4px] text-[#ddd] select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          마음을 담은 준비, 오래도록 이어지는 안심
        </div>

        {/* 하단 캡션 바 */}
        <div className="max-w-[1200px] w-full mx-auto mt-6 sm:mt-8 flex justify-between text-[9px] tracking-[2px] text-[#cbd3cc] relative z-10">
          <span>01 — MEMORIAL CARE &amp; GUARANTEE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* 2. 하단 직결형 빠른 장지 검색 바 (.search-wrap 디자인 반영) */}
      <div className="relative z-10 max-w-[1200px] mx-auto -mt-[1px] px-5 sm:px-[7%] lg:px-[40px] py-[22px] sm:py-[26px] lg:py-[32px] bg-[#eae7dd] border-b border-[#dedfd7] flex flex-col lg:flex-row lg:items-center gap-[18px] sm:gap-[24px] lg:gap-[42px]">
        <div className="shrink-0">
          <small className="block text-[#8c744d] text-[9px] tracking-[1.6px] uppercase font-semibold">
            FIND YOUR PLACE · 전국 55개소 원스톱
          </small>
          <strong
            className="block text-[18px] lg:text-[20px] font-medium text-[#26373b] mt-1"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            어느 지역을 찾으시나요?
          </strong>
          <span className="block text-[11px] text-[#747b78] mt-0.5">
            사전 로얄석 선점 및 직계가족 자유 양도 가능
          </span>
        </div>

        <form
          onSubmit={handleQuickSearch}
          className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px] items-end"
        >
          <label className="block text-[10px] text-[#7b8079] tracking-[0.5px]">
            희망 권역 선택
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="block w-full mt-1 border-0 border-b border-[#c7c9bf] bg-transparent py-[7px] px-[2px] text-[13px] sm:text-[14px] text-[#26373b] focus:outline-none focus:border-[#172c37]"
            >
              <option value="ALL">전국 전체 (55개 추모시설)</option>
              <option value="CAPITAL">수도권 (유토피아 직영 외 24곳)</option>
              <option value="CHUNG_GANG">충청·강원권 (15곳)</option>
              <option value="YEONGNAM">경상·영남권 (11곳)</option>
              <option value="HONAM_JEJU">전라·호남·제주권 (6곳)</option>
            </select>
          </label>

          <label className="block text-[10px] text-[#7b8079] tracking-[0.5px]">
            시설 구분
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full mt-1 border-0 border-b border-[#c7c9bf] bg-transparent py-[7px] px-[2px] text-[13px] sm:text-[14px] text-[#26373b] focus:outline-none focus:border-[#172c37]"
            >
              <option value="ALL">모든 시설 유형</option>
              <option value="직영">다온넷 직영 (안성 유토피아)</option>
              <option value="재단">재단법인 추모공원</option>
              <option value="사설">프리미엄 사설 봉안당·수목장</option>
              <option value="공설">전국 시·군 공설 추모시설</option>
            </select>
          </label>

          <label className="block text-[10px] text-[#7b8079] tracking-[0.5px]">
            시설명 또는 지역명
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="예: 유토피아, 용인, 부산, 천안..."
              className="block w-full mt-1 border-0 border-b border-[#c7c9bf] bg-transparent py-[7px] px-[2px] text-[13px] sm:text-[14px] text-[#26373b] placeholder:text-[#9a9f98] focus:outline-none focus:border-[#172c37]"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#172c37] hover:bg-[#26373b] text-white px-[22px] py-[14px] text-[13px] font-semibold inline-flex items-center justify-between gap-[16px] transition cursor-pointer"
          >
            <span>시설 찾기</span>
            <span>⌕</span>
          </button>
        </form>
      </div>
    </>
  );
}
