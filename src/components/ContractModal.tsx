"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { useDaon } from "@/context/DaonContext";

export default function ContractModal() {
  const { isContractOpen, closeContract, preferredParkInput, addConsultation, openCert } =
    useDaon();

  const [productSet, setProductSet] = useState<"Set2" | "Set1">("Set2");
  const [healthFood, setHealthFood] = useState("삼칠그라 365 (59.8만원 상당)");
  const [paymentMethod, setPaymentMethod] = useState("신용카드 (지정 PG 결제)");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [preferredPark, setPreferredPark] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedCertNum, setCompletedCertNum] = useState<string | null>(null);

  useEffect(() => {
    if (preferredParkInput) {
      setPreferredPark(preferredParkInput);
    }
  }, [preferredParkInput]);

  if (!isContractOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      alert("성함과 연락처를 모두 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const productName =
        productSet === "Set2"
          ? "Set 2. 다온 프리미엄 249 (삼칠그라 & 밸런스케어)"
          : "Set 1. 기본형 (삼칠그라 OR 알부민)";
      const amount = productSet === "Set2" ? 2490000 : 1980000;

      const certNumber = await addConsultation({
        productSet,
        productName,
        amount,
        healthFood,
        paymentMethod,
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: address.trim() || "상담 시 확인 예정",
        preferredPark: preferredPark.trim() || undefined,
        notes: "웹사이트 온라인 간편 계약/상담 신청",
      });

      setCompletedCertNum(certNumber);
    } catch (err) {
      console.error(err);
      alert("신청 처리 중 오류가 발생했습니다. 고객센터(1877-8816)로 문의해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setCompletedCertNum(null);
    closeContract();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100 animate-scale-up">
        {/* 헤더 */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5">
          <div>
            <span className="text-xs font-black text-[#C5A059] tracking-wider block">
              ONLINE CONTRACT & APPLICATION
            </span>
            <h3 className="text-xl font-black text-[#0F1E36] mt-0.5">
              다온넷 상품 공급(구매) 신청 및 장지 상담
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {completedCertNum ? (
          /* 신청 완료 화면 */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-black text-[#0F1E36]">
              상담 및 계약 신청이 접수되었습니다!
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              고객님의 신청 정보가 다온넷 고객상담센터에 안전하게 접수되었습니다.
              전문 라이프케어 상담원이 신속히 안내 전화를 드리겠습니다.
            </p>

            <div className="bg-[#FAF8F5] border border-amber-200 rounded-2xl p-5 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-500">임시 발급 보증서 번호</span>
                <strong className="text-[#0F1E36] font-mono">{completedCertNum}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">신청인</span>
                <strong className="text-[#0F1E36]">{customerName} 님</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">신청 상품</span>
                <strong className="text-[#0F1E36]">
                  {productSet === "Set2" ? "다온 프리미엄 249 (498만 보증)" : "기본형 198"}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">장례·추모 긴급문의</span>
                <strong className="text-[#C5A059] font-bold">1877-8816 (24시간)</strong>
              </div>
            </div>

            <div className="flex gap-2.5 pt-3">
              <button
                onClick={() => {
                  handleResetAndClose();
                  openCert();
                }}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#0F1E36] font-bold py-3 rounded-xl text-xs sm:text-sm transition cursor-pointer"
              >
                모바일 보증서 확인
              </button>
              <button
                onClick={handleResetAndClose}
                className="flex-1 gold-gradient text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm shadow transition cursor-pointer"
              >
                확인 완료
              </button>
            </div>
          </div>
        ) : (
          /* 신청 폼 */
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {/* 상품 선택 (계약서 양식) */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                가입 상품 선택 (공급 계약서 기준)
              </label>
              <div className="space-y-2.5">
                <label
                  className={`flex items-start justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition ${
                    productSet === "Set2"
                      ? "border-[#C5A059] bg-amber-50/50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <input
                      type="radio"
                      name="productSet"
                      value="Set2"
                      checked={productSet === "Set2"}
                      onChange={() => setProductSet("Set2")}
                      className="mt-1 accent-[#0F1E36]"
                    />
                    <div>
                      <div className="font-extrabold text-[#0F1E36] flex items-center gap-1.5">
                        <span>Set 2. 다온 프리미엄 249</span>
                        <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.2 rounded">
                          추천 · 498만 환급
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        환급보증 498만 + 추모공원(1단) + 후불장례 198만 + 249만P + 2박3일 숙박권 + 지원금 40만원
                      </div>
                    </div>
                  </div>
                  <span className="font-black text-[#0F1E36] shrink-0 text-sm sm:text-base ml-2">
                    2,490,000원
                  </span>
                </label>

                <label
                  className={`flex items-start justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                    productSet === "Set1"
                      ? "border-[#0F1E36] bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <input
                      type="radio"
                      name="productSet"
                      value="Set1"
                      checked={productSet === "Set1"}
                      onChange={() => setProductSet("Set1")}
                      className="mt-1 accent-[#0F1E36]"
                    />
                    <div>
                      <div className="font-bold text-gray-800">
                        Set 1. 기본형 (삼칠그라 OR 알부민)
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        기본 라이프케어 의전 및 프리미엄 건강식품 1세트
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-gray-800 shrink-0 ml-2">
                    1,980,000원
                  </span>
                </label>
              </div>
            </div>

            {/* 건강식품 & 결제수단 선택 */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  사은 건강식품 선택 (택1)
                </label>
                <select
                  value={healthFood}
                  onChange={(e) => setHealthFood(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36] bg-gray-50/50"
                >
                  <option value="삼칠그라 365 (59.8만원 상당)">
                    삼칠그라 365 (59.8만원 상당)
                  </option>
                  <option value="경남제약 알부민 프라임 맥스 (58만원 상당)">
                    경남제약 알부민 프라임 맥스 (58만원)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  희망 결제 수단
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36] bg-gray-50/50"
                >
                  <option value="신용카드 (지정 PG 결제)">신용카드 (지정 PG 결제)</option>
                  <option value="CMS (자동이체)">CMS (자동이체)</option>
                  <option value="계좌이체 / 현금">계좌이체 / 무통장입금</option>
                </select>
              </div>
            </div>

            {/* 고객 성명 및 연락처 */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  구매자 성명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  구매자 연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="예: 010-1234-5678"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36]"
                />
              </div>
            </div>

            {/* 희망 추모공원 */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                희망 추모공원 (선택 사항)
              </label>
              <input
                type="text"
                value={preferredPark}
                onChange={(e) => setPreferredPark(e.target.value)}
                placeholder="예: 유토피아추모관, 용인공원, 시안추모공원..."
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36]"
              />
            </div>

            {/* 배송지 주소 */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                건강식품 배송 받으실 주소 (또는 상담 희망지역)
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="배송 받으실 기본 주소 및 상세 주소"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#0F1E36]"
              />
            </div>

            {/* 약관 동의 */}
            <div className="pt-1">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="accent-[#0F1E36]"
                />
                <span>
                  개인정보 수집·이용 및 상담 신청 안내에 동의합니다.
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-gradient text-white font-black py-3.5 rounded-2xl shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
            >
              {isSubmitting ? (
                <span>접수 처리 중입니다...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>상담 및 계약 신청 완료하기 (1877-8816)</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
