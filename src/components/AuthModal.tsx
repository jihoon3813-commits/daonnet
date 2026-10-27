"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
  UserCheck,
  Shield,
  User,
  Phone,
  MapPin,
  Search,
} from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useDaon } from "@/context/DaonContext";
import { formatPhoneNumber } from "@/utils/format";

declare global {
  interface Window {
    daum?: any;
  }
}

export default function AuthModal() {
  const { isAuthOpen, closeAuth, authMode, openAuth, setUser } = useDaon();

  // 회원 기본 입력 필드
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [baseAddress, setBaseAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const detailInputRef = useRef<HTMLInputElement>(null);

  // 계정 및 인증 필드
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

  // Daum 우편번호 스크립트 로드
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.daum?.Postcode) return;

    const existingScript = document.getElementById("daum-postcode-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "daum-postcode-script";
      script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  if (!isAuthOpen) return null;

  const handleOpenAddressSearch = () => {
    if (!window.daum || !window.daum.Postcode) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 클릭해 주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: function (data: any) {
        let addr = data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
        let extraAddr = "";

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" || data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = ` (${extraAddr})`;
          }
        }

        const fullBaseAddress = `${addr}${extraAddr}`;
        setZonecode(data.zonecode || "");
        setBaseAddress(fullBaseAddress);

        setTimeout(() => {
          if (detailInputRef.current) {
            detailInputRef.current.focus();
          }
        }, 100);
      },
    }).open();
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setZonecode("");
    setBaseAddress("");
    setDetailAddress("");
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
      setErrorMessage("이메일 주소(아이디)를 입력해주세요.");
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
        if (!name.trim()) {
          setErrorMessage("이름(성함)을 입력해주세요.");
          setIsLoading(false);
          return;
        }

        const cleanPhone = phone.replace(/[^0-9]/g, "");
        if (cleanPhone.length < 8) {
          setErrorMessage("올바른 휴대폰 번호를 입력해주세요.");
          setIsLoading(false);
          return;
        }

        if (!baseAddress.trim()) {
          setErrorMessage("주소 검색을 통해 기본 주소를 입력해주세요.");
          setIsLoading(false);
          return;
        }

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

        const fullAddress = `${zonecode ? `[${zonecode}] ` : ""}${baseAddress.trim()} ${detailAddress.trim()}`.trim();

        // 회원가입 실행 (이름, 핸드폰, 주소, 이메일 아이디, 비밀번호)
        const result = await registerMutation({
          email: cleanEmail,
          password: cleanPassword,
          name: name.trim(),
          phone: phone.trim(),
          address: fullAddress,
          zonecode: zonecode.trim() || undefined,
        });

        if (result.success && result.user) {
          setSuccessMessage("회원가입이 성공적으로 완료되었습니다!");
          setUser({
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
            phone: result.user.phone,
            address: result.user.address,
            role: result.user.role,
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
            name: result.user.name,
            phone: result.user.phone,
            address: result.user.address,
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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#fcfbf9] rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-[#e5e4dc] animate-scale-up relative max-h-[92vh] overflow-y-auto no-scrollbar">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full transition cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 타이틀 및 탭 전환 */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#172c37] text-[#d9bc86] mb-2.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#172c37]">
            {authMode === "register" ? "다온넷 정회원 가입" : "다온넷 회원 로그인"}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {authMode === "register"
              ? "다온넷 VIP 혜택 및 공증 보증서 관리를 위한 회원 기본 정보를 입력해주세요."
              : "등록하신 이메일 아이디와 비밀번호로 로그인하세요."}
          </p>

          <div className="flex bg-[#efeee7] p-1 rounded-xl mt-4 border border-[#e0dfd5]">
            <button
              type="button"
              onClick={() => {
                setErrorMessage("");
                setSuccessMessage("");
                openAuth("login");
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
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
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
                authMode === "register"
                  ? "bg-[#172c37] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              회원가입
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
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          {/* 회원가입 시: 이름 & 핸드폰 */}
          {authMode === "register" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  이름 (성함) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="예: 홍길동"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  휴대폰 번호 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={13}
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    placeholder="예: 010-1234-5678"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 회원가입 시: 주소 검색 영역 */}
          {authMode === "register" && (
            <div className="bg-[#f5f4ee] p-3 rounded-xl border border-gray-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#947b50]" />
                  <span>배송/거주지 주소</span> <span className="text-red-500">*</span>
                </label>
                <span className="text-[10px] text-gray-500">사은품 배송 및 보증서 등록용</span>
              </div>

              {/* 우편번호 & 주소 검색 버튼 */}
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={zonecode}
                  placeholder="우편번호"
                  onClick={handleOpenAddressSearch}
                  className="w-24 border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white text-center font-mono cursor-pointer focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleOpenAddressSearch}
                  className="px-3.5 py-1.5 bg-[#172c37] hover:bg-[#254252] text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Search className="w-3.5 h-3.5 text-[#d9bc86]" />
                  <span>주소 검색</span>
                </button>
              </div>

              {/* 기본 주소 */}
              <input
                type="text"
                readOnly
                value={baseAddress}
                placeholder="주소 검색 버튼을 클릭하여 선택해 주세요."
                onClick={handleOpenAddressSearch}
                required
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white cursor-pointer focus:outline-none"
              />

              {/* 상세 주소 */}
              <input
                ref={detailInputRef}
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                placeholder="상세주소 입력 (예: 101동 202호 또는 단독주택)"
                className="w-full border border-gray-300 rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
              />
            </div>
          )}

          {/* 아이디 (이메일 주소) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              이메일 주소 (로그인 아이디) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@daonnet.com"
                required
                className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
              />
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              비밀번호 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="4자 이상 입력"
                required
                className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
              />
            </div>
          </div>

          {/* 회원가입 시: 비밀번호 확인 */}
          {authMode === "register" && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <input
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="비밀번호 다시 입력"
                  required
                  className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl bg-white focus:outline-none focus:border-[#172c37] focus:ring-1 focus:ring-[#172c37]"
                />
              </div>
            </div>
          )}

          {/* 약관 동의 */}
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
              ? "정회원 가입 완료"
              : "로그인"}
          </button>
        </form>

        {/* 하단 전환 링크 */}
        <div className="mt-4 text-center text-[11px] text-gray-500">
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
                회원가입하기
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
