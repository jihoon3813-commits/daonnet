"use client";

import React, { useState } from "react";
import TopBarV2 from "@/components/v2/TopBarV2";
import HeaderV2 from "@/components/v2/HeaderV2";
import HeroSectionV2 from "@/components/v2/HeroSectionV2";
import MemorialParkSectionV2 from "@/components/v2/MemorialParkSectionV2";
import Membership249SectionV2 from "@/components/v2/Membership249SectionV2";
import PointMallSectionV2 from "@/components/v2/PointMallSectionV2";
import HappyClassSectionV2 from "@/components/v2/HappyClassSectionV2";
import FooterV2 from "@/components/v2/FooterV2";
import FloatingBarV2 from "@/components/v2/FloatingBarV2";

import CertificateModal from "@/components/CertificateModal";
import ContractModal from "@/components/ContractModal";
import LookupModal from "@/components/LookupModal";
import AdminModal from "@/components/AdminModal";

export default function HomeV2() {
  const [searchParams, setSearchParams] = useState({
    region: "ALL",
    type: "ALL",
    keyword: "",
  });

  const handleHeroSearch = (region: string, type: string, keyword: string) => {
    setSearchParams({ region, type, keyword });
  };

  return (
    <main
      className="min-h-screen bg-[#f7f5ef] text-[#26373b] text-[14px] leading-[1.7]"
      style={{ fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* 1. 최상단 상태바 */}
      <TopBarV2 />

      {/* 2. 네비게이션 헤더 */}
      <HeaderV2 />

      {/* 3. 히어로 배너 & 빠른 장지 검색 */}
      <HeroSectionV2 onSearch={handleHeroSearch} />

      {/* 4. 전국 55개 추모공원 특별지원 네트워크 */}
      <MemorialParkSectionV2
        initialRegion={searchParams.region}
        initialType={searchParams.type}
        initialKeyword={searchParams.keyword}
      />

      {/* 5. 다온 프리미엄 249 & 498만 환급보증 상세 */}
      <Membership249SectionV2 />

      {/* 6. 다온넷 회원 전용 포인트 특가몰 (2,490,000P) */}
      <PointMallSectionV2 />

      {/* 7. 해피클래스 2박 3일 무료 숙박권 & 크루즈 */}
      <HappyClassSectionV2 />

      {/* 8. 푸터 */}
      <FooterV2 />

      {/* 9. 하단 고정 24시간 긴급상담 플로팅 바 */}
      <FloatingBarV2 />

      {/* 모달 레이어 (기존 모달 100% 공유 연동) */}
      <CertificateModal />
      <ContractModal />
      <LookupModal />
      <AdminModal />
    </main>
  );
}
