"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export interface ConsultationItem {
  id: string;
  productSet: string;
  productName: string;
  amount: number;
  healthFood: string;
  paymentMethod: string;
  customerName: string;
  phone: string;
  address: string;
  preferredPark?: string;
  status: string; // "신청접수" | "상담진행중" | "계약완료" | "보증서발급"
  notes?: string;
  createdAt: number;
}

export interface UserCertificate {
  certNumber: string;
  customerName: string;
  phone: string;
  productName: string;
  guaranteeAmount: number;
  funeralAmount: number;
  memorialTier: string;
  points: number;
  issuedDate: string;
  status: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role?: string;
}

interface DaonContextType {
  // 모달 상태
  isContractOpen: boolean;
  openContract: (preferredPark?: string) => void;
  closeContract: () => void;

  isCertOpen: boolean;
  openCert: () => void;
  closeCert: () => void;

  isLookupOpen: boolean;
  openLookup: () => void;
  closeLookup: () => void;

  isAdminOpen: boolean;
  openAdmin: () => void;
  closeAdmin: () => void;

  // 회원 인증 모달
  isAuthOpen: boolean;
  authMode: "login" | "register";
  openAuth: (mode?: "login" | "register") => void;
  closeAuth: () => void;

  // 회원 상태
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;

  preferredParkInput: string;
  setPreferredParkInput: (val: string) => void;

  // 포인트 관리
  userPoints: number;
  deductPoints: (amount: number) => boolean;
  resetPoints: () => void;

  // 상담/계약 신청 데이터
  consultations: ConsultationItem[];
  addConsultation: (item: Omit<ConsultationItem, "id" | "createdAt" | "status">) => Promise<string>;
  updateConsultationStatus: (id: string, status: string, notes?: string) => void;

  // 모바일 보증서
  certificates: UserCertificate[];
}

const DaonContext = createContext<DaonContextType | undefined>(undefined);

const INITIAL_CONSULTATIONS: ConsultationItem[] = [
  {
    id: "sample-1",
    productSet: "Set2",
    productName: "Set 2. 다온 프리미엄 249 (삼칠그라 & 밸런스케어)",
    amount: 2490000,
    healthFood: "삼칠그라 365 (59.8만원 상당)",
    paymentMethod: "신용카드 (지정 PG 결제)",
    customerName: "김*수 (시범 신청)",
    phone: "010-8816-****",
    address: "경기도 용인시 수지구",
    preferredPark: "유토피아추모관 (다온넷 직영)",
    status: "계약완료",
    notes: "10년 공증 환급보증서 4,980,000원 모바일 발급 완료",
    createdAt: Date.now() - 86400000 * 2,
  },
  {
    id: "sample-2",
    productSet: "Set2",
    productName: "Set 2. 다온 프리미엄 249 (경남제약 알부민)",
    amount: 2490000,
    healthFood: "경남제약 저분자 콜라겐 알부민 프라임 맥스 (58만원 상당)",
    paymentMethod: "CMS (자동이체)",
    customerName: "이*영 (시범 신청)",
    phone: "010-3321-****",
    address: "서울시 서초구 반포동",
    preferredPark: "용인공원 & 아너스톤",
    status: "상담진행중",
    notes: "봉안당 1단 사전 예약 및 로얄석 상담 요청",
    createdAt: Date.now() - 3600000 * 5,
  },
];

export const DaonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // 인증 모달 상태
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState<AuthUser | null>(null);

  const [preferredParkInput, setPreferredParkInput] = useState("");
  const [userPoints, setUserPoints] = useState(2490000);
  const [consultations, setConsultations] = useState<ConsultationItem[]>(INITIAL_CONSULTATIONS);
  const [certificates, setCertificates] = useState<UserCertificate[]>([
    {
      certNumber: "DAON-2026-881601",
      customerName: "김*수",
      phone: "010-8816-****",
      productName: "다온 프리미엄 249",
      guaranteeAmount: 4980000,
      funeralAmount: 1980000,
      memorialTier: "봉안당 1단 기준 (유토피아 직영 및 전국)",
      points: 2490000,
      issuedDate: "2026-03-15",
      status: "공증 환급 유효 (10년)",
    },
  ]);

  // Convex mutations
  const createConsultationMutation = useMutation(api.consultations.createConsultation);
  const updateStatusMutation = useMutation(api.consultations.updateStatus);

  // 로컬 스토리지 동기화
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("daon_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      const savedConsultations = localStorage.getItem("daon_consultations");
      if (savedConsultations) {
        setConsultations(JSON.parse(savedConsultations));
      }
      const savedPoints = localStorage.getItem("daon_points");
      if (savedPoints) {
        setUserPoints(Number(savedPoints));
      }
      const savedCerts = localStorage.getItem("daon_certs");
      if (savedCerts) {
        setCertificates(JSON.parse(savedCerts));
      }
    } catch {
      // ignore
    }
  }, []);

  const openAuth = (mode: "login" | "register" = "login") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };
  const closeAuth = () => setIsAuthOpen(false);

  const handleSetUser = (u: AuthUser | null) => {
    setUser(u);
    try {
      if (u) {
        localStorage.setItem("daon_user", JSON.stringify(u));
      } else {
        localStorage.removeItem("daon_user");
      }
    } catch {
      // ignore
    }
  };

  const logout = () => {
    handleSetUser(null);
  };

  const saveConsultations = (items: ConsultationItem[]) => {
    setConsultations(items);
    try {
      localStorage.setItem("daon_consultations", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const saveCerts = (items: UserCertificate[]) => {
    setCertificates(items);
    try {
      localStorage.setItem("daon_certs", JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const openContract = (preferredPark?: string) => {
    if (preferredPark) {
      setPreferredParkInput(preferredPark);
    }
    setIsContractOpen(true);
  };

  const closeContract = () => setIsContractOpen(false);
  const openCert = () => setIsCertOpen(true);
  const closeCert = () => setIsCertOpen(false);
  const openLookup = () => setIsLookupOpen(true);
  const closeLookup = () => setIsLookupOpen(false);
  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  const deductPoints = (amount: number) => {
    if (userPoints < amount) {
      return false;
    }
    const next = userPoints - amount;
    setUserPoints(next);
    try {
      localStorage.setItem("daon_points", String(next));
    } catch {
      // ignore
    }
    return true;
  };

  const resetPoints = () => {
    setUserPoints(2490000);
    try {
      localStorage.setItem("daon_points", "2490000");
    } catch {
      // ignore
    }
  };

  const addConsultation = async (item: Omit<ConsultationItem, "id" | "createdAt" | "status">) => {
    let certNum = "";
    try {
      // Convex에 저장
      const res = await createConsultationMutation({
        productSet: item.productSet,
        productName: item.productName,
        amount: item.amount,
        healthFood: item.healthFood,
        paymentMethod: item.paymentMethod,
        customerName: item.customerName,
        phone: item.phone,
        address: item.address,
        preferredPark: item.preferredPark,
        notes: item.notes,
      });
      certNum = res.certNumber;
    } catch (e) {
      console.warn("Convex 저장 실패, 로컬로 폴백:", e);
      certNum = `DAON-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    }

    const id = "consult-" + Date.now();
    const newItem: ConsultationItem = {
      ...item,
      id,
      status: "신청접수",
      createdAt: Date.now(),
    };
    const nextList = [newItem, ...consultations];
    saveConsultations(nextList);

    // 자동 보증서 등록
    const newCert: UserCertificate = {
      certNumber: certNum,
      customerName: item.customerName,
      phone: item.phone,
      productName: item.productName,
      guaranteeAmount: item.productSet === "Set2" ? 4980000 : 1980000,
      funeralAmount: 1980000,
      memorialTier: "봉안당 1단 기준 (유토피아 직영 및 전국)",
      points: item.productSet === "Set2" ? 2490000 : 1000000,
      issuedDate: new Date().toISOString().split("T")[0],
      status: "신청 완료 (보증서 발급 대기)",
    };
    saveCerts([newCert, ...certificates]);

    return certNum;
  };

  const updateConsultationStatus = (id: string, status: string, notes?: string) => {
    const next = consultations.map((c) =>
      c.id === id ? { ...c, status, notes: notes !== undefined ? notes : c.notes } : c
    );
    saveConsultations(next);

    // id가 convex Id 형식일 경우 mutation 실행 시도
    if (id && !id.startsWith("sample-") && !id.startsWith("consult-")) {
      try {
        updateStatusMutation({
          id: id as any,
          status,
          notes,
        });
      } catch {
        // ignore
      }
    }
  };

  return (
    <DaonContext.Provider
      value={{
        isContractOpen,
        openContract,
        closeContract,
        isCertOpen,
        openCert,
        closeCert,
        isLookupOpen,
        openLookup,
        closeLookup,
        isAdminOpen,
        openAdmin,
        closeAdmin,
        isAuthOpen,
        authMode,
        openAuth,
        closeAuth,
        user,
        setUser: handleSetUser,
        logout,
        preferredParkInput,
        setPreferredParkInput,
        userPoints,
        deductPoints,
        resetPoints,
        consultations,
        addConsultation,
        updateConsultationStatus,
        certificates,
      }}
    >
      {children}
    </DaonContext.Provider>
  );
};

export const useDaon = () => {
  const context = useContext(DaonContext);
  if (!context) {
    throw new Error("useDaon must be used within a DaonProvider");
  }
  return context;
};
