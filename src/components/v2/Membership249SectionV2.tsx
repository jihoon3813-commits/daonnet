"use client";

import React from "react";
import { useDaon } from "@/context/DaonContext";

export default function Membership249SectionV2() {
  const { openContract, openCert } = useDaon();

  return (
    <>
      {/* 1. 다크 슬레이트 네이비 멤버십 & 498만 환급보증 하이라이트 (.membership) */}
      <section
        id="premium-249"
        className="bg-[#172c37] text-white py-[68px] lg:py-[92px] px-[7%] lg:px-[8%]"
      >
        <div
          id="refund-guarantee"
          className="max-w-[1160px] mx-auto grid lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center"
        >
          {/* 좌측: 상품 설명 및 가격, 498만 환급보증 안내 */}
          <div>
            <div className="text-[10px] tracking-[2.7px] text-[#e1c897] font-semibold mb-[17px] uppercase">
              DAON PREMIUM MEMBERSHIP · 10년 공증 환급보증서 발급
            </div>

            <h2
              className="text-[28px] sm:text-[35px] font-medium leading-[1.52] tracking-[-1.2px] m-0 mb-[18px]"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              내일을 위한 준비에,
              <br />
              <em className="not-italic text-[#d9bc86]">
                498만 원 환급보증의 안심을 더하다.
              </em>
            </h2>

            <p className="text-[#b8c2c4] text-[13px] sm:text-[14px] leading-[1.85] m-0">
              가입금액 <strong className="text-white">249만 원(VAT 포함)</strong>으로 추모공원·후불장례 보증부터 쇼핑·여행·건강식품까지.
              안전한 납입과 든든한 보장을 위해 <strong className="text-[#d9bc86]">10년 공증 4,980,000원 환급보증서</strong>가 발행되며,
              가입 <strong className="text-white">2년 만기 후 자유롭게 양도·양수</strong>가 가능합니다.
            </p>

            {/* 가격 블록 (.price) */}
            <div className="my-[30px] pt-[20px] border-t border-[#334b57] grid sm:grid-cols-2 gap-5">
              <div>
                <small className="block text-[11px] text-[#b8c2c4]">
                  다온 프리미엄 249 (실제 가입판매가)
                </small>
                <strong
                  className="block text-[36px] sm:text-[42px] tracking-[1px] font-normal text-white leading-[1.2] mt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  2,490,000
                  <span className="text-[15px] ml-[6px] font-sans">원</span>
                </strong>
                <span className="block text-[11px] text-[#b8c2c4] mt-1">
                  VAT 포함 · 총 상품가격
                </span>
              </div>

              <div className="sm:border-l sm:border-[#334b57] sm:pl-6">
                <small className="block text-[11px] text-[#e1c897]">
                  10년 공증 환급보증서 발행 금액
                </small>
                <strong
                  className="block text-[36px] sm:text-[42px] tracking-[1px] font-normal text-[#d9bc86] leading-[1.2] mt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  4,980,000
                  <span className="text-[15px] ml-[6px] font-sans">원</span>
                </strong>
                <span className="block text-[11px] text-[#b8c2c4] mt-1">
                  2년 후 양도·양수 가능 · (주)에스엘부티크호텔 약정
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-[14px]">
              <button
                onClick={() => openContract()}
                className="bg-[#d9bc86] text-[#172c37] hover:bg-[#e5cba0] px-[24px] py-[16px] text-[13px] font-semibold inline-flex items-center justify-between gap-[28px] transition cursor-pointer"
              >
                <span>가입 및 보증서 신청하기</span>
                <span>↗</span>
              </button>

              <button
                onClick={openCert}
                className="text-white border border-[#a2aaa2] hover:border-[#d9bc86] hover:text-[#d9bc86] px-[22px] py-[16px] text-[13px] font-semibold inline-flex items-center justify-between gap-[22px] transition cursor-pointer"
              >
                <span>모바일 보증서(498만) 견본 보기</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* 우측: 틸트 멤버십 카드 & 보증 요약 (.membership-right) */}
          <div className="pt-[10px]">
            <div
              onClick={openCert}
              title="클릭하여 모바일 보증서 상세 보기"
              className="aspect-[1.65] max-w-[440px] mx-auto mb-[36px] rounded-[10px] p-[26px_30px] border border-[#8c8d70] text-[#e5d0a5] shadow-[0_18px_40px_rgba(11,26,36,0.35)] -rotate-[3.5deg] hover:rotate-0 transition-transform duration-300 cursor-pointer flex flex-col justify-between"
              style={{
                background:
                  "radial-gradient(ellipse at 100% 0, #4f645e, transparent 70%), linear-gradient(130deg, #334847, #162c32)",
              }}
            >
              <div
                className="flex justify-between items-start text-[18px] tracking-[3px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <span>DAONNET</span>
                <span className="text-[30px] leading-[0.7]">∞</span>
              </div>

              <div className="my-auto pt-3">
                <small className="block text-[8px] tracking-[2px] text-[#cbd3cc] uppercase">
                  PREMIUM MEMBERSHIP &amp; GUARANTEE CERTIFICATE
                </small>
                <strong
                  className="block mt-[8px] text-[19px] sm:text-[21px] font-normal leading-[1.45] text-[#f5e6c8]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  마음을 담은 준비, 삶을 채우는 혜택.
                  <br />
                  환급보증서 4,980,000원 발행
                </strong>
              </div>

              <div className="text-[8px] tracking-[1px] flex justify-between items-center pt-3 border-t border-[#8c8d70]/40">
                <span>DAON PREMIUM 249 · 10년 공증</span>
                <span className="text-[7px] text-[#d9bc86]">CLICK TO PREVIEW ↗</span>
              </div>
            </div>

            {/* 미니 혜택 요약 (.benefit-mini) */}
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="border-b border-[#4c5b60] pb-[12px]">
                <b className="block text-[13px] font-medium text-[#d9bc86]">
                  10년 공증 환급보증
                </b>
                <span className="text-[#b9c2c1] text-[11px]">
                  4,980,000원 증서 발행 (2년 후 양도 가능)*
                </span>
              </div>

              <div className="border-b border-[#4c5b60] pb-[12px]">
                <b className="block text-[13px] font-medium text-white">
                  추모공원 특별지원
                </b>
                <span className="text-[#b9c2c1] text-[11px]">
                  직영 유토피아 및 전국 봉안당 1단 기준*
                </span>
              </div>

              <div className="border-b border-[#4c5b60] pb-[12px]">
                <b className="block text-[13px] font-medium text-white">
                  후불장례 이행보증
                </b>
                <span className="text-[#b9c2c1] text-[11px]">
                  1,980,000원 장례보증 · 24시간 의전*
                </span>
              </div>

              <div className="border-b border-[#4c5b60] pb-[12px]">
                <b className="block text-[13px] font-medium text-white">
                  포인트 · 숙박 · 사은품
                </b>
                <span className="text-[#b9c2c1] text-[11px]">
                  2,490,000P + 2박3일 숙박 + 삼칠그라 + 40만원*
                </span>
              </div>
            </div>

            <small className="block text-[10px] text-[#aab7b6] mt-[18px]">
              * 주요 서비스 미이용 시 약정 및 보증서 조건에 따라 반환 지급되며, 시설·서비스별 적용 조건이 있습니다.
            </small>
          </div>
        </div>
      </section>

      {/* 2. 다온 프리미엄 249 — 7대 핵심 보증 패키지 상세 그리드 */}
      <section className="py-[68px] lg:py-[96px] px-[6%] max-w-[1200px] mx-auto border-b border-[#dedfd7]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-[42px]">
          <div>
            <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[14px] uppercase">
              ALL-IN-ONE 7 PRIVILEGES
            </div>
            <h2
              className="text-[28px] sm:text-[35px] font-medium leading-[1.5] tracking-[-1.2px] text-[#26373b] m-0"
              style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
            >
              다온 프리미엄 249, 7대 핵심 패키지 구성
            </h2>
          </div>
          <p className="text-[13px] text-[#747b78] m-0">
            총 판매금액 <strong className="text-[#26373b]">2,490,000원(VAT 포함)</strong>으로 누리는 평생의 안심과 현재의 혜택
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {[
            {
              num: "01",
              tag: "보증 혜택 01",
              value: "4,980,000원",
              title: "10년 공증 환급보증서",
              desc: "10년 공증 환급증서 발급. 가입 2년 후 양도·양수가 가능하며, 주요 서비스 미이용 시 반환 지급약정 및 보증서 조건에 따라 안전하게 반환 지급됩니다.",
              note: "실물 또는 모바일 보증서 발급 · (주)에스엘부티크호텔 약정",
              highlight: true,
            },
            {
              num: "02",
              tag: "보증 혜택 02",
              value: "1,980,000원",
              title: "후불장례 이행보증",
              desc: "전국장례통합 서비스를 통해 365일 24시간 장례접수 가능. 물가 상승 대비형으로 전문 인력·용품·차량 등 라이프케어 통합 의전을 지원합니다.",
              note: "1구좌당 1회 원칙 · 직계가족 양도 가능",
            },
            {
              num: "03",
              tag: "보증 혜택 03",
              value: "봉안당 1단 기준",
              title: "전국 추모공원 특별지원",
              desc: "직영 유토피아 추모관을 포함한 전국 주요 추모공원 이용 안내 및 봉안함 제공. 유토피아 외 제휴 시설은 정가 대비 10~70% 할인가가 적용됩니다.",
              note: "사전 로얄석 지정 및 직계가족 양도 가능",
            },
            {
              num: "04",
              tag: "즉시 혜택 04",
              value: "2,490,000 P",
              title: "다온넷 전용몰 쇼핑포인트",
              desc: "회원가입 및 본인 인증 즉시 다온넷.kr 전용 폐쇄몰에서 현금처럼 차감하여 특가 상품을 구매할 수 있는 249만 포인트를 지급합니다.",
              note: "최대 80% 포인트 차감 할인 구매",
            },
            {
              num: "05",
              tag: "레저 혜택 05",
              value: "2박 3일 숙박권",
              title: "해피클래스 & 크루즈 우대",
              desc: "전국 약 50개 제휴 호텔·리조트·펜션 2박 3일 무료 숙박권(1박 15만 원 상당) 제공 및 럭셔리 크루즈 여행 회원 전용 할인가 혜택을 제공합니다.",
              note: "청소비 별도 (평일 1.9만 / 주말 3.9만)",
            },
            {
              num: "06·07",
              tag: "특별 지원 06·07",
              value: "58만원 상당 + 40만원",
              title: "건강식품 & 위로지원금",
              desc: "온라인가 58~59.8만 원 상당의 삼칠그라 365(또는 경남제약 알부민 맥스) 무료 증정 및 등급별 위로지원금 현금 400,000원을 지급합니다.",
              note: "건강식품 1~3일 내 무료배송",
            },
          ].map((item) => (
            <article
              key={item.num}
              className={`p-[26px] flex flex-col justify-between transition ${
                item.highlight
                  ? "bg-[#eae7dd] border-2 border-[#947b50]"
                  : "bg-[#efeee7]/70 border border-[#dedfd7]"
              }`}
            >
              <div>
                <div className="flex justify-between items-baseline border-b border-[#d5d8ce] pb-[12px] mb-[16px]">
                  <span className="text-[10px] tracking-[1.5px] text-[#8d7854] font-semibold uppercase">
                    {item.tag}
                  </span>
                  <strong
                    className={`text-[20px] font-medium ${
                      item.highlight ? "text-[#947b50]" : "text-[#172c37]"
                    }`}
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.value}
                  </strong>
                </div>

                <h3
                  className="text-[19px] font-medium text-[#26373b] mb-[10px]"
                  style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
                >
                  <span
                    className="text-[#947b50] mr-2 text-[15px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.num}.
                  </span>
                  {item.title}
                </h3>

                <p className="text-[12px] text-[#5e6562] leading-[1.75] m-0 mb-[18px]">
                  {item.desc}
                </p>
              </div>

              <div className="border-t border-[#d5d8ce] pt-[12px] text-[11px] text-[#7b847d]">
                ※ {item.note}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. FUNERAL CARE — 아치 아트워크 & 24시간 의전 절차 (.funeral 레이아웃) */}
      <section
        id="funeral"
        className="py-[68px] lg:py-[96px] px-[6%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[45px] lg:gap-[100px] items-center border-b border-[#dedfd7]"
      >
        {/* 좌측 아치 아트워크 (.funeral-art) */}
        <div className="bg-[#e7e5db] text-center p-[36px_40px_24px] self-stretch flex flex-col justify-center">
          <div
            className="h-[280px] sm:h-[340px] pt-[60px] sm:pt-[75px] border border-[#d1cbb9] overflow-hidden mx-auto w-full max-w-[360px]"
            style={{
              background: "linear-gradient(135deg, #f8f5e9, #cecebb)",
              borderRadius: "200px 200px 0 0",
            }}
          >
            <span
              className="block text-[21px] sm:text-[24px] text-[#8b8c75] tracking-[4px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              WITH YOU,
              <br />
              WITH CARE.
            </span>
            <div className="text-[130px] sm:text-[155px] leading-[1.35] text-[#fcfaf1] rotate-[15deg] select-none">
              ✳
            </div>
          </div>
          <small className="text-[9px] tracking-[2px] mt-[22px] text-[#8a8d7e]">
            마지막 순간까지, 정성을 다하는 마음 · 198만 원 후불장례 이행보증
          </small>
        </div>

        {/* 우측 설명 (.funeral-copy) */}
        <div>
          <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[17px] uppercase">
            FUNERAL CARE · 365일 24시간 통합 의전
          </div>
          <h2
            className="text-[28px] sm:text-[35px] font-medium leading-[1.55] tracking-[-1.2px] text-[#26373b] m-0 mb-[18px]"
            style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
          >
            경황없는 순간에도,
            <br />
            곁에서 차근차근.
          </h2>
          <p className="text-[#747b78] text-[13px] sm:text-[14px] leading-[1.8] mb-[20px]">
            장례가 발생하면 먼저 다온넷 24시간 고객센터(1877-8816)로 연락해 주세요.
            198만 원 후불장례 이행보증부터 희망 추모공원 안치까지 원스톱으로 안내합니다.
          </p>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              01
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                365일 24시간 긴급 장례 접수
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                고객센터(1877-8816) 전화 한 통으로 전국 어디서나 즉시 의전팀 출동 및 접수 안내
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              02
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                198만 원 후불장례 이행보증 지원
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                물가 상승 대비형으로 전문 장례지도사 인력·수의·관·차량 등 약정 항목 체계적 지원
              </p>
            </div>
          </div>

          <div className="flex gap-[20px] border-t border-[#dedfd7] pt-[14px] mt-[12px]">
            <span
              className="text-[#9c8255] text-[16px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              03
            </span>
            <div>
              <b className="font-medium text-[13px] text-[#26373b]">
                전국 55개 추모공원 장지 및 안치 연계
              </b>
              <p className="text-[11px] text-[#747b78] mt-[4px] mb-[5px]">
                직영 안성 유토피아 추모관(봉안당 1단 기준) 및 전국 제휴·공설 장지 원스톱 절차 지원
              </p>
            </div>
          </div>

          <a
            href="tel:1877-8816"
            className="inline-block pt-[15px] pb-[5px] border-b border-[#9c9f91] text-[12px] font-semibold text-[#26373b] hover:text-[#947b50] mt-[18px]"
          >
            24시간 장례·추모 상담 1877-8816 ↗
          </a>
        </div>
      </section>

      {/* 4. YOUR NEXT STEP — 4단계 주문·결제·서비스 이용 흐름 (.process 레이아웃) */}
      <section className="py-[68px] lg:py-[90px] px-[6%] max-w-[1200px] mx-auto text-center">
        <div className="text-[10px] tracking-[2.7px] text-[#947b50] font-semibold mb-[14px] uppercase">
          YOUR NEXT STEP · ONE-STOP PROCESS
        </div>
        <h2
          className="text-[28px] sm:text-[35px] font-medium leading-[1.55] tracking-[-1.2px] text-[#26373b] m-0"
          style={{ fontFamily: "'Noto Serif KR', Georgia, serif" }}
        >
          첫 상담부터 사후 환급까지, 어렵지 않도록.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mt-[45px]">
          <article className="border-t border-[#dedfd7] pt-[20px] text-left">
            <span
              className="text-[27px] text-[#b1a082]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              01
            </span>
            <h3 className="text-[16px] font-semibold text-[#26373b] mt-[10px] mb-[6px]">
              가입 및 간편 결제
            </h3>
            <p className="text-[11px] text-[#747b78] leading-[1.65] m-0">
              신용카드(지정 PG사), CMS(자동이체), 계좌이체 등 편리한 방식으로 다온 프리미엄 249를 신청합니다.
            </p>
          </article>

          <article className="border-t border-[#dedfd7] pt-[20px] text-left">
            <span
              className="text-[27px] text-[#b1a082]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              02
            </span>
            <h3 className="text-[16px] font-semibold text-[#26373b] mt-[10px] mb-[6px]">
              보증서 및 즉시 혜택 발급
            </h3>
            <p className="text-[11px] text-[#747b78] leading-[1.65] m-0">
              498만 환급보증서·장례보증서·추모공원증서·봉안함·2박3일 숙박권·249만P·삼칠그라가 발급됩니다.
            </p>
          </article>

          <article className="border-t border-[#dedfd7] pt-[20px] text-left">
            <span
              className="text-[27px] text-[#b1a082]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              03
            </span>
            <h3 className="text-[16px] font-semibold text-[#26373b] mt-[10px] mb-[6px]">
              라이프케어 서비스 이용
            </h3>
            <p className="text-[11px] text-[#747b78] leading-[1.65] m-0">
              전용몰 포인트 즉시 차감 쇼핑, 전국 50곳 해피클래스 숙박/크루즈 예약 및 24시간 의전을 이용합니다.
            </p>
          </article>

          <article className="border-t border-[#dedfd7] pt-[20px] text-left">
            <span
              className="text-[27px] text-[#b1a082]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              04
            </span>
            <h3 className="text-[16px] font-semibold text-[#26373b] mt-[10px] mb-[6px]">
              양도·양수 및 안심 환급
            </h3>
            <p className="text-[11px] text-[#747b78] leading-[1.65] m-0">
              가입 2년 후 자유 양도·양수가 가능하며, 10년 만기 미이용 시 약정 조건에 따라 498만 원을 반환 지급합니다.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
