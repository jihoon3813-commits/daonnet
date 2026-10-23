"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MemorialParkSection from "@/components/MemorialParkSection";
import Membership249Section from "@/components/Membership249Section";
import PointMallSection from "@/components/PointMallSection";
import HappyClassSection from "@/components/HappyClassSection";
import FloatingBar from "@/components/FloatingBar";
import Footer from "@/components/Footer";

import CertificateModal from "@/components/CertificateModal";
import ContractModal from "@/components/ContractModal";
import LookupModal from "@/components/LookupModal";
import AdminModal from "@/components/AdminModal";

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    region: "ALL",
    type: "ALL",
    keyword: "",
  });

  const handleHeroSearch = (region: string, type: string, keyword: string) => {
    setSearchParams({ region, type, keyword });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-24">
      {/* 1. 최상단 상태바 */}
      <TopBar />

      {/* 2. 네비게이션 헤더 */}
      <Header />

      {/* 3. 히어로 배너 & 빠른 장지 검색 */}
      <HeroSection onSearch={handleHeroSearch} />

      {/* 4. 전국 55개 추모공원 특별지원 네트워크 */}
      <MemorialParkSection
        initialRegion={searchParams.region}
        initialType={searchParams.type}
        initialKeyword={searchParams.keyword}
      />

      {/* 5. 다온 프리미엄 249 & 498만 환급보증 상세 */}
      <Membership249Section />

      {/* 6. 다온넷 회원 전용 포인트 특가몰 (2,490,000P) */}
      <PointMallSection />

      {/* 7. 해피클래스 2박 3일 무료 숙박권 & 크루즈 */}
      <HappyClassSection />

      {/* 8. 푸터 */}
      <Footer />

      {/* 9. 하단 고정 24시간 긴급상담 플로팅 바 */}
      <FloatingBar />

      {/* 모달 레이어 */}
      <CertificateModal />
      <ContractModal />
      <LookupModal />
      <AdminModal />
    </main>
  );
}
