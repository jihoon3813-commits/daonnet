"use client";

import React, { useState } from "react";
import { MALL_PRODUCTS, MallProduct } from "@/data/pointMall";
import { useDaon } from "@/context/DaonContext";

export default function PointMallSectionV2() {
  const { userPoints, deductPoints, resetPoints, openContract } = useDaon();
  const [purchaseHistory, setPurchaseHistory] = useState<string[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleSimulateBuy = (product: MallProduct) => {
    if (product.isComplimentary) {
      openContract();
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
      className="bg-[#efeee7] py-[68px] lg:py-[96px] px-[6%] border-t border-[#dedfd7]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 섹션 헤더 & 포인트 월렛 위젯 */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-[24px] mb-[40px] pb-[24px] border-b border-[#d5d8ce]">
          <div>
            <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[14px] uppercase">
              MEMBER EXCLUSIVE POINT MALL · 2,490,000P
            </div>
            <h2
              className="text-[28px] sm:text-[35px] font-medium leading-[1.5] tracking-[-1.2px] text-[#26373b] m-0 mb-[10px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              다온넷 회원 전용 포인트 특가몰
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#747b78] m-0">
              가입 즉시 지급되는 <strong className="text-[#26373b]">2,490,000P</strong>로 오픈마켓 최저가보다 최대 80% 저렴하게 현금처럼 차감 구매하세요.
            </p>
          </div>

          {/* 포인트 지갑 박스 */}
          <div className="bg-[#f7f5ef] border border-[#c8cec3] px-[24px] py-[18px] flex items-center justify-between gap-[28px] shrink-0">
            <div>
              <small className="block text-[10px] tracking-[1.5px] text-[#8c744d] uppercase font-semibold">
                MY SHOPPING POINTS · 즉시 차감 가능
              </small>
              <strong
                className="block text-[26px] sm:text-[30px] text-[#172c37] font-normal mt-0.5"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {userPoints.toLocaleString()}{" "}
                <span className="text-[14px] text-[#947b50]">P</span>
              </strong>
            </div>

            <button
              onClick={resetPoints}
              title="테스트 포인트 복구 (2,490,000P)"
              className="border border-[#b6bcb7] hover:border-[#172c37] text-[#26373b] px-[12px] py-[8px] text-[11px] font-medium transition cursor-pointer"
            >
              포인트 초기화 ↺
            </button>
          </div>
        </div>

        {/* 알림 메시지 배너 */}
        {notification && (
          <div className="mb-[24px] px-[20px] py-[14px] bg-[#172c37] text-white text-[12px] flex items-center justify-between">
            <span>{notification}</span>
            <button
              onClick={() => setNotification(null)}
              className="text-[#d9bc86] hover:text-white ml-4 text-[14px] cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        {/* 상품 카드 4종 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mb-[32px]">
          {MALL_PRODUCTS.map((prod, idx) => {
            const hasPurchased = purchaseHistory.includes(prod.id);

            return (
              <article
                key={prod.id}
                className={`bg-[#f7f5ef] flex flex-col justify-between transition ${
                  prod.isComplimentary
                    ? "border-2 border-[#947b50]"
                    : "border border-[#dedfd7]"
                }`}
              >
                <div>
                  {/* 상단 에디토리얼 아트워크 영역 */}
                  <div
                    className={`h-[165px] relative overflow-hidden p-[18px] flex flex-col justify-between ${
                      prod.isComplimentary ? "bg-[#e5dfd0]" : "bg-[#e7e5db]"
                    }`}
                  >
                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-[9px] tracking-[2px] text-[#747b78] font-semibold">
                        0{idx + 1} / {prod.category}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-[8px] py-[3px] ${
                          prod.isComplimentary
                            ? "bg-[#172c37] text-[#d9bc86]"
                            : "bg-[#947b50] text-white"
                        }`}
                      >
                        {prod.badge}
                      </span>
                    </div>

                    {/* 배경 타이포그래피 오브제 */}
                    <div
                      className="text-[64px] leading-none text-[#b5ac99]/60 select-none self-end -rotate-6 border border-[#c5bda8] px-4 py-1 bg-[#f7f5ef]/50"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {prod.isComplimentary ? "GIFT" : `-${prod.discountRate}%`}
                    </div>
                  </div>

                  {/* 상품 설명 & 가격 비교 */}
                  <div className="p-[20px] pb-[14px]">
                    <h3
                      className="text-[15px] font-medium text-[#26373b] leading-[1.45] line-clamp-2 min-h-[44px] m-0 mb-[14px]"
                      style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                    >
                      {prod.name}
                    </h3>

                    <div className="border-t border-[#dedfd7] pt-[12px] space-y-[6px] text-[11px]">
                      <div className="flex justify-between text-[#8a8f8c] line-through">
                        <span>오픈마켓 최저가</span>
                        <span>{prod.marketPrice.toLocaleString()}원</span>
                      </div>

                      {!prod.isComplimentary ? (
                        <>
                          <div className="flex justify-between text-[#5e6562]">
                            <span>다온넷 회원가</span>
                            <span className="font-semibold text-[#26373b]">
                              {prod.memberPrice.toLocaleString()}원
                            </span>
                          </div>
                          <div className="flex justify-between text-[#947b50] font-semibold">
                            <span>포인트 차감({prod.discountRate}%)</span>
                            <span>- {prod.pointDeduction.toLocaleString()} P</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex justify-between text-[#172c37] font-semibold py-1">
                          <span>프리미엄 249 가입 혜택</span>
                          <span className="text-[#947b50]">전원 무료 증정 (택1)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 하단 실결제금액 & 구매 시뮬레이션 버튼 */}
                <div className="p-[20px] pt-0">
                  <div className="bg-[#eae7dd] px-[14px] py-[10px] flex justify-between items-baseline mb-[12px]">
                    <span className="text-[11px] text-[#5e6562] font-medium">
                      실제 결제금액
                    </span>
                    <strong
                      className="text-[18px] font-medium text-[#172c37]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {prod.isComplimentary
                        ? "0원 (무료배송)"
                        : `${prod.finalPrice.toLocaleString()}원`}
                    </strong>
                  </div>

                  <button
                    onClick={() => handleSimulateBuy(prod)}
                    className={`w-full py-[12px] px-[16px] text-[12px] font-semibold flex items-center justify-between transition cursor-pointer ${
                      prod.isComplimentary
                        ? "bg-[#d9bc86] text-[#172c37] hover:bg-[#e5cba0]"
                        : hasPurchased
                        ? "bg-[#344b49] text-white"
                        : "bg-[#172c37] hover:bg-[#26373b] text-white"
                    }`}
                  >
                    <span>
                      {prod.isComplimentary
                        ? "가입하고 무료 수령하기"
                        : hasPurchased
                        ? "추가 포인트 차감 구매"
                        : "포인트 차감 구매하기"}
                    </span>
                    <span>↗</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* 폐쇄형 회원몰 접속 배너 */}
        <div className="bg-[#eae7dd] border border-[#d5d8ce] p-[22px_28px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
          <div>
            <div className="text-[10px] tracking-[2px] text-[#8c744d] font-semibold uppercase">
              MEMBER&apos;S CLOSED MALL ACCESS
            </div>
            <div className="text-[14px] font-semibold text-[#26373b] mt-1">
              다온넷 폐쇄형 회원 전용몰 (www.다온넷.kr) 공식 체험 안내
            </div>
            <div className="text-[12px] text-[#747b78] mt-0.5">
              공식 제휴 폐쇄몰 체험 계정:{" "}
              <strong className="text-[#172c37]">ID : test1 / PW : 1234</strong>
            </div>
          </div>

          <a
            href="http://www.xn--hu1bo87b2xb.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#172c37] hover:bg-[#26373b] text-white px-[22px] py-[13px] text-[12px] font-semibold inline-flex items-center justify-between gap-[20px] transition shrink-0"
          >
            <span>다온넷 전용몰 바로가기</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
