"use client";

import React from "react";
import { RESORT_LIST } from "@/data/pointMall";
import { useDaon } from "@/context/DaonContext";

export default function HappyClassSectionV2() {
  const { openContract } = useDaon();

  return (
    <>
      {/* 1. MORE MOMENTS, MORE LIFE — 라이프 혜택 3대 비주얼 카드 & 전국 50곳 제휴 숙박 (.life) */}
      <section
        id="happy-class"
        className="bg-[#eeeee6] py-[48px] sm:py-[68px] lg:py-[96px] px-5 sm:px-[6%] border-t border-[#dedfd7]"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* 섹션 헤더 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-[12px] sm:gap-[20px] mb-[26px] sm:mb-[35px]">
            <div>
              <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[10px] sm:mb-[14px] uppercase">
                MORE MOMENTS, MORE LIFE · 해피클래스 &amp; 크루즈
              </div>
              <h2
                className="text-[24px] sm:text-[35px] font-medium leading-[1.45] sm:leading-[1.5] tracking-[-1px] sm:tracking-[-1.2px] text-[#26373b] m-0"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                일상에도 이어지는 다온의 혜택
              </h2>
            </div>

            <p className="text-[12px] sm:text-[14px] text-[#747b78] m-0">
              준비하는 마음만큼, 지금의 행복도 소중하니까요.
              <br />
              전국 약 50곳 2박 3일 무료 숙박권과 크루즈 우대를 만나보세요.
            </p>
          </div>

          {/* 3대 라이프 비주얼 카드 (.life-grid) */}
          <div className="grid lg:grid-cols-3 gap-[16px] sm:gap-[23px] mb-[36px] sm:mb-[50px]">
            {/* 01 / STAY */}
            <div
              onClick={() => openContract("[해피클래스 2박 3일 숙박권 문의] ")}
              className="h-[240px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group"
              style={{
                background:
                  "linear-gradient(0deg, rgba(25, 51, 44, 0.88), transparent), url('/assets/stay.jpg') center/cover, #667e6a",
              }}
            >
              <span className="text-[9px] tracking-[2px] uppercase">
                01 / STAY · 전국 50여 곳
              </span>
              <div>
                <small className="text-[9px] tracking-[2px] text-[#e1c897] uppercase block">
                  HAPPY CLASS ACCOMMODATION
                </small>
                <h3
                  className="text-[21px] sm:text-[25px] font-normal my-[6px] sm:my-[8px]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  잠시 쉬어가는 여유
                </h3>
                <p className="text-[12px] text-[#e3e6e5] m-0">
                  전국 50여 곳 2박 3일 무료 숙박권 (1박 15만원 상당)
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </p>
              </div>
            </div>

            {/* 02 / CRUISE */}
            <div
              onClick={() => openContract("[럭셔리 크루즈 회원 우대 문의] ")}
              className="h-[240px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group"
              style={{
                background:
                  "linear-gradient(0deg, rgba(24, 55, 68, 0.88), transparent), url('/assets/sea.jpg') center/cover, #7b9ca5",
              }}
            >
              <span className="text-[9px] tracking-[2px] uppercase">
                02 / CRUISE · 전담 데스크
              </span>
              <div>
                <small className="text-[9px] tracking-[2px] text-[#e1c897] uppercase block">
                  TRAVEL &amp; LEISURE
                </small>
                <h3
                  className="text-[21px] sm:text-[25px] font-normal my-[6px] sm:my-[8px]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  더 넓은 세상으로
                </h3>
                <p className="text-[12px] text-[#e3e6e5] m-0">
                  초호화 크루즈 회원 특별 할인가 및 기항지 특전
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </p>
              </div>
            </div>

            {/* 03 / HEALTH & GIFT */}
            <div
              onClick={() => openContract("[삼칠그라 건강식품 & 위로지원금 40만원 문의] ")}
              className="h-[240px] sm:h-[355px] text-left p-[20px] sm:p-[24px] flex flex-col justify-between bg-[#ded9c9] text-[#172c37] relative overflow-hidden cursor-pointer group"
            >
              <span className="text-[9px] tracking-[2px] uppercase">
                03 / HEALTH &amp; SUPPORT
              </span>

              {/* 타이포그래피 아트워크 (.shopping-art) */}
              <div
                className="text-[72px] sm:text-[92px] text-[#a5977c] absolute left-[45%] sm:left-[42%] top-[28px] sm:top-[42px] -rotate-[12deg] border border-[#b3a991] px-[18px] sm:px-[22px] shadow-[10px_10px_#c3bcaa] select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                d<span className="text-[24px] sm:text-[28px]">＋</span>
              </div>

              <div className="relative z-10">
                <small className="text-[9px] tracking-[2px] text-[#7b6845] uppercase block">
                  SPECIAL COMPLIMENTARY
                </small>
                <h3
                  className="text-[21px] sm:text-[25px] font-normal my-[6px] sm:my-[8px] text-[#172c37]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  건강과 생활의 든든함
                </h3>
                <p className="text-[12px] text-[#26373b] m-0">
                  삼칠그라 365(58만원 상당) 증정 + 위로지원금 40만원
                  <span className="float-right text-[18px] group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 해피클래스 전국 50여 곳 주요 제휴 숙박시설 리스트 & 이용 기준 */}
          <div className="bg-[#f7f5ef] border border-[#dedfd7] p-[20px] sm:p-[40px] grid lg:grid-cols-12 gap-[28px] sm:gap-[36px] items-start">
            {/* 좌측: 숙박 & 크루즈 이용 조건 */}
            <div className="lg:col-span-5 space-y-[18px]">
              <div className="text-[10px] tracking-[2px] text-[#947b50] font-semibold uppercase">
                ACCOMMODATION &amp; CRUISE GUIDE
              </div>

              <h3
                className="text-[22px] sm:text-[25px] font-medium text-[#26373b] leading-[1.45] m-0"
                style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
              >
                해피클래스 2박 3일 무료숙박권 &amp; 럭셔리 크루즈 이용 안내
              </h3>

              <p className="text-[12px] sm:text-[13px] text-[#747b78] leading-[1.8] m-0">
                전국 약 50개 제휴 호텔·리조트·펜션에서 이용 가능한{" "}
                <strong className="text-[#26373b]">2박 3일 숙박권(1박 평균 150,000원 상당)</strong>을 제공합니다.
                직계가족에게 양도하여 사용하실 수 있습니다.
              </p>

              <div className="border-t border-[#dedfd7] pt-[16px] space-y-[12px] text-[12px]">
                <div>
                  <strong className="block text-[#26373b] font-semibold">
                    · 숙박 이용 및 청소비 안내
                  </strong>
                  <span className="text-[#747b78] text-[11px] leading-[1.6] block mt-0.5">
                    평일 청소비 19,000원 / 주말 청소비 39,000원 별도 (성수기·객실유형에 따라 추가요금 발생 가능, 직계가족 양도 가능)
                  </span>
                </div>

                <div>
                  <strong className="block text-[#26373b] font-semibold">
                    · 크루즈 투어 전담 데스크 안내
                  </strong>
                  <span className="text-[#747b78] text-[11px] leading-[1.6] block mt-0.5">
                    최소 6개월 이전 사전 예약 및 맞춤 상담 필수 (고객센터 1877-8816)
                  </span>
                </div>
              </div>

              <div className="bg-[#172c37] text-white p-[18px_22px] flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[1.5px] text-[#d9bc86] uppercase">
                    RESERVATION DESK
                  </div>
                  <div className="text-[13px] font-medium mt-0.5">
                    숙박·크루즈 예약 및 상담센터
                  </div>
                </div>
                <a
                  href="tel:1877-8816"
                  className="text-[18px] text-[#d9bc86] hover:underline"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  1877-8816 ↗
                </a>
              </div>
            </div>

            {/* 우측: 전국 6대 권역 50여 곳 제휴 숙박시설 표 */}
            <div className="lg:col-span-7">
              <div className="flex justify-between items-center pb-[12px] mb-[18px] border-b border-[#dedfd7]">
                <strong
                  className="text-[16px] font-medium text-[#26373b]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  전국 50여 곳 주요 제휴 호텔·리조트·펜션
                </strong>
                <span className="text-[11px] text-[#947b50] font-semibold">
                  2박 3일 숙박권 제공
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-[14px]">
                {RESORT_LIST.map((group, idx) => (
                  <div
                    key={idx}
                    className="bg-[#efeee7] p-[16px] border border-[#dedfd7]"
                  >
                    <div className="text-[11px] font-semibold text-[#8d7854] mb-[6px]">
                      0{idx + 1} · {group.region}
                    </div>
                    <p className="text-[12px] text-[#26373b] leading-[1.65] m-0">
                      {group.places.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>

              <small className="block text-[10px] text-[#7b817b] mt-[14px] text-right">
                ※ 제휴 시설 리스트는 시즌 및 제휴 협약 현황에 따라 일부 변경될 수 있습니다.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUESTIONS & ANSWERS — 자주 묻는 질문 (.faq 레이아웃) */}
      <section className="py-[68px] lg:py-[85px] px-[6%] max-w-[1200px] mx-auto border-t border-[#dedfd7] grid lg:grid-cols-[0.8fr_1.2fr] gap-[40px] lg:gap-[60px]">
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

      {/* 3. WE ARE HERE FOR YOU — 하단 컨택트 배너 (.contact-banner 레이아웃) */}
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
              희망하시는 추모공원 지역과 다온 프리미엄 249 혜택을 편하게 남겨주세요.
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
