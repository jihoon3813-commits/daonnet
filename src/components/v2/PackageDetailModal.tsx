"use client";

import React, { useState } from "react";
import { PackageTour, PackageItineraryItem } from "@/data/packageTours";
import {
  X,
  Phone,
  Calendar,
  Users,
  ShoppingBag,
  Compass,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  Building,
  Plane,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";

interface PackageDetailModalProps {
  pkg: PackageTour | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PackageDetailModal({
  pkg,
  isOpen,
  onClose,
}: PackageDetailModalProps) {
  const { openContract } = useDaon();
  const [openDay, setOpenDay] = useState<number>(1);
  const [activeImageIdx, setActiveImageIdx] = useState<{ [key: string]: number }>({});

  if (!isOpen || !pkg) return null;

  const toggleDay = (dayNo: number) => {
    setOpenDay((prev) => (prev === dayNo ? 0 : dayNo));
  };

  const handlePrevImage = (itemKey: string, total: number) => {
    setActiveImageIdx((prev) => {
      const current = prev[itemKey] || 0;
      return { ...prev, [itemKey]: (current - 1 + total) % total };
    });
  };

  const handleNextImage = (itemKey: string, total: number) => {
    setActiveImageIdx((prev) => {
      const current = prev[itemKey] || 0;
      return { ...prev, [itemKey]: (current + 1) % total };
    });
  };

  // 텍스트 HTML/줄바꿈 렌더링 헬퍼
  const renderFormattedText = (text?: string | null) => {
    if (!text) return null;
    const cleanText = text
      .replace(/<br\s*[\/]?>/gi, "\n")
      .replace(/<span[^>]*class="c-red"[^>]*>(.*?)<\/span>/gi, "$1")
      .replace(/<[^>]+>/g, "");

    const lines = cleanText.split("\n");
    return (
      <div className="space-y-1">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-2" />;
          const isRed = line.includes("취소료") || line.includes("1인실") || line.includes("주의");
          return (
            <p
              key={idx}
              className={`text-[13px] sm:text-[14px] leading-relaxed m-0 ${
                isRed ? "text-red-600 font-semibold" : "text-[#4b5563]"
              }`}
            >
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1080px] max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#1f2937]"
        style={{ fontFamily: "'Noto Sans KR', -apple-system, sans-serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 고정 헤더 바 */}
        <div className="px-5 py-3.5 bg-[#172c37] text-white flex items-center justify-between border-b border-[#2d4350] shrink-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#E8172A] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {pkg.country}
            </span>
            <span className="text-[13px] sm:text-[14px] font-medium text-[#e2e8f0] truncate max-w-[220px] sm:max-w-[480px]">
              {pkg.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:1533-6041"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059] hover:bg-[#d9bc86] text-[#172c37] font-bold text-[12px] sm:text-[13px] transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>문의 1533-6041</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 스크롤 가능한 본문 영역 */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* 1. 히어로 비주얼 배너 */}
          <div
            className="relative h-[240px] sm:h-[340px] bg-cover bg-center flex items-end p-5 sm:p-8 text-white overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.4) 65%, rgba(0,0,0,0.2) 100%), url('${pkg.heroImage}')`,
              backgroundColor: "#2d3748",
            }}
          >
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-[#cbd5e1] font-medium mb-1.5">
                <span className="inline-block px-2 py-0.5 rounded bg-[#E8172A] text-white text-[11px] font-bold">
                  {pkg.country}
                </span>
                <span>·</span>
                <span>{pkg.cities.join(", ")}</span>
                <span>·</span>
                <span>{pkg.nights}박 {pkg.days}일</span>
              </div>
              <h1 className="text-[22px] sm:text-[32px] font-bold leading-tight text-white mb-2">
                {pkg.name}
              </h1>
              {pkg.headline && (
                <p className="text-[13px] sm:text-[15px] text-[#93c5fd] font-medium m-0">
                  {pkg.headline}
                </p>
              )}
            </div>

            <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-[12px] text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
              <span>다온넷 회원 우대 상품</span>
            </div>
          </div>

          {/* 2. 메인 컨텐츠 영역 (2열 레이아웃: 좌측 상세 + 우측 사이드바) */}
          <div className="p-5 sm:p-8 max-w-[1080px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* 좌측 상세 컨텐츠 (lg:col-span-8) */}
              <div className="lg:col-span-8 space-y-7">
                {/* 패키지 여행 기본 안내 공지 */}
                <div className="p-4 rounded-xl bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af] text-[13px] sm:text-[14px] leading-relaxed">
                  <div className="flex items-center gap-2 font-bold mb-1 text-[#1d4ed8]">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#2563eb]" />
                    <span>패키지 여행 — 정해진 일정에 따라 함께 이동합니다</span>
                  </div>
                  <p className="m-0 text-[#1e3a8a] text-[12.5px] sm:text-[13px]">
                    본 상품은 패키지 단체 여행 상품으로 자유 일정 또는 개별 이탈 시 취소수수료 및 위약금이 발생할 수 있습니다.
                  </p>
                </div>

                {/* 핵심 포인트 섹션 */}
                <div>
                  <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827] mb-3.5 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#3b82f6] rounded-full inline-block" />
                    <span>핵심 포인트</span>
                  </h2>

                  <div className="bg-white rounded-xl border border-[#e5e7eb] divide-y divide-[#f3f4f6] shadow-sm">
                    {pkg.highlights.length > 0 ? (
                      pkg.highlights.map((hl, idx) => (
                        <div key={idx} className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                          <span className="text-[12px] sm:text-[13px] font-bold text-[#6b7280] sm:w-[90px] shrink-0">
                            {hl.label}
                          </span>
                          <span className="text-[13px] sm:text-[14px] text-[#111827] font-medium leading-relaxed">
                            {hl.content}
                          </span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="p-3.5 sm:p-4 flex gap-4">
                          <span className="text-[13px] font-bold text-[#6b7280] w-[90px] shrink-0">쇼핑</span>
                          <span className="text-[14px] text-[#111827]">{pkg.shoppingCount}회 방문</span>
                        </div>
                        <div className="p-3.5 sm:p-4 flex gap-4">
                          <span className="text-[13px] font-bold text-[#6b7280] w-[90px] shrink-0">선택관광</span>
                          <span className="text-[14px] text-[#111827]">{pkg.hasOptionalTour ? "있음" : "없음"}</span>
                        </div>
                        <div className="p-3.5 sm:p-4 flex gap-4">
                          <span className="text-[13px] font-bold text-[#6b7280] w-[90px] shrink-0">가이드</span>
                          <span className="text-[14px] text-[#111827]">{pkg.guideType}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* 여행 일정표 섹션 */}
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827] m-0 flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-[#3b82f6] rounded-full inline-block" />
                      <span>상세 여행 일정표 ({pkg.days}일)</span>
                    </h2>
                    <span className="text-[12px] text-[#6b7280]">
                      일차를 클릭하시면 상세 일정이 펼쳐집니다
                    </span>
                  </div>

                  {pkg.itinerary && pkg.itinerary.length > 0 ? (
                    <div className="space-y-3">
                      {pkg.itinerary.map((day) => {
                        const isOpenDay = openDay === day.dayNo;
                        return (
                          <div
                            key={day.dayNo}
                            className="border border-[#e5e7eb] rounded-xl overflow-hidden shadow-sm transition-all"
                          >
                            {/* 일차 헤더 (아코디언 토글) */}
                            <button
                              type="button"
                              onClick={() => toggleDay(day.dayNo)}
                              className={`w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer ${
                                isOpenDay
                                  ? "bg-[#f8fafc] text-[#0f172a] border-b border-[#e2e8f0]"
                                  : "bg-[#fafafa] hover:bg-[#f1f5f9] text-[#334155]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`px-2.5 py-1 rounded-md text-[12px] font-bold font-mono ${
                                    isOpenDay
                                      ? "bg-[#1e293b] text-white"
                                      : "bg-[#e2e8f0] text-[#475569]"
                                  }`}
                                >
                                  {day.dayNo}일차
                                </span>
                                <span className="text-[14px] sm:text-[15px] font-bold">
                                  {day.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[#64748b]">
                                {isOpenDay ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            </button>

                            {/* 일차 상세 내용 */}
                            {isOpenDay && (
                              <div className="p-4 sm:p-5 bg-white space-y-4">
                                {day.items && day.items.length > 0 ? (
                                  <div className="relative pl-6 space-y-5 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#e2e8f0]">
                                    {day.items.map((item, itemIdx) => {
                                      const isOpt =
                                        item.kind === "option" ||
                                        (item.label && item.label.includes("선택관광"));
                                      const isSpot = item.kind === "spot";
                                      const isHotel = item.kind === "hotel";
                                      const itemKey = `day-${day.dayNo}-item-${itemIdx}`;

                                      const images = Array.isArray(item.images) && item.images.length > 0
                                        ? item.images
                                        : item.image
                                        ? [item.image]
                                        : [];

                                      const currentImgIdx = activeImageIdx[itemKey] || 0;

                                      return (
                                        <div key={itemIdx} className="relative group">
                                          {/* 타임라인 불릿 아이콘 */}
                                          <div
                                            className={`absolute -left-6 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center bg-white ${
                                              isOpt
                                                ? "border-[#2AA3D4]"
                                                : isSpot
                                                ? "border-[#3b82f6]"
                                                : isHotel
                                                ? "border-[#eab308]"
                                                : "border-[#94a3b8]"
                                            }`}
                                          >
                                            <div
                                              className={`w-1.5 h-1.5 rounded-full ${
                                                isOpt
                                                  ? "bg-[#2AA3D4]"
                                                  : isSpot
                                                  ? "bg-[#3b82f6]"
                                                  : isHotel
                                                  ? "bg-[#eab308]"
                                                  : "bg-[#94a3b8]"
                                              }`}
                                            />
                                          </div>

                                          {/* 관광지 또는 선택관광 카드 */}
                                          {isSpot || isOpt ? (
                                            <div className="p-4 rounded-xl border border-[#e5e7eb] bg-[#fafafa] hover:bg-white transition shadow-sm space-y-2.5">
                                              <div className="flex flex-wrap items-center gap-2">
                                                {isOpt && (
                                                  <span className="px-2 py-0.5 rounded text-[11px] font-bold text-[#2AA3D4] border border-[#2AA3D4] bg-[#f0f9ff]">
                                                    선택관광
                                                  </span>
                                                )}
                                                {item.label && item.label !== "-" && (
                                                  <strong className="text-[14px] sm:text-[15px] font-bold text-[#111827]">
                                                    {item.label.replace(/\[?선택\s*관광\]?/g, "").trim()}
                                                  </strong>
                                                )}
                                                {item.nameEn && (
                                                  <span className="text-[11px] text-[#6b7280]">
                                                    ({item.nameEn})
                                                  </span>
                                                )}
                                              </div>

                                              {item.summary && (
                                                <p className="text-[13px] text-[#2563eb] font-medium m-0">
                                                  {item.summary}
                                                </p>
                                              )}

                                              {/* 사진 갤러리 슬라이더 */}
                                              {images.length > 0 && (
                                                <div className="relative rounded-lg overflow-hidden my-3 aspect-[16/10] bg-gray-100 max-w-[480px]">
                                                  <img
                                                    src={images[currentImgIdx]}
                                                    alt={item.label || "일정 사진"}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                      (e.currentTarget as HTMLElement).style.display = "none";
                                                    }}
                                                  />
                                                  {images.length > 1 && (
                                                    <>
                                                      <button
                                                        type="button"
                                                        onClick={() => handlePrevImage(itemKey, images.length)}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer transition"
                                                      >
                                                        <ChevronLeft className="w-4 h-4" />
                                                      </button>
                                                      <button
                                                        type="button"
                                                        onClick={() => handleNextImage(itemKey, images.length)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 cursor-pointer transition"
                                                      >
                                                        <ChevronRight className="w-4 h-4" />
                                                      </button>
                                                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono">
                                                        {currentImgIdx + 1} / {images.length}
                                                      </div>
                                                    </>
                                                  )}
                                                </div>
                                              )}

                                              {item.detail && renderFormattedText(item.detail)}
                                            </div>
                                          ) : (
                                            /* 일반 일정 (이동, 호텔, 안내 등) */
                                            <div className="space-y-1">
                                              {item.label && item.label !== "-" && (
                                                <div className="flex items-center gap-2">
                                                  <span className="text-[11px] font-semibold text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded">
                                                    {item.label}
                                                  </span>
                                                </div>
                                              )}
                                              {item.detail && renderFormattedText(item.detail)}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <div className="text-[13px] text-[#6b7280]">
                                    상세 일정 준비 중입니다.
                                  </div>
                                )}

                                {day.hotelName && (
                                  <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center gap-2 text-[12.5px] text-[#1e293b]">
                                    <Building className="w-4 h-4 text-[#c5a059] shrink-0" />
                                    <span>
                                      <strong>숙박 예정 :</strong> {day.hotelName}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-center text-gray-500 text-[13px]">
                      상세 일정표를 불러오는 중이거나 준비 중입니다.
                    </div>
                  )}
                </div>

                {/* 포함 / 불포함 내역 섹션 */}
                <div>
                  <h2 className="text-[18px] sm:text-[20px] font-bold text-[#111827] mb-3.5 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#3b82f6] rounded-full inline-block" />
                    <span>포함 / 불포함 내역</span>
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* 포함 내역 */}
                    <div className="p-4 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4]">
                      <div className="flex items-center gap-2 text-[#166534] font-bold text-[14px] mb-2.5 pb-2 border-b border-[#bbf7d0]">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                        <span>○ 포함 내역</span>
                      </div>
                      <ul className="space-y-1.5 text-[12.5px] sm:text-[13px] text-[#15803d] list-none p-0 m-0">
                        {pkg.inclusions.included.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#16a34a] font-bold">·</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 불포함 내역 */}
                    <div className="p-4 rounded-xl border border-[#fecaca] bg-[#fef2f2]">
                      <div className="flex items-center gap-2 text-[#991b1b] font-bold text-[14px] mb-2.5 pb-2 border-b border-[#fecaca]">
                        <XCircle className="w-4 h-4 text-[#dc2626]" />
                        <span>× 불포함 내역</span>
                      </div>
                      <ul className="space-y-1.5 text-[12.5px] sm:text-[13px] text-[#b91c1c] list-none p-0 m-0">
                        {pkg.inclusions.excluded.map((exc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#dc2626] font-bold">·</span>
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 취소료 규정 & 예약 시 유의사항 */}
                <div className="space-y-4">
                  {pkg.notices?.cancelPolicy && (
                    <div className="p-4 rounded-xl border border-[#e5e7eb] bg-[#fafafa]">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#ef4444]" />
                        <span>취소료 규정 (특별약관)</span>
                      </h3>
                      {renderFormattedText(pkg.notices.cancelPolicy)}
                    </div>
                  )}

                  {pkg.notices?.caution && (
                    <div className="p-4 rounded-xl border border-[#e5e7eb] bg-[#fafafa]">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#3b82f6]" />
                        <span>예약 시 유의사항</span>
                      </h3>
                      {renderFormattedText(pkg.notices.caution)}
                    </div>
                  )}
                </div>
              </div>

              {/* 우측 사이드바 (lg:col-span-4, sticky) */}
              <div className="lg:col-span-4 sticky top-4 space-y-4">
                <div className="p-5 rounded-2xl border border-[#e2e8f0] bg-white shadow-lg space-y-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#c5a059] bg-[#fbf8f2] border border-[#eedcc1] mb-1.5">
                      다온넷 회원 패키지 우대
                    </span>
                    <h3 className="text-[18px] font-bold text-[#0f172a] leading-snug m-0">
                      {pkg.name}
                    </h3>
                    {pkg.headline && (
                      <p className="text-[12.5px] text-[#2563eb] font-medium mt-1 mb-0">
                        {pkg.headline}
                      </p>
                    )}
                  </div>

                  {/* 5가지 요약 칩 */}
                  <div className="flex flex-wrap gap-1.5 py-3 border-y border-[#f1f5f9]">
                    <span className="px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] text-[12px] font-medium border border-[#e2e8f0]">
                      {pkg.nights}박 {pkg.days}일
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] text-[12px] font-medium border border-[#e2e8f0]">
                      쇼핑 {pkg.shoppingCount}회
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] text-[12px] font-medium border border-[#e2e8f0]">
                      최소 출발 {pkg.minDeparturePax}명
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] text-[12px] font-medium border border-[#e2e8f0]">
                      {pkg.hasOptionalTour ? "선택관광 있음" : "선택관광 없음"}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#f8fafc] text-[#334155] text-[12px] font-medium border border-[#e2e8f0]">
                      최대 {pkg.maxPax}인
                    </span>
                  </div>

                  {/* 최소 인원 알림 */}
                  <div className="p-3 rounded-lg bg-[#f0f9ff] border border-[#bae6fd] text-[#0369a1] text-[12px] leading-relaxed">
                    최소 <strong>{pkg.minDeparturePax}명</strong>이 모여야 출발합니다. 인원 미달 시 출발 20일 전 통보 드립니다.
                  </div>

                  {/* 다온넷 회원 특별 혜택 안내 */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#fbf8f2] to-[#f5eedf] border border-[#e5d4bb] space-y-2 text-[#785b28]">
                    <div className="flex items-center gap-1.5 font-bold text-[13px] text-[#8c6b2d]">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>다온넷 회원 단독 우대 혜택</span>
                    </div>
                    <ul className="text-[12px] space-y-1 list-none p-0 m-0 text-[#634e27]">
                      <li className="flex items-center gap-1">
                        <span className="text-[#c5a059]">✓</span> 회원 전용 특별 우대가 적용
                      </li>
                      <li className="flex items-center gap-1">
                        <span className="text-[#c5a059]">✓</span> 전담 여행 플래너 1:1 맞춤 배정
                      </li>
                      <li className="flex items-center gap-1">
                        <span className="text-[#c5a059]">✓</span> 단체 및 가족 동반 예약 우대 지원
                      </li>
                    </ul>
                  </div>

                  {/* 문의 및 예약 상담 전화 안내 (1533-6041) */}
                  <div className="p-4 rounded-xl bg-[#172c37] text-white text-center space-y-2">
                    <div className="text-[11px] text-[#cbd5e1] font-medium tracking-wider uppercase">
                      PACKAGE TOUR CONCIERGE
                    </div>
                    <div className="text-[13px] text-white font-semibold">
                      패키지 여행 예약 및 맞춤 상담
                    </div>
                    <a
                      href="tel:1533-6041"
                      className="block py-2.5 px-4 rounded-lg bg-[#c5a059] hover:bg-[#d9bc86] text-[#172c37] font-black text-[18px] transition shadow-md"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>1533-6041</span>
                      </div>
                    </a>
                    <div className="text-[10.5px] text-[#94a3b8]">
                      전화 연결 시 전문 상담원이 친절히 안내해 드립니다
                    </div>
                  </div>

                  {/* 온라인 상담 신청 버튼 */}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      openContract(`[패키지 여행 우대 상담 신청] ${pkg.name} (${pkg.country})`);
                    }}
                    className="w-full py-3 rounded-xl border border-[#cbd5e1] hover:border-[#172c37] bg-white hover:bg-gray-50 text-[#172c37] font-bold text-[13px] transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>온라인 간편 상담 예약하기</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
