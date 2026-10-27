export interface MallProduct {
  id: string;
  category: string;
  name: string;
  marketPrice: number;       // 오픈마켓 시중가격
  memberPrice: number;       // 다온넷 폐쇄몰 판매가격
  discountRate: number;      // 쇼핑포인트 차감율 (%) - 20%
  pointDeduction: number;    // 쇼핑포인트 차감액 (P)
  finalPrice: number;        // 회원 최종 결제금액 (원)
  badge?: string;
  iconName: string;
  imageUrl: string;
  productUrl: string;
  realDiscountRate: number;  // 시중가 대비 실질 할인율 (%)
  isComplimentary?: boolean;
}

export const MALL_PRODUCTS: MallProduct[] = [
  {
    id: 'otomo-vacuum',
    category: '생활/리빙 가전',
    name: '[오토모] 쓰리패드 배터리분리형 물걸레 청소기 AVC-W9',
    marketPrice: 443000,
    memberPrice: 96430,
    discountRate: 20,
    pointDeduction: 19286,
    finalPrice: 77144,
    realDiscountRate: 83,
    badge: '83% 실질할인 · 20% P차감',
    iconName: 'Sparkles',
    imageUrl: 'https://famiwel.co.kr/_prozn/_data/goods/big/17246429723900A.jpg',
    productUrl: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107919',
  },
  {
    id: 'national-carrier',
    category: '여행/레저 가방',
    name: '[내셔널지오그래픽] 비숍 캐리어세트 20+24 아이보리 N246ASU010',
    marketPrice: 410000,
    memberPrice: 406950,
    discountRate: 20,
    pointDeduction: 81390,
    finalPrice: 325560,
    realDiscountRate: 21,
    badge: '21% 실질할인 · 81,390P 차감',
    iconName: 'Compass',
    imageUrl: 'https://famiwel.co.kr/_prozn/_data/goods/big/17246521390300A.jpg',
    productUrl: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=107921',
  },
  {
    id: 'tefal-magic-hands',
    category: '주방/조리용품',
    name: '[테팔] SS 인덕션 매직핸즈 세레니티 유칼립투스 6P 세트',
    marketPrice: 333000,
    memberPrice: 182990,
    discountRate: 20,
    pointDeduction: 36598,
    finalPrice: 146392,
    realDiscountRate: 56,
    badge: '56% 실질할인 · 20% P차감',
    iconName: 'Package',
    imageUrl: 'https://famiwel.co.kr/_prozn/_data/goods/big/17657823954100A.jpg',
    productUrl: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=189357',
  },
  {
    id: 'sooa-bldc-dryer',
    category: '뷰티/헤어 가전',
    name: '[수아] 더 뷰티 BLDC 헤어 드라이기 HNZ-BH03',
    marketPrice: 110000,
    memberPrice: 35310,
    discountRate: 20,
    pointDeduction: 7062,
    finalPrice: 28248,
    realDiscountRate: 74,
    badge: '74% 실질할인 · 20% P차감',
    iconName: 'Sparkles',
    imageUrl: 'https://famiwel.co.kr/_prozn/_data/goods/big/17853773743500A.jpg',
    productUrl: 'https://daonnet.xn--oy2b11vgra637a7nb.com/shop/view.php?index_no=216551',
  },
];

export interface HealthGiftProduct {
  id: string;
  name: string;
  subTitle: string;
  marketPrice: number;
  freePrice: number;
  imageUrl: string;
  features: string[];
  specification: string;
  badge: string;
}

export const HEALTH_GIFT_PRODUCTS: HealthGiftProduct[] = [
  {
    id: 'samchilgra-365',
    name: '삼칠그라 365 (삼칠삼·전칠삼 알부민)',
    subTitle: '귀한 전칠삼과 프리미엄 알부민의 정수 · 활력 및 원기 회복 특화 환',
    marketPrice: 598000,
    freePrice: 0,
    imageUrl: 'https://res.cloudinary.com/lyjyvy54/image/upload/v1793083146/0257917c-ea9f-4822-9e5c-911076477b70.png',
    features: [
      '온라인 시중 판매가 598,000원 상당 최고급 프리미엄 건강기능 라인업',
      '엄선된 삼칠삼·전칠삼 및 고농축 알부민 복합 포뮬러 함유',
      '골드 프리미엄 전용 기프트 세트 박스 + 정품 쇼핑백 패키지 동봉',
      '다온 프리미엄 249 가입 고객 전원 무료 증정 (택 1 선택)',
    ],
    specification: '삼칠그라 365 세트 / 프리미엄 골드 환 보틀 구성 / 무료배송',
    badge: '시중가 598,000원 상당 · 택1 무료증정',
  },
  {
    id: 'kn-albumin-prime',
    name: '경남제약 저분자 콜라겐 알부민 프라임 맥스',
    subTitle: '대한민국 제약명가 경남제약의 프리미엄 앰플 포뮬러 (25ml × 30병)',
    marketPrice: 580000,
    freePrice: 0,
    imageUrl: 'https://res.cloudinary.com/lyjyvy54/image/upload/v1793083147/60f94d12-54d8-464c-add5-b54143ace8a3.png',
    features: [
      '온라인 시중 판매가 580,000원 상당 대한민국 제약명가 경남제약 정품',
      '흡수율 높은 초저분자 피쉬 콜라겐 + 고순도 프리미엄 알부민 집중 배합',
      '하루 한 병 간편한 고농축 액상 앰플 30병 대용량 프리미엄 패키지',
      '다온 프리미엄 249 가입 고객 전원 무료 증정 (택 1 선택)',
    ],
    specification: '750ml (25ml × 30병) / HACCP 인증 제조시설 생산 / 무료배송',
    badge: '시중가 580,000원 상당 · 택1 무료증정',
  },
];

export const CONSOLATION_BENEFIT = {
  title: '특별 위로지원금 400,000원 별도 현금 지급',
  amount: 400000,
  description: '회원님의 소중한 삶과 일상을 든든하게 응원하기 위해, 건강기능식품 무료 증정과 별도로 40만원의 위로지원금을 현금으로 직접 지급해 드립니다.',
  notice: '건강기능식품 세부 규격·무료 배송 및 위로지원금 지급 시점·조건은 다온넷 최종 회원 운영기준에 따릅니다.',
};

export interface ResortRegion {
  region: string;
  places: string[];
}

export const RESORT_LIST: ResortRegion[] = [
  {
    region: '인천 / 영종도 · 송도',
    places: ['스카이베이호텔', '오션파크나인호텔', '영종도 더시티호텔', '셀럽스테이호텔'],
  },
  {
    region: '부산 / 해운대 · 강서',
    places: ['해운대 플레어드 호텔', '더웨스턴부산호텔'],
  },
  {
    region: '경기 / 수원 · 포천 · 가평 · 파주',
    places: ['아모레미오 더클래식', '호텔마루 포천점', '가평 에어호텔', '파주호텔'],
  },
  {
    region: '강원 / 양양 · 춘천 · 태백 · 평창',
    places: ['오션스테이양양', '38리조트', '태백 설화국가족호텔', '숲속의요정', '다온휴펜션'],
  },
  {
    region: '충청 / 보은 · 충주 · 청양 · 대전',
    places: ['속리산호텔', '충주 알아이(RI) 종합호텔', '칠갑산샬레호텔', '더대전스토리펜션'],
  },
  {
    region: '전라 · 경상 · 제주',
    places: ['여수 퍼스트시티호텔프리미엄', '영덕 칠보산온천리조트', '마산 아모르호텔', '서귀포 제주리조트'],
  },
];
