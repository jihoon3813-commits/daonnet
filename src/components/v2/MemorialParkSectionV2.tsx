"use client";

import React, { useState, useMemo, useEffect } from "react";
import { MEMORIAL_PARKS, MemorialPark } from "@/data/memorialParks";
import { useDaon } from "@/context/DaonContext";

interface MemorialParkSectionV2Props {
  initialRegion?: string;
  initialType?: string;
  initialKeyword?: string;
}

const PARK_PHOTOS = ["/assets/forest.jpg", "/assets/stay.jpg", "/assets/garden.jpg"];

export default function MemorialParkSectionV2({
  initialRegion = "ALL",
  initialType = "ALL",
  initialKeyword = "",
}: MemorialParkSectionV2Props) {
  const { openContract } = useDaon();
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
      ALL: MEMORIAL_PARKS.length,
      CAPITAL: MEMORIAL_PARKS.filter((p) => p.region === "CAPITAL").length,
      CHUNG_GANG: MEMORIAL_PARKS.filter((p) => p.region === "CHUNG_GANG").length,
      YEONGNAM: MEMORIAL_PARKS.filter((p) => p.region === "YEONGNAM").length,
      HONAM_JEJU: MEMORIAL_PARKS.filter((p) => p.region === "HONAM_JEJU").length,
    };
  }, []);

  const filteredParks = useMemo(() => {
    return MEMORIAL_PARKS.filter((park) => {
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
  }, [currentRegion, currentType, searchTerm, onlySaved, savedIds]);

  const visibleParks = showAll ? filteredParks : filteredParks.slice(0, 9);

  const handleSelectPark = (park: MemorialPark) => {
    openContract(`[희망 추모공원: ${park.name} (${park.loc})] `);
  };

  return (
    <>
      {/* 1. THOUGHTFUL CARE — 추모공원 4대 특별지원 안내 (.intro 레이아웃) */}
      <section
        id="support"
        className="py-[48px] sm:py-[68px] lg:py-[96px] px-5 sm:px-[6%] max-w-[1320px] mx-auto grid lg:grid-cols-[0.8fr_1.3fr] gap-[24px] sm:gap-[40px] lg:gap-[65px]"
      >
        <div>
          <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[12px] sm:mb-[17px] uppercase">
            THOUGHTFUL CARE · 4대 특별지원
          </div>
          <h2
            className="text-[24px] sm:text-[35px] font-medium leading-[1.45] sm:leading-[1.55] tracking-[-1px] sm:tracking-[-1.2px] text-[#26373b] m-0"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            어려운 준비를,
            <br />
            조금 더 편안하게.
          </h2>
        </div>

        <div>
          <p className="text-[13px] sm:text-[16px] text-[#747b78] leading-[1.8] sm:leading-[1.85] m-0">
            어디서부터 알아봐야 할지 막막한 순간. 다온넷 프리미엄 249 회원은 직영{" "}
            <strong className="text-[#26373b] font-semibold">안성 유토피아 추모관</strong>을 비롯하여
            전국 어디든 희망하시는 추모공원을 특별 혜택으로 준비하실 수 있습니다.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] mt-[24px] sm:mt-[32px]">
            <article className="border-t border-[#dedfd7] pt-[14px] sm:pt-[17px]">
              <span
                className="text-[#aa9267] text-[12px] font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                01
              </span>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#26373b] mt-[8px] sm:mt-[10px] mb-[5px] sm:mb-[6px]">
                봉안당 1단 기준 특별지원
              </h3>
              <p className="text-[11px] text-[#747b78] leading-[1.6] sm:leading-[1.65] m-0">
                추모공원 이행증서 및 고급 봉안함 기본 제공 (제휴 시설 정가 대비 10~70% 할인가 적용)
              </p>
            </article>

            <article className="border-t border-[#dedfd7] pt-[14px] sm:pt-[17px]">
              <span
                className="text-[#aa9267] text-[12px] font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                02
              </span>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#26373b] mt-[8px] sm:mt-[10px] mb-[5px] sm:mb-[6px]">
                사전 예약 및 로얄석 선점
              </h3>
              <p className="text-[11px] text-[#747b78] leading-[1.6] sm:leading-[1.65] m-0">
                장례 발생 전 희망하는 장지의 우수 위치(로얄석) 사전 지정 및 맞춤 상담 가능
              </p>
            </article>

            <article className="border-t border-[#dedfd7] pt-[14px] sm:pt-[17px]">
              <span
                className="text-[#aa9267] text-[12px] font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                03
              </span>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#26373b] mt-[8px] sm:mt-[10px] mb-[5px] sm:mb-[6px]">
                직계가족 자유 양도·양수
              </h3>
              <p className="text-[11px] text-[#747b78] leading-[1.6] sm:leading-[1.65] m-0">
                부모님 등 직계 가족 사용을 위한 추모공원 및 장례 이행 권리 자유 양도
              </p>
            </article>

            <article className="border-t border-[#dedfd7] pt-[14px] sm:pt-[17px]">
              <span
                className="text-[#aa9267] text-[12px] font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                04
              </span>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#26373b] mt-[8px] sm:mt-[10px] mb-[5px] sm:mb-[6px]">
                원스톱 장지 연결 컨설팅
              </h3>
              <p className="text-[11px] text-[#747b78] leading-[1.6] sm:leading-[1.65] m-0">
                장례 발생 시 24시간 의전 접수부터 전국 공설·사설 장지 안치까지 원스톱 진행
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 2. MEMORIAL PARK COLLECTION — 전국 55개 추모공원 둘러보기 (.parks 레이아웃) */}
      <section id="memorial-parks" className="bg-[#efeee7] py-[48px] sm:py-[68px] lg:py-[96px] px-5 sm:px-[6%]">
        <div className="max-w-[1200px] mx-auto">
          {/* 섹션 헤더 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-[14px] sm:gap-[20px] mb-[24px] sm:mb-[35px]">
            <div>
              <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[10px] sm:mb-[14px] uppercase">
                MEMORIAL PARK COLLECTION · 56 LOCATIONS
              </div>
              <h2
                className="text-[24px] sm:text-[35px] font-medium leading-[1.45] sm:leading-[1.5] tracking-[-1px] sm:tracking-[-1.2px] text-[#26373b] m-0 mb-[8px] sm:mb-[10px]"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                전국 56개 추모공원 둘러보기
              </h2>
              <p className="text-[12px] sm:text-[14px] text-[#747b78] m-0">
                오래도록 찾아갈 곳이기에, 직영 유토피아 추모관부터 전국의 주요 시설을 한 곳 한 곳 살펴보세요.
              </p>
            </div>

            <button
              onClick={() => {
                setOnlySaved(!onlySaved);
                setShowAll(true);
              }}
              className={`self-start sm:self-end py-[8px] sm:py-[10px] border-b text-[12px] font-medium transition cursor-pointer whitespace-nowrap ${
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
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[12px] sm:gap-[16px] border-b border-[#d5d8ce] pb-[16px] sm:pb-[20px]">
            <div className="flex overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap gap-[6px] no-scrollbar -mx-1 px-1">
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
                    className={`px-[14px] sm:px-[16px] py-[7px] sm:py-[8px] rounded-[30px] text-[12px] font-medium transition cursor-pointer whitespace-nowrap shrink-0 ${
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

            <label className="flex items-center bg-[#f7f6f1] border border-[#d5d8ce] px-[12px] py-[4px]">
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
                className="w-full lg:w-[190px] border-0 bg-transparent p-[7px] text-[12px] text-[#26373b] focus:outline-none"
              />
            </label>
          </div>

          {/* 리스트 메타 & 유형 필터 (.list-meta) */}
          <div className="flex justify-between items-center my-[17px] text-[11px] text-[#707870]">
            <span>
              총 <strong className="text-[#26373b]">{filteredParks.length}</strong>개 시설 · 다온넷 특별지원 네트워크 기준
            </span>

            <select
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              aria-label="시설 유형 필터"
              className="border-0 bg-transparent text-[11px] text-[#26373b] font-medium py-1 px-2 focus:outline-none cursor-pointer"
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
            <div className="text-center py-[70px] bg-[#f7f5ef] border border-[#dedfd7]">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
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
                      className={`absolute right-[12px] top-[12px] w-[32px] h-[32px] rounded-full bg-[#fffdf4]/90 text-[18px] z-10 flex items-center justify-center transition cursor-pointer ${
                        isSaved ? "text-[#9b7544]" : "text-[#747b78] hover:text-[#26373b]"
                      }`}
                    >
                      {isSaved ? "♥" : "♡"}
                    </button>

                    <div>
                      {/* 상단 분위기 포토 영역 */}
                      <div className="h-[195px] overflow-hidden relative bg-[#c9d0c2]">
                        <img
                          src={photoUrl}
                          alt={park.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          style={{ filter: "saturate(0.7)" }}
                        />
                        <span className="absolute bottom-[12px] left-[14px] text-white bg-[#233c32]/80 text-[10px] px-[8px] py-[3px] tracking-wide">
                          {park.type} · {park.featured ? "다온넷 직영" : "다온넷 지원 가능"}
                        </span>
                        {park.featured && (
                          <span className="absolute top-[12px] left-[14px] bg-[#d9bc86] text-[#172c37] text-[10px] font-bold px-[8px] py-[3px]">
                            DIRECT · 직영 대표시설
                          </span>
                        )}
                      </div>

                      {/* 카드 본문 */}
                      <div className="p-[22px] pb-[16px]">
                        <span className="text-[10px] text-[#8d7854] font-semibold tracking-wide">
                          {park.regionLabel} · {park.loc}
                        </span>

                        <h3
                          className="text-[20px] font-medium text-[#26373b] my-[7px] leading-[1.35]"
                          style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                        >
                          {park.name}
                        </h3>

                        <p className="text-[11px] text-[#747b78] mb-[8px] truncate">
                          {park.addr}
                        </p>

                        <p className="text-[12px] text-[#4e5855] leading-[1.6] mb-[12px]">
                          {park.desc}
                        </p>

                        <div className="bg-[#efeee7] px-[12px] py-[8px] text-[11px] text-[#6d5935] border-l-2 border-[#d9bc86]">
                          <strong className="font-semibold">지원 혜택:</strong> {park.supportBenefit}
                        </div>
                      </div>
                    </div>

                    {/* 카드 하단 액션 */}
                    <div className="px-[22px] pb-[20px]">
                      <div className="flex justify-between items-center border-t border-[#dedfd7] pt-[14px] text-[11px] text-[#7b847d]">
                        <span>봉안당 1단 기준 · 사전선점</span>
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
