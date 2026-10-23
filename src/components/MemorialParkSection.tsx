"use client";

import React, { useState, useMemo } from "react";
import {
  MapPin,
  Building,
  CheckCircle,
  Crown,
  Users,
  Headphones,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { MEMORIAL_PARKS, MemorialPark } from "@/data/memorialParks";
import { useDaon } from "@/context/DaonContext";

interface MemorialParkSectionProps {
  initialRegion?: string;
  initialType?: string;
  initialKeyword?: string;
}

export default function MemorialParkSection({
  initialRegion = "ALL",
  initialType = "ALL",
  initialKeyword = "",
}: MemorialParkSectionProps) {
  const { openContract } = useDaon();
  const [currentRegion, setCurrentRegion] = useState(initialRegion);
  const [currentType, setCurrentType] = useState(initialType);
  const [searchTerm, setSearchTerm] = useState(initialKeyword);
  const [showAll, setShowAll] = useState(false);

  // 부모 컴포넌트에서 검색 조건이 변경될 때 업데이트 반영
  React.useEffect(() => {
    if (initialRegion) setCurrentRegion(initialRegion);
    if (initialType) setCurrentType(initialType);
    if (initialKeyword !== undefined) setSearchTerm(initialKeyword);
    if (initialRegion !== "ALL" || initialType !== "ALL" || initialKeyword) {
      setShowAll(true);
    }
  }, [initialRegion, initialType, initialKeyword]);

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
      const q = searchTerm.trim().toLowerCase();
      const matchSearch =
        !q ||
        park.name.toLowerCase().includes(q) ||
        park.loc.toLowerCase().includes(q) ||
        park.addr.toLowerCase().includes(q) ||
        park.desc.toLowerCase().includes(q);

      return matchRegion && matchType && matchSearch;
    });
  }, [currentRegion, currentType, searchTerm]);

  const visibleParks = showAll ? filteredParks : filteredParks.slice(0, 12);

  const handleSelectPark = (park: MemorialPark) => {
    openContract(`[희망 추모공원: ${park.name} (${park.loc})] `);
  };

  return (
    <section id="memorial-parks" className="py-16 max-w-7xl mx-auto px-4">
      {/* 섹션 타이틀 */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-black tracking-widest uppercase text-[#C5A059] bg-[#0F1E36] px-3.5 py-1.5 rounded-full inline-block">
          MEMORIAL PARK NETWORK
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0F1E36] mt-3">
          전국 55개 추모공원 · 봉안당 특별지원 안내
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
          다온넷 프리미엄 249 회원은 직영{" "}
          <strong className="text-[#0F1E36]">안성 유토피아 추모관</strong>을 비롯하여 전국 어디든 희망하시는 추모공원을 특별 혜택으로 이용하실 수 있습니다.
        </p>
      </div>

      {/* 4대 특장점 배너 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center text-xl shrink-0">
            <Building className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F1E36] text-sm">봉안당 1단 기준 특별지원</h3>
            <p className="text-xs text-gray-500 mt-1">
              추모공원 이행증서 및 고급 봉안함 기본 제공 (타 시설 10~70% 할인가 적용)
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center text-xl shrink-0">
            <Crown className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F1E36] text-sm">사전 예약 및 로얄석 선점</h3>
            <p className="text-xs text-gray-500 mt-1">
              장례 발생 전 희망하는 장지의 우수 위치(로얄석) 사전 지정 및 상담 가능
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center text-xl shrink-0">
            <Users className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F1E36] text-sm">직계가족 자유 양도·양수</h3>
            <p className="text-xs text-gray-500 mt-1">
              부모님 등 직계 가족 사용을 위한 추모공원 및 장례 이행 권리 양도 자유
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center text-xl shrink-0">
            <Headphones className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F1E36] text-sm">원스톱 장지 연결 컨설팅</h3>
            <p className="text-xs text-gray-500 mt-1">
              장례 발생 시 24시간 의전 접수부터 전국 공설·사설 장지 안치까지 원스톱 진행
            </p>
          </div>
        </div>
      </div>

      {/* 권역별 탭 & 검색 바 */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCurrentRegion("ALL")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                currentRegion === "ALL"
                  ? "bg-[#0F1E36] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              전국 전체{" "}
              <span className={currentRegion === "ALL" ? "text-[#C5A059]" : "text-gray-500"}>
                {regionCounts.ALL}
              </span>
            </button>

            <button
              onClick={() => setCurrentRegion("CAPITAL")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                currentRegion === "CAPITAL"
                  ? "bg-[#0F1E36] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              수도권 (서울·경기·인천){" "}
              <span className={currentRegion === "CAPITAL" ? "text-[#C5A059]" : "text-gray-500"}>
                {regionCounts.CAPITAL}
              </span>
            </button>

            <button
              onClick={() => setCurrentRegion("CHUNG_GANG")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                currentRegion === "CHUNG_GANG"
                  ? "bg-[#0F1E36] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              충청·강원권{" "}
              <span className={currentRegion === "CHUNG_GANG" ? "text-[#C5A059]" : "text-gray-500"}>
                {regionCounts.CHUNG_GANG}
              </span>
            </button>

            <button
              onClick={() => setCurrentRegion("YEONGNAM")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                currentRegion === "YEONGNAM"
                  ? "bg-[#0F1E36] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              경상·영남권{" "}
              <span className={currentRegion === "YEONGNAM" ? "text-[#C5A059]" : "text-gray-500"}>
                {regionCounts.YEONGNAM}
              </span>
            </button>

            <button
              onClick={() => setCurrentRegion("HONAM_JEJU")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                currentRegion === "HONAM_JEJU"
                  ? "bg-[#0F1E36] text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              호남·제주권{" "}
              <span className={currentRegion === "HONAM_JEJU" ? "text-[#C5A059]" : "text-gray-500"}>
                {regionCounts.HONAM_JEJU}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              className="border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36] bg-gray-50"
            >
              <option value="ALL">전체 유형</option>
              <option value="직영">직영 (유토피아)</option>
              <option value="재단">재단법인</option>
              <option value="사설">사설</option>
              <option value="공설">공설</option>
            </select>

            <div className="relative flex-1 sm:w-60">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="시설명 또는 지역 검색..."
                className="w-full border border-gray-300 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>

      {/* 추모공원 카드 그리드 */}
      {filteredParks.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
          <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600 font-bold">조건에 맞는 추모시설을 찾을 수 없습니다.</p>
          <p className="text-xs text-gray-400 mt-1">다른 검색어나 권역을 선택해 보세요.</p>
          <button
            onClick={() => {
              setCurrentRegion("ALL");
              setCurrentType("ALL");
              setSearchTerm("");
            }}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-700"
          >
            검색 필터 초기화
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleParks.map((park) => (
            <div
              key={park.id}
              className={`bg-white rounded-2xl p-5 shadow-sm border transition flex flex-col justify-between ${
                park.featured
                  ? "border-2 border-[#C5A059] ring-2 ring-[#C5A059]/20"
                  : "border-gray-200 hover:border-[#0F1E36]/30 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      park.featured
                        ? "gold-gradient text-white"
                        : "bg-gray-100 text-[#0F1E36]"
                    }`}
                  >
                    {park.loc} · {park.type}
                  </span>
                  <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    다온넷 지원 가능
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black text-[#0F1E36] leading-snug">
                    {park.name}
                  </h3>
                  {park.featured && (
                    <span className="bg-amber-100 text-[#C5A059] text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      <Sparkles className="w-3 h-3" /> 직영
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="truncate">{park.addr}</span>
                </p>

                <p className="text-xs text-gray-600 mt-2.5 bg-gray-50 p-2.5 rounded-xl leading-relaxed">
                  {park.desc}
                </p>

                <div className="mt-2 text-[11px] text-amber-800 bg-amber-50/70 p-2 rounded-lg font-medium">
                  <strong>혜택:</strong> {park.supportBenefit}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <span className="text-[11px] text-gray-400">봉안당 1단 / 사전선점</span>
                <button
                  onClick={() => handleSelectPark(park)}
                  className="bg-[#0F1E36] hover:bg-[#C5A059] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1 cursor-pointer"
                >
                  <span>이 시설로 지원 상담</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 더보기 / 접기 버튼 */}
      {filteredParks.length > 12 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white border-2 border-[#0F1E36] text-[#0F1E36] hover:bg-[#0F1E36] hover:text-white font-black px-8 py-3 rounded-2xl transition shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>추모공원 리스트 접기</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>전국 추모공원 전체 리스트 펼쳐보기 (+{filteredParks.length - 12}개 더보기)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* 하단 고지사항 */}
      <div className="mt-8 bg-gray-100 rounded-2xl p-4 sm:p-5 text-xs text-gray-500 leading-relaxed border border-gray-200">
        ※ 위 리스트는 고객님의 희망 지역 장지 선택을 돕기 위한 전국 주요 추모공원 및 봉안당 안내 정보입니다. 다온넷 회원은 직영 유토피아 추모관 및 전국 주요 시설 이용 시 봉안당 1단 기준 특별지원 또는 정가 대비 10~70% 할인 혜택을 적용받으실 수 있으며, 공설 시설 희망 시 원스톱 입소 절차 안내를 지원합니다. 실제 적용 조건 및 단(층) 변경에 따른 추가 비용은 이용 시점의 시설 운영규정에 따라 달라질 수 있으므로 반드시 <strong className="text-gray-800">다온넷 고객센터(1877-8816)</strong>를 통해 사전 접수해 주시기 바랍니다.
      </div>
    </section>
  );
}
