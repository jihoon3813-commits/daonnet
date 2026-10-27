"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Lock,
  User,
  LogOut,
  MapPin,
  ClipboardList,
  Users,
  KeyRound,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  Upload,
  Download,
  Search,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Home,
  Image as ImageIcon,
  Check,
  FileText,
  SlidersHorizontal,
  RotateCcw,
  Eye,
  Menu,
  X,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { MEMORIAL_PARKS } from "@/data/memorialParks";

type AdminTab = "consultations" | "parks" | "users" | "settings" | "password";

export default function AdminPage() {
  // 관리자 인증 상태 (세션)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>("consultations");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // 로그인 폼 상태
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // 비밀번호 변경 상태
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwConfirm, setNewPwConfirm] = useState("");
  const [pwMessage, setPwMessage] = useState({ type: "", text: "" });
  const [isChangingPw, setIsChangingPw] = useState(false);

  // 상담내역 관리 상태
  const [consultationSearch, setConsultationSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [editingConsultationId, setEditingConsultationId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");

  // 추모공원 관리 상태
  const [parkSearch, setParkSearch] = useState("");
  const [parkRegionFilter, setParkRegionFilter] = useState("ALL");
  const [parkTypeFilter, setParkTypeFilter] = useState("ALL");
  const [isParkModalOpen, setIsParkModalOpen] = useState(false);
  const [editingPark, setEditingPark] = useState<any | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedNotice, setSeedNotice] = useState<string | null>(null);

  // 추모공원 신규/수정 폼 필드
  const [parkForm, setParkForm] = useState({
    region: "CAPITAL",
    regionLabel: "수도권",
    loc: "",
    name: "",
    type: "직영",
    addr: "",
    desc: "",
    featured: false,
    phone: "",
    website: "",
    supportBenefit: "10~70% 회원 특별 할인가 적용",
    imageUrl: "",
    imageStorageId: undefined as string | undefined,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmittingPark, setIsSubmittingPark] = useState(false);

  // Convex 쿼리 및 뮤테이션
  const adminLoginMutation = useMutation(api.admin.login);
  const changePasswordMutation = useMutation(api.admin.changePassword);

  const consultations = useQuery(api.consultations.listConsultations, {}) || [];
  const stats = useQuery(api.consultations.getStats, {}) || {
    total: 0,
    pending: 0,
    processing: 0,
    completed: 0,
  };
  const updateStatusMutation = useMutation(api.consultations.updateStatus);
  const deleteConsultationMutation = useMutation(api.consultations.deleteConsultation);

  const dbParks = useQuery(api.parks.listParks, {}) || [];
  const generateUploadUrlMutation = useMutation(api.parks.generateUploadUrl);
  const createParkMutation = useMutation(api.parks.createPark);
  const updateParkMutation = useMutation(api.parks.updatePark);
  const deleteParkMutation = useMutation(api.parks.deletePark);
  const seedParksMutation = useMutation(api.parks.seedInitialParks);

  const registeredUsers = useQuery(api.users.listUsers, {}) || [];

  // 사이트 설정 (푸터 및 개인정보 동의) 관련 Convex 쿼리 및 뮤테이션
  const siteSettingsData = useQuery(api.settings.getSettings);
  const updateSettingsMutation = useMutation(api.settings.updateSettings);
  const resetSettingsMutation = useMutation(api.settings.resetSettings);

  const [settingsForm, setSettingsForm] = useState({
    companyName: "",
    department: "",
    callCenterTitle: "",
    callCenterPhone: "",
    mallName: "",
    mallUrl: "",
    callCenterSubtext: "",
    noticeText: "",
    copyright: "",
    privacyTitle: "",
    privacySummary: "",
    privacyPolicy: "",
    termsOfService: "",
  });
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [settingsNotice, setSettingsNotice] = useState<{ type: string; text: string } | null>(null);

  // 설정 데이터 초기 로드
  useEffect(() => {
    if (siteSettingsData) {
      setSettingsForm({
        companyName: siteSettingsData.companyName || "",
        department: siteSettingsData.department || "",
        callCenterTitle: siteSettingsData.callCenterTitle || "",
        callCenterPhone: siteSettingsData.callCenterPhone || "",
        mallName: siteSettingsData.mallName || "",
        mallUrl: siteSettingsData.mallUrl || "",
        callCenterSubtext: siteSettingsData.callCenterSubtext || "",
        noticeText: siteSettingsData.noticeText || "",
        copyright: siteSettingsData.copyright || "",
        privacyTitle: siteSettingsData.privacyTitle || "",
        privacySummary: siteSettingsData.privacySummary || "",
        privacyPolicy: siteSettingsData.privacyPolicy || "",
        termsOfService: siteSettingsData.termsOfService || "",
      });
    }
  }, [siteSettingsData]);

  // 로컬 세션 확인
  useEffect(() => {
    const savedToken = localStorage.getItem("daon_admin_session");
    if (savedToken) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // 로그인 처리
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    try {
      const res = await adminLoginMutation({
        username: loginUsername.trim(),
        password: loginPassword.trim(),
      });

      if (res.success && res.token) {
        localStorage.setItem("daon_admin_session", res.token);
        setIsAdminLoggedIn(true);
        setLoginPassword("");
      } else {
        setLoginError(res.message || "로그인에 실패했습니다.");
      }
    } catch (err: any) {
      setLoginError("로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("daon_admin_session");
    setIsAdminLoggedIn(false);
  };

  // 비밀번호 변경 처리
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwMessage({ type: "", text: "" });

    if (!newPw || newPw.length < 4) {
      setPwMessage({ type: "error", text: "새 비밀번호는 4자리 이상 입력해주세요." });
      return;
    }
    if (newPw !== newPwConfirm) {
      setPwMessage({ type: "error", text: "새 비밀번호 확인이 일치하지 않습니다." });
      return;
    }

    setIsChangingPw(true);
    try {
      const res = await changePasswordMutation({
        username: "admin",
        currentPassword: currentPw,
        newPassword: newPw,
      });

      if (res.success) {
        setPwMessage({ type: "success", text: "비밀번호가 성공적으로 변경되었습니다." });
        setCurrentPw("");
        setNewPw("");
        setNewPwConfirm("");
      } else {
        setPwMessage({ type: "error", text: res.message || "비밀번호 변경에 실패했습니다." });
      }
    } catch (err) {
      setPwMessage({ type: "error", text: "비밀번호 변경 중 통신 오류가 발생했습니다." });
    } finally {
      setIsChangingPw(false);
    }
  };

  // 사이트 설정 (푸터 및 개인정보 동의) 저장
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingSettings(true);
    setSettingsNotice(null);

    try {
      const res = await updateSettingsMutation({
        companyName: settingsForm.companyName,
        department: settingsForm.department,
        callCenterTitle: settingsForm.callCenterTitle,
        callCenterPhone: settingsForm.callCenterPhone,
        mallName: settingsForm.mallName,
        mallUrl: settingsForm.mallUrl,
        callCenterSubtext: settingsForm.callCenterSubtext,
        noticeText: settingsForm.noticeText,
        copyright: settingsForm.copyright,
        privacyTitle: settingsForm.privacyTitle,
        privacySummary: settingsForm.privacySummary,
        privacyPolicy: settingsForm.privacyPolicy,
        termsOfService: settingsForm.termsOfService || undefined,
      });

      if (res.success) {
        setSettingsNotice({ type: "success", text: res.message || "푸터 내용 및 개인정보 동의 설정이 저장되었습니다." });
      } else {
        setSettingsNotice({ type: "error", text: "설정 저장에 실패했습니다." });
      }
    } catch (err: any) {
      setSettingsNotice({ type: "error", text: err.message || "저장 중 오류가 발생했습니다." });
    } finally {
      setIsSavingSettings(false);
    }
  };

  // 사이트 설정 기본값으로 복원
  const handleResetSettings = async () => {
    if (!window.confirm("푸터 내용과 개인정보 처리방침을 시스템 기본값으로 복원하시겠습니까?")) {
      return;
    }

    setIsSavingSettings(true);
    setSettingsNotice(null);

    try {
      const res = await resetSettingsMutation({});
      setSettingsNotice({ type: "success", text: res.message || "기본값으로 복원되었습니다." });
    } catch (err: any) {
      setSettingsNotice({ type: "error", text: err.message || "복원 중 오류가 발생했습니다." });
    } finally {
      setIsSavingSettings(false);
    }
  };

  // 상담 상태 변경
  const handleConsultationStatusChange = async (id: any, newStatus: string) => {
    try {
      await updateStatusMutation({ id, status: newStatus });
    } catch (err) {
      alert("상태 변경에 실패했습니다.");
    }
  };

  // 상담 메모 저장
  const handleSaveConsultationNotes = async (id: any) => {
    try {
      const target = consultations.find((c: any) => c._id === id);
      await updateStatusMutation({
        id,
        status: target ? target.status : "신청접수",
        notes: editNotes,
      });
      setEditingConsultationId(null);
    } catch (err) {
      alert("메모 저장에 실패했습니다.");
    }
  };

  // 상담 삭제
  const handleDeleteConsultation = async (id: any) => {
    if (!confirm("이 상담 신청 내역을 정말 삭제하시겠습니까?")) return;
    try {
      await deleteConsultationMutation({ id });
    } catch {
      alert("삭제 실패");
    }
  };

  // 상담 CSV 다운로드
  const handleExportCSV = () => {
    if (!consultations || consultations.length === 0) {
      alert("다운로드할 데이터가 없습니다.");
      return;
    }
    const headers = [
      "접수일시",
      "고객명",
      "연락처",
      "상품구분",
      "결제방식",
      "희망장지",
      "주소",
      "진행상태",
      "메모",
    ];
    const rows = consultations.map((c: any) => [
      new Date(c.createdAt).toLocaleString("ko-KR"),
      `"${c.customerName}"`,
      `"${c.phone}"`,
      `"${c.productName}"`,
      `"${c.paymentMethod}"`,
      `"${c.preferredPark || ""}"`,
      `"${c.address}"`,
      `"${c.status}"`,
      `"${c.notes || ""}"`,
    ]);

    const csvContent =
      "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `daonnet_consultations_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  // 초기 50개 추모공원 DB 일괄 동기화/시딩
  const handleSeedParks = async (overwrite: boolean = false) => {
    if (
      overwrite &&
      !confirm("기존 DB의 추모공원을 모두 초기 기본 50개 데이터로 초기화하시겠습니까?")
    ) {
      return;
    }
    setIsSeeding(true);
    setSeedNotice(null);
    try {
      const sanitizedParks = MEMORIAL_PARKS.map((p) => ({
        region: p.region,
        regionLabel: p.regionLabel,
        loc: p.loc,
        name: p.name,
        type: p.type,
        addr: p.addr,
        desc: p.desc,
        featured: p.featured,
        phone: p.phone,
        website: p.website,
        supportBenefit: p.supportBenefit,
      }));

      const res = await seedParksMutation({
        parks: sanitizedParks,
        overwrite,
      });

      setSeedNotice(res.message);
      setTimeout(() => setSeedNotice(null), 4000);
    } catch (err: any) {
      alert("추모공원 등록 실패: " + err.message);
    } finally {
      setIsSeeding(false);
    }
  };

  // 추모공원 모달 열기 (추가 또는 수정)
  const handleOpenParkModal = (park?: any) => {
    if (park) {
      setEditingPark(park);
      setParkForm({
        region: park.region || "CAPITAL",
        regionLabel: park.regionLabel || "수도권",
        loc: park.loc || "",
        name: park.name || "",
        type: park.type || "직영",
        addr: park.addr || "",
        desc: park.desc || "",
        featured: !!park.featured,
        phone: park.phone || "",
        website: park.website || "",
        supportBenefit: park.supportBenefit || "10~70% 회원 특별 할인가 적용",
        imageUrl: park.imageUrl || "",
        imageStorageId: park.imageStorageId,
      });
      setImagePreview(park.displayImageUrl || park.imageUrl || null);
    } else {
      setEditingPark(null);
      setParkForm({
        region: "CAPITAL",
        regionLabel: "수도권",
        loc: "",
        name: "",
        type: "직영",
        addr: "",
        desc: "",
        featured: false,
        phone: "",
        website: "",
        supportBenefit: "10~70% 회원 특별 할인가 적용",
        imageUrl: "",
        imageStorageId: undefined,
      });
      setImagePreview(null);
    }
    setSelectedFile(null);
    setIsParkModalOpen(true);
  };

  // 이미지 파일 선택 처리
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // 추모공원 저장 (등록 / 수정)
  const handleSavePark = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parkForm.name || !parkForm.addr) {
      alert("공원명과 주소는 필수 입력사항입니다.");
      return;
    }

    setIsSubmittingPark(true);
    try {
      let finalStorageId = parkForm.imageStorageId;

      // 파일 업로드가 선택된 경우 Convex Storage로 업로드
      if (selectedFile) {
        const uploadUrl = await generateUploadUrlMutation();
        const uploadRes = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": selectedFile.type },
          body: selectedFile,
        });
        const { storageId } = await uploadRes.json();
        finalStorageId = storageId;
      }

      // 지역 label 자동 매핑
      let regionLabel = "수도권";
      if (parkForm.region === "CHUNG_GANG") regionLabel = "충청·강원";
      if (parkForm.region === "YEONGNAM") regionLabel = "경상·영남";
      if (parkForm.region === "HONAM_JEJU") regionLabel = "호남·제주";

      if (editingPark) {
        // 수정
        await updateParkMutation({
          id: editingPark._id,
          region: parkForm.region,
          regionLabel,
          loc: parkForm.loc,
          name: parkForm.name,
          type: parkForm.type,
          addr: parkForm.addr,
          desc: parkForm.desc,
          featured: parkForm.featured,
          phone: parkForm.phone || undefined,
          website: parkForm.website || undefined,
          supportBenefit: parkForm.supportBenefit,
          imageStorageId: finalStorageId as any,
          imageUrl: parkForm.imageUrl || undefined,
        });
        alert("추모공원 정보가 성공적으로 수정되었습니다.");
      } else {
        // 신규 등록
        await createParkMutation({
          region: parkForm.region,
          regionLabel,
          loc: parkForm.loc,
          name: parkForm.name,
          type: parkForm.type,
          addr: parkForm.addr,
          desc: parkForm.desc,
          featured: parkForm.featured,
          phone: parkForm.phone || undefined,
          website: parkForm.website || undefined,
          supportBenefit: parkForm.supportBenefit,
          imageStorageId: finalStorageId as any,
          imageUrl: parkForm.imageUrl || undefined,
        });
        alert("신규 추모공원이 성공적으로 등록되었습니다.");
      }

      setIsParkModalOpen(false);
    } catch (err: any) {
      alert("저장 중 오류 발생: " + err.message);
    } finally {
      setIsSubmittingPark(false);
    }
  };

  // 추모공원 삭제
  const handleDeletePark = async (id: any, name: string) => {
    if (!confirm(`'${name}' 추모공원을 정말 삭제하시겠습니까?`)) return;
    try {
      await deleteParkMutation({ id });
    } catch (err: any) {
      alert("삭제 실패: " + err.message);
    }
  };

  // 네비게이션 메뉴 목록
  const navMenuItems = [
    {
      id: "consultations" as AdminTab,
      label: "상담신청 관리",
      subLabel: "고객 접수 및 계약 진행 관리",
      icon: ClipboardList,
      badge: `${consultations.length}건`,
      badgeColor: "bg-[#947b50]/20 text-[#d9bc86] border border-[#947b50]/40",
    },
    {
      id: "parks" as AdminTab,
      label: "추모공원 관리",
      subLabel: "전국 네트워크 공원 DB & 홈페이지",
      icon: MapPin,
      badge: `${dbParks.length}개소`,
      badgeColor: "bg-[#254556] text-[#b8d4e3] border border-[#3b6378]",
    },
    {
      id: "users" as AdminTab,
      label: "가입 회원 관리",
      subLabel: "가입 회원 및 등급 계정 조회",
      icon: Users,
      badge: `${registeredUsers.length}명`,
      badgeColor: "bg-[#254556] text-[#b8d4e3] border border-[#3b6378]",
    },
    {
      id: "settings" as AdminTab,
      label: "푸터 & 약관 설정",
      subLabel: "사업자정보, 고객센터, 개인정보방침",
      icon: FileText,
      badge: null,
      badgeColor: "",
    },
    {
      id: "password" as AdminTab,
      label: "관리자 비밀번호 변경",
      subLabel: "콘솔 보안 계정 암호 변경",
      icon: KeyRound,
      badge: null,
      badgeColor: "",
    },
  ];

  // ===============================
  // 1. 미로그인 상태: 로그인 화면 (랜딩 디자인 컨셉)
  // ===============================
  if (!isAdminLoggedIn) {
    return (
      <div
        className="min-h-screen bg-[#f7f5ef] text-[#26373b] flex flex-col justify-center items-center p-4"
        style={{ fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <div className="w-full max-w-md bg-white border border-[#e5e4dc] rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(23,44,55,0.06)] relative overflow-hidden">
          {/* 상단 골드 악센트 라인 */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#947b50] via-[#c5a059] to-[#172c37]" />

          <div className="text-center mb-8 pt-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#172c37] text-[#d9bc86] shadow-md mb-3 border border-[#2d4d5e]">
              <span className="text-3xl font-normal leading-none" style={{ fontFamily: "Georgia, serif" }}>
                ∞
              </span>
            </div>
            <span
              className="text-xs font-bold tracking-[2px] text-[#947b50] block uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              DAONNET MANAGEMENT
            </span>
            <h1 className="text-2xl font-bold text-[#172c37] mt-1">다온넷 관리자 로그인</h1>
            <p className="text-xs text-[#747b78] mt-2">
              통합 관리자 계정으로 접속하여 고객 상담과 추모공원 데이터를 안전하게 관리하세요.
            </p>
          </div>

          {/* 보안 접속 안내 */}
          <div className="mb-6 p-3.5 bg-[#fbfaf6] border border-[#e5e4dc] rounded-xl text-xs text-[#747b78] flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#947b50] shrink-0" />
            <span className="text-[11px] leading-relaxed">
              보안 인증된 다온넷 관리자 계정 정보로 로그인해 주시기 바랍니다.
            </span>
          </div>

          {loginError && (
            <div className="mb-5 p-3.5 bg-[#fdf2f2] border border-[#f8b4b4] rounded-xl text-xs text-[#c81e1e] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#26373b] mb-1.5">
                관리자 아이디
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#747b78]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="관리자 아이디 입력 (admin)"
                  required
                  className="w-full pl-10 pr-3 py-3 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl text-[#172c37] placeholder-[#9aa09d] focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#26373b] mb-1.5">
                비밀번호
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#747b78]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="비밀번호 입력"
                  required
                  className="w-full pl-10 pr-3 py-3 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl text-[#172c37] placeholder-[#9aa09d] focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 bg-[#172c37] hover:bg-[#26373b] text-[#f7f5ef] font-bold text-xs tracking-wider rounded-xl transition shadow-md disabled:opacity-50 cursor-pointer mt-2 border border-[#172c37]"
            >
              {isLoggingIn ? "인증 확인 중..." : "관리자 시스템 접속하기"}
            </button>
          </form>

          <div className="mt-8 text-center pt-4 border-t border-[#e5e4dc]">
            <Link
              href="/"
              className="text-xs text-[#747b78] hover:text-[#947b50] inline-flex items-center gap-1.5 transition font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>다온넷 메인 홈페이지로 이동</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ===============================
  // 2. 로그인된 상태: 좌측 메뉴 사이드바 대시보드 레이아웃
  // ===============================
  return (
    <div
      className="min-h-screen bg-[#f7f5ef] text-[#26373b] flex"
      style={{ fontFamily: "'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* 모바일 사이드바 배경 오버레이 */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* =========================================
          좌측 고정 사이드바 (Left Sidebar)
      ========================================= */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[270px] bg-[#172c37] text-[#f7f5ef] flex flex-col border-r border-[#223947] transition-transform duration-300 ease-in-out shrink-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* 사이드바 상단 로고 & 브랜딩 */}
        <div className="p-5 border-b border-[#243d4a] flex items-center justify-between">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 text-[#f7f5ef] group select-none"
            title="다온넷 메인 홈페이지 열기"
          >
            <span
              className="text-3xl font-normal tracking-[-2px] text-[#d9bc86] group-hover:scale-105 transition-transform"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ∞
            </span>
            <div>
              <div
                className="text-[17px] font-bold tracking-[1.5px] text-[#f7f5ef] leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                DAONNET
              </div>
              <div className="text-[10px] text-[#9aa7ad] tracking-wide mt-0.5 font-normal">
                통합 관리자 콘솔
              </div>
            </div>
          </Link>

          {/* 모바일 닫기 버튼 */}
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-1.5 text-[#9aa7ad] hover:text-white rounded-lg hover:bg-[#223947] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 사이드바 프로필 요약 카드 */}
        <div className="px-4 py-3.5 mx-3 mt-3.5 rounded-xl bg-[#12242e] border border-[#223947] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#947b50] text-[#172c37] flex items-center justify-center font-black text-xs shadow-xs">
              M
            </div>
            <div>
              <div className="text-xs font-bold text-[#f7f5ef] flex items-center gap-1.5">
                <span>최고관리자</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] text-[#8699a2]">admin · 온라인 연결됨</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="로그아웃"
            className="p-1.5 text-[#9aa7ad] hover:text-red-400 hover:bg-[#203644] rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {/* 사이드바 네비게이션 메뉴 (좌측 배열) */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-bold text-[#738a96] uppercase tracking-wider">
            운영 관리 메뉴
          </div>

          {navMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileSidebarOpen(false);
                }}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-[#243c4c] text-[#f7f5ef] border-l-[3px] border-[#d9bc86] shadow-xs font-bold"
                    : "text-[#a4b5be] hover:text-white hover:bg-[#1c323f]"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-[#d9bc86]" : "text-[#7b909b] group-hover:text-white"
                    }`}
                  />
                  <div className="truncate">
                    <span className="block leading-tight">{item.label}</span>
                    <span className="text-[9px] text-[#71848f] block mt-0.5 truncate font-normal">
                      {item.subLabel}
                    </span>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-1.5 ${
                      isActive
                        ? "bg-[#d9bc86] text-[#172c37]"
                        : item.badgeColor || "bg-[#254556] text-[#b8d4e3]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* 사이드바 하단 바로가기 및 링크 영역 */}
        <div className="p-3 border-t border-[#243d4a] space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full py-2.5 px-3 bg-[#1d3340] hover:bg-[#253f4e] text-[#d9bc86] rounded-xl text-xs font-semibold transition flex items-center justify-between border border-[#2b4455]"
          >
            <div className="flex items-center gap-2">
              <Home className="w-3.5 h-3.5" />
              <span>랜딩 홈페이지 보기</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#9aa7ad]" />
          </Link>

          <div className="px-2 py-1 text-[10px] text-[#697e8a] flex items-center justify-between">
            <span>DAONNET Ver 2.4</span>
            <span className="text-[#8c9fa8]">Cloud Sync Active</span>
          </div>
        </div>
      </aside>

      {/* =========================================
          우측 메인 대시보드 영역 (Main Content)
      ========================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* 상단 탑바 (헤더) */}
        <header className="sticky top-0 z-30 h-16 bg-[#f7f5ef]/95 backdrop-blur-sm border-b border-[#e5e4dc] px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* 모바일 햄버거 버튼 */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 -ml-1 text-[#26373b] hover:bg-[#eae8df] rounded-xl transition"
              aria-label="메뉴 열기"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#172c37] leading-tight">
                {activeTab === "consultations" && "상담신청 이력 관리"}
                {activeTab === "parks" && "전국 추모공원 네트워크 관리"}
                {activeTab === "users" && "가입 회원 목록"}
                {activeTab === "settings" && "푸터 & 개인정보 약관 설정"}
                {activeTab === "password" && "관리자 보안 비밀번호 변경"}
              </h1>
              <p className="text-[11px] text-[#747b78] hidden sm:block">
                {activeTab === "consultations" && "고객 상담 신청 내역을 실시간으로 확인하고 진행 상태를 업데이트합니다."}
                {activeTab === "parks" && "전국 55개 특별지원 추모공원 DB를 등록, 수정, 삭제 및 홈페이지 링크를 관리합니다."}
                {activeTab === "users" && "다온넷에 가입한 일반 회원 및 권한 정보를 조회합니다."}
                {activeTab === "settings" && "웹사이트 하단 푸터 표기 및 상담신청 시의 개인정보 수집/이용 동의 문구를 설정합니다."}
                {activeTab === "password" && "관리자 콘솔 접근 비밀번호를 안전하게 갱신합니다."}
              </p>
            </div>
          </div>

          {/* 우측 액션 버튼들 */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#26373b] hover:text-[#172c37] px-3 py-1.5 rounded-xl border border-[#b6bcb7] hover:border-[#172c37] bg-white transition shadow-xs"
            >
              <Home className="w-3.5 h-3.5 text-[#947b50]" />
              <span>사이트 바로가기</span>
              <ExternalLink className="w-3 h-3 text-[#747b78]" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs bg-[#f4ecea] hover:bg-[#edd8d6] text-[#b4342b] border border-[#f0c3bf] font-bold px-3 py-1.5 rounded-xl transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>로그아웃</span>
            </button>
          </div>
        </header>

        {/* 본문 메인 컨텐츠 */}
        <main className="p-4 sm:p-8 flex-1 max-w-[1600px] w-full mx-auto">
          {/* =========================================
              TAB 1: 상담신청 이력 관리
          ========================================= */}
          {activeTab === "consultations" && (
            <div className="space-y-6">
              {/* 요약 통계 카드 (랜딩 스타일) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#172c37]" />
                  <div className="text-xs text-[#747b78] font-bold">전체 접수건수</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#172c37] mt-1.5 tracking-tight">
                    {stats.total}
                    <span className="text-sm font-bold text-[#747b78] ml-1">건</span>
                  </div>
                  <div className="text-[10px] text-[#9aa09d] mt-1">누적 온라인 상담·계약 신청</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#d9bc86]" />
                  <div className="text-xs text-[#947b50] font-bold">신청 접수 (대기)</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#947b50] mt-1.5 tracking-tight">
                    {stats.pending}
                    <span className="text-sm font-bold text-[#947b50] ml-1">건</span>
                  </div>
                  <div className="text-[10px] text-[#9aa09d] mt-1">확인 및 해피콜 필요</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#3a7291]" />
                  <div className="text-xs text-[#2b5973] font-bold">상담 진행중</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2b5973] mt-1.5 tracking-tight">
                    {stats.processing}
                    <span className="text-sm font-bold text-[#2b5973] ml-1">건</span>
                  </div>
                  <div className="text-[10px] text-[#9aa09d] mt-1">장지 안내 및 상담사 연결</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2e7d56]" />
                  <div className="text-xs text-[#2e7d56] font-bold">계약 / 발급 완료</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#2e7d56] mt-1.5 tracking-tight">
                    {stats.completed}
                    <span className="text-sm font-bold text-[#2e7d56] ml-1">건</span>
                  </div>
                  <div className="text-[10px] text-[#9aa09d] mt-1">보증서 발급 및 계약 체결</div>
                </div>
              </div>

              {/* 필터 및 검색 바 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#747b78]" />
                    <input
                      type="text"
                      placeholder="고객명, 연락처, 주소 검색"
                      value={consultationSearch}
                      onChange={(e) => setConsultationSearch(e.target.value)}
                      className="pl-8 pr-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl w-48 sm:w-64 focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] transition"
                    />
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="py-2 px-3 text-xs border border-[#dcd9ce] rounded-xl bg-[#fbfaf6] font-medium text-[#26373b] focus:outline-none focus:border-[#947b50]"
                  >
                    <option value="ALL">전체 진행상태</option>
                    <option value="신청접수">신청접수</option>
                    <option value="상담진행중">상담진행중</option>
                    <option value="계약완료">계약완료</option>
                    <option value="보증서발급">보증서발급</option>
                  </select>
                </div>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#172c37] hover:bg-[#26373b] text-[#f7f5ef] rounded-xl text-xs font-bold transition shadow-xs cursor-pointer border border-[#172c37]"
                >
                  <Download className="w-3.5 h-3.5 text-[#d9bc86]" />
                  <span>엑셀(CSV) 내보내기</span>
                </button>
              </div>

              {/* 목록 테이블 (랜딩 무드) */}
              <div className="bg-white border border-[#e5e4dc] rounded-2xl shadow-[0_2px_8px_rgba(23,44,55,0.04)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#172c37] text-[#f7f5ef] border-b border-[#223947]">
                      <tr>
                        <th className="p-3.5 font-bold whitespace-nowrap">접수일시</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">고객명 / 연락처</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">신청 상품</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">결제 / 증정품</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">희망장지 / 주소</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">진행상태</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">메모 및 관리</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eeebe3]">
                      {consultations
                        .filter((c: any) => {
                          if (statusFilter !== "ALL" && c.status !== statusFilter) return false;
                          if (consultationSearch.trim()) {
                            const q = consultationSearch.trim().toLowerCase();
                            const name = (c.customerName || "").toLowerCase();
                            const phone = (c.phone || "").toLowerCase();
                            const addr = (c.address || "").toLowerCase();
                            const park = (c.preferredPark || "").toLowerCase();
                            return (
                              name.includes(q) ||
                              phone.includes(q) ||
                              addr.includes(q) ||
                              park.includes(q)
                            );
                          }
                          return true;
                        })
                        .map((item: any) => (
                          <tr key={item._id} className="hover:bg-[#faf9f5] transition">
                            <td className="p-3.5 text-[#747b78] whitespace-nowrap">
                              {new Date(item.createdAt).toLocaleDateString("ko-KR")}
                              <span className="text-[11px] block text-[#9aa09d]">
                                {new Date(item.createdAt).toLocaleTimeString("ko-KR", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </td>
                            <td className="p-3.5">
                              <div className="font-extrabold text-[#172c37]">{item.customerName}</div>
                              <div className="text-[#747b78] font-mono text-[11px]">{item.phone}</div>
                            </td>
                            <td className="p-3.5">
                              <div className="font-bold text-[#26373b]">{item.productName}</div>
                              <div className="text-[#747b78] text-[11px]">
                                가입금액: {item.amount?.toLocaleString()}원
                              </div>
                            </td>
                            <td className="p-3.5">
                              <div className="font-semibold text-[#172c37]">{item.paymentMethod}</div>
                              <div className="text-[11px] text-[#747b78] truncate max-w-xs">
                                {item.healthFood}
                              </div>
                            </td>
                            <td className="p-3.5">
                              {item.preferredPark && (
                                <div className="font-bold text-[#947b50] flex items-center gap-1">
                                  <MapPin className="w-3 h-3 shrink-0" />
                                  <span>{item.preferredPark}</span>
                                </div>
                              )}
                              <div className="text-[11px] text-[#747b78] max-w-xs truncate">
                                {item.address}
                              </div>
                            </td>
                            <td className="p-3.5">
                              <select
                                value={item.status}
                                onChange={(e) =>
                                  handleConsultationStatusChange(item._id, e.target.value)
                                }
                                className={`border rounded-lg px-2.5 py-1 text-xs font-bold focus:outline-none cursor-pointer ${
                                  item.status === "계약완료" || item.status === "보증서발급"
                                    ? "bg-[#edf6f1] border-[#c4e4d1] text-[#2d6e49]"
                                    : item.status === "상담진행중"
                                    ? "bg-[#edf4f8] border-[#c4dce9] text-[#1e5875]"
                                    : "bg-[#fef8ed] border-[#f3ddb3] text-[#9c6a1e]"
                                }`}
                              >
                                <option value="신청접수">신청접수</option>
                                <option value="상담진행중">상담진행중</option>
                                <option value="계약완료">계약완료</option>
                                <option value="보증서발급">보증서발급</option>
                              </select>
                            </td>
                            <td className="p-3.5">
                              {editingConsultationId === item._id ? (
                                <div className="flex items-center gap-1.5">
                                  <input
                                    type="text"
                                    value={editNotes}
                                    onChange={(e) => setEditNotes(e.target.value)}
                                    placeholder="관리자 메모 입력"
                                    className="border border-[#dcd9ce] rounded-lg px-2.5 py-1 text-xs w-40 focus:outline-none focus:border-[#947b50]"
                                  />
                                  <button
                                    onClick={() => handleSaveConsultationNotes(item._id)}
                                    className="bg-[#172c37] hover:bg-[#26373b] text-white px-2.5 py-1 rounded-lg text-xs font-bold"
                                  >
                                    저장
                                  </button>
                                  <button
                                    onClick={() => setEditingConsultationId(null)}
                                    className="text-[#747b78] hover:text-[#26373b] text-xs"
                                  >
                                    취소
                                  </button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-3">
                                  <div>
                                    {item.notes ? (
                                      <span className="text-[11px] text-[#26373b] bg-[#f2efe6] px-2 py-0.5 rounded border border-[#e5e2d6]">
                                        {item.notes}
                                      </span>
                                    ) : (
                                      <span className="text-[11px] text-[#9aa09d]">메모 없음</span>
                                    )}
                                    <button
                                      onClick={() => {
                                        setEditingConsultationId(item._id);
                                        setEditNotes(item.notes || "");
                                      }}
                                      className="ml-2 text-[#947b50] hover:underline text-[11px] font-semibold"
                                    >
                                      [수정]
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteConsultation(item._id)}
                                    className="text-[#9aa09d] hover:text-red-600 transition"
                                    title="내역 삭제"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      {consultations.length === 0 && (
                        <tr>
                          <td colSpan={7} className="p-12 text-center text-[#747b78] text-xs">
                            접수된 상담/계약 신청 이력이 없습니다.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              TAB 2: 전국 추모공원 관리
          ========================================= */}
          {activeTab === "parks" && (
            <div className="space-y-6">
              {/* 상단 알림 및 액션 바 */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#172c37] flex items-center gap-2">
                    <span>전국 추모공원 네트워크 데이터베이스 관리</span>
                    <span className="text-xs bg-[#f4efe4] text-[#947b50] font-semibold px-2 py-0.5 rounded-full border border-[#ded5c2]">
                      55개 제휴공원
                    </span>
                  </h3>
                  <p className="text-xs text-[#747b78] mt-1">
                    총 <strong className="text-[#172c37]">{dbParks.length}개소</strong>의 추모공원이 등록되어 있습니다.
                    신규 등록, 수정, 삭제 및 대표 이미지, 공식 홈페이지 링크를 손쉽게 관리할 수 있습니다.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {/* 50개 초기 시딩 버튼 */}
                  <button
                    onClick={() => handleSeedParks(false)}
                    disabled={isSeeding}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#f4efe4] hover:bg-[#eae2d3] border border-[#ded5c2] text-[#26373b] rounded-xl text-xs font-semibold transition cursor-pointer"
                    title="기존 기본 추모공원 목록을 DB에 동기화합니다"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSeeding ? "animate-spin text-[#947b50]" : "text-[#947b50]"}`} />
                    <span>기본 50개 공원 동기화</span>
                  </button>

                  {/* 신규 추모공원 추가 */}
                  <button
                    onClick={() => handleOpenParkModal()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#947b50] hover:bg-[#836c44] text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>새 추모공원 등록</span>
                  </button>
                </div>
              </div>

              {seedNotice && (
                <div className="p-3.5 bg-[#edf6f1] border border-[#c4e4d1] rounded-xl text-xs text-[#2d6e49] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 text-[#2d6e49]" />
                  <span>{seedNotice}</span>
                </div>
              )}

              {/* 필터 및 검색 바 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#747b78]" />
                    <input
                      type="text"
                      placeholder="공원명, 지역, 주소 검색"
                      value={parkSearch}
                      onChange={(e) => setParkSearch(e.target.value)}
                      className="pl-8 pr-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl w-48 sm:w-64 focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                    />
                  </div>

                  <select
                    value={parkRegionFilter}
                    onChange={(e) => setParkRegionFilter(e.target.value)}
                    className="py-2 px-3 text-xs border border-[#dcd9ce] rounded-xl bg-[#fbfaf6] font-medium text-[#26373b] focus:outline-none focus:border-[#947b50]"
                  >
                    <option value="ALL">전체 지역</option>
                    <option value="CAPITAL">수도권 (서울/경기/인천)</option>
                    <option value="CHUNG_GANG">충청·강원권</option>
                    <option value="YEONGNAM">경상·영남권</option>
                    <option value="HONAM_JEJU">전라·호남·제주권</option>
                  </select>

                  <select
                    value={parkTypeFilter}
                    onChange={(e) => setParkTypeFilter(e.target.value)}
                    className="py-2 px-3 text-xs border border-[#dcd9ce] rounded-xl bg-[#fbfaf6] font-medium text-[#26373b] focus:outline-none focus:border-[#947b50]"
                  >
                    <option value="ALL">전체 구분</option>
                    <option value="직영">직영</option>
                    <option value="재단">재단법인</option>
                    <option value="사설">사설</option>
                    <option value="공설">공설</option>
                  </select>
                </div>

                <div className="text-xs text-[#747b78] font-medium">
                  조회 결과:{" "}
                  <strong className="text-[#172c37] font-bold">
                    {
                      dbParks.filter((p: any) => {
                        if (parkRegionFilter !== "ALL" && p.region !== parkRegionFilter) return false;
                        if (parkTypeFilter !== "ALL" && p.type !== parkTypeFilter) return false;
                        if (parkSearch.trim()) {
                          const q = parkSearch.trim().toLowerCase();
                          return (
                            (p.name || "").toLowerCase().includes(q) ||
                            (p.loc || "").toLowerCase().includes(q) ||
                            (p.addr || "").toLowerCase().includes(q) ||
                            (p.desc || "").toLowerCase().includes(q)
                          );
                        }
                        return true;
                      }).length
                    }
                    개소
                  </strong>
                </div>
              </div>

              {/* 추모공원 목록 테이블 */}
              <div className="bg-white border border-[#e5e4dc] rounded-2xl shadow-[0_2px_8px_rgba(23,44,55,0.04)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#172c37] text-[#f7f5ef] border-b border-[#223947]">
                      <tr>
                        <th className="p-3.5 font-bold whitespace-nowrap">이미지</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">권역 / 지역</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">구분</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">추모공원명</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">주소</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">특별지원 혜택</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">공식 홈페이지</th>
                        <th className="p-3.5 font-bold whitespace-nowrap">관리</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eeebe3]">
                      {dbParks
                        .filter((p: any) => {
                          if (parkRegionFilter !== "ALL" && p.region !== parkRegionFilter) return false;
                          if (parkTypeFilter !== "ALL" && p.type !== parkTypeFilter) return false;
                          if (parkSearch.trim()) {
                            const q = parkSearch.trim().toLowerCase();
                            return (
                              (p.name || "").toLowerCase().includes(q) ||
                              (p.loc || "").toLowerCase().includes(q) ||
                              (p.addr || "").toLowerCase().includes(q) ||
                              (p.desc || "").toLowerCase().includes(q)
                            );
                          }
                          return true;
                        })
                        .map((park: any) => (
                          <tr key={park._id} className="hover:bg-[#faf9f5] transition">
                            <td className="p-3 whitespace-nowrap">
                              {park.displayImageUrl ? (
                                <img
                                  src={park.displayImageUrl}
                                  alt={park.name}
                                  className="w-12 h-10 object-cover rounded-lg border border-[#e5e4dc] shadow-xs"
                                />
                              ) : (
                                <div className="w-12 h-10 bg-[#f4efe4] rounded-lg flex items-center justify-center text-[#9aa09d] border border-[#e5e4dc]">
                                  <ImageIcon className="w-5 h-5 text-[#947b50]/60" />
                                </div>
                              )}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <span className="font-bold text-[#172c37] block">
                                {park.regionLabel}
                              </span>
                              <span className="text-[11px] text-[#747b78]">{park.loc}</span>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  park.type === "직영"
                                    ? "bg-[#fef8ed] text-[#9c6a1e] border border-[#f3ddb3]"
                                    : park.type === "재단"
                                    ? "bg-[#edf4f8] text-[#1e5875] border border-[#c4dce9]"
                                    : park.type === "공설"
                                    ? "bg-[#edf6f1] text-[#2d6e49] border border-[#c4e4d1]"
                                    : "bg-[#f4efe4] text-[#635f56] border border-[#e2dacf]"
                                }`}
                              >
                                {park.type}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="font-extrabold text-[#172c37] flex items-center gap-1.5">
                                <span>{park.name}</span>
                                {park.featured && (
                                  <span className="bg-[#947b50] text-white text-[9px] font-bold px-1.5 py-0.2 rounded leading-none">
                                    직영
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-[#747b78] max-w-sm truncate mt-0.5">
                                {park.desc}
                              </div>
                            </td>
                            <td className="p-3 max-w-xs text-[#525d61] truncate">{park.addr}</td>
                            <td className="p-3">
                              <span className="text-[11px] text-[#172c37] font-semibold bg-[#f4efe4] px-2 py-0.5 rounded border border-[#ded5c2]">
                                {park.supportBenefit}
                              </span>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              {park.website ? (
                                <a
                                  href={park.website}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-[#947b50] hover:text-[#172c37] font-bold underline text-xs"
                                >
                                  <span>공식홈페이지</span>
                                  <ExternalLink className="w-3 h-3 text-[#747b78]" />
                                </a>
                              ) : (
                                <span className="text-[#9aa09d] text-[11px]">-</span>
                              )}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleOpenParkModal(park)}
                                  className="p-1.5 text-[#525d61] hover:text-[#172c37] hover:bg-[#ece8dc] rounded-lg transition"
                                  title="수정"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeletePark(park._id, park.name)}
                                  className="p-1.5 text-[#9aa09d] hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                  title="삭제"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      {dbParks.length === 0 && (
                        <tr>
                          <td colSpan={8} className="p-12 text-center text-[#747b78] text-xs space-y-3">
                            <p>아직 데이터베이스에 등록된 추모공원이 없습니다.</p>
                            <button
                              onClick={() => handleSeedParks(false)}
                              className="px-4 py-2 bg-[#172c37] text-[#d9bc86] font-bold rounded-xl text-xs hover:bg-[#26373b] transition"
                            >
                              기존 50개 추모공원 지금 바로 일괄 등록하기 ↗
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              TAB 3: 가입 회원 목록 관리
          ========================================= */}
          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#172c37]">가입 회원 목록</h3>
                  <p className="text-xs text-[#747b78] mt-0.5">
                    다온넷 웹사이트를 통해 가입한 회원 목록입니다. 현재 총 <strong>{registeredUsers.length}명</strong>이 가입되어 있습니다.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#e5e4dc] rounded-2xl shadow-[0_2px_8px_rgba(23,44,55,0.04)] overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#172c37] text-[#f7f5ef] border-b border-[#223947]">
                    <tr>
                      <th className="p-3.5 font-bold">회원번호 (ID)</th>
                      <th className="p-3.5 font-bold">가입 이메일</th>
                      <th className="p-3.5 font-bold">회원 권한</th>
                      <th className="p-3.5 font-bold">가입일시</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eeebe3]">
                    {registeredUsers.map((u: any, idx: number) => (
                      <tr key={u._id} className="hover:bg-[#faf9f5] transition">
                        <td className="p-3.5 text-[#747b78] font-mono text-[11px]">#{idx + 1}</td>
                        <td className="p-3.5 font-bold text-[#172c37]">{u.email}</td>
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                              u.role === "admin"
                                ? "bg-[#fef8ed] text-[#9c6a1e] border border-[#f3ddb3]"
                                : "bg-[#edf4f8] text-[#1e5875] border border-[#c4dce9]"
                            }`}
                          >
                            {u.role === "admin" ? "관리자" : "일반회원"}
                          </span>
                        </td>
                        <td className="p-3.5 text-[#747b78]">
                          {new Date(u.createdAt).toLocaleString("ko-KR")}
                        </td>
                      </tr>
                    ))}
                    {registeredUsers.length === 0 && (
                      <tr>
                        <td colSpan={4} className="p-12 text-center text-[#747b78] text-xs">
                          가입된 회원이 아직 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================
              TAB 4: 푸터 & 개인정보 약관 설정
          ========================================= */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* 설정 상단 안내 및 액션 */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#172c37] text-[#d9bc86] flex items-center justify-center font-bold">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#172c37]">
                      푸터 내용 및 개인정보동의 설정
                    </h3>
                  </div>
                  <p className="text-xs text-[#747b78] mt-1">
                    메인 화면 하단 푸터의 사업자 정보, 고객센터 번호, 고지사항 및 상담신청/가입 시 동의 문구와 처리방침을 수정합니다.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleResetSettings}
                    disabled={isSavingSettings}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#dcd9ce] hover:bg-[#f4efe4] text-[#26373b] text-xs font-bold transition cursor-pointer disabled:opacity-50"
                    title="기본 설정값으로 복원"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#747b78]" />
                    <span>기본값 복원</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveSettings}
                    disabled={isSavingSettings}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#172c37] hover:bg-[#26373b] text-[#d9bc86] text-xs font-black transition cursor-pointer shadow-md disabled:opacity-50 border border-[#172c37]"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isSavingSettings ? "저장 중..." : "설정 저장하기"}</span>
                  </button>
                </div>
              </div>

              {/* 알림 메시지 배너 */}
              {settingsNotice && (
                <div
                  className={`p-4 rounded-2xl text-xs flex items-center gap-2.5 shadow-xs ${
                    settingsNotice.type === "success"
                      ? "bg-[#edf6f1] border border-[#c4e4d1] text-[#2d6e49]"
                      : "bg-[#fdf2f2] border border-[#f8b4b4] text-[#c81e1e]"
                  }`}
                >
                  {settingsNotice.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-[#2d6e49] shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-[#c81e1e] shrink-0" />
                  )}
                  <span className="font-medium">{settingsNotice.text}</span>
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="space-y-6">
                {/* 섹션 1: 푸터(Footer) 내용 관리 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] space-y-5">
                  <div className="border-b border-[#eeebe3] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#172c37] text-[#d9bc86] text-[10px] font-bold">
                        SECTION 1
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#172c37]">
                        웹사이트 하단 푸터(Footer) 내용 관리
                      </h4>
                    </div>
                    <p className="text-xs text-[#747b78] mt-1">
                      회사 기본 정보, 고객센터 전화번호, 제휴몰 링크 및 서비스 필수 법적 고지사항을 설정합니다.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        회사 상호명
                      </label>
                      <input
                        type="text"
                        value={settingsForm.companyName}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, companyName: e.target.value })
                        }
                        placeholder="예: 주식회사 다온넷 (DAONNET Co., Ltd.)"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        사업 부서명 / 부속 표기
                      </label>
                      <input
                        type="text"
                        value={settingsForm.department}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, department: e.target.value })
                        }
                        placeholder="예: 다온 프리미엄 249 라이프케어 사업본부"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        고객상담센터 제목 / 운영 안내 문구
                      </label>
                      <input
                        type="text"
                        value={settingsForm.callCenterTitle}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, callCenterTitle: e.target.value })
                        }
                        placeholder="예: 고객상담센터 (365일 24시간 장례·추모 접수)"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        상담센터 대표 전화번호 (클릭 시 자동 전화연결)
                      </label>
                      <input
                        type="text"
                        value={settingsForm.callCenterPhone}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, callCenterPhone: e.target.value })
                        }
                        placeholder="예: 1877-8816"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl font-bold text-[#172c37] focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        공식 제휴몰 표기명
                      </label>
                      <input
                        type="text"
                        value={settingsForm.mallName}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, mallName: e.target.value })
                        }
                        placeholder="예: 다온넷.kr"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#26373b] mb-1">
                        공식 제휴몰 연결 URL
                      </label>
                      <input
                        type="text"
                        value={settingsForm.mallUrl}
                        onChange={(e) =>
                          setSettingsForm({ ...settingsForm, mallUrl: e.target.value })
                        }
                        placeholder="예: http://다온넷.kr"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      상담센터 보조 설명 문구
                    </label>
                    <input
                      type="text"
                      value={settingsForm.callCenterSubtext}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, callCenterSubtext: e.target.value })
                      }
                      placeholder="예: 장례·추모공원 사전 예약 및 로얄석 상담 상시 운영"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      서비스 이용 및 방송/판매 필수 고지사항 (줄바꿈 가능)
                    </label>
                    <textarea
                      rows={4}
                      value={settingsForm.noticeText}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, noticeText: e.target.value })
                      }
                      placeholder="푸터에 노출될 법적 고지 문구를 입력하세요 (줄 단위로 구분)."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] leading-relaxed"
                    />
                    <p className="text-[11px] text-[#747b78] mt-1">
                      줄바꿈(Enter) 시 사용자 푸터에서도 줄바꿈되어 깔끔하게 표시됩니다.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      저작권 표기 문구 (Copyright)
                    </label>
                    <input
                      type="text"
                      value={settingsForm.copyright}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, copyright: e.target.value })
                      }
                      placeholder="예: © 2026 DAONNET Co., Ltd. All rights reserved."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                    />
                  </div>

                  {/* 푸터 실시간 미리보기 카드 (랜딩 디자인) */}
                  <div className="bg-[#f7f5ef] p-4 sm:p-5 rounded-2xl border border-[#dedfd7] space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#172c37]">
                      <Eye className="w-3.5 h-3.5 text-[#947b50]" />
                      <span>푸터 실시간 반영 미리보기</span>
                    </div>
                    <div className="bg-[#e8e7df] p-4 rounded-xl text-[11px] text-[#26373b] space-y-2 border border-[#d5d8ce]">
                      <div className="font-bold text-[#172c37]">{settingsForm.companyName || "회사명 미입력"}</div>
                      <div className="text-[10px] text-[#747b78]">{settingsForm.department}</div>
                      <div className="text-[11px] font-semibold text-[#172c37]">
                        {settingsForm.callCenterTitle} : <span className="text-[#947b50] font-bold">{settingsForm.callCenterPhone}</span>
                      </div>
                      <div className="text-[10px] text-[#7e847e]">
                        제휴몰: <span className="underline">{settingsForm.mallName}</span> ({settingsForm.mallUrl}) | {settingsForm.callCenterSubtext}
                      </div>
                      <div className="text-[9px] text-[#5e6562] whitespace-pre-line border-t border-[#d5d8ce] pt-2">
                        {settingsForm.noticeText}
                      </div>
                      <div className="text-[9px] text-[#7e847e] pt-1">
                        {settingsForm.copyright}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 섹션 2: 개인정보 동의 및 처리방침 관리 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] space-y-5">
                  <div className="border-b border-[#eeebe3] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#172c37] text-[#d9bc86] text-[10px] font-bold">
                        SECTION 2
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#172c37]">
                        개인정보 수집·이용 동의 및 처리방침 관리
                      </h4>
                    </div>
                    <p className="text-xs text-[#747b78] mt-1">
                      온라인 계약/상담신청 폼과 회원가입 폼에 노출되는 개인정보 동의 체크박스 문구 및 전문 내용을 수정합니다.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      상담/가입 신청 체크박스 동의 문구
                    </label>
                    <input
                      type="text"
                      value={settingsForm.privacyTitle}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, privacyTitle: e.target.value })
                      }
                      placeholder="예: [필수] 개인정보 수집·이용 및 상담 신청 안내에 동의합니다."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl font-bold text-[#172c37] focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      동의 목적 요약 설명 (체크박스 하단 보조 문구)
                    </label>
                    <input
                      type="text"
                      value={settingsForm.privacySummary}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, privacySummary: e.target.value })
                      }
                      placeholder="예: (수집 목적: 249 상품 상담 및 장지 안내, 보증서 발급 / 상담 완료 후 안전 파기)"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      개인정보 수집 및 이용 방침 전문 (상세 약관)
                    </label>
                    <textarea
                      rows={10}
                      value={settingsForm.privacyPolicy}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, privacyPolicy: e.target.value })
                      }
                      placeholder="수집 목적, 항목, 보유 기간, 파기 절차 등 상세 방침 전문을 입력하세요."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] font-mono leading-relaxed"
                    />
                    <p className="text-[11px] text-[#747b78] mt-1">
                      고객이 '전문보기' 또는 푸터의 '개인정보 처리방침' 버튼을 누르면 이 전문이 팝업으로 표시됩니다.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#26373b] mb-1">
                      다온넷 서비스 이용약관 전문 (선택 사항)
                    </label>
                    <textarea
                      rows={6}
                      value={settingsForm.termsOfService}
                      onChange={(e) =>
                        setSettingsForm({ ...settingsForm, termsOfService: e.target.value })
                      }
                      placeholder="회원가입 약관 및 일반 서비스 이용약관을 입력하세요."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50] font-mono leading-relaxed"
                    />
                  </div>

                  {/* 동의 문구 실시간 미리보기 카드 */}
                  <div className="bg-[#f7f5ef] p-4 sm:p-5 rounded-2xl border border-[#dedfd7] space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#172c37]">
                      <Eye className="w-3.5 h-3.5 text-[#947b50]" />
                      <span>상담 신청서 체크박스 노출 미리보기</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#e5e4dc] flex items-start justify-between gap-3 text-xs">
                      <label className="flex items-start gap-2 text-[#26373b]">
                        <input type="checkbox" defaultChecked className="mt-0.5 accent-[#172c37]" />
                        <span className="leading-snug">
                          <strong className="block font-bold text-[#172c37]">{settingsForm.privacyTitle}</strong>
                          <span className="text-[#747b78] block text-[11px] mt-0.5">
                            {settingsForm.privacySummary}
                          </span>
                        </span>
                      </label>
                      <span className="text-[11px] text-[#947b50] underline shrink-0 cursor-pointer font-semibold">
                        전문보기 ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* 하단 저장 버튼 */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleResetSettings}
                    disabled={isSavingSettings}
                    className="px-4 py-3 rounded-xl border border-[#dcd9ce] hover:bg-[#f4efe4] text-[#26373b] text-xs font-bold transition cursor-pointer disabled:opacity-50"
                  >
                    기본값 복원
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingSettings}
                    className="px-8 py-3 bg-[#172c37] hover:bg-[#26373b] text-[#d9bc86] font-bold text-xs rounded-xl transition shadow-md disabled:opacity-50 flex items-center gap-2 cursor-pointer border border-[#172c37]"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isSavingSettings ? "저장 처리 중..." : "설정 내용 전체 저장하기"}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* =========================================
              TAB 5: 관리자 비밀번호 변경
          ========================================= */}
          {activeTab === "password" && (
            <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#e5e4dc] shadow-[0_2px_8px_rgba(23,44,55,0.04)] space-y-6">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#172c37] text-[#d9bc86] flex items-center justify-center mb-3">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#172c37]">관리자 비밀번호 변경</h3>
                <p className="text-xs text-[#747b78] mt-1">
                  관리자 콘솔 계정(admin)의 로그인 비밀번호를 안전하게 변경합니다.
                </p>
              </div>

              {pwMessage.text && (
                <div
                  className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                    pwMessage.type === "success"
                      ? "bg-[#edf6f1] border border-[#c4e4d1] text-[#2d6e49]"
                      : "bg-[#fdf2f2] border border-[#f8b4b4] text-[#c81e1e]"
                  }`}
                >
                  {pwMessage.type === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{pwMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    현재 비밀번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    placeholder="현재 비밀번호 입력"
                    required
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    새 비밀번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    placeholder="새로운 비밀번호 (4자리 이상)"
                    required
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    새 비밀번호 확인 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={newPwConfirm}
                    onChange={(e) => setNewPwConfirm(e.target.value)}
                    placeholder="새로운 비밀번호 다시 입력"
                    required
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50] focus:ring-1 focus:ring-[#947b50]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isChangingPw}
                    className="w-full py-3 bg-[#172c37] hover:bg-[#26373b] text-[#f7f5ef] font-bold text-xs rounded-xl transition shadow-md disabled:opacity-50 cursor-pointer border border-[#172c37]"
                  >
                    {isChangingPw ? "변경 처리 중..." : "비밀번호 변경 완료"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* =========================================
          추모공원 등록/수정 모달 (랜딩 디자인 컨셉)
      ========================================= */}
      {isParkModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#e5e4dc] max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="flex justify-between items-center pb-3 border-b border-[#eeebe3] mb-5">
              <div>
                <h3 className="text-lg font-bold text-[#172c37]">
                  {editingPark ? "추모공원 정보 수정" : "새로운 추모공원 등록"}
                </h3>
                <p className="text-xs text-[#747b78] mt-0.5">
                  전국 추모공원 네트워크에 노출될 상세 정보 및 이미지, 공식 홈페이지 링크를 설정합니다.
                </p>
              </div>
              <button
                onClick={() => setIsParkModalOpen(false)}
                className="text-[#747b78] hover:text-[#172c37] p-1.5 rounded-full hover:bg-[#f4efe4] transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSavePark} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    권역 구분 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={parkForm.region}
                    onChange={(e) => setParkForm({ ...parkForm, region: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl font-medium focus:outline-none focus:border-[#947b50]"
                  >
                    <option value="CAPITAL">수도권 (서울/경기/인천)</option>
                    <option value="CHUNG_GANG">충청·강원권</option>
                    <option value="YEONGNAM">경상·영남권</option>
                    <option value="HONAM_JEJU">전라·호남·제주권</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    시설 구분 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={parkForm.type}
                    onChange={(e) => setParkForm({ ...parkForm, type: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl font-medium focus:outline-none focus:border-[#947b50]"
                  >
                    <option value="직영">다온넷 직영</option>
                    <option value="재단">재단법인</option>
                    <option value="사설">사설</option>
                    <option value="공설">공설</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    추모공원명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={parkForm.name}
                    onChange={(e) => setParkForm({ ...parkForm, name: e.target.value })}
                    placeholder="예: 유토피아추모관, 용인공원 등"
                    required
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    지역 표기 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={parkForm.loc}
                    onChange={(e) => setParkForm({ ...parkForm, loc: e.target.value })}
                    placeholder="예: 경기 안성, 서울 서초, 충남 천안"
                    required
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#26373b] mb-1">
                  소재지 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={parkForm.addr}
                  onChange={(e) => setParkForm({ ...parkForm, addr: e.target.value })}
                  placeholder="예: 경기 안성시 삼죽면 용월리 산223"
                  required
                  className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    공식 홈페이지 URL (선택)
                  </label>
                  <input
                    type="url"
                    value={parkForm.website}
                    onChange={(e) => setParkForm({ ...parkForm, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                  />
                  <span className="text-[10px] text-[#747b78] mt-0.5 block">
                    입력 시 메인화면 카드에 [공식홈페이지 바로가기] 버튼이 자동 노출됩니다.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#26373b] mb-1">
                    문의 전화번호 (선택)
                  </label>
                  <input
                    type="text"
                    value={parkForm.phone}
                    onChange={(e) => setParkForm({ ...parkForm, phone: e.target.value })}
                    placeholder="예: 1877-8816 또는 031-xxx-xxxx"
                    className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#26373b] mb-1">
                  다온넷 특별지원 혜택 문구 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={parkForm.supportBenefit}
                  onChange={(e) => setParkForm({ ...parkForm, supportBenefit: e.target.value })}
                  placeholder="예: 봉안당 1단 특별지원 + 봉안함 무료 제공 or 10~70% 회원 특별 할인가 적용"
                  required
                  className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#26373b] mb-1">
                  공원 소개 및 주요 특징
                </label>
                <textarea
                  value={parkForm.desc}
                  onChange={(e) => setParkForm({ ...parkForm, desc: e.target.value })}
                  placeholder="예: 대규모 수목장 및 종합 봉안당 · 프리미엄 249 봉안당 1단 기준 특별지원"
                  rows={2}
                  className="w-full px-3 py-2 text-xs bg-[#fbfaf6] border border-[#dcd9ce] rounded-xl focus:outline-none focus:border-[#947b50]"
                />
              </div>

              {/* 이미지 파일 업로드 */}
              <div className="p-4 bg-[#fbfaf6] border border-[#e5e4dc] rounded-2xl space-y-2">
                <label className="block text-xs font-bold text-[#26373b]">
                  추모공원 이미지 파일 업로드 (Convex 파일 스토리지)
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-16 rounded-xl border border-[#dcd9ce] bg-white overflow-hidden flex items-center justify-center shrink-0">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-[#9aa09d]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="text-xs text-[#747b78] file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#172c37] file:text-[#d9bc86] hover:file:bg-[#26373b] cursor-pointer"
                    />
                    <p className="text-[10px] text-[#747b78] mt-1">
                      JPG, PNG, WEBP 등 이미지 파일을 직접 업로드할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsParkModalOpen(false)}
                  className="px-4 py-2.5 border border-[#dcd9ce] rounded-xl text-xs font-semibold text-[#26373b] hover:bg-[#f4efe4] transition cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingPark}
                  className="px-6 py-2.5 bg-[#172c37] hover:bg-[#26373b] text-[#d9bc86] font-bold text-xs rounded-xl transition shadow-md disabled:opacity-50 cursor-pointer border border-[#172c37]"
                >
                  {isSubmittingPark ? "저장 중..." : editingPark ? "수정 완료" : "추모공원 등록"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
