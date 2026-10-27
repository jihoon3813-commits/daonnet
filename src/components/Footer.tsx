"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Shield, FileText, Settings, X } from "lucide-react";
import { useDaon } from "@/context/DaonContext";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Footer() {
  const { openCert, openAdmin } = useDaon();
  const settings = useQuery(api.settings.getSettings);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // 기본값 설정
  const companyName = settings?.companyName || "주식회사 다온넷 (DAONNET Co., Ltd.)";
  const department = settings?.department || "다온 프리미엄 249 라이프케어 사업본부";
  const callCenterTitle = settings?.callCenterTitle || "고객상담센터 (365일 24시간 장례·추모 접수)";
  const callCenterPhone = settings?.callCenterPhone || "1877-8816";
  const mallName = settings?.mallName || "다온넷.kr";
  const mallUrl = settings?.mallUrl || "http://다온넷.kr";
  const callCenterSubtext = settings?.callCenterSubtext || "장례·추모공원 사전 예약 및 로얄석 상담 상시 운영";
  const noticeText = settings?.noticeText || `• 장례·추모공원 이행증서는 실물 또는 모바일로 발급되며, 서비스 발생 시 반드시 고객센터(1877-8816) 접수 후 혜택이 적용됩니다.
• 추모공원·숙박·크루즈 등 제휴 서비스는 이용 시점의 제휴 여부, 시설 객실 현황, 시즌 및 운영규정에 따라 제한 또는 추가비용이 발생할 수 있습니다.
• 환급보증서 498만 원은 보증서 금액 기준이며, 실제 환급 절차·지급형태·조건은 환급보증서 및 반환 지급약정 내용을 우선합니다.`;
  const copyright = settings?.copyright || "© 2026 DAONNET Co., Ltd. All rights reserved.";
  const privacyPolicy = settings?.privacyPolicy || "";

  return (
    <>
      <footer className="bg-[#091324] text-gray-400 py-12 text-xs border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-gray-800">
            <div>
              <div className="text-white font-black text-lg mb-2 flex items-center gap-2">
                <span>{companyName}</span>
              </div>
              <p className="leading-relaxed">
                {callCenterTitle}:{" "}
                <a
                  href={`tel:${callCenterPhone.replace(/[^0-9]/g, "")}`}
                  className="text-[#C5A059] text-sm font-black hover:underline"
                >
                  {callCenterPhone}
                </a>
              </p>
              <p className="mt-1">
                공식 제휴몰:{" "}
                <a
                  href={mallUrl.startsWith("http") ? mallUrl : `http://${mallUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white underline"
                >
                  {mallName}
                </a>{" "}
                | {department}
              </p>
              <p className="mt-2 text-[11px] text-gray-500">
                {callCenterSubtext}
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-gray-800 space-y-1.5 text-[11px] leading-relaxed">
              <div className="text-white font-bold mb-1 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                서비스 이용 및 방송/판매 필수 고지사항
              </div>
              <div className="whitespace-pre-line text-gray-300">
                {noticeText}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center text-gray-500 gap-2">
            <span>{copyright}</span>
            <div className="flex items-center space-x-4">
              <button onClick={openCert} className="hover:text-gray-300 transition flex items-center gap-1 cursor-pointer">
                <FileText className="w-3.5 h-3.5" />
                <span>환급보증서 약정</span>
              </button>
              <span>|</span>
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-gray-300 transition cursor-pointer"
              >
                <span>개인정보 처리방침</span>
              </button>
              <span>|</span>
              {/* 관리자 버튼: 푸터에 명확한 버튼 배치 (새창으로 열기) */}
              <Link
                href="/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 text-[#C5A059] transition font-bold cursor-pointer border border-gray-700 hover:border-[#C5A059]/50"
                title="관리자 콘솔 접속 (새창)"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>관리자 로그인</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* 개인정보 처리방침 전문 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F1E36] border border-[#C5A059]/40 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up text-white">
            <div className="p-5 sm:p-6 border-b border-gray-800 flex justify-between items-center bg-[#091324]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-bold text-base sm:text-lg">개인정보 수집 및 이용 방침</h3>
              </div>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 text-xs text-gray-300 leading-relaxed whitespace-pre-line bg-[#0c182c]">
              {privacyPolicy || "등록된 개인정보 처리방침이 없습니다."}
            </div>
            <div className="p-4 bg-[#091324] border-t border-gray-800 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 gold-gradient text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
