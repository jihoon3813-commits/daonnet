"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MALL_PRODUCTS, MallProduct } from "@/data/pointMall";
import { useDaon } from "@/context/DaonContext";
import { Sparkles, ExternalLink, ShoppingBag, Check } from "lucide-react";

export default function PointMallSectionV2() {
  const { userPoints, deductPoints, resetPoints, openContract } = useDaon();
  const [purchaseHistory, setPurchaseHistory] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleSimulateBuy = (product: MallProduct) => {
    if (product.isComplimentary) {
      openContract("[건강식품 택1 무료 증정 상담] ");
      return;
    }

    if (userPoints < product.pointDeduction) {
      setNotification(
        `보유 포인트가 부족합니다. (필요: ${product.pointDeduction.toLocaleString()}P / 보유: ${userPoints.toLocaleString()}P)`
      );
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
    <section
      id="daon-mall"
      className="bg-[#efeee7] py-6 sm:py-14 lg:py-20 px-4 sm:px-[6%] border-t border-[#dedfd7]"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* 섹션 헤더 & 포인트 월렛 위젯 */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-3 sm:gap-[24px] mb-4 sm:mb-[40px] pb-3 sm:pb-[24px] border-b border-[#d5d8ce]">
          <div>
            <div className="text-[10px] tracking-[1.5px] sm:tracking-[2.7px] text-[#947b50] font-semibold mb-1.5 sm:mb-[14px] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#947b50]" />
              <span>MEMBER EXCLUSIVE POINT MALL · 2,490,000P</span>
            </div>
            <h2
              className="text-[22px] sm:text-[35px] font-medium leading-[1.3] sm:leading-[1.5] tracking-[-0.8px] sm:tracking-[-1.2px] text-[#26373b] m-0 mb-1 sm:mb-[10px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              다온넷 회원 전용 포인트 특가몰
            </h2>
            <p className="text-[11.5px] sm:text-[14px] text-[#747b78] m-0 break-keep">
              가입 즉시 지급되는 <strong className="text-[#26373b]">2,490,000P</strong>로 시중 오픈마켓 최저가보다 최대 83% 저렴하게 현금처럼 차감 구매하세요.
            </p>
          </div>

          {/* 포인트 지갑 박스 */}
          <div className="bg-[#f7f5ef] border border-[#c8cec3] px-3.5 sm:px-[24px] py-2.5 sm:py-[18px] flex items-center justify-between gap-3 sm:gap-[28px] shrink-0 shadow-sm">
            <div>
              <small className="block text-[8.5px] sm:text-[10px] tracking-[1px] sm:tracking-[1.5px] text-[#8c744d] uppercase font-semibold">
                MY SHOPPING POINTS · 즉시 차감 가능
              </small>
              <strong
                className="block text-[18px] sm:text-[30px] text-[#172c37] font-normal mt-0.5 whitespace-nowrap"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {userPoints.toLocaleString()}{" "}
                <span className="text-[12px] sm:text-[14px] text-[#947b50]">P</span>
              </strong>
            </div>

            <button
              onClick={resetPoints}
              title="테스트 포인트 복구 (2,490,000P)"
              className="border border-[#b6bcb7] hover:border-[#172c37] text-[#26373b] px-2 sm:px-[12px] py-1 sm:py-[8px] text-[10.5px] sm:text-[11px] font-medium transition cursor-pointer whitespace-nowrap shrink-0"
            >
              초기화 ↺
            </button>
          </div>
        </div>

        {/* 알림 메시지 배너 */}
        {notification && (
          <div className="mb-4 px-3.5 py-2.5 sm:px-[20px] sm:py-[14px] bg-[#172c37] text-white text-[11.5px] sm:text-[12px] flex items-center justify-between shadow-md break-keep">
            <span>{notification}</span>
            <button
              onClick={() => setNotification(null)}
              className="text-[#d9bc86] hover:text-white ml-2 text-[14px] cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        {/* 상품 카드 4종 그리드 (폐쇄몰 샘플 실데이터 4종 - 모바일 2열) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-[20px] mb-5 sm:mb-[32px]">
          {MALL_PRODUCTS.map((prod, idx) => {
            const hasPurchased = purchaseHistory.includes(prod.id);

            return (
              <article
                key={prod.id}
                className="bg-[#f7f5ef] border border-[#dedfd7] hover:border-[#947b50] flex flex-col justify-between transition-all duration-300 hover:shadow-lg group"
              >
                <div>
                  {/* 상단 썸네일 & 카테고리 뱃지 */}
                  <div className="relative aspect-square w-full bg-white overflow-hidden border-b border-[#e5e4dc]">
                    <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-10 flex flex-col gap-1 items-start">
                      <span className="text-[8px] sm:text-[9px] tracking-tight text-[#747b78] font-bold bg-[#f7f5ef]/90 px-1.5 py-0.5 border border-[#dedfd7] shadow-xs">
                        0{idx + 1} / {prod.category}
                      </span>
                    </div>

                    <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 z-10">
                      <span className="text-[8.5px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-[8px] sm:py-[3px] bg-[#172c37] text-[#d9bc86] shadow-sm">
                        {prod.badge}
                      </span>
                    </div>

                    {/* 상품 이미지 */}
                    <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* 실질 할인율 워터마크 태그 */}
                    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 z-10 bg-[#947b50] text-white px-1.5 py-0.5 text-[9.5px] sm:text-[11px] font-bold tracking-tight shadow">
                      최대 {prod.realDiscountRate}% 절감
                    </div>
                  </div>

                  {/* 상품 정보 및 가격 테이블 */}
                  <div className="p-2 sm:p-[18px] pb-1.5 sm:pb-[14px]">
                    <h3
                      className="text-[12px] sm:text-[14px] font-medium text-[#26373b] leading-[1.35] sm:leading-[1.45] line-clamp-2 min-h-[33px] sm:min-h-[42px] m-0 mb-1.5 sm:mb-[14px] break-keep"
                      style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                      title={prod.name}
                    >
                      {prod.name}
                    </h3>

                    <div className="border-t border-[#dedfd7] pt-1.5 sm:pt-[10px] space-y-1 sm:space-y-[6px] text-[9.5px] sm:text-[11px]">
                      <div className="flex justify-between text-[#8a8f8c] line-through">
                        <span>시중가</span>
                        <span>{prod.marketPrice.toLocaleString()}원</span>
                      </div>

                      <div className="flex justify-between text-[#5e6562]">
                        <span>판매가</span>
                        <span className="font-semibold text-[#26373b]">
                          {prod.memberPrice.toLocaleString()}원
                        </span>
                      </div>

                      <div className="flex justify-between text-[#947b50] font-semibold bg-[#faf7ef] px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                        <span>P할인({prod.discountRate}%)</span>
                        <span className="text-[#a16207]">-{prod.pointDeduction.toLocaleString()}P</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 실결제금액 & 시뮬레이션 및 폐쇄몰 이동 버튼 */}
                <div className="p-2 sm:p-[18px] pt-0 space-y-1.5 sm:space-y-2">
                  <div className="bg-[#eae7dd] px-2 py-1 sm:px-[12px] sm:py-[8px] flex justify-between items-center">
                    <span className="text-[9.5px] sm:text-[11px] text-[#5e6562] font-semibold">
                      실결제액
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <strong className="text-[14px] sm:text-[18px] font-bold text-[#172c37] tracking-tight tabular-nums font-sans">
                        {prod.finalPrice.toLocaleString()}
                      </strong>
                      <span className="text-[13px] font-medium text-[#26373b]">원</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-1">
                    <button
                      onClick={() => handleSimulateBuy(prod)}
                      className={`col-span-3 py-1.5 sm:py-[10px] px-1 sm:px-[10px] text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-0.5 sm:gap-1 transition cursor-pointer ${
                        hasPurchased
                          ? "bg-[#344b49] text-white"
                          : "bg-[#172c37] hover:bg-[#26373b] text-white"
                      }`}
                    >
                      {hasPurchased ? (
                        <>
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>완료</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>P차감</span>
                        </>
                      )}
                    </button>

                    <a
                      href={prod.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-2 py-1.5 sm:py-[10px] px-1 sm:px-[8px] text-[10px] sm:text-[11px] font-medium bg-[#f1eedf] hover:bg-[#e4dfcd] text-[#26373b] border border-[#cfcbbe] flex items-center justify-center gap-0.5 transition"
                      title="폐쇄몰 상품 상세 페이지 새창 열기"
                    >
                      <span>상세</span>
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#747b78]" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 폐쇄형 회원몰 접속 배너 */}
        <div className="bg-[#eae7dd] border border-[#d5d8ce] p-3.5 sm:p-[22px_28px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-[16px]">
          <div>
            <div className="text-[9.5px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] text-[#8c744d] font-semibold uppercase">
              MEMBER&apos;S CLOSED MALL ACCESS
            </div>
            <div className="text-[13px] sm:text-[14px] font-semibold text-[#26373b] mt-0.5 sm:mt-1">
              다온넷 폐쇄형 회원 전용몰 (다온넷.kr) 안내
            </div>
            <div className="text-[11px] sm:text-[12px] text-[#747b78] mt-0.5 break-keep">
              체험 계정: <strong className="text-[#172c37]">ID : test1 / PW : 1234</strong>
              <span className="block sm:inline sm:ml-2 text-[10.5px] sm:text-[11px] text-[#947b50]">
                (20% 포인트 차감 혜택 즉시 확인 가능)
              </span>
            </div>
          </div>

          <a
            href="http://다온넷.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#172c37] hover:bg-[#26373b] text-white px-4 py-2.5 sm:px-[22px] sm:py-[13px] text-[11.5px] sm:text-[12px] font-semibold inline-flex items-center justify-between gap-3 sm:gap-[20px] transition shrink-0 text-center"
          >
            <span>전용몰 바로가기</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
