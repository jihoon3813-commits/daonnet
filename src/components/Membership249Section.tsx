"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  RefreshCcw,
  Sparkles,
  ShoppingBag,
  Building,
  HeartPulse,
  Banknote,
  ChevronRight,
  FileCheck,
} from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function Membership249Section() {
  const { openContract, openCert } = useDaon();

  return (
    <section id="premium-249" className="py-16 bg-[#FAF8F5] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 타이틀 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest uppercase text-white gold-gradient px-4 py-1.5 rounded-full inline-block shadow-sm">
            MAIN MEMBERSHIP PACKAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F1E36] mt-3">
            다온 프리미엄 249 상품 구성
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
            총 판매금액 <strong className="text-[#0F1E36] font-extrabold">2,490,000원(VAT 포함)</strong>으로 누리는 7대 핵심 보증 및 라이프케어 올인원 패키지
          </p>
        </div>

        {/* 498만원 환급보증 하이라이트 배너 */}
        <div
          id="refund-guarantee"
          className="navy-gradient rounded-3xl p-6 sm:p-10 text-white shadow-2xl mb-12 border-2 border-[#C5A059]/60 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#C5A059] text-[#091324] font-black text-xs px-3.5 py-1 rounded-md shadow">
                <Sparkles className="w-3.5 h-3.5" />
                특별 보장 · 10년 공증 환급보증서 발급
              </div>

              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                가입금액 249만 원,<br />
                <span className="text-[#E5C98B]">환급보증서 4,980,000원</span> 발행!
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                안전한 납입과 든든한 보장을 약속합니다. 10년 공증 환급증서가 발급되며, 가입{" "}
                <strong className="text-white font-bold">2년 만기 후 자유롭게 양도·양수</strong>가 가능합니다. 
                (장례·추모 등 주요 서비스 미이용 시 약정 및 보증서 조건에 따라 반환 지급)
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  10년 공증 환급증서 발급
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <RefreshCcw className="w-3.5 h-3.5 text-[#C5A059]" />
                  가입 2년 후 양도·양수 가능
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  (주)에스엘부티크호텔 반환 지급 약정 기준
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={openCert}
                  className="bg-white/15 hover:bg-white/25 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-[#C5A059]/40 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  <span>모바일 보증서 미리보기</span>
                </button>
                <button
                  onClick={() => openContract()}
                  className="gold-gradient text-white font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md hover:opacity-95 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>가입 및 보증서 신청</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 우측: 보증서 견본 카드 */}
            <div className="lg:col-span-5">
              <div className="cert-card text-[#0F1E36] rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden bg-white">
                <div className="flex justify-between items-start border-b border-amber-200 pb-3.5 mb-4">
                  <div>
                    <div className="text-[11px] font-extrabold text-[#C5A059] tracking-wider">
                      DAONNET GUARANTEE CERTIFICATE
                    </div>
                    <div className="text-xl font-black text-[#0F1E36] mt-0.5">
                      다온넷 환급보증서 (견본)
                    </div>
                  </div>
                  <Award className="w-9 h-9 text-[#C5A059]" />
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">상품구분</span>
                    <span className="font-bold text-[#0F1E36]">다온 프리미엄 249</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">실제 가입판매가</span>
                    <span className="font-bold text-[#0F1E36]">2,490,000 원 (VAT포함)</span>
                  </div>
                  <div className="flex justify-between items-center bg-amber-50/80 p-3 rounded-xl border border-amber-200 my-2">
                    <span className="font-bold text-[#0F1E36] text-xs sm:text-sm">
                      환급보증서 금액
                    </span>
                    <span className="text-2xl font-black text-red-600">4,980,000 원</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1 text-gray-500">
                    <span>보증 조건</span>
                    <span className="font-semibold text-gray-700">10년 공증 / 2년 후 양도·양수 가능</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>반환 지급처</span>
                    <span className="font-semibold text-gray-700">(주)에스엘부티크호텔 약정</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7대 구성 상세 그리드 (PDF 방판 조견표 100% 일치) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 구성 1: 환급보증서 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-[#C5A059] bg-amber-50 px-3 py-1 rounded-full">
                  보증 혜택 01
                </span>
                <span className="text-xl font-black text-red-600">4,980,000원</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C5A059]" />
                1. 10년 공증 환급보증서
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                10년 공증 환급증서 발급. 가입 2년 후 양도·양수가 가능하며, 주요 서비스 미이용 시 반환 지급약정 및 보증서 조건에 따라 안전하게 반환 지급됩니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 실물 또는 모바일 보증서 발급
            </div>
          </div>

          {/* 구성 2: 장례보증 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-[#C5A059] bg-amber-50 px-3 py-1 rounded-full">
                  보증 혜택 02
                </span>
                <span className="text-xl font-black text-[#0F1E36]">1,980,000원</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                2. 후불장례 이행보증
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                전국장례통합 서비스를 통해 365일 24시간 장례접수 가능. 물가 상승 대비형으로 전문 인력·용품·차량 등 라이프케어 통합 의전을 지원합니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 1구좌당 1회 원칙 / 직계가족 양도 가능
            </div>
          </div>

          {/* 구성 3: 추모공원 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-[#C5A059] bg-amber-50 px-3 py-1 rounded-full">
                  보증 혜택 03
                </span>
                <span className="text-xl font-black text-[#0F1E36]">봉안당 1단 기준</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#C5A059]" />
                3. 전국 추모공원 특별지원
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                직영 유토피아 추모관을 포함한 전국 주요 추모공원 이용 안내 및 봉안함 제공. 유토피아 외 제휴 시설은 정가 대비 10~70% 할인가가 적용됩니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 사전 로얄석 지정 및 직계가족 양도 가능
            </div>
          </div>

          {/* 구성 4: 쇼핑포인트 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                  즉시 혜택 04
                </span>
                <span className="text-xl font-black text-blue-700">2,490,000 P</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                4. 다온넷 전용몰 쇼핑포인트
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                회원가입 및 본인 인증 즉시 다온넷.kr 전용 폐쇄몰에서 현금처럼 차감하여 특가 상품을 구매할 수 있는 249만 포인트를 지급합니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 최대 80% 포인트 차감 할인 구매
            </div>
          </div>

          {/* 구성 5: 해피클래스 & 크루즈 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  레저 혜택 05
                </span>
                <span className="text-xl font-black text-[#0F1E36]">2박 3일 숙박권</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-600" />
                5. 해피클래스 & 크루즈 우대
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                전국 약 50개 제휴 호텔·리조트·펜션 2박 3일 무료 숙박권(1박 15만 원 상당) 제공 및 럭셔리 크루즈 여행 회원 전용 할인가 혜택을 제공합니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 청소비 별도 (평일 1.9만 / 주말 3.9만)
            </div>
          </div>

          {/* 구성 6 & 7: 건강식품 + 위로지원금 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 hover:border-[#C5A059] transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  특별 지원 06·07
                </span>
                <span className="text-xl font-black text-green-700">58만원 상당 + 40만원</span>
              </div>
              <h4 className="text-lg font-black text-[#0F1E36] mb-2 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-red-500" />
                6. 건강식품 & 7. 위로지원금
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                온라인가 58~59.8만 원 상당의 <strong>삼칠그라 365</strong>(또는 경남제약 알부민 맥스) 무료 증정 및 등급별 <strong>위로지원금 현금 400,000원</strong>을 지급합니다.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3">
              ※ 건강식품 1~3일 내 무료배송
            </div>
          </div>
        </div>

        {/* 4단계 이용 흐름 다이어그램 (자료 종합 기반) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <h3 className="text-base sm:text-lg font-black text-[#0F1E36] mb-6 flex items-center gap-2">
            <Banknote className="w-5 h-5 text-[#C5A059]" />
            주문 · 결제 · 서비스 제공 흐름 (원스톱 라이프케어)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 relative">
              <span className="w-7 h-7 rounded-full bg-[#0F1E36] text-white flex items-center justify-center font-black text-xs mb-2">
                1
              </span>
              <div className="font-extrabold text-[#0F1E36] text-sm">가입 / 결제</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                신용카드(지정 PG사) / CMS(자동이체) / 계좌이체 등 간편 신청
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 relative">
              <span className="w-7 h-7 rounded-full bg-[#0F1E36] text-white flex items-center justify-center font-black text-xs mb-2">
                2
              </span>
              <div className="font-extrabold text-[#0F1E36] text-sm">증서 / 혜택 발급</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                498만 환급보증서 · 장례보증서 · 추모공원증서 · 봉안함 · 숙박권 · 249만P
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 relative">
              <span className="w-7 h-7 rounded-full bg-[#0F1E36] text-white flex items-center justify-center font-black text-xs mb-2">
                3
              </span>
              <div className="font-extrabold text-[#0F1E36] text-sm">서비스 이용</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                장례·추모 발생 시 24시간 고객센터(1877-8816) 접수 및 숙박/크루즈 예약
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 relative">
              <span className="w-7 h-7 rounded-full bg-[#C5A059] text-[#091324] flex items-center justify-center font-black text-xs mb-2">
                4
              </span>
              <div className="font-extrabold text-[#0F1E36] text-sm">사후 관리 & 환급</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                2년 후 자유 양도양수, 10년 만기 미이용 시 약정에 따른 안심 환급 반환
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
