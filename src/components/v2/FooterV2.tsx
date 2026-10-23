"use client";

import React from "react";
import Link from "next/link";
import { useDaon } from "@/context/DaonContext";

export default function FooterV2() {
  const { openCert, openAdmin } = useDaon();

  return (
    <footer className="bg-[#e8e7df] text-[#26373b] py-[55px] pb-[110px] px-[6%] text-[11px] border-t border-[#dedfd7]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_0.8fr_1.4fr] gap-[35px]">
        {/* 1열: 로고 */}
        <div className="self-start">
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 leading-[1.1] text-[#172c37]"
          >
            <span
              className="text-[48px] font-normal tracking-[-4px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ∞
            </span>
            <div>
              <span
                className="block text-[22px] font-semibold tracking-[2px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                DAONNET
              </span>
              <small className="block text-[9px] tracking-[2px] text-[#7e847e] mt-1.5">
                기억을 잇고, 삶을 돌보다
              </small>
            </div>
          </a>

          <p className="text-[11px] text-[#747b78] mt-4 leading-[1.7] m-0">
            주식회사 다온넷 (DAONNET Co., Ltd.)
            <br />
            다온 프리미엄 249 라이프케어 사업본부
          </p>
        </div>

        {/* 2열: 고객상담센터 */}
        <div>
          <b className="font-semibold text-[12px] text-[#26373b]">
            고객상담센터 (365일 24시간 장례·추모 접수)
          </b>
          <a
            href="tel:1877-8816"
            className="block text-[26px] text-[#172c37] my-[8px] hover:text-[#947b50] transition"
            style={{ fontFamily: "Georgia, serif" }}
          >
            1877-8816
          </a>
          <small className="block text-[10px] text-[#7e847e] leading-[1.6]">
            공식 제휴몰:{" "}
            <a
              href="http://www.xn--hu1bo87b2xb.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#172c37]"
            >
              www.다온넷.kr
            </a>
            <br />
            장례·추모공원 사전 예약 및 로얄석 상담 상시 운영
          </small>
        </div>

        {/* 3열: 법적 고지사항 및 하단 링크 */}
        <div>
          <p className="text-[10px] text-[#5e6562] leading-[1.7] mb-[10px]">
            • 장례·추모공원 이행증서는 실물 또는 모바일로 발급되며, 서비스 발생 시 반드시 고객센터(1877-8816) 접수 후 혜택이 적용됩니다.
            <br />
            • 추모공원·숙박·크루즈 등 제휴 서비스는 이용 시점의 제휴 여부, 시설 객실 현황, 시즌 및 운영규정에 따라 제한 또는 추가비용이 발생할 수 있습니다.
            <br />• 환급보증서 498만 원은 보증서 금액 기준이며, 실제 환급 절차·지급형태·조건은 환급보증서 및 반환 지급약정 내용을 우선합니다.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#d5d8ce] text-[10px] text-[#7e847e]">
            <span>© 2026 DAONNET Co., Ltd. All rights reserved.</span>

            <div className="flex items-center gap-3">
              <button
                onClick={openCert}
                className="hover:text-[#172c37] underline cursor-pointer"
              >
                환급보증서 약정
              </button>
              <span>·</span>
              <button
                onClick={openAdmin}
                className="hover:text-[#172c37] underline cursor-pointer"
              >
                관리자 로그인
              </button>
              <span>·</span>
              <Link href="/" className="hover:text-[#172c37] underline">
                기존 메인(V1)으로 이동
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
