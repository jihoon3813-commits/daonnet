"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";

export default function FAQAndContactSectionV2() {
  const { openContract } = useDaon();

  return (
    <>
      {/* QUESTIONS & ANSWERS — 자주 묻는 질문 */}
      <section id="faq" className="py-[68px] lg:py-[85px] px-[6%] max-w-[1200px] mx-auto border-t border-[#dedfd7] grid lg:grid-cols-[0.8fr_1.2fr] gap-[40px] lg:gap-[60px]">
        <div>
          <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[17px] uppercase">
            QUESTIONS &amp; ANSWERS
          </div>
          <h2
            className="text-[28px] sm:text-[35px] font-medium leading-[1.55] tracking-[-1.2px] text-[#26373b] m-0"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            궁금한 점을
            <br />
            먼저 확인하세요.
          </h2>
          <button
            onClick={() => openContract("[이용 및 가입 문의] ")}
            className="inline-block pt-[15px] pb-[5px] border-b border-[#9c9f91] text-[12px] text-[#26373b] hover:text-[#947b50] mt-[18px] cursor-pointer"
          >
            다른 질문이 있으신가요? 맞춤 상담 신청 ↗
          </button>
        </div>

        <div>
          {[
            {
              q: "다온 프리미엄 249의 498만 원 환급보증서는 어떤 혜택인가요?",
              a: "가입금액 249만 원(VAT 포함) 납입 시 10년 공증 4,980,000원 환급보증서가 발행됩니다. 가입 2년 만기 후 제3자나 가족에게 자유롭게 양도·양수가 가능하며, 장례·추모 등 주요 서비스 미이용 시 (주)에스엘부티크호텔 반환 지급약정 및 보증서 조건에 따라 반환 지급됩니다.",
            },
            {
              q: "전국 55개 추모공원에서 어떻게 혜택을 받을 수 있나요?",
              a: "다온넷 직영 안성 유토피아 추모관을 비롯하여 전국 주요 추모공원 이용 시 봉안당 1단 기준 특별지원(봉안함 무료 제공) 또는 제휴 시설 정가 대비 10~70% 할인 혜택이 적용됩니다. 또한 공설 추모시설 희망 시 원스톱 입소 절차 안내를 지원하며, 장례 발생 전 사전 로얄석 지정 상담이 가능합니다.",
            },
            {
              q: "전용몰 쇼핑포인트 2,490,000P는 어떻게 사용하나요?",
              a: "가입 및 본인 인증 즉시 지급되는 2,490,000 포인트로 다온넷 전용 폐쇄몰(www.다온넷.kr)에서 상품별 최대 80%까지 포인트를 현금처럼 차감하고 잔액만 결제하여 최저가로 구매하실 수 있습니다.",
            },
            {
              q: "해피클래스 2박 3일 숙박권 이용 시 추가비용이 있나요?",
              a: "전국 약 50여 곳의 제휴 호텔·리조트·펜션을 2박 3일 무료 숙박권으로 이용하실 수 있으며, 청소비(평일 19,000원 / 주말 39,000원)는 별도입니다. 객실 등급 및 성수기 여부에 따른 세부 조건은 예약 데스크(1877-8816)를 통해 안내받으실 수 있습니다.",
            },
            {
              q: "다온넷 패키지 여행 우대 혜택은 어떻게 이용하나요?",
              a: "다온넷 회원님께는 베트남, 태국, 라오스, 필리핀, 중국 등 인기 해외 여행지의 패키지 상품을 회원 전용 특별 할인가로 제공해 드립니다. 패키지 전담 데스크(1533-6041)로 연락 주시면 전담 여행 플래너가 맞춤 예약 및 혜택 적용을 원스톱으로 지원합니다.",
            },
            {
              q: "건강식품(삼칠그라/알부민) 무료 증정과 위로지원금 40만원은 어떻게 지급되나요?",
              a: "다온 프리미엄 249 가입 회원님께는 온라인 판매가 약 580,000원 상당의 프리미엄 건강기능식품(삼칠그라 365 환 세트 또는 경남제약 저분자 콜라겐 알부민 프라임 맥스 30병 세트 중 택1)을 100% 무료 배송해 드립니다. 아울러 건강식품과 중복으로 회원님의 일상을 응원하는 현금 위로지원금 400,000원이 지정 계좌로 별도 지급됩니다.",
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="border-b border-[#d7d9d0] py-[20px] group"
            >
              <summary className="cursor-pointer text-[13px] sm:text-[14px] font-medium text-[#26373b] list-none pr-[24px] relative">
                {item.q}
                <span className="absolute right-0 top-0 text-[#9b8762] group-open:hidden">
                  ＋
                </span>
                <span className="absolute right-0 top-0 text-[#9b8762] hidden group-open:inline">
                  −
                </span>
              </summary>
              <p className="text-[12px] text-[#747b78] leading-[1.75] mt-[14px] mb-0">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* WE ARE HERE FOR YOU — 하단 컨택트 배너 */}
      <section className="bg-[#344b49] py-[55px] lg:py-[65px] px-[7%] lg:px-[9%] text-[#f5f4ec]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-[25px]">
          <div>
            <div className="text-[10px] tracking-[2.7px] text-[#e1c897] font-semibold mb-[14px] uppercase">
              WE ARE HERE FOR YOU · 365일 24시간 상담센터
            </div>
            <h2
              className="text-[26px] sm:text-[32px] font-medium leading-[1.5] tracking-[-1px] m-0 mb-[8px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              가족을 위한 준비,
              <br />
              함께 이야기해 볼까요?
            </h2>
            <p className="text-[#c3ceca] text-[13px] m-0">
              희망하시는 추모공원 지역과 다온 프리미엄 249 혜택, 패키지 여행 우대를 편하게 남겨주세요.
            </p>
          </div>

          <button
            onClick={() => openContract()}
            className="self-start md:self-center bg-[#d9bc86] text-[#172c37] hover:bg-[#e5cba0] px-[26px] py-[16px] text-[13px] font-semibold inline-flex items-center justify-between gap-[28px] transition cursor-pointer shrink-0"
          >
            <span>맞춤 상담·가입 신청하기</span>
            <span>↗</span>
          </button>
        </div>
      </section>
    </>
  );
}
