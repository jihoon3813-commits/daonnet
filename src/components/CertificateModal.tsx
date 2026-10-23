"use client";

import React from "react";
import { X, Award, ShieldCheck, Landmark, Gift, Hotel, CheckCircle } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function CertificateModal() {
  const { isCertOpen, closeCert, userPoints, certificates } = useDaon();

  if (!isCertOpen) return null;

  const latestCert = certificates[0] || {
    certNumber: "DAON-2026-881601",
    customerName: "다온넷 정회원",
    guaranteeAmount: 4980000,
    funeralAmount: 1980000,
    memorialTier: "봉안당 1단 기준 (유토피아 직영 및 전국)",
    points: 2490000,
    issuedDate: "2026-03-15",
    status: "공증 환급 유효 (10년)",
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100 animate-scale-up">
        {/* 헤더 */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
          <div>
            <span className="text-xs font-black text-[#C5A059] tracking-wider block">
              MY MEMBERSHIP WALLET
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F1E36] mt-0.5">
              다온넷 모바일 이행보증서 & 포인트 월렛
            </h3>
          </div>
          <button
            onClick={closeCert}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 증서 발급 정보 헤더 */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 mb-6 flex flex-wrap justify-between items-center text-xs text-gray-700 gap-2">
          <div>
            <span className="text-gray-500">증서 고유번호: </span>
            <strong className="text-[#0F1E36] font-mono">{latestCert.certNumber}</strong>
          </div>
          <div>
            <span className="text-gray-500">발급일자: </span>
            <strong className="text-[#0F1E36]">{latestCert.issuedDate}</strong>
          </div>
          <div className="flex items-center gap-1 text-green-700 font-bold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{latestCert.status}</span>
          </div>
        </div>

        {/* 3대 핵심 보증서 카드 그리드 */}
        <div className="grid sm:grid-cols-3 gap-3.5 mb-6">
          {/* 제1호 보증서: 환급 */}
          <div className="cert-card p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#C5A059] font-bold">제1호 보증서</span>
                <Award className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="font-extrabold text-[#0F1E36] text-sm mt-1">
                10년 공증 환급보증서
              </div>
              <div className="text-xl font-black text-red-600 mt-2">
                {latestCert.guaranteeAmount.toLocaleString()}원
              </div>
            </div>
            <div className="text-[11px] text-gray-500 mt-2 pt-2 border-t border-amber-200">
              가입 2년 후 양도·양수 가능
            </div>
          </div>

          {/* 제2호 보증서: 후불장례 */}
          <div className="cert-card p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#C5A059] font-bold">제2호 보증서</span>
                <ShieldCheck className="w-4 h-4 text-[#0F1E36]" />
              </div>
              <div className="font-extrabold text-[#0F1E36] text-sm mt-1">
                후불장례 이행증서
              </div>
              <div className="text-xl font-black text-[#0F1E36] mt-2">
                {latestCert.funeralAmount.toLocaleString()}원
              </div>
            </div>
            <div className="text-[11px] text-gray-500 mt-2 pt-2 border-t border-amber-200">
              365일 24시간 의전 지원
            </div>
          </div>

          {/* 제3호 보증서: 추모공원 */}
          <div className="cert-card p-4 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#C5A059] font-bold">제3호 보증서</span>
                <Landmark className="w-4 h-4 text-[#0F1E36]" />
              </div>
              <div className="font-extrabold text-[#0F1E36] text-sm mt-1">
                추모공원 이행증서
              </div>
              <div className="text-lg font-black text-[#0F1E36] mt-2 leading-tight">
                {latestCert.memorialTier}
              </div>
            </div>
            <div className="text-[11px] text-gray-500 mt-2 pt-2 border-t border-amber-200">
              유토피아 및 전국 55곳
            </div>
          </div>
        </div>

        {/* 부가 혜택 월렛 현황 */}
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs sm:text-sm space-y-3 mb-6">
          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-gray-600 flex items-center gap-2">
              <Gift className="w-4 h-4 text-blue-600" />
              보유 쇼핑포인트 (다온넷.kr 전용몰)
            </span>
            <strong className="text-blue-600 font-extrabold text-base">
              {userPoints.toLocaleString()} P
            </strong>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-gray-200">
            <span className="text-gray-600 flex items-center gap-2">
              <Hotel className="w-4 h-4 text-emerald-600" />
              해피클래스 무료 숙박권
            </span>
            <strong className="text-[#0F1E36] font-bold">2박 3일권 (전국 50곳 이용)</strong>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-gray-600 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A059]" />
              제공 사은 건강식품 및 위로지원금
            </span>
            <strong className="text-gray-900 font-bold">
              삼칠그라 365 + 위로금 400,000원
            </strong>
          </div>
        </div>

        {/* 하단 닫기 버튼 */}
        <button
          onClick={closeCert}
          className="w-full bg-[#0F1E36] hover:bg-[#091324] text-white font-extrabold py-3.5 rounded-2xl transition cursor-pointer"
        >
          확인 닫기
        </button>
      </div>
    </div>
  );
}
