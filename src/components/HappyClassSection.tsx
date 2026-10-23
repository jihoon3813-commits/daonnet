"use client";

import React from "react";
import {
  Hotel,
  Ship,
  Sparkles,
  Phone,
  CheckCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { RESORT_LIST } from "@/data/pointMall";

export default function HappyClassSection() {
  return (
    <section id="happy-class" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black tracking-widest uppercase text-[#C5A059] bg-[#0F1E36] px-3.5 py-1.5 rounded-full inline-block">
              LIFE & LEISURE CARE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0F1E36] leading-tight">
              해피클래스 2박 3일 무료숙박권 & 럭셔리 크루즈
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              전국 약 50개 제휴 호텔·리조트·펜션에서 이용 가능한{" "}
              <strong className="text-[#0F1E36] font-bold">2박 3일 숙박권(1박 평균 150,000원 상당)</strong>을 제공합니다.
              또한 초호화 크루즈 여행 상품 예약 시 회원 전용 특별 할인가와 기항지 특전 혜택을 누리실 수 있습니다.
            </p>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-2 text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F1E36]">숙박 이용 안내:</strong> 평일 청소비 19,000원 / 주말 청소비 39,000원 별도 (성수기·객실유형에 따라 추가요금 발생 가능, 직계가족 양도 가능)
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F1E36]">크루즈 이용 안내:</strong> 최소 6개월 이전 사전 예약 및 맞춤 상담 필수 (고객센터 1877-8816)
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl navy-gradient text-white text-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Ship className="w-6 h-6 text-[#C5A059]" />
                <div>
                  <div className="font-bold text-sm">크루즈 & 레저 투어 전담 데스크</div>
                  <div className="text-gray-300">회원 전용 할인 및 기항지 투어 지원</div>
                </div>
              </div>
              <a
                href="tel:1877-8816"
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>1877-8816</span>
              </a>
            </div>
          </div>

          {/* 전국 50곳 주요 제휴 숙박 리스트 */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200">
              <h3 className="font-black text-[#0F1E36] text-base sm:text-lg flex items-center gap-2">
                <Hotel className="w-5 h-5 text-[#C5A059]" />
                해피클래스 전국 50여 곳 주요 제휴 숙박시설
              </h3>
              <span className="text-xs bg-amber-100 text-amber-900 font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C5A059]" /> 2박 3일권
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {RESORT_LIST.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-xs hover:border-[#C5A059]/40 transition"
                >
                  <div className="font-black text-[#0F1E36] mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    [{group.region}]
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {group.places.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[11px] text-gray-500 text-right">
              ※ 제휴 시설 리스트는 시즌 및 제휴 협약 현황에 따라 일부 변경될 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
