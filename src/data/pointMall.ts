export interface MallProduct {
  id: string;
  category: string;
  name: string;
  marketPrice: number;
  memberPrice: number;
  discountRate: number; // 포인트 차감율 (%)
  pointDeduction: number;
  finalPrice: number;
  badge?: string;
  iconName: string;
  isComplimentary?: boolean;
}

export const MALL_PRODUCTS: MallProduct[] = [
  {
    id: 'otomo-vacuum',
    category: '생활/리빙 가전',
    name: '[오토모] 쓰리패드 배터리분리형 무선 물걸레 청소기 AVC-W9',
    marketPrice: 498000,
    memberPrice: 399000,
    discountRate: 80,
    pointDeduction: 319200,
    finalPrice: 79800,
    badge: '80% 포인트 차감',
    iconName: 'Sparkles',
  },
  {
    id: 'corelle-container',
    category: '주방/생활용품',
    name: '[코렐] 코디네이츠 스탠 밀폐용기 혼합 12종 세트',
    marketPrice: 167900,
    memberPrice: 159900,
    discountRate: 59,
    pointDeduction: 94341,
    finalPrice: 65559,
    badge: '59% 포인트 차감',
    iconName: 'Package',
  },
  {
    id: 'nordic-wagon',
    category: '캠핑/레저',
    name: '[노르딕 캠프] 어반화이트 퍼스트 웨건카트(블랙) NOR-WG1000',
    marketPrice: 398990,
    memberPrice: 99000,
    discountRate: 44,
    pointDeduction: 43560,
    finalPrice: 55440,
    badge: '44% 포인트 차감',
    iconName: 'Compass',
  },
  {
    id: 'health-food-complimentary',
    category: '멤버십 사은 건강식품',
    name: '삼칠그라 365 (삼칠삼·전칠삼) 또는 경남제약 저분자 콜라겐 알부민 프라임 맥스',
    marketPrice: 598000,
    memberPrice: 0,
    discountRate: 100,
    pointDeduction: 0,
    finalPrice: 0,
    badge: '프리미엄 249 기본제공 (택1)',
    iconName: 'HeartPulse',
    isComplimentary: true,
  },
];

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
