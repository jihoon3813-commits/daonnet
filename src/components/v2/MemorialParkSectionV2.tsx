"use client";

import React, { useState, useMemo, useEffect } from "react";
import { MEMORIAL_PARKS, MemorialPark } from "@/data/memorialParks";
import { useDaon } from "@/context/DaonContext";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  ShieldCheck,
  Sparkles,
  Users,
  Headphones,
  CheckCircle2,
} from "lucide-react";

interface MemorialParkSectionV2Props {
  initialRegion?: string;
  initialType?: string;
  initialKeyword?: string;
}

const PARK_PHOTOS = ["/assets/forest.jpg", "/assets/stay.jpg", "/assets/garden.jpg"];

const SPECIAL_BENEFITS = [
  {
    num: "01",
    tag: "정가 대비 10~70% 할인",
    title: "봉안당 1단 기준 특별지원",
    desc: "추모공원 이행증서 및 고급 봉안함을 기본 제공하며, 제휴 추모시설 정가 대비 10~70% 우대 할인가를 적용해 드립니다.",
    highlight: "이행증서 & 고급 봉안함 제공",
    icon: ShieldCheck,
  },
  {
    num: "02",
    tag: "우수 위치 사전 선점",
    title: "사전 예약 및 로얄석 선점",
    desc: "장례 발생 전 희망하는 장지의 우수 위치(로얄석)를 미리 지정하고 1:1 맞춤 현장 안내와 전문 상담을 진행합니다.",
    highlight: "로얄석 사전 지정 · 1:1 맞춤 상담",
    icon: Sparkles,
  },
  {
    num: "03",
    tag: "가족 간 무상 양도 가능",
    title: "직계가족 자유 양도·양수",
    desc: "본인은 물론 부모님 등 소중한 직계 가족 사용을 위해 추모공원 및 장례 이행에 대한 모든 권리를 조건 없이 자유롭게 양도합니다.",
    highlight: "직계 가족 무상 권리 양도",
    icon: Users,
  },
  {
    num: "04",
    tag: "24시 전국 장지 원스톱",
    title: "원스톱 장지 연결 컨설팅",
    desc: "장례 발생 시 24시간 의전 접수부터 전국 공설·사설 장지 예약 및 최종 안치까지 전 과정을 원스톱으로 지원합니다.",
    highlight: "24시간 접수 · 전국 장지 안치",
    icon: Headphones,
  },
];

export default function MemorialParkSectionV2({
  initialRegion = "ALL",
  initialType = "ALL",
  initialKeyword = "",
}: MemorialParkSectionV2Props) {
  const { openContract } = useDaon();
  const dbParks = useQuery(api.parks.listParks, {});

  // DB에 데이터가 있으면 DB 우선, 없으면 정적 fallback
  const allParks = useMemo(() => {
    if (dbParks && dbParks.length > 0) {
      return dbParks.map((p: any) => ({
        id: p._id,
        region: p.region as any,
        regionLabel: p.regionLabel,
        loc: p.loc,
        name: p.name,
        type: p.type as any,
        addr: p.addr,
        desc: p.desc,
        featured: p.featured,
        phone: p.phone,
        website: p.website,
        supportBenefit: p.supportBenefit,
        displayImageUrl: p.displayImageUrl,
      }));
    }
    return MEMORIAL_PARKS;
  }, [dbParks]);

  const [currentRegion, setCurrentRegion] = useState(initialRegion);
  const [currentType, setCurrentType] = useState(initialType);
  const [searchTerm, setSearchTerm] = useState(initialKeyword);
  const [showAll, setShowAll] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [onlySaved, setOnlySaved] = useState(false);

  // 관심시설 로컬스토리지 로드
  useEffect(() => {
    try {
      const raw = localStorage.getItem("daon_saved_parks");
      if (raw) {
        setSavedIds(JSON.parse(raw));
      }
    } catch {
      // ignore
    }
  }, []);

  // 부모 검색 조건 반영
  useEffect(() => {
    if (initialRegion) setCurrentRegion(initialRegion);
    if (initialType) setCurrentType(initialType);
    if (initialKeyword !== undefined) setSearchTerm(initialKeyword);
    if (initialRegion !== "ALL" || initialType !== "ALL" || initialKeyword) {
      setShowAll(true);
    }
  }, [initialRegion, initialType, initialKeyword]);

  const toggleSavePark = (id: string) => {
    const next = savedIds.includes(id)
      ? savedIds.filter((item) => item !== id)
      : [...savedIds, id];
    setSavedIds(next);
    try {
      localStorage.setItem("daon_saved_parks", JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const regionCounts = useMemo(() => {
    return {
      ALL: allParks.length,
      CAPITAL: allParks.filter((p) => p.region === "CAPITAL").length,
      CHUNG_GANG: allParks.filter((p) => p.region === "CHUNG_GANG").length,
      YEONGNAM: allParks.filter((p) => p.region === "YEONGNAM").length,
      HONAM_JEJU: allParks.filter((p) => p.region === "HONAM_JEJU").length,
    };
  }, [allParks]);

  const filteredParks = useMemo(() => {
    return allParks.filter((park) => {
      const matchRegion = currentRegion === "ALL" || park.region === currentRegion;
      const matchType = currentType === "ALL" || park.type === currentType;
      const matchSaved = !onlySaved || savedIds.includes(park.id);
      const q = searchTerm.trim().toLowerCase();
      const matchSearch =
        !q ||
        park.name.toLowerCase().includes(q) ||
        park.loc.toLowerCase().includes(q) ||
        park.addr.toLowerCase().includes(q) ||
        park.desc.toLowerCase().includes(q);

      return matchRegion && matchType && matchSaved && matchSearch;
    });
  }, [allParks, currentRegion, currentType, searchTerm, onlySaved, savedIds]);

  const visibleParks = showAll ? filteredParks : filteredParks.slice(0, 9);

  const handleSelectPark = (park: MemorialPark) => {
    openContract(`[희망 추모공원: ${park.name} (${park.loc})] `);
  };

  return (
    <>
      {/* 1. THOUGHTFUL CARE — 추모공원 4대 특별지원 안내 (.intro 레이아웃 개선) */}
      <section
        id="support"
        className="py-6 sm:py-14 lg:py-20 px-4 sm:px-[6%] max-w-[1240px] mx-auto"
      >
        {/* 상단 헤더: 타이틀(좌) + 서브설명문(우)의 균형 잡힌 구조 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-[32px] pb-4 sm:pb-[44px] border-b border-[#dedfd7]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#f4efe6] border border-[#e5dac4] text-[10px] sm:text-[10.5px] tracking-[1.5px] sm:tracking-[2px] text-[#947b50] font-semibold uppercase mb-2 sm:mb-[16px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#947b50]" />
              THOUGHTFUL CARE · 4대 특별지원
            </div>
            <h2
              className="text-[22px] sm:text-[36px] font-medium leading-[1.3] sm:leading-[1.38] tracking-[-0.8px] sm:tracking-[-1.3px] text-[#26373b] m-0"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              어려운 준비를,
              <br />
              <span className="text-[#947b50]">조금 더 편안하게.</span>
            </h2>
          </div>

          <div className="lg:max-w-[540px]">
            <p className="text-[12px] sm:text-[15.5px] text-[#6b7370] leading-[1.7] sm:leading-[1.85] m-0 break-keep">
              어디서부터 알아봐야 할지 막막한 순간. 다온넷 프리미엄 249 회원은 직영{" "}
              <strong className="text-[#172c37] font-semibold">안성 유토피아 추모관</strong>을 비롯하여
              전국 어디든 희망하시는 추모공원을 <span className="text-[#947b50] font-semibold underline underline-offset-4 decoration-[#d9bc86]">특별 혜택</span>으로 준비하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* 4대 특별지원 프리미엄 카드 그리드 (모바일 2열) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-[20px] pt-4 sm:pt-[44px]">
          {SPECIAL_BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.num}
                className="group relative bg-[#fcfbf9] hover:bg-white rounded-xl sm:rounded-2xl p-3 sm:p-7 border border-[#e8e7df] hover:border-[#c5b28d] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(23,44,55,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* 상단 번호 & 아이콘 */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span
                      className="text-[16px] sm:text-[22px] font-semibold text-[#c5b28d] group-hover:text-[#947b50] transition-colors"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.num}
                    </span>
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#f2eee5] group-hover:bg-[#172c37] text-[#947b50] group-hover:text-[#d9bc86] flex items-center justify-center transition-all duration-300">
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* 혜택 태그 배지 */}
                  <div className="inline-block text-[9.5px] sm:text-[11px] font-semibold text-[#8c744d] bg-[#f5ede0] border border-[#ecdcc3] px-2 py-0.5 rounded-full mb-1.5 sm:mb-3 truncate max-w-full">
                    {item.tag}
                  </div>

                  {/* 카드 제목 */}
                  <h3 className="text-[13px] sm:text-[17px] font-bold text-[#26373b] leading-[1.35] sm:leading-[1.4] mb-1.5 sm:mb-2.5 group-hover:text-[#172c37] transition-colors break-keep">
                    {item.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-[10.5px] sm:text-[13px] text-[#6f7673] leading-[1.55] sm:leading-[1.68] m-0 break-keep line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                {/* 하단 체크 요약 포인트 */}
                <div className="mt-3 sm:mt-5 pt-2 sm:pt-3.5 border-t border-[#edebe3] flex items-center gap-1 text-[10px] sm:text-[11.5px] font-medium text-[#26373b]/85">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#947b50] shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 2. MEMORIAL PARK COLLECTION — 전국 55개 추모공원 둘러보기 (.parks 레이아웃) */}
      <section id="memorial-parks" className="bg-[#efeee7] py-6 sm:py-14 lg:py-20 px-4 sm:px-[6%]">
        <div className="max-w-[1200px] mx-auto">
          {/* 섹션 헤더 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2.5 sm:gap-[20px] mb-4 sm:mb-[35px]">
            <div>
              <div className="text-[10px] tracking-[2px] sm:tracking-[2.7px] text-[#947b50] font-semibold mb-1.5 sm:mb-[14px] uppercase">
                MEMORIAL PARK COLLECTION · 56 LOCATIONS
              </div>
              <h2
                className="text-[22px] sm:text-[35px] font-medium leading-[1.3] sm:leading-[1.5] tracking-[-0.8px] sm:tracking-[-1.2px] text-[#26373b] m-0 mb-1.5 sm:mb-[10px]"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                전국 56개 추모공원 둘러보기
              </h2>
              <p className="text-[11.5px] sm:text-[14px] text-[#747b78] m-0 break-keep">
                오래도록 찾아갈 곳이기에, 직영 유토피아 추모관부터 전국의 주요 시설을 한 곳 한 곳 살펴보세요.
              </p>
            </div>

            <button
              onClick={() => {
                setOnlySaved(!onlySaved);
                setShowAll(true);
              }}
              className={`self-start sm:self-end py-1 sm:py-[10px] border-b text-[11.5px] sm:text-[12px] font-medium transition cursor-pointer whitespace-nowrap ${
                onlySaved
                  ? "border-[#947b50] text-[#947b50] font-semibold"
                  : "border-[#aaa] text-[#26373b] hover:text-[#947b50]"
              }`}
            >
              {onlySaved ? "♥ 관심시설만 보는 중" : "♡ 관심시설"}{" "}
              <span className="ml-1 font-semibold">{savedIds.length}</span>
            </button>
          </div>

          {/* 권역 탭 & 시설명 검색 바 (.filter-row) */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2.5 sm:gap-[16px] border-b border-[#d5d8ce] pb-3 sm:pb-[20px]">
            <div className="flex overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap gap-1.5 sm:gap-[6px] no-scrollbar -mx-1 px-1">
              {[
                { key: "ALL", label: "전국 전체", count: regionCounts.ALL },
                { key: "CAPITAL", label: "수도권", count: regionCounts.CAPITAL },
                { key: "CHUNG_GANG", label: "충청·강원", count: regionCounts.CHUNG_GANG },
                { key: "YEONGNAM", label: "경상·영남", count: regionCounts.YEONGNAM },
                { key: "HONAM_JEJU", label: "호남·제주", count: regionCounts.HONAM_JEJU },
              ].map((tab) => {
                const active = currentRegion === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setCurrentRegion(tab.key);
                      setShowAll(false);
                    }}
                    className={`px-3 sm:px-[16px] py-1.5 sm:py-[8px] rounded-[30px] text-[11.5px] sm:text-[12px] font-medium transition cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? "bg-[#172c37] text-white"
                        : "text-[#26373b] hover:bg-[#e2e1d8]"
                    }`}
                  >
                    {tab.label}{" "}
                    <span className={active ? "text-[#d9bc86] ml-1" : "text-[#747b78] ml-1"}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <label className="flex items-center bg-[#f7f6f1] border border-[#d5d8ce] px-2.5 py-1">
              <span className="text-[#747b78] text-[13px]">⌕</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowAll(true);
                }}
                placeholder="시설명 또는 지역명으로 검색"
                aria-label="시설명 검색"
                className="w-full lg:w-[190px] border-0 bg-transparent p-1 text-[12px] text-[#26373b] focus:outline-none"
              />
            </label>
          </div>

          {/* 리스트 메타 & 유형 필터 (.list-meta) */}
          <div className="flex justify-between items-center my-3 sm:my-[17px] text-[11px] text-[#707870]">
            <span>
              총 <strong className="text-[#26373b]">{filteredParks.length}</strong>개 시설 · 지원 네트워크
            </span>

            <select
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              aria-label="시설 유형 필터"
              className="border-0 bg-transparent text-[11px] text-[#26373b] font-medium py-1 px-1 focus:outline-none cursor-pointer"
            >
              <option value="ALL">전체 시설 유형</option>
              <option value="직영">직영 (안성 유토피아)</option>
              <option value="재단">재단법인 추모공원</option>
              <option value="사설">사설 봉안당·수목장</option>
              <option value="공설">공설 장사시설</option>
            </select>
          </div>

          {/* 카드 그리드 (.park-grid) */}
          {filteredParks.length === 0 ? (
            <div className="text-center py-10 sm:py-[70px] bg-[#f7f5ef] border border-[#dedfd7]">
              <p className="text-[#26373b] text-[14px] mb-3">
                조건에 맞는 추모시설이 없습니다.
              </p>
              <button
                onClick={() => {
                  setCurrentRegion("ALL");
                  setCurrentType("ALL");
                  setSearchTerm("");
                  setOnlySaved(false);
                }}
                className="inline-block py-[10px] border-b border-[#9c9f91] text-[12px] text-[#26373b] hover:text-[#947b50] cursor-pointer"
              >
                검색 조건 초기화 ↗
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-[25px]">
              {visibleParks.map((park, idx) => {
                const isSaved = savedIds.includes(park.id);
                const photoUrl = PARK_PHOTOS[idx % PARK_PHOTOS.length];

                return (
                  <article
                    key={park.id}
                    className={`bg-[#f7f5ef] relative group flex flex-col justify-between transition ${
                      park.featured
                        ? "ring-2 ring-[#d9bc86] shadow-[0_12px_30px_rgba(23,44,55,0.08)]"
                        : "border border-[#e2e1d8]"
                    }`}
                  >
                    {/* 관심시설 하트 버튼 */}
                    <button
                      onClick={() => toggleSavePark(park.id)}
                      aria-label={`${park.name} 관심시설`}
                      className={`absolute right-[10px] top-[10px] w-7 h-7 sm:w-[32px] sm:h-[32px] rounded-full bg-[#fffdf4]/90 text-[16px] sm:text-[18px] z-10 flex items-center justify-center transition cursor-pointer ${
                        isSaved ? "text-[#9b7544]" : "text-[#747b78] hover:text-[#26373b]"
                      }`}
                    >
                      {isSaved ? "♥" : "♡"}
                    </button>

                    <div>
                      {/* 상단 분위기 포토 영역 */}
                      <div className="h-[145px] sm:h-[195px] overflow-hidden relative bg-[#c9d0c2]">
                        <img
                          src={(park as any).displayImageUrl || photoUrl}
                          alt={park.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <span className="absolute bottom-2 left-2.5 sm:bottom-[12px] sm:left-[14px] text-white bg-[#233c32]/85 text-[9.5px] sm:text-[10px] px-2 py-0.5 sm:px-[8px] sm:py-[3px] tracking-wide">
                          {park.type} · {park.featured ? "직영" : "지원 가능"}
                        </span>
                        {park.website && (
                          <a
                            href={park.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute bottom-2 right-2.5 sm:bottom-[12px] sm:right-[14px] text-white bg-[#172c37]/85 hover:bg-[#947b50] text-[9.5px] sm:text-[10px] font-medium px-2 py-0.5 sm:px-[9px] sm:py-[3px] rounded transition flex items-center gap-1 backdrop-blur-sm shadow-sm"
                            title={`${park.name} 공식 홈페이지 새창 열기`}
                          >
                            <span>홈페이지</span>
                            <span className="text-[10px]">↗</span>
                          </a>
                        )}
                        {park.featured && (
                          <span className="absolute top-2 left-2.5 sm:top-[12px] sm:left-[14px] bg-[#d9bc86] text-[#172c37] text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-[8px] sm:py-[3px]">
                            DIRECT · 직영
                          </span>
                        )}
                      </div>

                      {/* 카드 본문 */}
                      <div className="p-3.5 sm:p-[22px] pb-3 sm:pb-[16px]">
                        <span className="text-[10px] text-[#8d7854] font-semibold tracking-wide">
                          {park.regionLabel} · {park.loc}
                        </span>

                        <h3
                          className="text-[17px] sm:text-[20px] font-medium text-[#26373b] my-1 sm:my-[7px] leading-[1.35]"
                          style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                        >
                          {park.name}
                        </h3>

                        <p className="text-[11px] text-[#747b78] mb-1.5 sm:mb-[8px] truncate">
                          {park.addr}
                        </p>

                        <p className="text-[11.5px] sm:text-[12px] text-[#4e5855] leading-[1.55] sm:leading-[1.6] mb-2 sm:mb-[12px] line-clamp-2 sm:line-clamp-none">
                          {park.desc}
                        </p>

                        <div className="bg-[#efeee7] px-2.5 py-1.5 sm:px-[12px] sm:py-[8px] text-[10.5px] sm:text-[11px] text-[#6d5935] border-l-2 border-[#d9bc86] break-keep">
                          <strong className="font-semibold">지원 혜택:</strong> {park.supportBenefit}
                        </div>
                      </div>
                    </div>

                    {/* 카드 하단 액션 */}
                    <div className="px-[22px] pb-[20px]">
                      <div className="flex justify-between items-center border-t border-[#dedfd7] pt-[14px] text-[11px] text-[#7b847d]">
                        {park.website ? (
                          <a
                            href={park.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8d7854] hover:text-[#172c37] underline decoration-[#d9bc86] underline-offset-4 transition"
                            title={`${park.name} 공식 홈페이지 새창 열기`}
                          >
                            <span>공식 홈페이지 바로가기</span>
                            <span className="text-[10px]">↗</span>
                          </a>
                        ) : (
                          <span>봉안당 1단 기준 · 사전선점</span>
                        )}
                        <button
                          onClick={() => handleSelectPark(park)}
                          className="text-[12px] font-semibold text-[#172c37] hover:text-[#947b50] transition cursor-pointer"
                        >
                          이 시설로 지원 상담 ↗
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* 하단 고지사항 (.notice) */}
          <p className="text-[11px] text-[#7b817b] leading-[1.75] my-[24px]">
            ※ 위 리스트는 고객님의 희망 지역 장지 선택을 돕기 위한 전국 주요 추모공원 및 봉안당 안내 정보입니다. 다온넷 회원은 직영 유토피아 추모관 및 전국 주요 시설 이용 시 봉안당 1단 기준 특별지원 또는 정가 대비 10~70% 할인 혜택을 적용받으실 수 있으며, 공설 시설 희망 시 원스톱 입소 절차 안내를 지원합니다. 실제 적용 조건 및 단(층) 변경에 따른 추가 비용은 이용 시점의 시설 운영규정에 따라 달라질 수 있으므로 반드시 <strong className="text-[#26373b]">다온넷 고객센터(1877-8816)</strong>를 통해 사전 접수해 주시기 바랍니다.
          </p>

          {/* 더보기 버튼 (.outline.more) */}
          {filteredParks.length > 9 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="block mx-auto mt-[35px] min-w-[260px] border border-[#b6bcb7] hover:border-[#172c37] bg-transparent hover:bg-[#172c37] hover:text-white text-[#26373b] px-[24px] py-[15px] text-[12px] font-semibold transition cursor-pointer"
            >
              {showAll ? (
                <>
                  전국 시설 리스트 접기 <span className="ml-[35px]">−</span>
                </>
              ) : (
                <>
                  전국 시설 더 보기 (+{filteredParks.length - 9}개){" "}
                  <span className="ml-[35px]">＋</span>
                </>
              )}
            </button>
          )}
        </div>
      </section>
    </>
  );
}
