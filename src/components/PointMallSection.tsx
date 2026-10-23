"use client";

import React, { useState } from "react";
import {
  Coins,
  Sparkles,
  Package,
  Compass,
  HeartPulse,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { MALL_PRODUCTS, MallProduct } from "@/data/pointMall";
import { useDaon } from "@/context/DaonContext";

export default function PointMallSection() {
  const { userPoints, deductPoints, resetPoints, openContract } = useDaon();
  const [purchaseHistory, setPurchaseHistory] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-12 h-12 text-blue-500" />;
      case "Package":
        return <Package className="w-12 h-12 text-amber-500" />;
      case "Compass":
        return <Compass className="w-12 h-12 text-emerald-500" />;
      case "HeartPulse":
        return <HeartPulse className="w-12 h-12 text-[#C5A059]" />;
      default:
        return <Package className="w-12 h-12 text-gray-400" />;
    }
  };

  const handleSimulateBuy = (product: MallProduct) => {
    if (product.isComplimentary) {
      openContract();
      return;
    }

    if (userPoints < product.pointDeduction) {
      setNotification(`보유 포인트가 부족합니다. (필요: ${product.pointDeduction.toLocaleString()}P / 보유: ${userPoints.toLocaleString()}P)`);
      setTimeout(() => setNotification(null), 3500);
      return;
    }

    const success = deductPoints(product.pointDeduction);
    if (success) {
      setPurchaseHistory((prev) => [product.id, ...prev]);
      setNotification(
        `[${product.name}] 포인트 차감 구매가 완료되었습니다! (차감: -${product.pointDeduction.toLocaleString()}P, 실결제: ${product.finalPrice.toLocaleString()}원)`
      );
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <section id="daon-mall" className="py-10 sm:py-16 max-w-7xl mx-auto px-4">
      {/* 헤더 & 포인트 월렛 위젯 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-white bg-blue-600 px-3.5 py-1.5 rounded-full inline-block">
            MEMBER EXCLUSIVE POINT MALL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F1E36] mt-3 leading-snug">
            다온넷 회원 전용 포인트 특가몰
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
            가입 즉시 지급되는 <strong className="text-blue-600">2,490,000P</strong>로 오픈마켓 최저가보다 최대 80% 저렴하게 현금처럼 차감 구매하세요.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#C5A059] shrink-0">
              <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A059]" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-semibold">나의 사용 가능 쇼핑포인트</div>
              <div className="text-lg sm:text-xl font-black text-[#0F1E36] whitespace-nowrap">
                {userPoints.toLocaleString()} P{" "}
                <span className="text-[11px] sm:text-xs font-normal text-green-700">(즉시 차감 가능)</span>
              </div>
            </div>
          </div>

          <button
            onClick={resetPoints}
            title="테스트 포인트 복구 (2,490,000P)"
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-amber-100/50 transition cursor-pointer shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 알림 토스트 */}
      {notification && (
        <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{notification}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* 상품 카드 그리드 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {MALL_PRODUCTS.map((prod) => {
          const hasPurchased = purchaseHistory.includes(prod.id);

          return (
            <div
              key={prod.id}
              className={`bg-white rounded-3xl shadow-sm border transition flex flex-col justify-between overflow-hidden ${
                prod.isComplimentary
                  ? "border-2 border-[#C5A059] ring-2 ring-[#C5A059]/15"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              <div>
                {/* 썸네일 박스 */}
                <div
                  className={`relative h-48 flex items-center justify-center p-4 ${
                    prod.isComplimentary ? "bg-amber-50/70" : "bg-gray-50"
                  }`}
                >
                  <span
                    className={`absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-lg ${
                      prod.isComplimentary
                        ? "gold-gradient text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {prod.badge}
                  </span>
                  {getProductIcon(prod.iconName)}
                </div>

                {/* 상품 정보 */}
                <div className="p-5">
                  <div className="text-[11px] font-bold text-gray-400 mb-1">
                    {prod.category}
                  </div>
                  <h3 className="font-extrabold text-[#0F1E36] text-sm line-clamp-2 h-10 leading-snug">
                    {prod.name}
                  </h3>

                  {/* 가격 비교표 */}
                  <div className="mt-3 space-y-1.5 text-xs bg-gray-50/80 p-3 rounded-xl border border-gray-100">
                    <div className="flex justify-between text-gray-400 line-through">
                      <span>타사 오픈마켓 최저가</span>
                      <span>{prod.marketPrice.toLocaleString()}원</span>
                    </div>
                    {!prod.isComplimentary ? (
                      <>
                        <div className="flex justify-between text-gray-600">
                          <span>다온넷 회원 판매가</span>
                          <span className="font-bold">{prod.memberPrice.toLocaleString()}원</span>
                        </div>
                        <div className="flex justify-between text-blue-600 font-extrabold">
                          <span>쇼핑포인트 할인({prod.discountRate}%)</span>
                          <span>- {prod.pointDeduction.toLocaleString()} P</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between text-green-700 font-bold">
                        <span>프리미엄 249 가입 회원</span>
                        <span>전원 무료 증정 (택1)</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 하단 결제 버튼 */}
              <div className="p-5 pt-0">
                <div className="bg-gray-50 p-3 rounded-2xl flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-gray-600">실제 결제금액</span>
                  <span
                    className={`text-lg font-black ${
                      prod.isComplimentary ? "text-[#C5A059]" : "text-red-600"
                    }`}
                  >
                    {prod.isComplimentary ? "0원 (무료배송)" : `${prod.finalPrice.toLocaleString()}원`}
                  </span>
                </div>

                <button
                  onClick={() => handleSimulateBuy(prod)}
                  className={`w-full py-2.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    prod.isComplimentary
                      ? "gold-gradient text-white hover:opacity-95 shadow"
                      : hasPurchased
                      ? "bg-gray-800 text-gray-300"
                      : "bg-[#0F1E36] hover:bg-[#091324] text-white"
                  }`}
                >
                  {prod.isComplimentary ? (
                    "가입하고 무료 수령하기"
                  ) : hasPurchased ? (
                    "추가 포인트 차감 구매"
                  ) : (
                    "포인트 차감 구매하기"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 전용몰 접속 안내 배너 (PDF 10페이지 자료 반영) */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
            P
          </div>
          <div>
            <div className="font-extrabold text-[#0F1E36] text-xs sm:text-sm">
              다온넷 폐쇄형 회원몰 (www.다온넷.kr) 안내
            </div>
            <div className="text-gray-600 mt-0.5 text-[11px] sm:text-xs">
              공식 제휴 폐쇄몰 체험 계정: <strong className="text-blue-900">ID : test1 / PW : 1234</strong>
            </div>
          </div>
        </div>

        <a
          href="http://www.xn--hu1bo87b2xb.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 sm:py-2 rounded-xl transition flex items-center gap-1 shrink-0"
        >
          <span>다온넷몰 바로가기</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
