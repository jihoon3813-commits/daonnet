"use client";

import React, { useState } from "react";
import { X, ShieldAlert, Download, CheckCircle, Clock, FileText } from "lucide-react";
import { useDaon, ConsultationItem } from "@/context/DaonContext";

export default function AdminModal() {
  const { isAdminOpen, closeAdmin, consultations, updateConsultationStatus } = useDaon();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");

  if (!isAdminOpen) return null;

  const stats = {
    total: consultations.length,
    pending: consultations.filter((c) => c.status === "신청접수").length,
    processing: consultations.filter((c) => c.status === "상담진행중").length,
    completed: consultations.filter((c) => c.status === "계약완료" || c.status === "보증서발급")
      .length,
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    updateConsultationStatus(id, newStatus);
  };

  const handleSaveNotes = (id: string) => {
    updateConsultationStatus(id, undefined as unknown as string, editNotes);
    setEditingId(null);
  };

  const handleExportCSV = () => {
    if (consultations.length === 0) {
      alert("다운로드할 데이터가 없습니다.");
      return;
    }
    const headers = ["신청일시", "고객명", "연락처", "상품구분", "결제방식", "상태", "희망장지", "주소", "메모"];
    const rows = consultations.map((c) => [
      new Date(c.createdAt).toLocaleString("ko-KR"),
      `"${c.customerName}"`,
      `"${c.phone}"`,
      `"${c.productName}"`,
      `"${c.paymentMethod}"`,
      `"${c.status}"`,
      `"${c.preferredPark || ""}"`,
      `"${c.address}"`,
      `"${c.notes || ""}"`,
    ]);

    const csvContent =
      "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `daonnet_consultations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100 animate-scale-up">
        {/* 헤더 */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0F1E36] text-[#C5A059] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black text-[#C5A059] tracking-wider block">
                DAONNET ADMIN CONSOLE
              </span>
              <h3 className="text-xl font-black text-[#0F1E36] mt-0.5">
                상담 및 계약 접수 현황 대시보드
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV 내보내기</span>
            </button>
            <button
              onClick={closeAdmin}
              className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 통계 요약 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div className="text-xs text-gray-500 font-bold">전체 접수건수</div>
            <div className="text-2xl font-black text-[#0F1E36] mt-1">{stats.total}건</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200">
            <div className="text-xs text-blue-700 font-bold">신청 접수</div>
            <div className="text-2xl font-black text-blue-800 mt-1">{stats.pending}건</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <div className="text-xs text-amber-800 font-bold">상담 진행중</div>
            <div className="text-2xl font-black text-amber-900 mt-1">{stats.processing}건</div>
          </div>
          <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
            <div className="text-xs text-green-700 font-bold">계약 / 발급 완료</div>
            <div className="text-2xl font-black text-green-800 mt-1">{stats.completed}건</div>
          </div>
        </div>

        {/* 목록 테이블 */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0F1E36] text-white">
                <tr>
                  <th className="p-3.5 font-bold">접수일시</th>
                  <th className="p-3.5 font-bold">고객명 / 연락처</th>
                  <th className="p-3.5 font-bold">상품 / 결제방식</th>
                  <th className="p-3.5 font-bold">희망장지 / 주소</th>
                  <th className="p-3.5 font-bold">진행상태</th>
                  <th className="p-3.5 font-bold">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {consultations.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition">
                    <td className="p-3.5 text-gray-500 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString("ko-KR")}{" "}
                      <span className="text-[11px] block">
                        {new Date(item.createdAt).toLocaleTimeString("ko-KR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <div className="font-extrabold text-[#0F1E36]">{item.customerName}</div>
                      <div className="text-gray-500">{item.phone}</div>
                    </td>
                    <td className="p-3.5">
                      <div className="font-bold text-gray-800">{item.productName}</div>
                      <div className="text-[11px] text-gray-500">
                        {item.paymentMethod} · {item.healthFood}
                      </div>
                    </td>
                    <td className="p-3.5">
                      {item.preferredPark && (
                        <div className="font-bold text-blue-700">{item.preferredPark}</div>
                      )}
                      <div className="text-[11px] text-gray-500 max-w-xs truncate">
                        {item.address}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`border rounded-lg px-2.5 py-1 text-xs font-bold focus:outline-none ${
                          item.status === "계약완료" || item.status === "보증서발급"
                            ? "bg-green-50 border-green-300 text-green-800"
                            : item.status === "상담진행중"
                            ? "bg-amber-50 border-amber-300 text-amber-900"
                            : "bg-blue-50 border-blue-300 text-blue-900"
                        }`}
                      >
                        <option value="신청접수">신청접수</option>
                        <option value="상담진행중">상담진행중</option>
                        <option value="계약완료">계약완료</option>
                        <option value="보증서발급">보증서발급</option>
                      </select>
                    </td>
                    <td className="p-3.5">
                      {editingId === item.id ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            placeholder="메모 입력"
                            className="border rounded px-2 py-1 text-xs w-32"
                          />
                          <button
                            onClick={() => handleSaveNotes(item.id)}
                            className="bg-[#0F1E36] text-white px-2 py-1 rounded text-[11px] font-bold"
                          >
                            저장
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingId(item.id);
                              setEditNotes(item.notes || "");
                            }}
                            className="text-gray-500 hover:text-black underline text-[11px]"
                          >
                            {item.notes ? "메모수정" : "메모추가"}
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={closeAdmin}
            className="px-6 py-2.5 bg-[#0F1E36] text-white font-bold rounded-xl text-xs hover:bg-[#091324] transition cursor-pointer"
          >
            관리자 콘솔 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
