"use client";

import React, { useState } from "react";
import { X, Mail, Lock, CheckCircle, AlertCircle, UserCheck, Shield } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useDaon } from "@/context/DaonContext";

export default function AuthModal() {
  const { isAuthOpen, closeAuth, authMode, openAuth, setUser } = useDaon();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const settings = useQuery(api.settings.getSettings);
  const privacyPolicy = settings?.privacyPolicy || "";

  const registerMutation = useMutation(api.users.registerWithEmail);
  const loginMutation = useMutation(api.users.loginWithEmail);

  if (!isAuthOpen) return null;

  const handleResetForm = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleClose = () => {
    handleResetForm();
    closeAuth();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail) {
      setErrorMessage("이메일 주소를 입력해주세요.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage("올바른 이메일 형식을 입력해주세요 (예: user@example.com).");
      return;
    }

    if (!cleanPassword || cleanPassword.length < 4) {
      setErrorMessage("비밀번호는 4자리 이상 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      if (authMode === "register") {
        if (cleanPassword !== passwordConfirm.trim()) {
          setErrorMessage("비밀번호 확인이 일치하지 않습니다.");
          setIsLoading(false);
          return;
        }

        if (!agreeTerms) {
          setErrorMessage("이용약관 및 개인정보 처리방침에 동의해주세요.");
          setIsLoading(false);
          return;
        }

        // 회원가입 실행
        const result = await registerMutation({
          email: cleanEmail,
          password: cleanPassword,
        });

        if (result.success && result.user) {
          setSuccessMessage("회원가입이 성공적으로 완료되었습니다!");
          setUser({
            id: result.user.id,
            email: result.user.email,
          });
          setTimeout(() => {
            handleClose();
          }, 1200);
        } else {
          setErrorMessage(result.message || "회원가입에 실패했습니다.");
        }
      } else {
        // 로그인 실행
        const result = await loginMutation({
          email: cleanEmail,
          password: cleanPassword,
        });

        if (result.success && result.user) {
          setSuccessMessage("로그인되었습니다. 환영합니다!");
          setUser({
            id: result.user.id,
            email: result.user.email,
            role: result.user.role,
          });
          setTimeout(() => {
            handleClose();
          }, 800);
        } else {
          setErrorMessage(result.message || "이메일 또는 비밀번호가 올바르지 않습니다.");
        }
      }
    } catch (err: any) {
      setErrorMessage("서버 통신 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#fcfbf9] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#e5e4dc] animate-scale-up relative">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 타이틀 및 탭 전환 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#172c37] text-[#d9bc86] mb-3">
            <UserCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#172c37]">
            {authMode === "register" ? "다온넷 간편 회원가입" : "다온넷 회원 로그인"}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {authMode === "register"
              ? "복잡한 정보 없이 오직 이메일만으로 가입할 수 있습니다."
              : "등록하신 이메일과 비밀번호로 로그인하세요."}
          </p>

          <div className="flex bg-[#efeee7] p-1 rounded-xl mt-4 border border-[#e0dfd5]">
            <button
              type="button"
              onClick={() => {
                setErrorMessage("");
                setSuccessMessage("");
                openAuth("login");
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                authMode === "login"
                  ? "bg-[#172c37] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              로그인
            </button>
            <button
              type="button"
              onClick={() => {
                setErrorMessage("");
                setSuccessMessage("");
                openAuth("register");
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
                authMode === "register"
                  ? "bg-[#172c37] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              이메일 회원가입
            </button>
          </div>
        </div>

        {/* 알림 메시지 */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* 폼 입력 */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              이메일 주소 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@daonnet.com"
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              비밀번호 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="4자 이상 입력"
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
              />
            </div>
          </div>

          {authMode === "register" && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="비밀번호 다시 입력"
                  required
                  className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
                />
              </div>
            </div>
          )}

          {authMode === "register" && (
            <div className="pt-1 flex items-center justify-between">
              <label className="flex items-center gap-2 text-[11px] text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="rounded border-gray-300 text-[#172c37] focus:ring-[#172c37]"
                />
                <span>
                  [필수] 다온넷 이용약관 및 개인정보 처리방침에 동의합니다.
                </span>
              </label>
              <button
                type="button"
                onClick={() => setShowPolicyModal(true)}
                className="text-[10px] text-gray-500 hover:text-[#172c37] underline cursor-pointer shrink-0 ml-1"
              >
                약관보기
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 bg-[#172c37] hover:bg-[#233d4b] text-[#f7f5ef] font-bold text-xs rounded-xl transition shadow-md disabled:opacity-50 cursor-pointer"
          >
            {isLoading
              ? "처리 중..."
              : authMode === "register"
              ? "이메일로 회원가입 완료"
              : "로그인"}
          </button>
        </form>

        {/* 하단 전환 링크 */}
        <div className="mt-5 text-center text-[11px] text-gray-500">
          {authMode === "register" ? (
            <p>
              이미 회원이신가요?{" "}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage("");
                  setSuccessMessage("");
                  openAuth("login");
                }}
                className="font-bold text-[#172c37] hover:underline cursor-pointer"
              >
                로그인하기
              </button>
            </p>
          ) : (
            <p>
              아직 회원이 아니신가요?{" "}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage("");
                  setSuccessMessage("");
                  openAuth("register");
                }}
                className="font-bold text-[#947b50] hover:underline cursor-pointer"
              >
                이메일로 가입하기
              </button>
            </p>
          )}
        </div>
      </div>

      {/* 개인정보 처리방침 및 이용약관 서브모달 */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#172c37] text-white">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#d9bc86]" />
                <h4 className="font-bold text-sm sm:text-base">이용약관 및 개인정보 처리방침</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="text-gray-300 hover:text-white p-1 rounded-full cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 overflow-y-auto flex-1 text-xs text-gray-700 leading-relaxed whitespace-pre-line bg-gray-50/70">
              {privacyPolicy || "등록된 개인정보 처리방침이 없습니다."}
            </div>
            <div className="p-3.5 bg-white border-t border-gray-100 text-right">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-4 py-2 bg-[#172c37] hover:bg-[#254252] text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
