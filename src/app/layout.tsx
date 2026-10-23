import type { Metadata } from "next";
import "./globals.css";
import { DaonProvider } from "@/context/DaonContext";
import DesignSwitcher from "@/components/DesignSwitcher";

export const metadata: Metadata = {
  title: "다온넷(DAONNET) - 전국 추모공원 특별지원 & 프리미엄 라이프케어 멤버십",
  description:
    "전국 55개 추모공원 특별지원(봉안당 1단 기준), 10년 공증 498만원 환급보증서, 후불장례 198만원 이행보증, 249만 쇼핑포인트, 해피클래스 2박3일 무료숙박권까지 하나로 누리는 다온 프리미엄 249 라이프케어 멤버십",
  keywords: [
    "다온넷",
    "DAONNET",
    "추모공원",
    "봉안당",
    "유토피아추모관",
    "용인공원",
    "다온 프리미엄 249",
    "498만 환급보증",
    "후불장례",
    "해피클래스",
    "삼칠그라",
    "라이프케어",
  ],
  openGraph: {
    title: "다온넷(DAONNET) - 전국 추모공원 특별지원 & 프리미엄 라이프케어",
    description:
      "가입금액 249만원으로 환급보증서 498만원 발행, 봉안당 1단 지원 및 249만P 전용몰 혜택!",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased selection:bg-[#C5A059] selection:text-white">
        <DaonProvider>
          {children}
          <DesignSwitcher />
        </DaonProvider>
      </body>
    </html>
  );
}
