"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesignSwitcher() {
  const pathname = usePathname();
  const isV2 = pathname?.startsWith("/v2");

  return (
    <div className="fixed bottom-[76px] right-4 z-50 flex items-center bg-[#172c37]/95 backdrop-blur text-white rounded-full p-1 shadow-xl border border-[#d9bc86]/50 text-xs">
      <Link
        href="/"
        className={`px-3 py-1.5 rounded-full font-semibold transition ${
          !isV2
            ? "bg-[#d9bc86] text-[#172c37]"
            : "text-[#e3e6e5] hover:text-white"
        }`}
      >
        메인 V1 (기존)
      </Link>
      <Link
        href="/v2"
        className={`px-3 py-1.5 rounded-full font-semibold transition ${
          isV2
            ? "bg-[#d9bc86] text-[#172c37]"
            : "text-[#e3e6e5] hover:text-white"
        }`}
      >
        메인 V2 (신규 에디토리얼)
      </Link>
    </div>
  );
}
