"use client";

import React, { useState } from "react";
import { X, Search, ShieldCheck, UserCheck, Calendar, Phone, Award } from "lucide-react";
import { useDaon, ConsultationItem } from "@/context/DaonContext";
import { formatPhoneNumber } from "@/utils/format";

export default function LookupModal() {
  const { isLookupOpen, closeLookup, consultations, openCert } = useDaon();
  const [searchPhone, setSearchPhone] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedResults, setMatchedResults] = useState<ConsultationItem[]>([]);

  if (!isLookupOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSearch = searchPhone.replace(/[^0-9]/g, "");
    if (!cleanSearch) {
      alert("조회하실 전화번호 숫자 일부를 입력해 주세요.");
      return;
    }

    const matched = consultations.filter((c) => {
      const cClean = c.phone.replace(/[^0-9]/g, "");
      return cClean.includes(cleanSearch) || cleanSearch.includes(cClean);
    });

    setMatchedResults(matched);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100 animate-scale-up">
        {/* 헤더 */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5">
          <div>
            <span className="text-xs font-black text-blue-600 tracking-wider block">
              STATUS & CERTIFICATE LOOKUP
            </span>
            <h3 className="text-xl font-black text-[#0F1E36] mt-0.5">
              내 상담 신청 및 보증서 현황 조회
            </h3>
          </div>
          <button
            onClick={closeLookup}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 전화번호 검색 입력 폼 */}
        <form onSubmit={handleSearch} className="mb-6 space-y-3">
          <label className="block text-xs font-bold text-gray-700">
            신청 시 등록하신 휴대폰 번호 입력
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="tel"
              maxLength={13}
              value={searchPhone}
              onChange={(e) => setSearchPhone(formatPhoneNumber(e.target.value))}
              placeholder="예: 010-1234-5678 또는 뒷자리 4자리"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0F1E36]"
            />
            <button
              type="submit"
              className="bg-[#0F1E36] hover:bg-[#091324] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 transition cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#C5A059]" />
              <span>조회</span>
            </button>
          </div>
        </form>

        {/* 결과 영역 */}
        {hasSearched && (
          <div className="space-y-4">
            {matchedResults.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <UserCheck className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-gray-700">
                  일치하는 신청 내역이 없습니다.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  입력하신 번호를 확인하시거나 고객센터(1877-8816)로 문의해 주세요.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-xs font-bold text-gray-500">
                  총 {matchedResults.length}건의 신청 내역이 확인되었습니다.
                </div>

                {matchedResults.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FAF8F5] border border-amber-200/90 rounded-2xl p-4 text-xs space-y-2 relative"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-extrabold text-[#0F1E36] text-sm block">
                          {item.productName}
                        </span>
                        <span className="text-gray-500 text-[11px]">
                          신청인: {item.customerName} ({item.phone})
                        </span>
                      </div>
                      <span className="bg-[#0F1E36] text-[#C5A059] font-black px-2.5 py-1 rounded-md text-[11px]">
                        {item.status}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-amber-100 flex flex-col gap-1 text-gray-600">
                      <div>
                        <strong>선택 건강식품:</strong> {item.healthFood}
                      </div>
                      <div>
                        <strong>결제 방법:</strong> {item.paymentMethod} (
                        {item.amount.toLocaleString()}원)
                      </div>
                      {item.preferredPark && (
                        <div>
                          <strong>희망 장지:</strong> {item.preferredPark}
                        </div>
                      )}
                      {item.notes && (
                        <div className="text-blue-800 bg-blue-50 p-2 rounded-lg font-medium">
                          <strong>메모:</strong> {item.notes}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => {
                          closeLookup();
                          openCert();
                        }}
                        className="bg-white hover:bg-gray-50 text-[#0F1E36] border border-gray-300 px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1 transition cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>보증서 보기</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 닫기 버튼 */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={closeLookup}
            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs transition cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
