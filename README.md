# 다온넷 (DAONNET) - 전국 추모공원 특별지원 & 프리미엄 라이프케어 플랫폼

다온넷(DAONNET)의 프리미엄 249 라이프케어 멤버십 및 전국 55개 주요 추모공원 특별지원 통합 공식 웹 플랫폼입니다.  
`hoon` 폴더 내의 `!DOCTYPE html.txt` 기획 설계와 2종의 공식 상품기술서·방판 조견표 PDF를 100% 반영하여 최신 Next.js + TypeScript + Tailwind CSS + Convex 기반으로 제작되었습니다.

---

## 🌟 핵심 특징 및 주요 기능

1. **전국 55개 추모공원 특별지원 네트워크**
   - 직영 **안성 유토피아 추모관**을 비롯하여 수도권(24개), 충청·강원권(15개), 경상·영남권(11개), 호남·제주권(6개) 완비
   - 실시간 권역별 탭 전환, 시설 유형 필터(직영/재단/사설/공설), 키워드 검색 지원
   - "이 시설로 지원 상담" 클릭 시 간편 계약 및 장지 상담 모달 자동 연동
   - 봉안당 1단 기준 특별지원 및 타 시설 10~70% 회원 우대 혜택 적용

2. **다온 프리미엄 249 & 498만 공증 환급보증 상세**
   - **판매금액:** 2,490,000원 (VAT 포함)
   - **4,980,000원 10년 공증 환급보증서** 발급 (가입 2년 만기 후 자유 양도·양수 가능)
   - **후불장례 이행보증 1,980,000원** (365일 24시간 의전 통합 접수)
   - **사은 건강식품:** 삼칠그라 365(59.8만원 상당) 또는 경남제약 알부민 맥스(58만원 상당) 무료 증정
   - **위로지원금:** 등급별 현금 400,000원 지급

3. **다온넷 회원 전용 포인트 특가몰 (2,490,000 P)**
   - 가입 즉시 지급되는 249만 포인트를 차감하여 오픈마켓 대비 최대 80% 저렴하게 구매
   - 오토모 무선 물걸레 청소기, 코렐 스탠 밀폐용기 12종, 노르딕 캠프 웨건카트 등 실제 비교표 반영
   - 포인트 차감 시뮬레이터 및 실시간 잔액 반응형 연동
   - 공식 폐쇄몰 접속 계정 안내 (ID: `test1` / PW: `1234`)

4. **해피클래스 2박 3일 무료 숙박권 & 럭셔리 크루즈**
   - 전국 약 50개 제휴 호텔·리조트·펜션 2박 3일 무료 숙박권 (평균 1박 15만원 상당)
   - 영종도, 해운대, 가평, 양양, 속리산, 제주 등 주요 시설 안내
   - 럭셔리 크루즈 6개월 사전예약 회원 전용 우대

5. **온라인 간편 계약 & 상담 신청 시스템**
   - PDF 계약서 양식(Set 2 / Set 1, 건강식품, 결제수단, 구매자 정보, 희망 장지) 100% 구현
   - 신청 즉시 가상 모바일 보증서 고유번호 발급 및 상태 추적

6. **모바일 보증서 월렛 & 고객 조회 & 관리자 콘솔**
   - **모바일 보증서(Wallet):** 498만 환급증서, 198만 장례이행증서, 봉안당 1단 증서 3종 확인
   - **내 신청 조회:** 전화번호 입력으로 실시간 진행상황 조회
   - **관리자(Admin) 콘솔:** 접수된 신청 내역 확인, 실시간 상태 변경(접수/상담/완료), 상담 메모 관리, CSV 엑셀 내보내기

---

## 🛠️ 기술 스택

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, Lucide React Icons
- **Backend / Database:** Convex (Serverless Realtime Database & Mutations)
- **Deployment:** Vercel + GitHub

---

## 🚀 로컬 실행 방법

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 브라우저에서 확인
# http://localhost:3000 접속
```

---

## ☁️ Convex 백엔드 설정

Convex 실시간 데이터베이스를 연동하려면:

```bash
# Convex 프로젝트 초기화 및 개발 서버 실행
npx convex dev
```

터미널 안내에 따라 로그인 후 발급된 `CONVEX_DEPLOYMENT` 및 URL을 확인합니다.
`.env.local` 파일에 아래와 같이 추가합니다:

```env
NEXT_PUBLIC_CONVEX_URL=https://<your-project>.convex.cloud
```

*참고: Convex URL이 설정되지 않은 상태에서도 기본 로컬 스토리지 하이브리드 엔진이 작동하므로 즉시 모든 기능을 체험할 수 있습니다.*

---

## 🌐 깃허브(GitHub) & 버셀(Vercel) 배포 방법

### 1. GitHub 저장소 생성 및 푸시
```bash
# git 초기화 (미수행 시)
git init
git add .
git commit -m "feat: Daonnet official platform with Next.js, Tailwind and Convex"

# GitHub 원격 저장소 연결 (GitHub에서 생성한 레포지토리 주소)
git remote add origin https://github.com/사용자아이디/daonnet.git
git branch -M main
git push -u origin main
```

### 2. Vercel 배포
1. [Vercel](https://vercel.com) 로그인
2. **Add New...** > **Project** 선택 후 위 GitHub 저장소(`daonnet`) 임포트
3. Framework Preset: **Next.js**
4. Environment Variables (선택):
   - `NEXT_PUBLIC_CONVEX_URL`: Convex 대시보드의 URL 입력
5. **Deploy** 버튼 클릭
6. 1~2분 내로 글로벌 배포 완료!

---

## 📞 고객센터 안내
- **대표 상담센터 (365일 24시간 장례·추모 긴급접수):** 1877-8816
- **공식 폐쇄몰:** [www.다온넷.kr](http://www.xn--hu1bo87b2xb.kr/)
- **주소:** 주식회사 다온넷 본사 및 유토피아 추모관 직영 사업부
