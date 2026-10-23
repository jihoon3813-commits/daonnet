"use client";

import React from "react";
import { Phone, Shield, FileText } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function Footer() {
  const { openCert, openAdmin } = useDaon();

  return (
    <footer className="bg-[#091324] text-gray-400 py-12 text-xs border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-gray-800">
          <div>
            <div className="text-white font-black text-lg mb-2 flex items-center gap-2">
              <span>주식회사 다온넷 (DAONNET Co., Ltd.)</span>
            </div>
            <p className="leading-relaxed">
              고객상담센터(장례·추모 24시간 접수 및 사전상담):{" "}
              <strong className="text-[#C5A059] text-sm font-black">1877-8816</strong>
            </p>
            <p className="mt-1">
              공식 제휴몰: <a href="http://www.xn--hu1bo87b2xb.kr/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">www.다온넷.kr</a> | 다온 프리미엄 249 라이프케어 사업본부
            </p>
            <p className="mt-2 text-[11px] text-gray-500">
              다온넷은 안성 유토피아 추모관 직영 및 전국 55개 주요 장사시설과의 제휴 네트워크를 통해 고객 맞춤형 추모·장례 이행 서비스를 제공합니다.
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-gray-800 space-y-1.5 text-[11px] leading-relaxed">
            <div className="text-white font-bold mb-1 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
              서비스 이용 및 방송/판매 필수 고지사항
            </div>
            <p>• 장례·추모공원 이행증서는 실물 또는 모바일로 발급되며, 서비스 발생 시 반드시 고객센터(1877-8816) 접수 후 혜택이 적용됩니다.</p>
            <p>• 추모공원·숙박·크루즈 등 제휴 서비스는 이용 시점의 제휴 여부, 시설 객실 현황, 시즌 및 운영규정에 따라 제한 또는 추가비용이 발생할 수 있습니다.</p>
            <p>• 환급보증서 498만 원은 보증서 금액 기준이며, 실제 환급 절차·지급형태·조건은 환급보증서 및 반환 지급약정 내용을 우선합니다.</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center text-gray-500 gap-2">
          <span>Copyright © 2026 DAONNET Co., Ltd. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <button onClick={openCert} className="hover:text-gray-300 transition flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>환급보증서 약정</span>
            </button>
            <span>|</span>
            <button onClick={openAdmin} className="hover:text-gray-300 transition">
              <span>관리자 로그인</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
