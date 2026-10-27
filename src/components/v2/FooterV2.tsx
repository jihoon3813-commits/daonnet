"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDaon } from "@/context/DaonContext";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Settings, Shield, X, FileText } from "lucide-react";

export default function FooterV2() {
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
      <footer className="bg-[#e8e7df] text-[#26373b] py-8 sm:py-[55px] pb-24 sm:pb-[110px] px-4 sm:px-[6%] text-[11px] border-t border-[#dedfd7]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.4fr] gap-6 sm:gap-[35px]">
          {/* 1열: 로고 및 회사 정보 */}
          <div className="self-start">
            <a
              href="#home"
              className="inline-flex items-center gap-2 leading-[1.1] text-[#172c37]"
            >
              <span
                className="text-[36px] sm:text-[48px] font-normal tracking-[-2px] sm:tracking-[-4px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                ∞
              </span>
              <div>
                <span
                  className="block text-[18px] sm:text-[22px] font-semibold tracking-[1.5px] sm:tracking-[2px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  DAONNET
                </span>
                <small className="block text-[9px] tracking-[1.5px] sm:tracking-[2px] text-[#7e847e] mt-1">
                  기억을 잇고, 삶을 돌보다
                </small>
              </div>
            </a>

            <p className="text-[11px] text-[#747b78] mt-3 sm:mt-4 leading-[1.6] sm:leading-[1.7] m-0 break-keep">
              {companyName}
              <br />
              {department}
            </p>
          </div>

          {/* 2열: 고객상담센터 */}
          <div>
            <b className="font-semibold text-xs sm:text-[12px] text-[#26373b] block">
              {callCenterTitle}
            </b>
            <a
              href={`tel:${callCenterPhone.replace(/[^0-9]/g, "")}`}
              className="block text-[22px] sm:text-[26px] text-[#172c37] my-1 sm:my-[8px] hover:text-[#947b50] transition font-bold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {callCenterPhone}
            </a>
            <small className="block text-[10px] text-[#7e847e] leading-[1.6] break-keep">
              공식 제휴몰:{" "}
              <a
                href={mallUrl.startsWith("http") ? mallUrl : `http://${mallUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#172c37]"
              >
                {mallName}
              </a>
              <br />
              {callCenterSubtext}
            </small>
          </div>

          {/* 3열: 법적 고지사항 및 하단 링크 */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="text-[10px] text-[#5e6562] leading-[1.65] sm:leading-[1.7] mb-3 whitespace-pre-line break-keep">
              {noticeText}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-2.5 sm:pt-3 border-t border-[#d5d8ce] text-[10px] text-[#7e847e]">
              <span>{copyright}</span>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={openCert}
                  className="hover:text-[#172c37] underline cursor-pointer"
                >
                  환급보증서 약정
                </button>
                <span>·</span>
                <button
                  onClick={() => setShowPrivacyModal(true)}
                  className="hover:text-[#172c37] underline cursor-pointer"
                >
                  개인정보 처리방침
                </button>
                <span>·</span>
                {/* 관리자 버튼: 푸터에 강조된 버튼 배치 (새창으로 열기) */}
                <Link
                  href="/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#172c37] text-[#e3e6e5] hover:bg-[#254252] hover:text-white transition font-semibold cursor-pointer shadow-xs"
                  title="관리자 콘솔 바로가기 (새창)"
                >
                  <Settings className="w-3 h-3 text-[#d9bc86]" />
                  <span>관리자 콘솔</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 개인정보 처리방침 전문 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up">
            <div className="p-5 sm:p-6 border-b border-gray-100 flex justify-between items-center bg-[#172c37] text-white">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#d9bc86]" />
                <h3 className="font-bold text-base sm:text-lg">개인정보 수집 및 이용 방침</h3>
              </div>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-300 hover:text-white p-1 rounded-full cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 text-xs text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50/50">
              {privacyPolicy || "등록된 개인정보 처리방침이 없습니다."}
            </div>
            <div className="p-4 bg-white border-t border-gray-100 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 bg-[#172c37] hover:bg-[#254252] text-white text-xs font-bold rounded-xl transition cursor-pointer"
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
