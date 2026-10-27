// 트라밸 (tlabal.co.kr) 동남아 & 아시아 5개국 패키지 여행 데이터
// 국가: 베트남, 태국, 라오스, 필리핀, 중국

export interface PackageHighlight {
  category: string;
  label: string;
  content: string;
}

export interface PackageInclusions {
  included: string[];
  excluded: string[];
  notice?: string;
  isDefault?: boolean;
}

export interface PackageItineraryItem {
  kind: 'move' | 'spot' | 'option' | 'hotel' | 'meal' | 'notice' | string;
  label: string;
  nameEn?: string | null;
  summary?: string | null;
  detail?: string | null;
  image?: string | null;
  images?: string[];
}

export interface PackageDay {
  dayNo: number;
  title: string;
  content?: string | null;
  hotelName?: string | null;
  items: PackageItineraryItem[];
}

export interface PackageTour {
  id: number;
  slug: string;
  name: string;
  country: '베트남' | '태국' | '라오스' | '필리핀' | '중국' | string;
  cities: string[];
  nights: number;
  days: number;
  maxPax: number;
  minDeparturePax: number;
  shoppingCount: number;
  hasOptionalTour: boolean;
  guideType: string;
  headline: string;
  heroImage: string;
  isPackageTour: boolean;
  highlights: PackageHighlight[];
  inclusions: PackageInclusions;
  notices: {
    cancelPolicy?: string | null;
    caution?: string | null;
    passportVisa?: string | null;
  };
  itinerary: PackageDay[];
}

export const PACKAGE_COUNTRIES = ['전체', '베트남', '태국', '라오스', '필리핀', '중국'] as const;

export const PACKAGE_TOURS: PackageTour[] = [
  {
    "id": 7,
    "slug": "danang",
    "name": "다낭 3박 5일 힐링 여행 PKG",
    "country": "베트남",
    "cities": [
      "다낭"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 6,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "첫 해외여행이라면 도시·자연·휴양이 완벽하게 어우러진 곳",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/7-mt6v20ts-18ijwou.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "투본강투어, 미케비치, 바나힐스, 핑크성당, 해수관음상 등"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.<br><br><br>",
      "caution": "- 12월 24일~ 1월 1일 (크리스마스, 연말) 기간 제외하고는 예약 가능합니다. 참고바랍니다.<br><br><span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.<br><br><br>",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 다낭 국제공항",
        "content": "한국 → 다낭 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (그랜드 골드 호텔)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,김해,청주 국제공항 출발 (출발 시간 : 17:30~18:30 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "다낭 국제공항 도착 / 가이드 미팅 후\n※ 베트남 현지 공안 한국인 가이드 대상 단속강화로 인하여 한국인 가이드의 공항 주변 출입이 불가합니다. 공항 청사 외부에서 한국인 가이드를 만나게 됩니다.\n공항에서 출발할때도 한국인 가이드가 보딩을 도와드리지 못하오니 행사 진행 시 대기시간이 발생될 수 있사오니 이 점 양해부탁드립니다.\n※ 여행일정은 계약 체결 시 예상하지 못한 부득이한 사정이 발생할 경우 여행자의 사전 동의절차를 거쳐 변경될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (그랜드 골드 호텔)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 시 유의사항\n<전자담배 베트남 내 반입 및 전자담배 흡연 금지>\n- 베트남 정부의 전자담배 금지 조치로 인해 현지 구입은 물론 해외에서의 반입이 금지 되며, 적발 시 현지법률에 의해 처벌 될 수 있습니다.\n\n<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 발코니호텔 다낭 ★★★★☆\n- 로열로터스 호텔 ★★★★☆\n- 그랜드 골드 호텔 ★★★★☆\n- 살라 다낭 비치 호텔 ★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "다낭&호이안",
        "content": "투본강투어, 호이안 올드타운",
        "hotelName": "호텔 투숙 및 휴식 (그랜드 골드 호텔)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": "https://tlabal.co.kr/images/itinerary/danang-2-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/danang-2-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "베트남 전통 마사지 1시간 (소아 제외 / 팁 불포함)",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "호이안으로 이동 (약 40분)",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "투본강",
            "nameEn": "Thu Bon River",
            "summary": "호이안 올드타운을 품은 낭만적인 젖줄",
            "detail": "투본강은 호이안 올드타운을 유유히 흐르는 강으로, 과거 동서양 교역의 중심지였던 호이안의 역사와 낭만을 한눈에 느낄 수 있는 명소입니다. 낮에는 강변을 따라 펼쳐지는 고즈넉한 풍경을 감상할 수 있으며, 해가 지면 화려한 등불과 나룻배들이 어우러져 환상적인 야경을 연출합니다. 목선 배를 타고 강물 위를 유람하거나 소망을 담은 소원 배를 띄우며 잊지 못할 추억을 남길 수 있습니다.\n\n포인트 1: 목선을 타고 강변드라이브\n포인트 2: 도자기 마을 방문",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "호이안 올드 타운",
            "nameEn": "Hoi An Ancient Town",
            "summary": "시간이 멈춘 듯 유네스코가 지정한 고즈넉한 옛 거리",
            "detail": "호이안 올드타운은 15세기부터 19세기까지 동서양의 무역항으로 번성했던 옛 모습이 그대로 보존되어 있어, 마을 전체가 유네스코 세계문화유산으로 지정된 곳입니다. 노란빛의 고풍스러운 옛 건물들과 아기자기한 상점, 동서양 양식이 융합된 일본교(내원교) 등 독특한 매력을 자랑합니다. 밤이 되면 거리 전체를 밝히는 알록달록한 등불이 낭만적인 분위기를 더해 연인, 가족 단위 여행객 모두에게 사랑받는 필수 방문지입니다.\n\n포인트 1: 동서양의 건축 양식이 어우러진 이국적이고 고즈넉한 골목길 산책\n포인트 2: 턴킨하우스, 광동회관, 풍흥고가 등 호이안 올드타운 내부 관광",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-2-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-3-2.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "다낭으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "코코넛 마을 바구니배",
            "nameEn": "Cam Thanh Coconut Village",
            "summary": "울창한 코코넛 숲을 가르는 다낭·호이안의 대표 액티비티",
            "detail": "호이안 인근의 대표적인 명소인 캠탄 코코넛 마을에서 베트남 전통 수송 수단인 동그란 바구니배(바구선)를 타고 이국적인 울창한 코코넛 숲 속을 탐험하는 이색 체험입니다. 시원한 야자수 그늘 아래를 유유히 노저어 가며 현지 사공들의 신나는 신명 나는 퍼포먼스, 신나는 음악, 그리고 아슬아슬한 바구니배 묘기 쇼까지 즐길 수 있어 남녀노소 모두에게 최고의 즐거움을 선사합니다.\n\n포인트 1: 울창한 야자수 숲 사이를 누비며 만나는 베트남의 청정 자연 풍경\n포인트 2: 현지 사공들의 흥겨운 댄스 타임과 화려한 바구니배 회전 묘기 관람\n체험 팁: 햇빛이 강할 수 있으니 모자나 선글라스를 준비하시면 더욱 좋습니다.\n요금 : 40$",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-2-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-4-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "호이안 야경투어",
            "nameEn": "Hoi An Night Tour",
            "summary": "화려한 등불 빛으로 물드는 낭만적인 밤의 호이안",
            "detail": "해가 지고 어둠이 깔리면 한층 더 환상적인 매력을 발산하는 호이안의 밤을 즐기는 투어입니다. 낮과는 전혀 다른 매력을 선사하는 알록달록한 등불 거리를 거닐고, 호이안 야시장에서 현지 먹거리와 아기자기한 수공예품을 둘러볼 수 있습니다. 투본강 위로 반짝이는 소원 초를 띄우며 소원을 빌어보고, 화려한 야경을 배경으로 평생 기억에 남을 인생 사진을 남겨보세요.\n\n포인트 1: 붉은빛과 황금빛 등불로 수놓아진 호이안 올드타운의 로맨틱한 밤거리 산책\n포인트 2: 투본강에 은은한 소원 등불을 띄우는 이색적이고 감성적인 체험\n관람 팁: 야시장에서 판매하는 베트남 전통 길거리 간식과 기념품을 구경하는 재미를 놓치지 마세요.\n요금 : 30$ / 씨클로 20$",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-2-5-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-5-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-5-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "베트남 전통 마사지 1시간",
            "nameEn": null,
            "summary": "여행의 지친 몸과 마음을 달래주는 힐링 케어",
            "detail": "베트남 전통 기법을 활용하여 여행 중 쌓인 근육의 긴장과 피로를 부드럽고 시원하게 풀어주는 전신 케어 프로그램입니다. 머리부터 발끝까지 정성스러운 지압으로 혈액순환을 돕고, 따뜻하게 데운 핫스톤을 함께 사용하여 몸속 깊은 곳까지 묵직한 피로를 싹 씻어내 드립니다.\n\n포인트 1: 머리, 어깨, 발 등 피로가 집중되는 부위를 시원하게 자극하는 전신 지압\n포인트 2: 따뜻한 화강암 핫스톤으로 근육을 이완시키고 체온을 올려주는 힐링 마사지\n소요 시간: 약 60분",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-2-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-2-1-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (그랜드 골드 호텔)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "다낭",
        "content": "미케비치, 바나힐스",
        "hotelName": "호텔 투숙 및 휴식 (그랜드 골드 호텔)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": "https://tlabal.co.kr/images/itinerary/danang-3-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/danang-3-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔에서 자유시간 후 11시 30분 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "미케비치",
            "nameEn": "My Khe Beach",
            "summary": "세계가 인정한 아름다운 백사장과 탁 트인 푸른 바다",
            "detail": "미국 포브스(Forbes)지가 선정한 세계 6대 아름다운 해변 중 하나로, 다낭 시내와 가까워 최고의 접근성을 자랑하는 대표 휴양지입니다. 끝없이 펼쳐진 수 km의 곱고 하얀 모래사장과 잔잔한 푸른 파도가 어우러져 여유로운 휴식을 즐기기에 완벽한 장소입니다. 해변을 따라 고급 리조트와 스타일리시한 카페, 싱싱한 해산물 레스토랑이 길게 이어져 있어 시원한 바닷바람을 맞으며 식사와 음료를 즐기기에도 제격입니다.\n\n포인트 1: 수평선 끝까지 아늑하게 이어지는 곱고 기다란 은빛 모래사장 산책\n스페셜 포함: 마케비치 커피숍에서 베트남 유명한 코코넛 커피 1인 1잔 제공",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-1-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "바나힐스",
            "nameEn": "Ba Na Hills",
            "summary": "구름 위에서 즐기는 유럽풍 테마파크와 신비로운 골든 브릿지",
            "detail": "해발 1,487m 고산 지대에 위치하여 다낭의 더위를 잊게 만드는 세계적인 테마파크이자 휴양지입니다. 세계에서 두 번째로 긴 케이블카를 타고 올라가는 동안 펼쳐지는 웅장한 원시림의 장관이 일품입니다. 언덕 정상에 도달하면 마치 프랑스의 고성에 온 듯한 고풍스러운 유럽식 건물들과 정원이 반겨주며, 거대한 두 손이 다리를 받치고 있는 듯한 명물 '골든 브릿지(Golden Bridge)'는 놓칠 수 없는 대표 포토존입니다.\n\n포인트 1: 거대한 거인의 손이 다리를 받치고 있는 듯한 신비롭고 독창적인 '골든 브릿지'\n포인트 2: 케이블카를 타고 정상으로 이동 -> 골든 브릿지, 꽃의 정원 등 바나힐에서 인생사진 찍기",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-3-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-2-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-2-3.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "분위기 있는 라이브 밴드와 함께 즐기는 바나힐 정상디너",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "다낭 아로마 스톤 마사지 2시간",
            "nameEn": "Da Nang Aroma Stone Massage 2 Hours",
            "summary": "아로마 오일과 따뜻한 화강암이 선사하는 깊은 휴식과 피로 회복",
            "detail": "천연 아로마 오일의 향이 선사하는 편안함과 따뜻하게 데워진 스톤(화강암)의 온열 효과가 더해져 여행의 피로를 완벽하게 풀어주는 프리미엄 힐링 코스입니다. 은은한 향의 아로마 오일로 몸 전체의 긴장된 근육을 릴랙스시킨 후, 따뜻한 핫스톤으로 체온을 높이고 혈액순환을 원활하게 도와 깊은 수준의 휴식을 선사합니다. 넉넉한 2시간 동안 머리부터 발끝까지 뭉친 근육과 스트레스를 세심하게 케어받을 수 있습니다.\n이용 팁: 마사지 전 선호하는 압의 강도나 집중적으로 받길 원하는 부위를 미리 말씀해 주시면 더욱 좋습니다.\n가격 : 40$\n\n포인트 1: 2시간의 여유로운 시간 동안 이루어지는 머리부터 발끝까지의 전신 케어\n포인트 2: 아로마 오일의 심신 안정 효과와 핫스톤의 온열 원리로 깊은 피로 완화",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-3-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-3-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "아오자이 쇼",
            "nameEn": "Ao Dai Show",
            "summary": "베트남 전통 의상 '아오자이'와 역사를 한눈에 즐기는 화려한 문화 공연",
            "detail": "베트남의 전통 의상인 아오자이를 주제로 베트남 왕조의 역사와 신비로운 전통문화를 한편의 서사시처럼 풀어낸 고품격 화려한 문화 공연입니다. 왕실의 웅장한 의상부터 현대적으로 재해석된 감각적인 아오자이 패션쇼, 베트남 전통 무용과 악기 연주가 어우러져 한시도 눈을 뗄 수 없는 볼거리를 제공합니다. 다낭 여행 중 베트남의 깊은 전통과 아름다운 선율을 동시에 경험할 수 있는 대표적인 실내 관람 코스입니다.\n가격 : 30$\n\n포인트 1: 화려한 궁중 의상부터 현대적 디자인까지 한자리에서 감상하는 아오자이 패션쇼\n포인트 2: 베트남의 역사와 전통 민속 무용, 악기 연주가 어우러진 역동적이고 웅장한 무대\n관람 팁: 공연 후 출연진들과 함께 아오자이를 배경으로 기념 사진을 남기는 포토타임을 놓치지 마세요.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-3-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-3-4-1.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (그랜드 골드 호텔)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "다낭",
        "content": "핑크성당, 해수관음상",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식\n조식 후 체크아웃",
            "image": "https://tlabal.co.kr/images/itinerary/danang-4-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/danang-4-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "베트남 특산품 쇼핑센터 (3회)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식\n중식 후 다낭 필수코스 투어",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "떤딘성당",
            "nameEn": "Tan Dinh Church",
            "summary": "분홍빛 로맨틱한 외관이 시선을 사로잡는 호치민의 대표 포토존",
            "detail": "1876년 프랑스 식민지 시절에 건립된 역사 깊은 성당으로, 눈길을 사로잡는 화려한 파스텔 핑크빛 외관 덕분에 '핑크 성당'이라는 애칭으로 더욱 유명한 호치민의 명소입니다. 고딕 양식과 로마네스크, Renaissance 양식이 오묘하게 섞인 고풍스러운 건축물과 웅장한 종탑이 아름다운 조화를 이룹니다. 푸른 하늘 아래 돋보이는 분홍색 성당을 배경으로 찍는 사진이 일품이라 여행객들의 필수 인생샷 스팟으로 손꼽힙니다.\n\n포인트 1: 동화 속 한 장면을 연상시키는 이국적이고 사랑스러운 파스텔 핑크빛 건축물\n포인트 2: 화려한 조각과 높이 52m의 종탑이 어우러진 정교한 고딕 스타일 건축미\n관람 팁: 성당 맞은편 카페 테라스에 올라가면 성당 전경을 한눈에 담아 사진을 찍기 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-4-1-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "린응사 해수관음상",
            "nameEn": "Linh Ung Pagoda",
            "summary": "해안가에 위치해 전망이 좋고 30층 건물 높이의 베트남에서 가장 큰 해수관음상이 있다.",
            "detail": "선짜 반도에 위치한 린응사 (링엄사, 영응사)에 위치한 67미터의 해수관음상 관광",
            "image": "https://tlabal.co.kr/images/itinerary/danang-4-4.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/danang-4-4.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "아로마 스톤 마사지",
            "nameEn": "Da Nang Aroma Stone Massage",
            "summary": "아로마 오일과 따뜻한 화강암이 선사하는 깊은 휴식과 피로 회복",
            "detail": "천연 아로마 오일의 향이 선사하는 편안함과 따뜻하게 데워진 스톤(화강암)의 온열 효과가 더해져 여행의 피로를 완벽하게 풀어주는 프리미엄 힐링 코스입니다. 은은한 향의 아로마 오일로 몸 전체의 긴장된 근육을 릴랙스시킨 후, 따뜻한 핫스톤으로 체온을 높이고 혈액순환을 원활하게 도와 깊은 수준의 휴식을 선사합니다.\n이용 팁: 마사지 전 선호하는 압의 강도나 집중적으로 받길 원하는 부위를 미리 말씀해 주시면 더욱 좋습니다.\n가격 : 30$\n\n포인트 1: 여유로운 시간 동안 이루어지는 머리부터 발끝까지의 전신 케어\n포인트 2: 아로마 오일의 심신 안정 효과와 핫스톤의 온열 원리로 깊은 피로 완화",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-4-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-4-3-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "다낭 한강 크루즈",
            "nameEn": "Da Nang Han River Cruise",
            "summary": "다낭의 화려한 야경과 용다리를 선상에서 즐기는 로맨틱한 유람선",
            "detail": "다낭 도심을 로맨틱하게 가로지르는 한강을 따라 유유히 운항하며 야경을 감상하는 대표 인기 야간 투어입니다. 시원한 바닷바람을 맞으며 다낭의 화려한 마천루와 빛나는 교량들을 한눈에 담을 수 있습니다. 특히 주말에는 불과 물을 뿜어내는 '용다리(Dragon Bridge) 쇼'를 선상 위 베스트 명당에서 감상할 수 있어 더욱 특별한 추억을 선사합니다. 잔잔한 라이브 음악이나 전통 무용 공연과 함께 잊지 못할 다낭의 밤을 만끽해 보세요.\n가격 : 30$\n\n포인트 1: 용다리, 사랑의 브릿지, 한강다리 등 다낭을 대표하는 다리들의 화려한 야경 감상",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-4-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-4-4-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "린응사 (영응사) 해수관음상",
            "nameEn": "Linh Ung Pagoda & Lady Buddha",
            "summary": "다낭 바다를 굽어보는 베트남 최대 규모의 해수관음상",
            "detail": "다낭 손짜 반도(Son Tra Peninsula) 언덕에 위치한 린응사는 푸른 바다와 다낭 시내 풍경을 한눈에 담을 수 있는 대표적인 사찰입니다. 이곳의 명물인 '해수관음상(Lady Buddha)'은 높이 약 67m로 베트남에서 가장 큰 거대 불상으로, 다낭 해안가 어디서나 보일 만큼 압도적인 위용을 자랑합니다. 태풍과 자연재해로부터 다낭을 지켜준다는 전설이 전해져 현지인들의 기원 장소로도 사랑받으며, 탁 트인 동해 바다의 절경을 감상하기에 최고의 장소입니다.\n\n포인트 1: 높이 67m의 웅장함을 자랑하는 베트남 최대 규모의 해수관음상 관람\n포인트 2: 손짜 반도 언덕 위에서 내려다보는 다낭 시원한 바다와 시내 전경\n관람 팁: 복장 규정이 있어 어깨나 무릎이 드러나는 옷은 피하시거나 입구에서 가릴 수 있는 스카프를 준비하시는 것이 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-danang-4-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-danang-4-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-danang-4-2-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식\n석식 후 공항으로 이동",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "다낭 → 한국",
        "content": "다낭 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 5,
    "slug": "nhatrang-dalat",
    "name": "나트랑&달랏 3박 5일 알찬 여행 PKG",
    "country": "베트남",
    "cities": [
      "나트랑",
      "달랏"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 6,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "바다의 낭만과 고원의 힐링을 한 번에",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/5-mt6v4qv5-1bfrs84.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "크레이지하우스, 쓰엉흐엉호수, 죽림사원, 다딴라폭포 등"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.",
      "caution": "-  12월 24일~ 1월 1일 (크리스마스, 연말) 기간 제외하고는 예약 가능합니다. 참고바랍니다.<br><br><span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 깜란(나트랑) 국제공항",
        "content": "한국 → 깜란(나트랑) 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (레갈리아 골드 호텔)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,김해,청주,무안 국제공항 출발 (출발 시간 : 19:00~20:00 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "깜란(나트랑) 국제공항 도착\n※ 베트남 현지 공안 한국인 가이드 대상 단속강화로 인하여 한국인 가이드의 공항 주변 출입이 불가합니다. 공항 청사 외부에서 한국인 가이드를 만나게 됩니다.\n공항에서 출발할때도 한국인 가이드가 보딩을 도와드리지 못하오니 행사 진행 시 대기시간이 발생될 수 있사오니 이 점 양해부탁드립니다.\n※ 여행일정은 계약 체결 시 예상하지 못한 부득이한 사정이 발생할 경우 여행자의 사전 동의절차를 거쳐 변경될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (레갈리아 골드 호텔)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 시 유의사항\n<전자담배 베트남 내 반입 및 전자담배 흡연 금지>\n- 베트남 정부의 전자담배 금지 조치로 인해 현지 구입은 물론 해외에서의 반입이 금지 되며, 적발 시 현지법률에 의해 처벌 될 수 있습니다.\n\n<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 사이공 달랏 ★★★★☆\n- 라사피넷 호텔 ★★★★☆\n- 그 외 동급 호텔 ★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "나트랑&달랏",
        "content": "포나가르 탑, 롱손사, 나트랑 대성당, 크레이지하우스,쓰엉흐엉호수",
        "hotelName": "호텔 투숙 및 휴식 (사이공 달랏 OR 라사피넷 호텔)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-2-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-2-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "포나가르 참탑",
            "nameEn": "Po Nagar Cham Towers",
            "summary": "참파 유적지중 가장 오래되었다",
            "detail": "8~13세기에 지어진 고대 참파 왕국의 유적지로, 인도의 영향을 받은 힌두교 사원 단지다.",
            "image": "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-2-2.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "롱손사",
            "nameEn": "Long Son Pagoda",
            "summary": "거대한 백불상이 나트랑 시내를 내려다보는 고즈넉한 사찰",
            "detail": "19세기 후반에 건립된 나트랑에서 가장 오래된 불교 사찰로, 화려한 용 조각과 전통적인 베트남 불교 건축 양식을 만나볼 수 있는 명소입니다. 사찰 뒤편 152개의 계단을 따라 언덕을 올라가면 높이 24m에 달하는 거대한 '좌대 백불상(White Buddha)'이 장엄하게 맞이해 줍니다. 언덕 정상에서는 나트랑 시내 전경과 푸른 바다까지 한눈에 시원하게 담을 수 있어, 편안한 휴식과 멋진 전망을 동시에 선사합니다.\n\n포인트 1: 웅장함을 자랑하는 높이 24m의 거대 백불상과 아기자기한 와불상 감상\n포인트 2: 계단을 따라 올라간 언덕 위에서 시원하게 펼쳐지는 나트랑 시내와 바다 전경\n관람 팁: 계단이 다소 많은 편이니 편한 신발을 착용하시고, 대웅전 및 불상 근처에서는 노출이 심한 복장을 피해주세요.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-2-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-2-3.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "나트랑 대성당",
            "nameEn": "Nha Trang Cathedral",
            "summary": "언덕 위에 자리 잡은 고풍스러운 프랑스 고틱 양식의 석조 성당",
            "detail": "프랑스 식민지 시절인 1928년에 돌을 쌓아 만들어져 '돌 성당(Stone Church)'으로도 불리는 나트랑 최대 규모의 가톨릭 성당입니다. 언덕 위에 위치해 있어 고즈넉한 성당 전경과 함께 나트랑 시내 풍경을 한눈에 바라볼 수 있습니다. 정교한 스테인드글라스 창문과 높게 솟은 종탑, 클래식한 아치형 회랑이 선사하는 이국적인 분위기 덕분에 여행객들의 인스타그램 필수 포토존이자 스냅 촬영 명소로 사랑받고 있습니다.\n\n포인트 1: 정교하게 조각된 돌벽과 아름다운 스테인드글라스가 만드는 고풍스러운 분위기\n포인트 2: 나트랑 시내가 시원하게 내려다보이는 높은 언덕 위 탁 트인 전경",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-3-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식\n중식 후 달랏으로 이동 (약 3시간 30분 소요)",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "크레이지 하우스",
            "nameEn": "Crazy House (Hang Nga Guesthouse)",
            "summary": "동화 속 초현실 세계로 들어온 듯한 달랏의 독창적인 건축물",
            "detail": "베트남 전 대통령의 딸이자 건축가인 당비엣응아가 디자인한 기이하고 독창적인 건축물로, 세계 10대 창의적인 건물 중 하나로 손꼽히는 달랏의 대표 명소입니다. 거대한 고목 나무 형상을 한 건물 내부로 들어가면 미로처럼 연결된 계단, 이색적인 방, 그리고 굽이치는 구름다리가 펼쳐져 마치 기파른 동화 속에 들어온 듯한 느낌을 줍니다. 아찔한 높이의 옥상 다리를 건너며 달랏 시내 전경을 360도로 감상하는 색다른 재미를 선사합니다.\n\n포인트 1: 직선이 거의 없는 곡선 위주의 기괴하면서도 신비로운 기와지붕과 나무 모양의 건축미\n포인트 2: 아슬아슬하게 연결된 미로 계단을 따라 건너며 즐기는 달랏 시내 스카이라인\n관람 팁: 계단이 좁고 높이가 아찔하므로 굽이 높은 신발보다는 편안한 운동화를 착용하시는 것이 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-4-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-4-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "쓰엉흐엉 호수",
            "nameEn": "Xuan Huong Lake",
            "summary": "달랏의 심장이라 불리는 푸르고 고즈넉한 인공 호수",
            "detail": "달랏 도심 한가운데 위치하여 도시의 허파 역할을 하는 아름다운 반달 모양의 인공 호수입니다. 호수 이름은 베트남의 유명한 시인 '쑤언 흐엉(Xuan Huong)'의 이름에서 유래했으며, '봄의 향기'라는 뜻을 지니고 있습니다. 호수를 따라 잘 조성된 산책로와 잔디밭, 이국적인 카페들이 어우러져 한적하게 거닐거나 자전거를 타며 여유를 즐기기에 좋습니다. 알록달록한 오리배를 타고 호수 위를 떠다니며 달랏 특유의 서늘하고 시원한 공기를 만끽하기에 완벽한 명소입니다.\n\n포인트 1: 맑고 잔잔한 호숫가 산책로를 따라 즐기는 고즈넉한 힐링 라이딩 및 산책\n포인트 2: 호수 위에서 오리배를 타며 바라보는 달랏 시내의 이국적이고 평화로운 풍경",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-5-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-5-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "VIP 베트남 전통 전신 마사지 90분",
            "nameEn": "VIP Traditional Vietnamese Body Massage 90 Min",
            "summary": "90분간 펼쳐지는 스페셜 맞춤 케어와 스톤 테라피의 완벽한 조합",
            "detail": "베트남 전통 지압 기법과 핫스톤 온열 케어를 결합하여 여행의 피로를 깊숙이 풀어주는 프리미엄 VIP 마사지 프로그램입니다. 90분의 넉넉한 시간 동안 머리, 어깨, 등, 다리 등 피로가 쉽게 쌓이는 부위를 세심하게 진단하고 집중 케어합니다. 따뜻하게 데워진 화강암 핫스톤으로 전신의 혈액순환을 촉진하고 뭉친 근육을 완벽히 이완시켜 최상의 힐링과 재충전의 시간을 선사합니다.\n이용 팁: 집중적인 케어를 원하시는 부위가 있다면 마사지 시작 전 테라피스트에게 편하게 요청해 주세요.\n가격 : 50$, 팁별도 6$\n\n포인트 1: 90분 동안 체계적으로 진행되는 머리부터 발끝까지의 맞춤형 전신 지압\n포인트 2: 따뜻한 핫스톤을 활용해 묵은 피로와 근육 통증을 깊숙하게 완화하는 프리미엄 케어",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-6-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-6-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "포나가르 탑",
            "nameEn": "Po Nagar Cham Towers",
            "summary": "천년의 역사를 품은 고대 참파 왕국의 신비로운 유적지",
            "detail": "8~13세기 고대 참파 왕국이 세운 힌두교 성지로, 나트랑을 대표하는 역사 깊은 유적지입니다. 흙벽돌을 하나하나 붙여 만든 정교하고 웅장한 신전 건물들이 돋보이며, 수확의 신인 '포나가르(Po Nagar)' 여신을 모시는 거대한 마더 타워가 중심을 이룹니다. 언덕 위에 자리 잡고 있어 신전 곳곳에서 나트랑 시내를 흐르는 찌엔강과 푸른 바다가 어우러진 시원한 풍경을 함께 조망할 수 있습니다.\n\n포인트 1: 붉은 흙벽돌로 쌓아 올린 고대 참파 건축 양식의 독특하고 신비로운 비주얼\n포인트 2: 언덕 위 성지에서 내려다보는 찌엔강과 나트랑 항구의 평화로운 전경\n관람 팁: 사원 내부에 들어갈 때는 민소매나 짧은 바지 착용이 제한되므로, 현장에서 제공하는 가운을 입어야 합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-2-1-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (사이공 달랏 OR 라사피넷 호텔)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "나트랑&달랏",
        "content": "바오다이 황제의 여름별장, 죽림사, 다딴라 폭포, 달랏 기차역",
        "hotelName": "호텔 투숙 및 휴식 (사이공 달랏 OR 라사피넷 호텔)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-3-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-3-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "바오다이 황제 제 3궁",
            "nameEn": "Bao Dai Summer Palace (Palace III)",
            "summary": "베트남 마지막 황제의 숨결과 프랑스 풍의 고풍스러움이 살아있는 별장",
            "detail": "베트남의 마지막 왕조인 응우옌 왕조의 마지막 황제 '바오다이'가 휴양과 집무를 위해 사용했던 여름 별장입니다. 울창한 소나무 숲으로 둘러싸여 고즈넉한 분위기를 자아내며, 1930년대에 지어진 아르데코 양식의 고급스러운 건물 외관이 인상적입니다. 내부에는 황제와 왕비, 왕자들이 실제 사용했던 집무실, 침실, 접견실 등이 원형 그대로 보존되어 있어 당시 왕실의 생활상과 베트남 근대 역사를 생생하게 느껴볼 수 있습니다.\n\n포인트 1: 1930년대 왕실의 가구와 생활 소품이 그대로 보존된 고풍스러운 내부 관람\n포인트 2: 잘 가꾸어진 아름다운 유럽식 정원과 소나무 숲길 산책\n관람 팁: Palace III(제3궁)가 가장 보존 상태가 좋고 볼거리가 풍부하며, 내부 입장 시 신발 커버를 착용해야 합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-1-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "죽림사",
            "nameEn": "Truc Lam Zen Monastery",
            "summary": "케이블카를 타고 만나는 달랏 최대의 고즈넉한 선종 사찰",
            "detail": "달랏의 대표적인 호수인 투옌람 호수(Tuyen Lam Lake)가 내려다보이는 로빈힐 언덕 위에 위치한 사찰로, 베트남의 선종 불교를 대표하는 고요하고 평화로운 성지입니다. 화려하게 잘 가꾸어진 정원과 이국적인 소나무 숲이 아우러져 있어 사찰 전체가 하나의 아름다운 공원처럼 느껴집니다. 로빈힐에서 죽림사까지 이어지는 케이블카를 타면 울창한 소나무 숲과 호수가 어우러진 달랏의 환상적인 자연 풍경을 한눈에 조망할 수 있습니다.\n\n포인트 1: 정성스럽게 가꿔진 다채로운 꽃과 나무가 어우러진 아름다운 사찰 정원 산책\n포인트 2: 로빈힐 케이블카를 타며 감상하는 울창한 소나무 숲과 투옌람 호수의 탁 트인 전경\n관람 팁: 신성한 종교 시설이므로 민소매나 짧은 바지 등 노출이 있는 복장은 피해 주시는 것이 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "다딴라 폭포",
            "nameEn": "Datanla Waterfalls",
            "summary": "울창한 원시림 속에서 짜릿한 알파인 코스터를 즐기는 달랏의 명소",
            "detail": "달랏 도심에서 멀지 않은 계곡에 위치한 대표적인 자연 폭포로, 시원하게 쏟아지는 물줄기와 울창한 원시림이 어우러져 장관을 이루는 곳입니다. 다딴라 폭포의 가장 큰 매력은 폭포까지 이동하는 수단인 '알파인 코스터(루지)'로, 숲속을 가로지르는 레일을 타고 속도감을 즐기며 신나게 내려갈 수 있습니다. 숲속의 맑은 공기를 마시며 산책을 즐기거나 흥미진진한 액티비티를 체험하기에 최적의 장소입니다.\n추가 옵션 : 다딴라 폭포 레일바이크 (30$)\n\n포인트 1: 숲속 레일을 따라 직접 속도를 조절하며 내려가는 짜릿한 알파인 코스터 체험\n포인트 2: 웅장한 바위 사이로 시원하게 쏟아져 내리는 다딴라 폭포의 청량한 풍경",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-3-2.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "달랏 케이블카 (로빈힐 케이블카)",
            "nameEn": "Dalat Cable Car (Robin Hill Cable Car)",
            "summary": "달랏의 푸른 산세와 시내 풍경을 한눈에 감상하는 하늘길 여정",
            "detail": "달랏 도심 남쪽의 로빈힐(Robin Hill) 정상에서 출발하여 죽림사(Truc Lam Zen Monastery)까지 이어지는 대표적인 이동형 관광 코스입니다. 탑승시간 동안 발아래로 끝없이 펼쳐지는 울창한 소나무 숲과 알록달록한 달랏 시내의 지붕들, 그리고 푸른 투옌람 호수까지 한눈에 담을 수 있습니다. 맑고 서늘한 달랏의 공기를 느끼며 여유롭게 시공간을 가로지르는 낭만적인 경험을 선사합니다.\n가격 : 30$\n\n포인트 1: 로빈힐 정상 전망대에서 바라보는 탁 트인 달랏 시내 전경과 감성적인 풍경\n포인트 2: 케이블카 아래로 길게 펼쳐지는 신비로운 소나무 숲길과 투옌람 호수의 조망",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-4-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "다딴라 폭포 레일바이크",
            "nameEn": null,
            "summary": null,
            "detail": "다딴라 폭포의 아름다운 풍경과 협곡을 감상해보세요\n다딴라 폭포 레일바이크 (30$)",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "달랏 기차역",
            "nameEn": "Dalat Railway Station",
            "summary": "프랑스 감성이 물씬 풍기는 베트남에서 가장 아름다운 간이역",
            "detail": "1930년대 프랑스 식민지 시절에 건축된 베트남에서 가장 오래되고 아름다운 기차역입니다. 랑비앙 산의 세 봉우리를 형상화한 독특한 노란색 삼각 지붕과 화려한 스테인드글라스 창문이 어우러져 아기자기한 프랑스 시골 마을의 기차역을 연상시킵니다. 현재는 짧은 관광용 증기기관차 노선만 운항하고 있으며, 선로 위에 멈춰 서 있는 클래식한 증기기관차와 나무 객차는 레트로한 감성 사진을 남기기에 최고의 포토 스팟입니다.\n\n포인트 1: 랑비앙 산을 모티브로 한 3개의 노란 지붕과 이국적인 스테인드글라스 건축미\n포인트 2: 클래식한 증기기관차와 선로를 배경으로 찍는 감성적인 스냅 사진",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-5-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-5-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식 (5성 호텔 뷔페)",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "달랏 야시장",
            "nameEn": "Dalat Night Market",
            "summary": "달랏의 밤을 밝히는 활기찬 열기와 맛있는 먹거리의 천국",
            "detail": "해가 지면 달랏 도심 한가운데 위치한 중앙시장 주변으로 화려한 조명과 함께 활기가 넘쳐나는 달랏 최고의 밤 명소입니다. 서늘한 달랏의 밤공기를 맞으며 다양한 현지 길거리 음식을 맛볼 수 있는 먹거리의 천국으로, 라이스페이퍼에 계란과 다양한 재료를 얹어 구워낸 '베트남식 피자(반짱느엉)'와 따뜻한 두유는 필수 코스입니다. 현지 특산품인 아티초크 차, 말린 과일, 신선한 딸기뿐만 아니라 아기자기한 수공예품과 수제 니트 의류까지 구경하는 재미가 가득합니다.\n\n포인트 1: 반짱느엉, 꼬치구이, 따뜻한 두유 등 다채롭고 이색적인 현지 길거리 먹거리 탐방\n포인트 2: 특산 과일, 말린 건과류, 아티초크 차, 수제 니트 제품 등 다양한 기념품 쇼핑\n관람 팁: 주말에는 차도 통제 구역이 확대되어 훨씬 자유롭게 걸어 다닐 수 있으며, 인파가 많으므로 소지품 관리에 유의하세요.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-6-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-3-6-1.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (사이공 달랏 OR 라사피넷 호텔)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "나트랑",
        "content": "랑비엥 전망대, 머드온천",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식\n조식 후 체크아웃",
            "image": "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-4-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/nhatrang-dalat-4-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "달랏 특산품 쇼핑센터 방문",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "랑비앙 산",
            "nameEn": "Lang Biang Mountain",
            "summary": "달랏의 지붕에서 내려다보는 환상적인 구름 바다와 시원한 풍경",
            "detail": "해발 2,167m의 높이를 자랑하며 '달랏의 지붕'이라 불리는 가장 높은 산으로, K'ho 부족 청년 랑(Lang)과 소녀 비앙(Biang)의 슬픈 사랑 전설이 전해져 내려오는 곳입니다. 전망대가 위치한 라다 언덕(Radar Hill)까지 지프차를 타고 가파른 숲길을 달려 올라가는 색다른 재미를 느낄 수 있습니다. 정상 전망대에 서면 굽이치는 금빛 강물과 에메랄드빛 투옌람 호수, 알록달록한 달랏 시내 풍경이 한눈에 들어와 잊지 못할 장관을 연출합니다.\n\n포인트 1: 전망대까지 지프차를 타고 산길을 오르는 스릴 넘치는 액티비티 체험\n포인트 2: 해발 2,000m 고지대에서 파노라마로 펼쳐지는 달랏 시내와 호수의 압도적인 풍경\n관람 팁: 고지대라 바람이 차고 서늘하므로 얇은 겉옷을 준비하시고, 멋진 사진을 남길 수 있는 라다 언덕의 'Lang Biang' 알파벳 조형물에서 기념 촬영을 해보세요.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-1-3.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식\n중식 후 나트랑으로 이동 ( 약 3시간 30분 소요)",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "머드온천",
            "nameEn": "Nha Trang Mud Bath",
            "summary": "천연 머드와 따뜻한 온천수로 즐기는 이색 힐링 체험",
            "detail": "나트랑을 대표하는 시그니처 웰니스 코스로, 미네랄이 풍부한 천연 머드에 몸을 담가 피부 미용과 피로 회복을 동시에 경험할 수 있는 명소입니다. 부드럽고 따뜻한 천연 머드는 피부 노폐물 제거와 수분 공급에 탁월하며, 뭉친 근육을 부드럽게 풀어줍니다. 머드 스파 후에는 따뜻한 천연 온천수 수영장과 워터파크 시설에서 여유롭게 휴식을 취할 수 있어 남녀노소 누구나 즐거운 시간을 보낼 수 있습니다.\n\n포인트 1: 풍부한 미네랄이 함유된 천연 머드로 즐기는 매끄러운 피부 스파 케어\n포인트 2: 머드 스파 후 즐기는 따뜻한 천연 온천수 수영장 및 휴양 시설 이용\n관람 팁: 머드가 잘 빠지지 않을 수 있으므로 밝은색 의류보다는 버려도 상관없는 어두운색 수영복이나 옷을 준비하시는 것이 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-2-2.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "나트랑 쇼핑센터 방문",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "나트랑 야간 시티 투어",
            "nameEn": "Nha Trang Night City Tour",
            "summary": null,
            "detail": "화려한 야경과 활기찬 밤거리를 즐기는 나트랑 밤의 특별한 여정\n해 진 뒤 펼쳐지는 나트랑의 색다른 매력을 한눈에 담을 수 있는 로맨틱한 야간 투어입니다. 시원한 밤바람을 맞으며 나트랑 야시장과 화려하게 조명이 켜진 환안(Trần Phú) 해변 도로를 함께 둘러볼 수 있습니다. 화려하게 빛나는 나트랑의 상징 핑크타워(향타워)와 아기자기한 현지 맛집, 밤에 더욱 빛나는 시내 야경 스팟들을 알차게 방문하여 낮과는 전혀 다른 나트랑의 낭만적이고 역동적인 매력을 가득 선사합니다.\n포함 내역 : 야시장 & 해변 BAR & 씨클로 & 맥주 & 피자\n가격 : 60$\n\n포인트 1: 핑크타워와 해변을 따라 펼쳐지는 나트랑 시내의 화려하고 매력적인 야경 조망\n포인트 2: 나트랑 야시장에서 즐기는 신나는 길거리 쇼핑과 다채로운 밤거리 문화 체험\n관람 팁: 야시장과 해변가 산책이 포함되어 있으므로 편안한 신발을 착용하시고, 소지품 관리에 유의해 주세요.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-nhatrang-dalat-4-3-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식\n석식 후 공항으로 이동",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "나트랑 → 한국",
        "content": "나트랑 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 9,
    "slug": "bangkok-pattaya",
    "name": "방콕&파타야 3박 5일 구석구석 투어 PKG",
    "country": "태국",
    "cities": [
      "방콕",
      "파타야"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 8,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "도시와 해변을 한 번에",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/9-mt6v8l64-9vhoij.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "백만년 바위공원 & 악어농장, 플로팅마켓, 산호섬 (KO-LAN), 왓사켓, 아시아티크"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.<br><br><br>",
      "caution": "- 12월 24일~ 1월 1일 (크리스마스, 연말) 기간 제외하고는 예약 가능합니다. 참고바랍니다.<br><br><span class=\"c-red\">- 1인실 사용 시 추가 비용 발생</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.<br><br>※태국 패키지 개별일정 불가안내 및 담배/주류 세관규정1.본 상품은 단체관광을 목적으로 일정의 시작부터 마지막까지 가이드와 함께 진행하는 패키지 여행상품입니다. 개별활동은 불가하며 개별활동을 원하시는 분들은 반드시 자유여행 상품으로 예약해주세요.<br>2.태국 입국시 담배(1인 1보루/전자담배 반입금지) /주류(1인 1L 1병) 원칙입니다. 규정 위반시 벌금 부과 및 담배/주류 모두 몰수됩니다. 차량에 탑승하기 전까지 반드시 위 규정을 지키셔야합니다.<br><br>※태국 입국시 준비절차(서류안내)■태국 디지털 입국 카드(TDAC) 작성 안내■<br><br>태국 입국시 디지털 입국 카드 필수 작성 안내 (25.5.1부터 시행)<br><br><span class=\"c-green\">※ 작성 링크 : https://tdac.immigration.go.th/arrival-card/#/home</span><br><br>(한국어로 번역 후 작성)<br>미 작성시 태국 입국이 불가합니다.<br>하기의 내용을 참고하시어 개별적으로 반드시 작성해 주셔야합니다.<br><br>O 작성 및 제출 방법<br>1. TDAC 홈페이지 접속한 후 우측 상단 언어 변경을 통해 한국어로 전환<br>2. 홈페이지 안내에 따라 개인정보 입력(상기 작성방법 참고!!)<br>- 성명, 국적, 전화번호, 이메일 주소, 여권정보<br>- 항공편 정보, 여행목적, 태국 내 숙소(호텔) 주소 등 입력<br>3. 입력 사항 확인 후 제출-&gt;이메일로 발송되는 접수 확인 메일 수신<br>4. 이메일로 전달 받은 첨부 파일 확인 및 QR코드 포함된 파일 다운로드<br>- 다운받은 파일 캡쳐하여 휴대폰 보관 권장<br>- 휴대폰 미소지하신 분 및 휴대폰 조작 어려움을 느끼시는 분들은 QR코드 포함된 파일 출력하여 소지하실 것을 권장 드림<br>5. 태국 입국시 입국심사관에게 여권과 함께 작성하신 디지털 입국 카드 파일 함께 제시<br><br>O 작성 시점<br>태국에 입국하는 날을 포함하여 입국 전 3일 이내에 작성 및 제출되어야 합니다.<br>예시: 5월 4일 태국 입국 시 → 5월 2일 ~ 5월 4일 사이에 작성하여 제출하여야 합니다.<br>※참고 : 한국 출발 기준이 아니며 현지 입국일을 기준으로 3일전 부터 작성이 가능합니다.<br>★TDAC 작성 시 별도 비용은 없으며, 제출한 이후 여행 일정이 연기된 경우 및 입력하신 정보를 변경하셔야 하는 경우<br>수정을 해주셔야하며 수정이 불가한 항목일 경우는 처음부터 다시 작성해주셔야합니다.<br><br>■ 대행 서비스는 유료 진행 가능<br>- 개별로 작성하시기를 권장 드리지만 대행을 원하시는 분들은<br>예약시 예약담당자에게 대행서비스 요청을 해주세요!!<br>- 허니문 상품 제외 (상품코드 ATH*이 포함된 상품)<br>1. 대행서비스 비용 : 1만원 (성인, 아동 구분없이 1인당 1만원)<br>2. 요청 방법 : 예약시 예약 담당자에게 요청<br>3. 출발 2일전까지 손님께 서류 전달(메일 또는 고객님 휴대폰)<br><br>■ 주의사항<br>- 입국심사 시 인터넷 환경이 좋지 않을 수 있으므로 수신된 파일(QR코드)을 별도로 소지(출력 또는 캡처 등)하시기 바랍니다.<br>- 입국신고는 비자와는 별개의 제도이므로 비자 소지 여부와 상관없이 모두 적용됩니다.<br><br>※ 출입국 절차 및 내용은 태국 정부 및 국내 지침에 따라 변경될 수 있는 점 참고 부탁드립니다.<br><br><br>",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 수완나폼 국제공항",
        "content": "한국 → 수완나폼 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (아티타야 호텔 또는 동급)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,김해,청주 국제공항 출발 (출발 시간 : 18:30~19:30 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "수완나폼 국제공항 도착 후 가이드미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "파타야로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (아티타야 호텔 또는 동급)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 아티타야 호텔★★★★☆\n- 그 외 동급 호텔 ★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "백만년 바위공원 & 악어농장, 플로팅마켓, 황금절벽사원",
        "content": "백만년 바위공원 & 악어농장, 플로팅마켓, 황금절벽사원",
        "hotelName": "호텔 투숙 및 휴식 (아티타야 호텔 또는 동급 )",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "백만년 바위공원 & 악어농장",
            "nameEn": "The Million Years Stone Park & Pattaya Crocodile Farm",
            "summary": "희귀한 자연 기암괴석과 스릴 넘치는 악어 쇼를 한곳에서 즐기는 종합 테마파크",
            "detail": "파타야 시내 인근에 위치한 이곳은 수백만 년의 세월이 만든 이색적인 기암괴석, 화석화된 나무(규화목)와 수만 마리의 악어가 어우러진 대규모 테마 공원입니다. 정성껏 조성된 전통 한국·태국 스타일의 아름다운 정원을 걸으며 휴식을 취할 수 있으며, 공원의 하이라이트인 '맨손 악어 쇼'에서는 조련사가 악어 입에 머리를 넣는 등 손에 땀을 쥐게 하는 아슬아슬한 공연을 관람할 수 있습니다. 악어뿐만 아니라 백호, 기린, 코끼리 등 다양한 동물들에게 직접 먹이를 주는 이색 체험도 준비되어 있습니다.\n\n포인트 1: 수백만 년 된 희귀한 괴석과 분재, 푸르른 정원이 어우러진 이국적인 포토 스팟\n포인트 2: 조련사와 악어가 펼치는 손에 땀을 쥐게 하는 스릴 만점 '맨손 악어 쇼'",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-1-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "망고비빔밥",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "파타야 수상 시장",
            "nameEn": "Pattaya Floating Market",
            "summary": "물길 따라 펼쳐지는 태국 전통 수상 생활과 다채로운 먹거리의 장",
            "detail": "태국 4개 지역(북부, 중부, 남부, 이산)의 전통 건축 양식과 문화, 생활 방식을 한곳에 모아놓은 대규모 인공 수상시장입니다. 나무 데크로 연결된 수로를 따라 늘어선 전통 목조 가옥 형태의 점포에서 태국 각지의 특색 있는 공예품과 기념품을 구경할 수 있습니다. 수로를 따라 유유히 떠다니는 배 위에서 파는 과일 스무디, 팟타이, 코코넛 펜케이크 등 맛깔스러운 길거리 음식을 맛보고, 직접 목선을 타고 수로를 누비는 이색적인 수상 체험을 즐길 수 있습니다.\n\n포인트 1: 태국 4개 지역의 전통문화와 수중 가옥 풍경을 배를 타고 둘러보는 수상 체험\n포인트 2: 수선화 같은 수로 위 배에서 즉석으로 만들어주는 다채로운 현지 스트리트 푸드 탐방",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-2-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-2-3.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-2-4.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "왓 카오 치 짠 (황금 절벽 사원)",
            "nameEn": "Khao Chi Chan (Laser Buddha Temple)",
            "summary": "거대한 거대 암벽 위에 황금빛으로 새겨진 압도적인 규모의 불상",
            "detail": "파타야 외곽에 위치한 유명 사찰로, 거대한 거대 석회암 절벽 단면에 레이저로 도안을 깎아낸 뒤 황금을 채워 넣은 초대형 불상(높이 약 109m)으로 유명한 명소입니다. 국왕의 즉위 50주년을 기념하여 조성되었으며, 압도적인 크기와 화려한 황금빛 선이 푸른 하늘과 어우러져 장관을 연출합니다. 깎아지른 절벽 앞으로는 정갈하게 잘 가꿔진 넓은 공원과 정원이 펼쳐져 있어, 시원한 풍경을 감상하며 경건하고 편안한 마음으로 둘러보기 좋습니다.\n\n포인트 1: 절벽 전체를 병풍 삼아 황금으로 새겨진 109m 높이의 거대 불상이 주는 압도적인 위엄\n포인트 2: 잘 단장된 초록빛 정원과 암벽이 어우러져 인생샷을 남기기 좋은 탁 트인 포토 스팟\n관람 팁: 국왕을 기리는 신성한 공간이므로 지나치게 노출이 심한 복장은 피하는 것이 좋으며, 별도의 그늘이 많지 않아 양산이나 모자를 준비하시면 더욱 편리합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-3-2.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "전통 마사지 1시간 체험 (팁 별도)",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "알카자쇼",
            "nameEn": "Alcazar Cabaret Show",
            "summary": "화려한 조명과 연출이 돋보이는 파타야의 세계적인 카바레 트랜스젠더 쇼",
            "detail": "티파니쇼와 함께 파타야를 대표하는 세계 3대 트랜스젠더 쇼 중 하나로, 최첨단 음향 및 조명 시설을 갖춘 대형 전용 극장에서 펼쳐지는 화려한 무대 연출이 인상적입니다. 미스코리아 출신급의 아름다운 트랜스젠더 무용수들이 세계 각국의 전통 무용과 팝송, K-POP, 화려한 뮤지컬 브로드웨이 스타일의 춤과 노래를 선보입니다. 남녀노소 누구나 부담 없이 관람할 수 있는 건전하고 완성도 높은 대중적인 엔터테인먼트 쇼입니다.\n가격 : 30$\n\n포인트 1: 화려한 의상과 거대한 무대 세트, 세계 다문화 테마가 결합된 압도적인 퍼포먼스\n포인트 2: 전 연령대 및 가족 단위 여행객이 함께 즐길 수 있는 건전하고 완성도 높은 시각적 볼거리",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-5-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-5-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "빅아이 라이브쇼",
            "nameEn": null,
            "summary": "Pattaya Adult Live Show (Big Eye / 69 Show)",
            "detail": "파타야 밤문화의 화려함과 다이내믹함을 담은 이색 어덜트 라이브 퍼포먼스\n성인 고객만을 위해 기획된 파타야의 대표적인 성인 전용 라이브 쇼입니다. 전문 라이브 연기자와 무용수들이 펼치는 과감하고 파격적인 연출, 라이브 아크로바틱, 화려한 스턴트와 무대 퍼포먼스가 어우러져 신선한 충격과 색다른 경험을 선사합니다. 관객과의 유쾌한 교감 코너도 마련되어 있어 이국적이고 개방적인 파타야 나이트라이프의 열기를 온전히 느껴볼 수 있습니다.\n가격 : 50$\n\n포인트 1: 오직 성인만을 위한 과감하고 화려한 연출의 이색 퍼포먼스 쇼\n포인트 2: 서커스와 예술, 흥미로운 쇼 요소가 결합된 다이내믹하고 개방적인 무대 구성",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "파타야 코끼리 트래킹",
            "nameEn": "Pattaya Elephant Trekking",
            "summary": "열대 자연 속에서 코끼리의 등 위에 올라 거니는 이색 액티비티",
            "detail": "태국을 상징하는 동물인 코끼리를 직접 타고 파타야의 푸른 열대 숲과 정원을 여유롭게 거니는 특별한 체험 프로그램입니다. 커다란 코끼리 등에 올려진 안락한 의자에 앉아 한 걸음씩 느릿하게 움직이며 바라보는 이국적인 풍경은 색다른 즐거움을 선사합니다. 정글 길이나 수로를 건너며 전달되는 코끼리의 특유의 묵직한 둔탁함과 높이감이 감성적인 스릴을 더해주며, 가족이나 연인과 함께 태국 고유의 휴양 문화와 자연을 느끼기에 제격입니다.\n가격 : 30$\n\n포인트 1: 높은 코끼리 등 위에서 바라보는 탁 트인 열대 정원과 정글의 이국적인 전경\n포인트 2: 코끼리와 교감하며 태국 전통 휴양 문화의 여유로움을 직접 체험하는 코스",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-7-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-7-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "파타야 전통 마사지 (60분) / 팁 별도",
            "nameEn": "Pattaya Thai Traditional Massage (1 Hour)",
            "summary": "피로로 지친 몸의 에너지를 깨워주는 태국 정통 건식 힐링 케어",
            "detail": "태국 여행의 꽃이라 불리는 정통 타이 마사지를 60분간 밀도 있게 체험할 수 있는 알찬 케어 프로그램입니다. 오일을 사용하지 않는 건식 마사지로, 전용 복장으로 교체한 후 손가락과 손바닥, 팔꿈치, 무릎 등을 활용해 전신의 에너지가 흐르는 혈(Sen)을 눌러주고 지압합니다. 지친 근육의 긴장을 자연스럽게 풀어준 뒤, 마무리 단계에서 진행되는 스트레칭을 통해 몸 전체의 유연성을 되찾고 누적된 피로를 순식간에 날려버릴 수 있습니다.\n이용 팁: 마사지 강도는 \"바오바오(살살)\" 또는 \"낙낙(세게)\" 등의 간단한 태국어로 테라피스트에게 요청하시면 원하는 강도로 맞춤 케어를 받으실 수 있습니다.\n추가 옵션 : 1시간 추가 시 20$\n\n포인트 1: 전신의 지압과 시원한 스트레칭이 조화를 이루는 태국 전통 방식의 건식 케어\n포인트 2: 여행 중 뭉친 근육을 완화하고 몸의 기혈 순환을 돕는 가성비 높은 피로 회복",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-4-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-2-4-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "무제한 삼겹살",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (아티타야 호텔 또는 동급 )",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "산호섬 (KO LAN)",
        "content": "산호섬 (KO LAN)",
        "hotelName": "호텔 투숙 및 휴식 (아티타야 호텔 또는 동급 )",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 스피드 보트를 타고 산호섬 (KO LAN)으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "꼬 란",
            "nameEn": "Ko Lan (Coral Island)",
            "summary": "에메랄드빛 바다와 하얀 모래사장이 펼쳐지는 파타야 대표 해양 휴양지",
            "detail": "파타야 선착장에서 스피드보트로 약 15~20분 거리에 위치한 낙원 같은 섬으로, 파타야 본토보다 훨씬 투명하고 맑은 에메랄드빛 바다를 자랑합니다. 따와엔 해변, 티엔 해변 등 저마다 다른 매력을 가진 고운 백사장에서 여유로운 휴양을 즐길 수 있습니다. 파라세일링, 씨워킹, 제트스키, 바나나보트, 스노클링 등 다채로운 해양 액티비티가 준비되어 있어 액티브한 물놀이와 힐링을 동시에 즐기기에 최적의 코스입니다.\n추가 옵션 : 바나나보트 (20$), 파라세일링 (30$), 제트스키 (30$), 씨워킹(80$) 등\n\n포인트 1: 에메랄드빛 투명한 바다와 고운 백사장에서 즐기는 여유로운 휴양\n포인트 2: 파라세일링, 씨워킹, 제트스키 등 스릴 넘치는 해양 액티비티 총집합\n관람 팁: 해빛이 매우 강하고 바다 활동이 많으므로 래시가드와 썬크림, 썬글라스, 방수팩을 미리 챙겨가시는 것을 추천합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-1-3.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-1-4.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "파타야 귀환 후 중식",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "수끼",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 귀환 후 샤워 및 재정비시간",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "파타야 야시장",
            "nameEn": "Pattaya Night Market",
            "summary": "오색찬란한 네온사인과 길거리 공연이 어우러진 화려한 야경의 명소",
            "detail": "해가 지면 화려한 네온사인과 함께 활기를 띠는 파타야 밤문화의 중심지로, 활기찬 야경과 이국적인 활력을 동시에 경험할 수 있는 곳입니다. 길거리를 따라 늘어선 포장마차와 점포에서는 팟타이, 로띠, 해산물 구이 등 맛깔스러운 현지 스트리트 푸드의 향연이 펼쳐집니다. 곳곳에서 펼쳐지는 흥겨운 길거리 버스킹 공연과 다채로운 쇼를 관람하며, 저렴한 의류, 수공예품, 기념품 쇼핑까지 한 번에 즐길 수 있는 미식과 문화의 장입니다.\n가격 : 야간시티투어 : 워킹스트리트 + 루프탑 + 송테우 (60$)\n\n포인트 1: 화려한 네온사인 야경 속에서 즐기는 다채롭고 가성비 뛰어난 현지 먹거리 탐방\n포인트 2: 흥겨운 길거리 버스킹 공연과 다양한 공예품·기념품 쇼핑이 주는 활기찬 분위기",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-2-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "아로마 스파 마사지 (120분)",
            "nameEn": "Aroma Spa Massage (2 Hours)",
            "summary": "지친 몸과 마음을 감싸주는 에센셜 오일의 고품격 아로마 힐링 케어",
            "detail": "120분 동안 여유롭고 깊이 있게 진행되는 프리미엄 아로마 스파 프로그램입니다. 고객의 취향과 컨디션에 맞춰 선택한 천연 에센셜 아로마 오일을 사용하여 부드러우면서도 정교한 압으로 전신의 뭉친 근육과 기혈을 문질러 풀어줍니다. 아로마 향이 전하는 심신 안정 효과와 함께 피부에 풍부한 수분과 영양을 공급하며, 2시간 동안 림프 순환을 집중적으로 도와 여행 중 쌓인 극심한 피로와 스트레스를 부드럽게 완화해 줍니다.\n이용 팁: 마사지 후 아로마 오일 성분이 피부에 충분히 흡수되도록 1~2시간 정도는 샤워를 유예하시는 것을 추천합니다.\n가격 : 120$\n\n포인트 1: 천연 아로마 오일의 은은한 향과 부드러운 스파 테라피가 선사하는 깊은 숙면과 휴식\n포인트 2: 넉넉한 2시간 코스로 머리부터 발끝까지 림프 순환과 피부 보습, 전신 근육 완화 효과",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "파타야 전통 마사지 (120분)",
            "nameEn": "Pattaya Thai Traditional Massage (2 Hour)",
            "summary": "피로로 지친 몸의 에너지를 깨워주는 태국 정통 건식 힐링 케어",
            "detail": "태국 여행의 꽃이라 불리는 정통 타이 마사지를 120분간 밀도 있게 체험할 수 있는 알찬 케어 프로그램입니다. 오일을 사용하지 않는 건식 마사지로, 전용 복장으로 교체한 후 손가락과 손바닥, 팔꿈치, 무릎 등을 활용해 전신의 에너지가 흐르는 혈(Sen)을 눌러주고 지압합니다. 지친 근육의 긴장을 자연스럽게 풀어준 뒤, 마무리 단계에서 진행되는 스트레칭을 통해 몸 전체의 유연성을 되찾고 누적된 피로를 순식간에 날려버릴 수 있습니다.\n이용 팁: 마사지 강도는 \"바오바오(살살)\" 또는 \"낙낙(세게)\" 등의 간단한 태국어로 테라피스트에게 요청하시면 원하는 강도로 맞춤 케어를 받으실 수 있습니다.\n가격 : 40$\n\n포인트 1: 전신의 지압과 시원한 스트레칭이 조화를 이루는 태국 전통 방식의 건식 케어\n포인트 2: 여행 중 뭉친 근육을 완화하고 몸의 기혈 순환을 돕는 가성비 높은 피로 회복",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-4-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-3-4-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "반타이 레스토랑",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (아티타야 호텔 또는 동급 )",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "푸카오텅(왓사켓), 아시아티크",
        "content": "푸카오텅(왓사켓), 아시아티크",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식\n조식 후 체크아웃 및 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "방콕으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "쇼핑센터 방문",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "쌈밥",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "푸카오텅(왓사켓)",
            "nameEn": "Wat Saket & Phu Khao Thong (Golden Mount)",
            "summary": "방콕 올드타운을 360도로 조망하는 역사 깊은 황금빛 인공 산 사찰",
            "detail": "방콕 구시가지에 위치한 왓 사켓의 '푸카오텅(황금산)'은 높이 약 80m의 인공 언덕 위에 조성된 사원의 대표 탑입니다. 라마 3세 시절부터 건설되기 시작해 라마 5세 때 완성된 곳으로, 언덕을 따라 감싸 올라가는 318개의 나선형 계단을 올라가면 석가모니의 진신사리가 모셔진 정상의 황금빛 체디(불탑)에 다다르게 됩니다. 계단을 오르는 길목마다 울창한 수목과 시원한 음향 효과, 종 소리가 어우러져 신성한 분위기를 자아내며, 정상 전망대에서는 방콕 올드타운과 멀리 보이는 현대적 빌딩 숲의 파노라마 전경을 감상할 수 있습니다.\n\n포인트 1: 318개 계단을 따라 올라가며 느껴보는 고요한 수목원 분위기와 방콕 360도 파노라마 뷰\n포인트 2: 정상의 웅장한 황금빛 체디와 신성한 석가모니 진신사리가 건네는 평안함",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-1-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "아시아티크",
            "nameEn": "Asiatique The Riverfront",
            "summary": "짜오프라야 강변의 시원한 바람과 화려한 야경이 어우러진 현대식 야시장",
            "detail": "짜오프라야 강변에 위치한 아시아티크는 옛 무역 선착장 창고를 현대적이고 깔끔하게 리노베이션한 방콕의 대표 대형 야시장입니다. 쾌적한 블록별 구역으로 정리되어 있어 가족, 연인과 함께 부담 없이 쇼핑과 식사를 즐기기에 최적의 공간입니다. 방콕의 상징적인 대형 대관람차(Asiatique Sky)를 비롯해 고급 레스토랑, 감성 카페, 다채로운 길거리 음식 점포, 수공예품 및 의류 매장이 총집합해 있어 쇼핑과 휴식을 동시에 만끽할 수 있습니다.\n\n포인트 1: 대관람차와 짜오프라야 강변이 선사하는 아름답고 로맨틱한 방콕의 밤풍경\n포인트 2: 깔끔하게 구획된 구역에서 즐기는 쾌적한 쇼핑과 분위기 있는 강변 다이닝",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-2-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-2-3.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "욧시암 크루즈",
            "nameEn": "Yot Siam Cruise",
            "summary": "짜오프라야 강변의 밤바람을 맞으며 무제한 맥주와 야경을 즐기는 감성 크루즈",
            "detail": "방콕 아시아티크 선착장에서 출발하여 짜오프라야 강을 유유히 운항하는 감성적인 무제한 드링크 크루즈입니다. 방콕의 대표 명소인 왓 아룬(새벽사원), 왕궁, 라마 8세 대교 등 화려한 조명으로 물든 강변의 야경을 선상 위에서 입체적으로 조망할 수 있습니다. 시원한 맥주와 소프트드링크, 간편한 안주류가 무제한으로 제공되어 선선한 강바람과 함께 분위기 있는 음악을 즐기며 낭만적인 밤을 보내기에 최적의 투어입니다.\n가격 : 40$\n\n포인트 1: 왓 아룬과 왕궁 등 방콕의 랜드마크를 선상에서 즐기는 화려한 야경 투어\n포인트 2: 운항 시간 동안 시원한 시원한 맥주 및 음료를 무제한으로 만끽하는 특별함",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bangkok-pattaya-4-3-1.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "아시아티크 선상 디너 크루즈",
            "nameEn": "Asiatique Dinner Cruise",
            "summary": "짜오프라야 강변의 화려한 야경과 품격 있는 뷔페를 동시에 즐기는 낭만 크루즈",
            "detail": "방콕 아시아티크 선착장에서 출발해 짜오프라야 강을 유유히 운항하며 잊지 못할 밤을 선사하는 대표 인기 크루즈 프로그램입니다. 화려한 조명이 빛나는 왓 아룬(새벽사원), 왕궁, 라마 8세 대교 등 방콕의 주요 랜드마크를 선상 위에서 감상할 수 있습니다. 신선한 해산물과 다채로운 베트남·태국 및 세계 각국의 인터내셔널 뷔페 요리가 준비되어 있으며, 신나는 라이브 음악 및 전통 공연이 더해져 감성적이고 라이브한 분위기 속에서 식사를 즐길 수 있습니다.\n가격 : 60$\n\n포인트 1: 웅장한 라이브 공연과 함께 즐기는 다채로운 인터내셔널 & 해산물 뷔페\n포인트 2: 왓 아룬과 방콕 왕궁 등 강변의 핵심 랜드마크가 만들어내는 낭만적인 밤풍경",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식\n석식 후 공항으로 이동",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "방콕 → 한국",
        "content": "방콕 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 8,
    "slug": "laos",
    "name": "라오스 3박 5일 실속 여행 PKG",
    "country": "라오스",
    "cities": [
      "비엔티안"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 6,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "느리게 흐르는 시간, 라오스",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/8-mt6v9x1u-v8g321.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "빠뚜사이, 왓시므앙, 블루라군, 왓탓루앙, 메콩강 등"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.<br><br><br>",
      "caution": "-  12월 24일~ 1월 1일 (크리스마스, 연말) 기간 제외하고는 예약 가능합니다. 참고바랍니다.<br><br><span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.<br><br>※라오스 입국절차 안내※<br><br>- 입국절차는 각국 상황에 따라 주기적으로 변경이 되고 있사오니, 보다 자세한 사항은 각국 대사관 홈페이지를 통해 확인 부탁드립니다<br><br>※만 14세 미만 아동 입국 제한※<br>- 만 14세 미만 미성년 자녀와 함께 여행 시 가족관계를 증명하기 위한 영문등본이 필요합니다. 출발 전 미리 개별적으로 준비 부탁드립니다.<br><br>1. 아버지와 아동의 영문 성(last name)이 다를 경우<br>- 영문 주민 등본 지참<br>2. 아버지 미동반 여행시(어머니가 아이 동반 여행)<br>- 영문 주민 등본 지참<br>3. 친부모가 아닌 제 3자가(친적 및 조무보님도 해당) 동반한 여행시<br>- 아버지의 여행 허가서를 영문으로 받은 후 변호사 공증 후 소지<br>※ 영문 주민 등본 발급 시 꼭 본인 자녀의 여권 영문 이름과 동일하게 발급 받아야 합니다.<br>※ 상기 해당 사항이 있으신 분들은 영문 주민 등본을 입국 심사에서 요청 시 보여주시기 바랍니다.<br><br>※ 친어머니와 자녀의 여행이더라고 주소지가 다르게 되어 있거나 이혼, 사별등의 사유로 등본상 아버지가 확인되지 않을 경우, 공증을 받아 준비하는 서류가 있으므로 해당자분들은 공증 대행 사무실로 문의하여 필요서류를 챙겨주시기 바랍니다.<br><br><br>",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 비엔티엔 왔따이 국제공항",
        "content": "한국 → 비엔티엔 왔따이 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (라오텔 호텔 또는 동급)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,김해,청주 국제공항 출발 (출발 시간 : 19:00~20:00 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "비엔티엔 왔따이 국제공항 도착 후 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (라오텔 호텔 또는 동급)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "호텔 체크인 시 유의사항",
            "nameEn": null,
            "summary": null,
            "detail": "<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 라오텔 호텔 ★★★★☆\n- 타비숙 아일랜드 호텔 ★★★★☆\n- 그 외 동급 호텔 ★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "비엔티엔&방비엥",
        "content": "빠뚜사이, 왓시므앙 사원",
        "hotelName": "호텔 투숙 및 휴식 (타비숙 아일랜드 호텔 또는 동급)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "빠뚜사이",
            "nameEn": "Patuxai Victory Gate",
            "summary": "비엔티안 중심에 웅장하게 서 있는 라오스의 대표적인 독립 기념탑",
            "detail": "라오스 비엔티안의 중심가인 란쌍 대로 끝에 위치한 빠뚜사이는 1957년 프랑스로부터의 독립을 기념하고 전쟁으로 사망한 사병들을 추모하기 위해 세워진 승리의 문입니다. 프랑스 파리의 에투알 개선문에서 영감을 받아 지어졌지만, 탑의 세부 조각과 지붕의 화려한 탑봉, 천장의 벽화에는 라오스 전통 양식과 불교 신화 속 문양이 섬세하게 녹아들어 있습니다. 탑 내부의 계단을 따라 올라가면 비엔티안 시내 전경을 한눈에 담을 수 있는 전망대가 있으며, 탑 앞의 푸른 공원과 분수대는 시민들과 여행객들의 아늑한 휴식처가 되어줍니다.\n\n포인트 1: 서양식 개선문 구조와 라오스 전통 불교 예술 양식이 조화롭게 결합된 건축미\n포인트 2: 탑 정상 전망대에서 시원하게 바라보는 비엔티안 시가지의 탁 트인 뷰",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-2-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-1-3.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "왓 씨 므앙",
            "nameEn": "Wat Si Muang",
            "summary": "비엔티안 사람들의 수호신이 모셔진 가장 신성하고 활기찬 사원",
            "detail": "비엔티안 시내에 위치한 왓 씨 므앙은 비엔티안에서 가장 많은 현지인들이 찾는 신성한 사원 중 하나입니다. 1563년 사원 건립 당시 비엔티안 시를 지키기 위해 자신을 희생한 임산부 '씨 므앙(Si Muang)' 여사의 전설이 전해져 내려오는 곳으로, 도시의 수호 기둥(City Pillar)이 모셔져 있습니다. 소원을 잘 들어주는 사원으로 유명하여 액운을 막고 행운을 비는 현지인들의 발길이 끊이지 않으며, 스님에게 팔목에 흰 실을 묶어주는 '바시(Baci)' 의식을 받아볼 수 있어 라오스의 생생한 불교 신앙 문화를 체험하기에 제격입니다.\n\n포인트 1: 비엔티안을 지키는 도시 수호 기둥과 액운을 막고 행운을 비는 신성한 분위기\n포인트 2: 스님에게 건강과 복을 기원하는 흰 실을 받으며 체험하는 라오스 전통 '바시' 의식\n관람 팁: 신성한 사원이므로 어깨와 무릎이 드러나지 않는 복장을 착용해야 하며, 바시 의식으로 스님이 묶어준 흰 실은 최소 3일 동안 유지해야 행운이 들어온다고 전해집니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "라오스 정통 마사지 (60분) / 팁 별도",
            "nameEn": "Lao Traditional Massage (1 Hour)",
            "summary": "피로를 신선하게 풀어주는 라오스 전통 방식의 은은하고 시원한 건식 힐링 케어",
            "detail": "라오스 여행 중 지친 전신의 피로를 효과적으로 완화해 주는 대표적인 건식 마사지 프로그램입니다. 오일을 사용하지 않고 전용 마사지 복장으로 착용한 뒤 진행되며, 지압과 스트레칭을 절묘하게 결합하여 몸의 기혈 순환을 원활하게 돕습니다. 태국 전통 마사지보다 압이 상대적으로 부드럽고 섬세하여, 마사지를 처음 받는 입문자나 부드럽게 근육을 풀고 싶어 하는 여행객들에게 안성맞춤입니다. 머리부터 발끝까지 천천히 자극하며 누적된 여행의 피로를 깔끔하게 해소해 줍니다.\n이용 팁: 마사지 강도를 조절하고 싶을 때는 간단한 라오스어로 \"쨉(아파요)\" 또는 \"ผ่อน(살살 부탁해요)\" 등의 표현을 활용하시면 더욱 편안한 케어를 받으실 수 있습니다.\n\n포인트 1: 과도한 자극 없이 몸의 뭉친 근육을 부드럽고 섬세하게 풀어주는 정통 건식 케어\n포인트 2: 지압과 부드러운 스트레칭이 조화를 이루어 여행 중 지친 전신의 회복을 돕는 코스",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-2-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-2-3-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "탕원선상식\n중식 후 방비엥으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "정통마사지 1시간 체험 (팁별도)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (타비숙 아일랜드 호텔 또는 동급)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "방비엥",
        "content": "블루라군, 탐놈동굴, 방비엥 야시장",
        "hotelName": "호텔 투숙 및 휴식 (타비숙 아일랜드 호텔 또는 동급)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 블루라군으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "블루라군",
            "nameEn": "Blue Lagoon",
            "summary": "청량한 에메랄드빛 에메랄드 물속으로 다이빙하는 방비엥의 대표 에코 휴양지",
            "detail": "라오스 방비엥을 상징하는 대표적인 자연 수영장으로, 에메랄드빛 신비로운 물색과 푸른 자연이 한데 어우러진 천연 액티비티 명소입니다. 울창한 나무 그늘 아래 시원하게 흐르는 물속에서 수영을 즐기거나, 큰 나무 기둥 위에 설치된 다이빙대에서 물속으로 뛰어내리는 에너제틱한 액티비티를 만끽할 수 있습니다. 수영 외에도 인근의 탐푸캄 동굴을 둘러보거나 오두막 평상에 누워 시원한 라오 맥주(Beerlao)와 함께 여유로운 휴식을 즐길 수 있어 방비엥 여행의 필수 코스로 손꼽힙니다.\n\n포인트 1: 맑고 투명한 에메랄드빛 천연 암반수에서 즐기는 신나는 수영과 상쾌한 다이빙\n포인트 2: 푸르른 열대 수목으로 둘러싸여 한가롭게 힐링할 수 있는 라오스 특유의 휴양 분위기\n관람 팁: 물 깊이가 생각보다 깊은 구역이 있으므로 수영에 익숙하지 않다면 현장에서 구명조끼를 대여하는 것이 좋으며, 수건과 아쿠아슈즈를 미리 챙겨가시면 더욱 편리합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-1-3.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "탐놈 동굴",
            "nameEn": "Tam Nam Cave",
            "summary": "물동굴로 알려진 탐 놈(남) 동굴",
            "detail": "동굴 내부를 흐르는 물을 이용해 이곳만의 독특한 체험인 튜빙 탐험을 즐길 수 있다.\n⛵카약킹 체험 (2인 1대)",
            "image": "https://tlabal.co.kr/images/itinerary/laos-3-4.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/laos-3-4.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "탐남 동굴 (물의 동굴)",
            "nameEn": "Tham Nam Cave (Water Cave)",
            "summary": "튜브를 타고 로프를 당기며 이색적인 석회암 동굴을 탐험하는 수중 액티비티",
            "detail": "라오스 방비엥을 대표하는 대표적인 수중 동굴로, 라오스어로 '탐(동굴)'과 '남(물)'이 합쳐져 '물의 동굴'이라 불리는 곳입니다. 동굴 내부가 물로 가득 채워져 있어 걸어서 들어가는 대신 개인 튜브에 몸을 싣고 동굴 벽면을 따라 연결된 로프를 잡고 당기며 동굴 안쪽을 탐험합니다. 랜턴 불빛에 의존해 칠흑 같은 동굴 내부를 이동하며 자연이 만들어낸 신비로운 종유석과 기암괴석을 눈앞에서 감상하는 이색적이고 스릴 넘치는 액티비티를 즐기실 수 있습니다.\n\n포인트 1: 튜브 위에서 로프를 잡고 수중 동굴 속으로 들어가는 방비엥만의 독특한 동굴 튜빙 체험\n포인트 2: 헤드램프 불빛 아래 드러나는 신비롭고 웅장한 천연 종유석과 동굴 지형\n관람 팁: 동굴 내부 물속을 이동하므로 옷이 완전히 젖고 진흙이 묻을 수 있어 수영복이나 젖어도 되는 어두운 옷, 아쿠아슈즈 착용을 권장하며, 휴대폰은 방수팩에 꼭 넣어 보관하세요.\n스페셜 포함: 카약킹 체험 (2인 1대)",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-3-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-2-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-2-3.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 귀환 샤워 후 환복",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "방비엥 야시장",
            "nameEn": "Vang Vieng Night Market",
            "summary": "아기자기한 소품과 맛깔스러운 길거리 음식이 가득한 방비엥의 밤 문화 명소",
            "detail": "낮 동안의 액티비티를 마친 여행객들이 자연스레 모여드는 방비엥 시내 중심가의 야시장입니다. 활기차면서도 정겨운 시골 분위기가 감도는 스트리트를 따라 라오스 특유의 패턴이 들어간 의류와 코끼리 바지, 아기자기한 수공예 기념품, 가방 및 액세서리를 판매하는 점포들이 길게 이어집니다. 야시장 한편에는 노릇하게 구워내는 현지 꼬치구이, 바삭한 팬케이크(로띠), 시원한 생과일 스무디와 비어라오(Beerlao)를 파는 먹거리 가판대들이 모여 있어, 밤바람을 맞으며 맛있는 야식과 휴식을 즐기기에 제격입니다.\n\n포인트 1: 화려하지 않지만 정겹고 아기자기한 매력이 있는 라오스 수공예품 및 기념품 쇼핑\n포인트 2: 즉석에서 구워주는 노릇한 꼬치구이와 시원한 비어라오를 즐기는 소소한 미식의 즐거움\n관람 팁: 매일 저녁 6시 무렵부터 흥겨운 분위기가 시작되며, 정찰제가 아니므로 수공예품이나 의류를 구매할 때는 미소와 함께 소소한 흥정을 시도해 보시는 것을 추천합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-3-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-3-3-2.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (타비숙 아일랜드 호텔 또는 동급)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "비엔티엔&방비엥",
        "content": "왓탓루앙, 메콩강",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식\n조식 후 체크아웃",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "비엔티엔으로 이동",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "왓 탓 루앙",
            "nameEn": "Pha That Luang (Wat That Luang)",
            "summary": "라오스의 주권을 상징하며 황금빛으로 빛나는 국가 대표 불탑 사원",
            "detail": "라오스 비엔티안에 위치한 파 탓 루앙은 라오스에서 가장 신성시되는 국가적 상징물이자 불교 문화의 정수입니다. 16세기 셋타티랏 왕에 의해 건립되었으며, 석가모니의 진신사리(갈비뼈)가 모셔져 있는 것으로 전해집니다. 사원 중앙에 웅장하게 솟아오른 45m 높이의 대형 황금 빛 체디(불탑)는 주변을 둘러싼 30개의 작은 탑들과 조화를 이루며 독보적인 위엄을 자랑합니다. 라오스 지폐와 국장에도 그려져 있을 만큼 라오스 국민들의 정신적 지주 역할을 하는 역사적인 사찰입니다.\n\n포인트 1: 웅장함과 신성함을 자아내는 높이 45m의 눈부신 중앙 황금빛 대형 불탑\n포인트 2: 라오스의 문화적 정체성과 불교 신심이 집약된 국가 최고 상징물의 장엄한 분위기\n관람 팁: 사원 안팎을 천천히 거닐며 셋타티랏 왕의 동상과 와불상을 함께 둘러보시는 것을 추천하며, 신성한 구역이므로 무릎과 어깨가 노출되지 않는 복장을 착용해야 합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-4-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-4-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-4-1-3.jpg"
            ]
          },
          {
            "kind": "photo",
            "label": "",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": "https://tlabal.co.kr/images/itinerary/laos-4-2.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/laos-4-2.jpg"
            ]
          },
          {
            "kind": "photo",
            "label": "",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": "https://tlabal.co.kr/images/itinerary/laos-4-3.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/laos-4-3.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "쇼핑 관광",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "한 식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "메콩강",
            "nameEn": "Mekong River",
            "summary": "동남아시아의 젖줄이자 비엔티안의 로맨틱한 노을과 밤문화를 품은 대강",
            "detail": "중국 티베트 고원에서 시작해 라오스, 태국, 캄보디아, 베트남을 거쳐 흐르는 동남아시아 최대 규모의 젖줄입니다. 라오스 비엔티안에서는 태국과의 국경을 이루는 강으로, 저녁 시간이 되면 붉게 물드는 환상적인 일몰 풍경이 장관을 이룹니다. 해가 진 후 강변을 따라 조성된 메콩강 차오 아누봉 공원과 야시장에는 산책을 즐기는 현지인과 여행객들로 활기를 띠며, 강 바람을 맞으며 길거리 음식과 시원한 라오 맥주(Beerlao)를 즐기기에 최적인 명소입니다.\n\n포인트 1: 국경을 가로지르는 메콩강 수평선 너머로 펼쳐지는 감동적인 황금빛 노을\n포인트 2: 강변 공원을 따라 열리는 야시장과 활기찬 현지 문화·미식 체험",
            "image": "https://tlabal.co.kr/images/itinerary/sp-laos-4-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-laos-4-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-laos-4-2-2.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "공항으로 이동",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "비엔티안 → 한국",
        "content": "비엔티안 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 11,
    "slug": "cebu",
    "name": "세부 3박 5일 슬림 여행 PKG",
    "country": "필리핀",
    "cities": [
      "세부"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 4,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "가까운 남국의 섬",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/11-mt6vbwzy-1mrftsi.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "스쿠버다이빙 강습(이론+수영장실습), 막탄 산토리뇨 성당, 라푸라푸기념비, 막탄슈라인"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.<br><br><br>",
      "caution": "<span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정 등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.<br><br>- 안내사항<br><br>필리핀 입국 시 준비절차(서류안내)<br><br>* 필리핀 여행전 준비사항 *<br><br>1. 이-트래블(전자여행신고서) 'e-Travel' : 항공탑승시간 72시간 이내 사전등록 필수<br><br>* https://etravel.gov.ph/kr<br><br>2. 6개월이상 유효기간 남은 여권 기본 필수<br><br>3. 왕복항공권(이티켓) 출력본 또는 파일 - 공항 출입시 필요<br><br>4. 세관신고서도 이트래블과 함께 미리 작성(가족당 1개)<br><br>5. 소아입국 주의사항 참고(필수)<br><br>* 상기 입국절차는 각국 상황에 따라 주기적으로 변경이 되고 있사오니, 보다 자세한 사항은 각국 대사관 홈페이지를 통해 확인 부탁드립니다.",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 세부 막탄 국제공항",
        "content": "한국 → 세부 막탄 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (티샤인리조트 or 카사블루리조트)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,부산,대구 국제공항 출발 (출발 시간 : 19:00~20:00 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "세부 막탄 국제공항 도착 후 가이드미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (티샤인리조트 or 카사블루리조트)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 티샤인리조트★★★★☆\n- 카사블루리조트★★★★☆\n- 그 외 동급호텔★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "세부",
        "content": "다이빙 강습",
        "hotelName": "호텔 투숙 및 휴식 (티샤인리조트 or 카사블루리조트)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "다이빙",
            "nameEn": "Cebu Diving Theory & Pool Session",
            "summary": "바다로 나가기 전 안전하고 쾌적한 풀장에서 기초를 확실하게 다지는 다이빙 강습",
            "detail": "필리핀 세부 막탄의 전용 교육용 수영장에서 진행되는 스쿠버 다이빙 기초 및 실습 프로그램입니다. 바다에 직접 입수하는 해양 실습 부담 없이, 다이빙 시 필수적인 핵심 이론 및 장비 사용법을 익히고 파도가 없는 안전한 수영장에서 기초 호흡법, 수중 중립부력, 마스크 물 빼기 등 필수 기술을 차근차근 배울 수 있습니다. 물에 대한 두려움이 있거나, 바다에 들어가기 전 충분한 적응 훈련을 거치고 싶어 하는 다이빙 입문자에게 최적화된 맞춤형 교육 코스입니다. <br>이용 팁: 수영장 실습만 진행되는 코스이므로 압력 변화로 인한 감압병 우려가 적어, 비행기 탑승 전날이나 해양 실습이 부담스러운 여행객도 안심하고 참여할 수 있습니다. <br>추가 체험 다이빙 : 110$ / 선예약시 80$<br>* 한국인 전문 강사의 차근차근한 맞춤 밀착 지도 아래 진행되는 파도 없는 전용 수영장 실습 <br>* 장비 세팅부터 수중 호흡 및 중립부력 유지까지, 다이빙의 핵심 기본기를 완벽하게 이수",
            "image": "https://tlabal.co.kr/images/itinerary/sp-cebu-2-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-cebu-2-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-cebu-2-1-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식 or 리조트식",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "세부 열대과일 구매 체험",
            "nameEn": "Cebu Tropical Fruit Market Experience",
            "summary": "달콤한 망고부터 신선한 제철 과일까지 현지 전통 시장에서 직접 고르는 미식 체험",
            "detail": "필리핀 세부의 대표 전통 시장(카르본 시장, 망고 스트리트 등)이나 전문 과일 청과상에서 진행되는 알차고 달콤한 현지 문화 체험 프로그램입니다. 현지 가이드와 함께 시장을 둘러보며 세부의 명물인 달콤한 망고(Yellow Mango)와 그린 망고, 망고스틴, 파파야, 람부탄, 두리안 등 다채로운 열대과일의 종류와 신선한 과일을 고르는 노하우를 배울 수 있습니다. 현지 상인들과 소통하며 저렴하고 푸짐하게 과일을 직접 구매하고, 그자리에서 바로 손질하여 맛보는 특별한 재미를 선사합니다.\n이용 팁: 생과일은 한국 입국 시 반입이 금지되어 있으므로, 구매하신 과일은 숙소나 투어 차량 이동 중 생생하게 모두 맛보시는 것을 권장합니다.\n\n포인트 1: 현지 가이드가 알려주는 맛있는 망고 및 제철 열대과일별 신선도 구별 노하우\n포인트 2: 대형 마트보다 합리적인 가격에 즐기는 다양한 열대과일의 현지 전통시장 쇼핑 체험",
            "image": "https://tlabal.co.kr/images/itinerary/sp-cebu-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-cebu-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-cebu-2-2-2.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (티샤인리조트 or 카사블루리조트)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "세부",
        "content": "호핑투어",
        "hotelName": "호텔 투숙 및 휴식 (티샤인리조트 or 카사블루리조트 )",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "선택 관광 or 리조트 내 휴식 (가이드 미동반)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "불포함",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "세부 아일랜드 호핑투어",
            "nameEn": "Cebu Island Hopping Tour",
            "summary": "에메랄드빛 세부 바다를 가르며 즐기는 스노클링과 섬 투어의 꽃",
            "detail": "투명한 바다속에서 방갈로 스노클링을 즐기며 화려한 산호초와 알록달록한 열대어 무리를 눈앞에서 만날 수 있습니다. 신나는 스노클링 후에는 선상 또는 섬 내부에서 제공되는 신선한 해산물 BB/현지식 바비큐 뷔페와 시원한 음료를 즐기며 완벽한 휴식을 취할 수 있습니다.\n이용 팁: 강한 열대 태양빛에 대비해 라시가드와 썬크림, 방수팩을 미리 준비하시고, 배에 탑승할 때 아쿠아슈즈를 착용하시면 더욱 안전하게 즐기실 수 있습니다. <br> 가격 : 80$ / 선예약시 5만원<br>*  활동 : 스노쿨링, 줄낚시, 현지식 <br>*  힐루뚱안, 날루수안 등 세부 최고의 스노클링 포인트에서 만나는 환상적인 수중 세계 <br>* 푸짐하게 즐기는 현지식 해산물 바비큐(BBQ) 오션 뷰 식사와 자유로운 힐링 타임",
            "image": "https://tlabal.co.kr/images/itinerary/sp-cebu-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-cebu-3-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-cebu-3-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-cebu-3-1-3.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (티샤인리조트 or 카사블루리조트 )",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "세부",
        "content": "막탄성당, 막탄슈라인, 라푸라푸기념비",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트\n조식 후 체크아웃",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "세부 시내관광 및 쇼핑센터",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "막탄성당",
            "nameEn": "Mactan Church (Sacred Heart of Jesus Parish)",
            "summary": "고즈넉한 열대의 고풍스러움과 세부 주민들의 독실한 불심·유서 깊은 신앙을 느낄 수 있는 성당",
            "detail": "세부 막탄섬 리조트 단지 인근에 위치한 대표적인 가톨릭 성당으로, 화려한 관광지 사이에서 고요하고 신성한 분위기를 선사하는 공간입니다. 필리핀의 깊은 가톨릭 전통이 느껴지는 따뜻한 목재 스페인식 내관과 경건한 아치형 구성을 갖추고 있어, 현지 주민들이 일상 속에서 기도하고 예배를 드리는 생생한 삶의 현장을 마주할 수 있습니다. 화려한 해양 액티비티 일정 중간에 잠시 들러 마음의 평온을 찾고, 세부 특유의 아늑한 건축미를 배경으로 사진을 남기기에 좋습니다.\n\n포인트 1: 현지인들의 독실한 삶과 필리핀 전통 가톨릭 문화를 가까이서 경험하는 평화로운 공간\n포인트 2: 아늑한 나무 목재와 차분한 조명이 만들어내는 클래식하고 고풍스러운 성당 내부",
            "image": "https://tlabal.co.kr/images/itinerary/sp-cebu-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-cebu-4-1-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "막탄슈라인",
            "nameEn": "Mactan Shrine (Lapu-Lapu Shrine)",
            "summary": "필리핀의 첫 민족 영웅 라푸라푸 추장과 마젤란의 역사적 전투 현장",
            "detail": "세부 막탄섬에 위치한 막탄 슈라인은 1521년 필리핀을 침략한 스페인의 세계 탐험가 마젤란을 물리친 부족장 '라푸라푸(Lapu-Lapu)'를 기리는 유서 깊은 역사 공원입니다. 공원 중앙에는 웅장한 높이의 라푸라푸 추장 동상이 위풍당당하게 서 있으며, 마젤란을 추모하는 마젤란 기념탑과 막탄 전투를 묘사한 대형 벽화도 함께 조성되어 있습니다. 세부의 시작과 중요한 역사적 순간을 한자리에서 확인할 수 있어 세부 방문 시 필수적으로 들르는 문화유산 명소입니다.\n\n포인트 1: 외세의 침략에 맞서 나라를 지켜낸 필리핀 영웅 라푸라푸 추장의 웅장한 청동상\n포인트 2: 세부의 역사를 바꾼 '막탄 전투'의 현장을 돌아보며 즐기는 여유로운 산책\n관람 팁: 공원 내부 및 주변에는 기념품을 판매하는 소형 상점들이 모여 있어 소소한 쇼핑을 즐기기 좋으며, 그늘이 많지 않으므로 양산이나 모자를 준비해 가시는 것을 추천합니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "라푸라푸기념비",
            "nameEn": "Lapu-Lapu Monument",
            "summary": "침략자 마젤란에 맞서 승리를 거둔 필리핀 최초의 민족 영웅을 기리는 성지",
            "detail": "막탄 슈라인 공원 중앙에 웅장하게 서 있는 라푸라푸 기념비는 스페인 침략군에 맞서 막탄섬을 지켜낸 부족장 라푸라푸(Lapu-Lapu)의 용맹함을 찬양하기 위해 세워진 청동상입니다. 오른손에는 칼(캠피란)을, 왼손에는 방패를 든 높이 20m의 당당한 모습은 세부 주민들의 자부심이자 필리핀의 수호 상징으로 여겨집니다. 동상 주변으로는 막탄 전투의 생생한 순간을 담은 벽화와 기념판이 둘러싸고 있어, 필리핀의 자존심이 시작된 역사적 순간을 눈앞에서 마주할 수 있습니다.\n\n포인트 1: 오른손에 칼을 쥐고 바다를 응시하는 민족 영웅 라푸라푸 추장의 위풍당당한 자태\n포인트 2: 필리핀의 역사적 독립정신을 느낄 수 있는 세부 막탄섬의 대표 기념물\n관람 팁: 라푸라푸 동상 바로 맞은편에는 마젤란을 추모하는 '마젤란 기념탑'이 함께 서 있어, 역사의 승자와 패자가 한 공간에 공존하는 독특한 풍경을 배경으로 사진을 남기기에 좋습니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-cebu-4-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-cebu-4-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-cebu-4-3-2.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "쇼핑센터 3회 방문",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "공항으로 이동하여 탑승 수속",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "세부 → 한국",
        "content": "세부 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 18,
    "slug": "bohol",
    "name": "보홀 3박5일 솔레아 슬림 PKG",
    "country": "필리핀",
    "cities": [
      "보홀"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 4,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드 (인솔자 없음)",
    "headline": "조용한 휴양의 정석",
    "heroImage": "https://tlabal.co.kr/images/pkg-bohol.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드 (인솔자 없음)"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.",
      "caution": "<span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정 등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.<br><br>- 안내사항<br><br>필리핀 입국 시 준비절차(서류안내)<br><br>* 필리핀 여행전 준비사항 *<br><br>1. 이-트래블(전자여행신고서) 'e-Travel' : 항공탑승시간 72시간 이내 사전등록 필수<br><br>* https://etravel.gov.ph/kr<br><br>2. 6개월이상 유효기간 남은 여권 기본 필수<br><br>3. 왕복항공권(이티켓) 출력본 또는 파일 - 공항 출입시 필요<br><br>4. 세관신고서도 이트래블과 함께 미리 작성(가족당 1개)<br><br>5. 소아입국 주의사항 참고(필수)<br><br>* 상기 입국절차는 각국 상황에 따라 주기적으로 변경이 되고 있사오니, 보다 자세한 사항은 각국 대사관 홈페이지를 통해 확인 부탁드립니다.<br><br> ",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 보홀(팡라오) 국제공항",
        "content": "한국 → 보홀(팡라오) 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (솔레아 코스트 보홀)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,부산 국제공항 출발 (출발 시간 : 19:00~20:00 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "보홀(팡라오) 국제공항 도착 후 가이드미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (솔레아 코스트 보홀)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "<호텔 체크인 시 유의사항>\n1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요,\n2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요,\n3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.\n4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요.\n5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 호텔",
            "nameEn": null,
            "summary": null,
            "detail": "- 솔레아 코스트 보홀★★★★☆\n- 그 외 동급호텔★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "보홀",
        "content": "다이빙 강습 및자유시간",
        "hotelName": "호텔 투숙 및 휴식 (솔레아 코스트 보홀)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트",
            "image": "https://tlabal.co.kr/images/itinerary/bohol-2-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/bohol-2-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "다이빙 강습 (이론+강습)",
            "nameEn": null,
            "summary": null,
            "detail": "(체험 다이빙 별도)",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "리조트 조식 후 자유시간",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "스쿠버 다이빙 교육 (이론 & 수영장 강습)",
            "nameEn": "Scuba Diving Course (Theory & Pool Session)",
            "summary": "바다 입수 전 파도 없는 안전한 전용 풀장에서 기초부터 차근차근 배우는 입문 코스",
            "detail": "본격적인 바다 다이빙에 앞서 다이빙의 기본 원리와 핵심 기술을 확실하게 익히는 기초 교육 프로그램입니다. 파도나 전류가 없는 안전한 전용 수영장에서 진행되어 물에 대한 두려움을 줄이고 편안하게 적응할 수 있습니다. 전문 강사의 밀착 지도 아래 장비 착용법, 수중 호흡법, 이퀄라이징, 마스크 물 빼기, 중립부력 유지 등 다이빙 필수 수중 기술을 체계적으로 배웁니다. 바다 입수가 부담스러운 초보자나 기초 실습을 탄탄히 다지고 싶은 여행객에게 최적화되어 있습니다.\n이용 팁: 수영장 실습 코스는 압력 변화가 적어 감압병 위험이 매우 낮으므로, 비행기 탑승 전날에도 부담 없이 안전하게 참여하실 수 있습니다.<br> 포인트 1: 전문 강사의 1:1 맞춤형 안전 밀착 지도와 파도 없는 수영장 환경에서의 편안한 교육 <br>포인트 2: 호흡법부터 중립부력까지, 스쿠버 다이빙의 핵심 테크닉을 완벽하게 습득하는 실속 코스 포인트 ",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-2-1-2.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-1-3.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "체험 다이빙 (해양 실습 포함)",
            "nameEn": "Discover Scuba Diving",
            "summary": "수영을 못해도 OK! 전문 강사와 함께 신비로운 에메랄드빛 바다속을 탐험하는 코스",
            "detail": "라이선스가 없는 초보자도 보홀의 아름다운 수중 세계를 안전하고 쉽게 경험할 수 있는 대표 해양 액티비티입니다. 간단한 기초 안전 교육과 수영장(또는 얕은 수역)에서의 적응 훈련을 거친 후, 전문 다이빙 강사 및 전담 마스터와 함께 바다속으로 직접 입수합니다. 손을 잡고 밀착 케어해 주는 전문가 덕분에 물에 대한 두려움 없이 알록달록한 열대어 무리와 신비로운 산호초를 눈앞에서 만나며 잊지 못할 수중 추억을 만드실 수 있습니다.\n가격 : 120$ / 선예약시 100$<br>포인트 1: 전문 강사의 1:1 케어로 수영 미숙자나 초보자도 안전하게 참여 가능한 밀착 다이빙\n포인트 2:  바닷속 화려한 열대어와 연산호 사이를 거닐며 찍는 특별한 수중 기념 사진",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-2-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "알로나 해변",
            "nameEn": "Alona Beach",
            "summary": "에메랄드빛 바다와 하얀 모래사장이 펼쳐지는 보홀 휴양의 중심지",
            "detail": "보홀 팡라오섬에 위치한 알로나 비치는 약 1.5km에 걸쳐 완만한 호를 그리며 이어지는 보홀 대표 해변입니다. 눈부시게 하얀 산호 가루 모래사장과 투명한 에메랄드빛 바다가 어우러져 한가로운 휴양 분위기를 완성합니다. 낮에는 스노클링, 다이빙, 패들보드 등 다양한 해양 액티비티를 즐기려는 여행객들로 활기를 띠며, 밤이 되면 해변을 따라 감성적인 라이브 바, 야외 레스토랑, 마사지 숍들이 불을 밝혀 로맨틱한 나이트라이프를 선사합니다.\n\n포인트 1: 맑고 투명한 바다와 부드러운 백사장이 어우러진 보홀 제일의 힐링 해변\n포인트 2: 해 질 녘 노을과 함께 시작되는 활기차고 분위기 있는 해변 라이브 바 &amp; 맛집 탐방",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-2-3-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-3-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-3-2.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "보홀 반일 데이투어 (4시간)",
            "nameEn": "Bohol Half-Day City Tour",
            "summary": "핵심 명소만 쏙쏙 골라 콤팩트하게 즐기는 보홀 알짜배기 반일 여행",
            "detail": "짧은 시간 동안 보홀의 알짜배기 관광지를 알차게 둘러보는 4시간 실속 투어 프로그램입니다. 차량을 이용하여 이동 시간을 최적화하고, 보홀 섬의 고풍스러운 역사적 유적지와 대표적인 관광 포인트만을 엄선하여 둘러봅니다. 길고 지치는 일정 대신 주요 포인트만 깔끔하게 방문하기 때문에, 호핑투어나 다이빙 일정 전후의 남는 시간을 활용하거나 아이 및 부모님을 동반한 가족 여행객에게 아주 유용한 코스입니다. <br>가격 : 60$  / 선예약시 50$ <br>*  4시간의 효율적인 동선으로 보홀 핵심 명소의 역사와 자연을 모두 만나는 알찬 코스 <br>*  단독 프라이빗 차량으로 더욱 쾌적하고 자유롭게 즐기는 편안한 이동",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-2-4-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-4-1.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트식",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "보홀 반딧불 투어",
            "nameEn": "Bohol Firefly Tour",
            "summary": "캄캄한 밤하늘 아래 반짝이는 숲속 은하수를 만나는 낭만적인 야간 투어",
            "detail": "보홀의 맑고 청정한 강(아바탄강 또는 로복강)을 따라 펼쳐지는 몽환적이고 신비로운 야간 자연 체험 프로그램입니다. 어둠이 짙게 내린 밤, 카약이나 카타마란 보트를 타고 잔잔한 강물 위를 유유히 흘러가며 강변의 리버 맹그로브 나무를 가득 채운 수만 마리의 반딧불이를 관찰합니다. 마치 크리스마스트리처럼 맹그로브 숲 전체가 황홀하게 반짝이는 풍경은 잊지 못할 로맨틱하고 환상적인 밤을 선사합니다.\n이용 팁: 반딧불이는 빛과 소리에 민감하므로 플래시를 끈 채 촬영하셔야 하며, 모기약이나 벌레 기피제, 그리고 편안한 긴소매 옷을 준비해 가시는 것을 추천합니다.\n출발시간 : 오후 7시 이후 <br>가격 : 60$ / 선예약시 50$ <br>* 청정 자연 속 맹그로브 숲을 배경으로 펼쳐지는 수만 마리 반딧불이의 황홀한 빛의 연주 <br>* 잔잔한 밤 강물을 따라 노를 젓거나 보트를 타며 즐기는 고즈넉하고 낭만적인 밤하늘 산책",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-2-5-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-2-5-1.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (솔레아 코스트 보홀)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "보홀",
        "content": "선택관광 및 자유시간",
        "hotelName": "호텔 투숙 및 휴식 (솔레아 코스트 보홀 )",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트",
            "image": "https://tlabal.co.kr/images/itinerary/bohol-3-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/bohol-3-0.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "선택 관광 or 리조트 내 휴식 (가이드 미동반)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "불포함",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "보홀 아쿠아 호핑투어",
            "nameEn": "Bohol Aqua Hopping Tour",
            "summary": "보홀의 맑고 투명한 바다에서 펼쳐지는 스릴 만점 수중 액티비티와 섬 투어의 결합",
            "detail": "보홀의 대표 스노클링 포인트인 발리카삭과 파밀라칸 등 해양 보호구역을 오가며 즐기는 프리미엄 해양 투어 프로그램입니다. 단순한 스노클링을 넘어 투명 카약, 패들보드, 씨워커, 패러세일링 등 다양한 워터 스포츠 옵션(아쿠아 액티비티)을 함께 즐길 수 있어 바다 위에서의 즐거움을 극대화했습니다. 에메랄드빛 바닷속에서 야생 바다거북 및 열대어 무리와 함께 수영하고, 다채로운 해양 레저를 한꺼번에 경험하고 싶어 하는 여행객들에게 최적의 선택입니다.\n이용 팁: 물놀이 기구가 다양하게 제공되므로 고프로나 방수팩을 챙기시면 인생샷을 남기기 좋으며, 수건과 여벌 옷을 챙겨 탑승하시는 것을 권장합니다.<br> 가격 : $80 / 선예약시 5만원<br>* 스노클링과 더불어 투명 카약, 패들보드 등 다채로운 아쿠아 액티비티를 동시에 체험",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-3-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-3-1-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-3-1-2.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-3-1-3.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "불포함",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (솔레아 코스트 보홀 )",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "보홀",
        "content": "사왕재래시장, 팡라오성당",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트\n조식 후 체크아웃",
            "image": "https://tlabal.co.kr/images/itinerary/bohol-4-0.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/bohol-4-0.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "한식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "보홀 시내관광 및 쇼핑센터",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "사왕재래시장",
            "nameEn": "Sawang Market",
            "summary": "보홀 현지인들의 소박한 일상과 다채로운 먹거리를 만나는 전통 재래시장",
            "detail": "보홀 타그빌라란 시내 중심가 인근에 위치하여 현지 삶의 활기를 가장 가까이서 느낄 수 있는 대표적인 재래시장입니다. 매일 아침 싱싱한 수산물과 열대과일, 신선한 야채, 그리고 현지인들이 즐겨 찾는 향토 주전부리와 생필품들이 활기차게 거래됩니다. 관광객으로 붐비는 휴양지 해변가와는 또 다른 친근하고 정겨운 분위기를 자랑하며, 저렴한 가격에 필리핀 로컬 과일과 길거리 음식을 직접 맛보며 독특한 현지 문화를 체험할 수 있는 명소입니다.\n\n포인트 1: 싱싱한 열대과일과 현지 먹거리를 합리적인 가격에 즐기는 알뜰 로컬 쇼핑\n포인트 2: 보홀 주민들의 따뜻하고 활기찬 삶의 현장을 피부로 느끼는 생생한 전통시장 체험\n관람 팁: 카드 결제가 되지 않으므로 소액의 현금(페소)을 미리 준비하시는 것이 좋으며, 상인들과 가벼운 미소로 소통하며 신선한 제철 과일을 구입해 보시는 것을 추천합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-4-1-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-4-1-1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "팡라오성당",
            "nameEn": "Panglao Church (St. Augustine Parish Church)",
            "summary": "오랜 역사와 고풍스러운 스페인식 석조 건축미가 돋보이는 팡라오의 대표 성당",
            "detail": "보홀 팡라오섬 중심가에 위치한 팡라오 성당은 19세기에 건립되어 깊은 역사와 전통을 간직한 스페인 양식의 석조 성당입니다. 성당 전면의 정교한 조각과 천장의 아름다운 성화가 인상적이며, 성당 앞 넓은 광장과 바로 옆에 위치한 고풍스러운 옛 종탑(Watchtower)은 팡라오의 역사적 깊이를 느끼게 합니다. 알로나 비치의 활기찬 분위기와는 달리 잔잔하고 신성한 분위기가 흐르는 곳으로, 보홀의 오랜 가톨릭 문화와 고요한 여유를 느끼기에 제격인 공간입니다.\n\n포인트 1: 19세기 스페인 식민지 시절의 고풍스러운 석조 건축미와 천장 성화의 장엄함\n포인트 2: 성당 옆에 위치한 역사적인 석조 종탑 및 아늑한 해변 광장 산책\n관람 팁: 신성한 종교 공간이므로 내부 입장 시 노출이 심한 복장은 피하시는 것이 좋으며, 성당 맞은편 해안가 광장에서 펼쳐지는 잔잔한 바다 풍경을 함께 둘러보시는 것을 추천합니다.",
            "image": "https://tlabal.co.kr/images/itinerary/sp-bohol-4-2-1.jpg",
            "images": [
              "https://tlabal.co.kr/images/itinerary/sp-bohol-4-2-1.jpg",
              "https://tlabal.co.kr/images/itinerary/sp-bohol-4-2-2.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "팡라오 타운 광장 (알로니에 광장)",
            "nameEn": "Panglao Town Plaza",
            "summary": "보홀 팡라오섬 주민들의 일상과 고즈넉한 여유가 흐르는 중심가 광장",
            "detail": "보홀 팡라오 성당 및 시청 근처에 위치한 팡라오 타운 광장(알로니에 광장)은 현지인들의 삶과 문화가 온전히 어우러진 휴식 공간입니다. 화려한 상업 지대인 알로나 비치와 달리 울창한 나무 그늘과 넓은 야외 공간이 어우러져 한적한 시골 마을의 고즈넉한 풍경을 자랑합니다. 광장 중앙에는 지역의 역사와 유산을 상징하는 동상이 자리하고 있어 소소한 촬영 포인트를 제공하며, 해 질 녘이 되면 이웃들과 산책을 나오거나 운동을 즐기는 보홀 현지인들의 활기차고 다정한 일상을 가까이서 관찰할 수 있습니다.\n\n포인트 1: 팡라오 성당과 맞닿아 있어 옛 스페인 건축물과 함께 돌아보는 역사·문화 산책 코스\n포인트 2: 관광지의 북적임에서 벗어나 보홀 주민들의 소박하고 평화로운 일상을 만나는 쉼터\n관람 팁: 팡라오 성당이나 사왕 재래시장과 인접해 있으므로, 보홀 시내·육상 투어 이동 중 한꺼번에 묶어서 가볍게 둘러보시는 것을 추천합니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "쇼핑센터 2회 방문",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "-",
            "nameEn": null,
            "summary": null,
            "detail": "공항으로 이동하여 탑승 수속",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "보홀(팡라오)국제공항 → 한국",
        "content": "보홀(팡라오)국제공항 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 86,
    "slug": "phu-quoc",
    "name": "푸꾸옥 3박 5일 럭셔리 여행 PKG",
    "country": "베트남",
    "cities": [
      "푸꾸옥"
    ],
    "nights": 3,
    "days": 5,
    "maxPax": 8,
    "minDeparturePax": 6,
    "shoppingCount": 3,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드",
    "headline": "",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtw9w7xo-w6o2bc.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "3회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "그랜드월드, 딘커우사원, 사오비치, 선셋타운, 호국사, 롱비치 마트 등"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": false
    },
    "notices": {
      "cancelPolicy": "- 이 상품은 호텔객실에 대한 비용을 선납해 놓은 상품으로서, 취소 시 하단의 취소료가 적용됨을 양해해 주시기 바랍니다. <br><br><span class=\"c-red\">* 여행 개시 15일전 취소료가 발생될 수 있습니다.</span><br><br>※ 여행출발일 이전 상해,질병,입원,사망등으로 여행을 취소하는 경우 [진단서] 증빙 근거하여 환불이 가능하며,<br><br>출발일 기준 7일이내 증빙서류를 제출해주시기 바랍니다.<br><br><br>",
      "caution": "<span class=\"c-red\">- 1인실 사용 시 추가 비용 발생합니다.</span><br><br>- 여권상의 영문과 예약 시의 영문이 다를 경우 항공 좌석이 취소될 수 있으며 이에 따른 취소료 또는 추가 차액이 발생할 수 있으니 반드시 재확인 부탁드립니다.<br>- 상기 상품은 여러 손님들이 같이 일정을 진행하는 단체 관광객을 위한 상품입니다. 자유여행/개별일정/개별활동은 제한되거나 패널티가 발생할 수 있습니다.<br>- 본 상품은의 동일항공 또는 타항공의 다른 상품과 현지에서 조인(합류)되어 행사가 진행될 수 있으며 이용 항공과 이용 호텔 등에 따라 상품 가격과 일정등의 차이가 있을 수 있습니다<br><br>- 현지 사정(천재지변등 포함)에 의한 일정변경 가능성이 있습니다.(가이드의 일정 변경 동의서 작성필요)<br><br>- 호텔등급표기에 대한 공지 : 국제적으로 공식적인 호텔등급을 결정하는 기관은 없는 관계로, 일정표 및 호텔 정보에 기재되어 있는 호텔의 등급표기는 현지 호텔측으로부터 제공받은 것을 기준으로 작성되었습니다.<br><br>&lt;여권/비자 관련정보&gt;<br><br>- 여권 만료일은 반드시 한국 출발일 기준 6개월 이상 남아 있어야 합니다.<br><br>- 외국/이중국적자의 해외여행은 도착지국가(경유국가 포함)의 출입국정책이 상이하므로, 반드시 본인이 해당국의 대사관에 확인하셔야 합니다.",
      "passportVisa": ""
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 푸꾸옥 국제공항",
        "content": "한국 → 푸꾸옥 국제공항",
        "hotelName": "호텔 체크인 및 휴식 (머큐리 푸꾸옥 리조트 & 빌라 또는 동급)",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천,김해 국제공항 출발 (출발 시간 : 17:30~18:30 / 21:00~22:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "푸꾸옥 국제공항 도착 후 가이드미팅<br>※ 베트남 현지 공안 한국인 가이드 대상 단속강화로 인하여 한국인 가이드의 공항 주변 출입이 불가합니다. <br>공항 청사 외부에서 한국인 가이드를 만나게 됩니다. <br>공항에서 출발할때도 한국인 가이드가 보딩을 도와드리지 못하오니 행사 진행 시 대기시간이 발생될 수 있사오니 이 점 양해부탁드립니다. <br>※ 여행일정은 계약 체결 시 예상하지 못한 부득이한 사정이 발생할 경우 여행자의 사전 동의절차를 거쳐 변경될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "일정 순서 및 변경 안내",
            "nameEn": null,
            "summary": null,
            "detail": "※ 해당 상품은 현지 사정에 의해 일정의 순서가 변경 될 수 있습니다. 이 점 양해 부탁드립니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (머큐리 푸꾸옥 리조트 &amp; 빌라 또는 동급)",
            "image": null,
            "images": []
          },
          {
            "kind": "notice",
            "label": "유의 및 안내사항",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 시 유의사항<br>&lt;전자담배 베트남 내 반입 및 전자담배 흡연 금지&gt; <br>- 베트남 정부의 전자담배 금지 조치로 인해 현지 구입은 물론 해외에서의 반입이 금지 되며, 적발 시 현지법률에 의해 처벌 될 수 있습니다. <br>&lt;호텔 체크인 시 유의사항&gt;<br> 1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요.<br> 2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요.<br> 3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.<br> 4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요. <br> 5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "예정 숙소",
            "nameEn": null,
            "summary": null,
            "detail": "- 머큐리 푸꾸옥 리조트 &amp; 빌라★★★★☆ - 그 외 동급 호텔 ★★★★☆",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "푸꾸옥",
        "content": " 키스브릿지, 선셋타운&부이페스트 야시장",
        "hotelName": "호텔 투숙 및 휴식 (머큐리 푸꾸옥 리조트 & 빌라 또는 동급)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": " 오전 자유시간 (11:00 가이드 미팅)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "쌀국수+볶음밥<br><br>",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "혼똠 아일랜드 (혼똠섬)",
            "nameEn": "Hon Thom Island (Pineapple Island)",
            "summary": "세계 최장 길이의 해상 케이블카를 타고 떠나는 푸꾸옥 남부의 천국 같은 섬",
            "detail": "푸꾸옥 안토이 선착장에서 세계 최장 길이(약 7.9km)의 해상 케이블카를 타고 이동하는 에메랄드빛 섬입니다.<br> 케이블카를 타고 이동하는 약 20분 동안 점점이 박힌 예쁜 섬들과 알록달록한 어선들이 펼쳐지는 다도해의 장관을 하늘 위에서 감상할 수 있습니다. <br>혼똠섬 내부에는 거대한 대자연을 배경으로 스릴 넘치는 어트랙션과 초대형 슬라이드가 가득한 '선월드 아쿠아토피아 워터파크'와 맑고 투명한 야자수 해변이 펼쳐져 있어 완벽한 휴양과 액티비티를 선사합니다. <br>가격 : 혼똠섬 케이블카 (1인 / 60$) <br>*  에메랄드빛 바다 위를 가로지르는 세계 최장 해상 케이블카에서의 파노라마 뷰 <br>*  섬 전체에 조성된 초대형 워터파크(아쿠아토피아)와 여유로운 프라이빗 해변 휴양",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwai7h5-15o3yn7.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwai7h5-15o3yn7.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "푸꾸옥 선셋타운",
            "nameEn": "Sunset Town Phu Quoc",
            "summary": "지중해 연안의 휴양 도시를 그대로 옮겨놓은 듯한 감성적인 석양 명소",
            "detail": "이탈리아 아말피 해안의 이국적인 건축 양식을 완벽하게 재현하여 푸꾸옥 남부에 조성된 로맨틱한 테마 도시입니다.<br> 알록달록한 파스텔톤 건물과 가파른 언덕, 푸른 바다가 어우러져 어디서 찍어도 인생샷을 남길 수 있는 명소입니다. <br>세계적인 건축가가 설계한 상징적인 다리 '키스 브릿지(Kiss Bridge)'와 밤마다 펼쳐지는 화려한 멀티미디어 쇼 '키스 오브 더 씨(Kiss of the Sea)' 등 다양한 볼거리가 가득하여 푸꾸옥의 감성적인 낮과 밤을 동시에 즐길 수 있습니다.<br>* 이국적인 지중해풍 거리와 바다가 어우러지는 환상적인 노을 풍경 조망 <br>*  두 다리가 만날 듯 말 듯 이어진 상징적 구조물 '키스 브릿지'에서의 이색적인 포토 타임",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwacckt-jpdpjo.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwacckt-jpdpjo.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwacd5g-59iczp.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "키스 오브 더 브릿지 (키스 브릿지)",
            "nameEn": "Kiss Bridge Phu Quoc",
            "summary": "바다 위에서 두 사람이 만나는 낭만적인 포토 스팟이자 선셋 타운의 랜드마크",
            "detail": "푸꾸옥 선셋 타운 바다 위에 위치한 보행자 전용 교량으로, 세계적인 건축가 마르코 카사몬티(Marco Casamonti)가 디자인한 예술적인 건축물입니다. <br>약 30cm의 미세한 간격을 두고 두 개의 다리가 서로 마주 보며 다가가지만 끝내 닿지 않는 독특한 유선형 구조를 자랑합니다. <br>붉은 석양이 수평선 너머로 질 때, 다리 양 끝에서 두 사람이 서로를 향해 손을 뻗거나 키스하는 연출로 세계 어디에서도 볼 수 없는 로맨틱한 인생샷을 남길 수 있습니다. <br>추가 옵션 : 키스오브더씨 쇼 관람 (1인 / 60$) <br>*  닿을 듯 말 듯 마주 보는 독특한 교량 구조에서 연출하는 로맨틱한 스냅 포토 <br>* 에메랄드빛 바다와 붉은 노을이 만들어내는 환상적인 푸꾸옥의 일몰 조망",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwae7uw-1636v4e.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwae7uw-1636v4e.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwae88o-12p7ok3.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "선셋타운 관광 및 키스오브브릿지 조망 및 부이페스트 야시장",
            "nameEn": "Vuifest Bazaar (VUI-Fest Night Market)",
            "summary": "지중해 풍경 속에서 즐기는 베트남 최초의 해변 야시장",
            "detail": "푸꾸옥 선셋 타운 바닷가 바로 앞에 위치한 이색적인 야시장으로, 베트남 최초로 해변을 끼고 조성된 문화·쇼핑 명소입니다. <br>기존의 전통적인 야시장과 달리 깔끔하고 이국적인 지중해풍 거리 디자인이 특징이며, 다채로운 현지 스트리트 푸드와 수제 맥주, 독특한 핸드메이드 기념품들을 둘러볼 수 있습니다.<br> 밤마다 거리를 따라 펼쳐지는 신나는 길거리 공연출연진들의 스트리트 쇼와 라이브 음악이 더해져 감성적인 밤 분위기를 만끽할 수 있습니다. <br>*  에메랄드빛 바다 바람을 맞으며 즐기는 이국적이고 깔끔한 해변 야시장 산책<br>*  화려한 스트리트 퍼포먼스, 라이브 음악 연주와 함께 즐기는 다채로운 먹거리 탐방 <br>*  매일 밤 선셋 타운에서 펼쳐지는 불꽃놀이 쇼를 야시장에서 관람할 수 있어, 맛있는 야식과 함께 불꽃놀이를 즐기기에 최적의 장소입니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwab96y-odrogh.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwab96y-odrogh.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "전신 마사지 (60분)",
            "nameEn": "Full Body Massage (1 Hour)",
            "summary": "여행의 피로를 빠르고 깔끔하게 풀어주는 알찬 힐링 케어",
            "detail": "빡빡한 여행 일정 사이나 이동 전후에 부담 없이 이용하기 좋은 60분 집중 힐링 프로그램입니다. 머리부터 발끝까지 전신의 주요 혈점과 뭉친 근육을 집중적으로 다스려 짧은 시간 동안 최상의 피로 회복 효과를 선사합니다. <br>족욕을 시작으로 피로가 가장 많이 쌓이는 목, 어깨, 등, 그리고 다리 부위를 효율적으로 풀어주어 찌뿌둥했던 몸을 한결 가볍고 청량하게 만들어 줍니다. <br>이용 팁: 집중적으로 받기를 원하는 부위(어깨, 허리, 종아리 등)가 있다면 케어 시작 전 테라피스트에게 미리 말씀해 주세요. <br>가격 : 30$ <br>* 짧은 시간 동안 뭉친 어깨와 다리 근육을 집중적으로 케어하는 효율적인 프로그램 <br>* 지압과 스트레칭이 조화롭게 어우러져 즉각적인 몸의 가벼움과 피로 해소 제공",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwamhqu-1s1il0l.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwamhqu-1s1il0l.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "현지식",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (머큐리 푸꾸옥 리조트 &amp; 빌라 또는 동급)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "푸꾸옥",
        "content": "그랜드월드",
        "hotelName": "호텔 투숙 및 휴식 (머큐리 푸꾸옥 리조트 & 빌라 또는 동급)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": " 오전 자유시간 (11:00 가이드 미팅)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "제육볶음+찌개",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "그랜드 월드 푸꾸옥",
            "nameEn": "Grand World Phu Quoc",
            "summary": "밤이 되면 더욱 화려하게 빛나는 베트남 속 작은 유럽, 복합 문화 테마파크",
            "detail": "'베트남의 베니스'라 불리며 이탈리아 베니스의 풍경을 그대로 재현한 푸꾸옥의 대표적인 야간 관광 명소입니다.<br> 알록달록한 유럽풍 건물들이 늘어선 운하를 따라 곤돌라에 몸을 싣고 로맨틱한 분위기를 만끽할 수 있습니다. <br>밤마다 호수 위 특설 무대에서 펼쳐지는 초대형 미디어아트 쇼 '베트남의 정수'와 화려한 분수쇼는 푸꾸옥 여행에서 절대 놓쳐서는 안 될 압도적인 볼거리를 선사합니다. <br>추가 옵션 : 그랜드월드 버기카 $20<br>*  곤돌라를 타고 이국적인 운하를 건너며 즐기는 유럽풍 거리 산책 및 포토 스팟 <br>*  밤하늘을 수놓는 화려한 레이저와 분수쇼, 대형 야외 공연인 '베트남의 정수' 관람",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwayor2-1b2j0fq.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwayor2-1b2j0fq.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "빈원더스 테마파크",
            "nameEn": "VinWonders Phu Quoc",
            "summary": "동화 속 거대한 오아시스가 펼쳐지는 베트남 최대 규모의 테마파크",
            "detail": "베트남 최대 그룹 빈그룹이 선보이는 대규모 종합 테마파크로, 롤러코스터와 워터파크, 그리고 세계적인 규모의 아쿠아리움까지 한 번에 즐길 수 있는 최고의 휴양명소입니다. <br>동화 속 궁전을 본뜬 웅장한 테마존을 시작으로 스릴 넘치는 놀이기구와 워터파크의 다양한 슬라이드가 갖춰져 있습니다. <br>거대한 가오리 모양의 아쿠아리움 '더 딥 씨 팰리스(The Deep Sea Palace)'에서는 환상적인 바닷속 세상을 경험할 수 있어 남녀노소 모두에게 잊지 못할 즐거움을 선사합니다.<br> 가격 : 사파리관광 $60 / 빈원더스(놀이공원,워터파크,아쿠아리움 $70<br>*  스릴 넘치는 어트랙션과 초대형 워터파크 시설을 한곳에서 즐기는 원스톱 파크 <br>*  거대한 바다거북 형상의 수족관에서 관람하는 신비로운 해양 생물과 인어공주 쇼<br>*  단지가 매우 넓으므로 가벼운 차림과 편안한 신발을 추천해 드리며, 워터파크 이용을 위해 수영복과 여벌 옷을 미리 준비해 가시면 좋습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "분꽈이 (총알오징어 쌀국수)<br><br>",
            "image": null,
            "images": []
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (머큐리 푸꾸옥 리조트 &amp; 빌라 또는 동급)",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "푸꾸옥",
        "content": " 호국사, 후추농장, 코코넛 수용소, 캠비치, 딘커우 사원",
        "hotelName": "호텔 투숙 및 휴식 (머큐리 푸꾸옥 리조트 & 빌라 또는 동급)",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "리조트식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "오전",
            "nameEn": null,
            "summary": null,
            "detail": "리조트 체크아웃(개별 체크아웃 진행) 후 가이드 미팅",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "베트남 가정식",
            "image": null,
            "images": []
          },
          {
            "kind": "info",
            "label": "",
            "nameEn": null,
            "summary": null,
            "detail": " 쇼핑센터 3회 방문 (커피/침향/진주)<br><br>",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "호국사",
            "nameEn": "Ho Quoc Pagoda (Truc Lam Ho Quoc Zen Monastery)",
            "summary": "푸른 바다와 신성한 산세가 어우러진 푸꾸옥 최대의 해안 사찰",
            "detail": "푸꾸옥 섬 동남쪽 해안가 언덕 위에 세워진 섬 내 최대 규모의 사찰로, 뒤로는 울창한 산을 등지고 앞으로는 끝없이 펼쳐진 에메랄드빛 바다를 품고 있습니다. <br>응우옌 왕조 시절의 전통 건축 양식과 웅장한 대웅전, 정교하게 조각된 대리석 용 계단이 매력적입니다. <br>사찰 정상에 오르면 거대한 해수관음상 뒤로 펼쳐지는 시원한 기노강 바다 전경이 가슴을 탁 트이게 만들며, 마음의 평안과 고요함을 선사합니다. <br>*  웅장한 대리석 대웅전과 바다를 굽어보는 거대한 해수관음상의 신성한 풍경 <br>*  사찰 높은 곳에서 바라보는 푸꾸옥 동남부 바다의 탁 트인 파노라마 뷰 <br>*  일출 명소로도 손꼽히는 곳이므로 오전에 방문하시면 한적하고 청량한 공기 속에서 둘러보기 좋으며, 종교 시설이므로 민소매나 너무 짧은 하의는 피하시는 것을 권장합니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwb677t-150ue27.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwb677t-150ue27.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwb67j8-wyd64f.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "후추농장",
            "nameEn": "Phu Quoc Pepper Farm",
            "summary": "알싸한 향과 울창한 초록빛이 매력적인 푸꾸옥 특산품의 본고장",
            "detail": "베트남 최대 후추 생산지인 푸꾸옥 섬의 명물, 신선한 후추가 자라는 모습을 직접 관람할 수 있는 이색 농장입니다. <br>가지런히 심어진 푸른 후추나무가 줄지어 서 있는 이국적인 풍경 속에서 정갈한 초록빛을 배경으로 감성적인 사진을 남기기 좋습니다.<br> 붉게 익어가는 후추 열매를 눈앞에서 확인하고, 농장에서 직접 수확하여 가공한 최고 품질의 흑후추, 백후추, 적후추 및 이색적인 적후추 소금 등을 시식하고 구매할 수 있습니다. <br>*  줄지어 늘어선 울창한 후추나무 밭을 배경으로 찍는 청량하고 이색적인 포토 타임 <br>*  푸꾸옥 특산품인 최상급 후추와 다채로운 양념 소금을 직접 시식하고 구매하는 즐거움",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwb72bp-nimofl.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwb72bp-nimofl.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "코코넛 수용소",
            "nameEn": "Phu Quoc Coconut Prison",
            "summary": "전쟁 시기 사용된 교도소 유적지",
            "detail": "섬에 남아 있는 교도소 유적으로 독방과 전시물을 통해 수감 생활과 사건을 보여 주는 박물관 형식의 장소입니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "캠비치",
            "nameEn": "Cam Bich Beach",
            "summary": "잔잔한 백사장과 야자수가 있는 해변",
            "detail": "조용한 분위기의 해변으로 산책과 일광욕하기 좋다. 주변에 소규모 식당과 휴식 공간이 있어 한적하게 시간을 보내기 좋다.",
            "image": null,
            "images": []
          },
          {
            "kind": "spot",
            "label": "딘커우사원",
            "nameEn": "Dinh Cau Rock (Dinh Cau Temple)",
            "summary": "바다로 우뚝 솟은 암벽 위에 자리 잡은 푸꾸옥 섬의 신비로운 수호 사원",
            "detail": "푸꾸옥 즈엉동 읍 수에 강이 바다와 만나는 입구, 거대한 기암괴석 위에 세워진 이색적인 사원입니다.<br> 현지 어부들이 항해를 나가기 전 무사 안녕과 풍어를 기원하는 신성한 장소로, 사원 바로 옆에는 등대가 서 있어 고즈넉하면서도 독특한 풍경을 자랑합니다.<br> 붉은 기와지붕과 기암괴석, 푸른 바다가 어우러진 비주얼 덕분에 푸꾸옥을 대표하는 상징적인 명소로 꼽힙니다. <br>*  기암괴석과 바다, 사원과 등대가 만드는 푸꾸옥 고유의 신비롭고 독특한 풍경 감상 <br>*  수평선 너머로 붉게 물드는 푸꾸옥 최고의 일몰(석양) 포토 스팟",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwbacln-1en6sws.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwbacln-1en6sws.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "푸꾸옥 머드온천",
            "nameEn": "Phu Quoc Mud Bath",
            "summary": "진흙 온천에서 휴식과 체험한다",
            "detail": "바닷가 인근의 진흙 온천에서 몸을 진흙으로 감싸는 스파와 온천욕을 즐기며 휴식을 취한다. 간단한 마사지와 자연 경관을 함께 체험한다.<br>가격 : 60$ ",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "전신마사지 2시간",
            "nameEn": "Full Body Massage",
            "summary": "여행의 피로를 빠르고 깔끔하게 풀어주는 알찬 힐링 케어",
            "detail": "빡빡한 여행 일정 사이나 이동 전후에 부담 없이 이용하기 좋은  힐링 프로그램입니다.<br>머리부터 발끝까지 전신의 주요 혈점과 뭉친 근육을 집중적으로 다스려 짧은 시간 동안 최상의 피로 회복 효과를 선사합니다. <br>족욕을 시작으로 피로가 가장 많이 쌓이는 목, 어깨, 등, 그리고 다리 부위를 효율적으로 풀어주어 찌뿌둥했던 몸을 한결 가볍고 청량하게 만들어 줍니다. <br>이용 팁: 집중적으로 받기를 원하는 부위(어깨, 허리, 종아리 등)가 있다면 케어 시작 전 테라피스트에게 미리 말씀해 주세요. <br>가격 : 50$ <br>*  짧은 시간 동안 뭉친 어깨와 다리 근육을 집중적으로 케어하는 효율적인 프로그램 <br>*  지압과 스트레칭이 조화롭게 어우러져 즉각적인 몸의 가벼움과 피로 해소 제공",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwbdc7x-ikhkvb.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/86-mtwbdc7x-ikhkvb.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "자유 석식 (소나시 야시장)",
            "nameEn": "Sonasi Night Market",
            "summary": "현지 먹거리와 기념품이 모이는 야시장",
            "detail": "푸꾸옥 해안가에 형성된 야시장으로 길거리 음식과 해산물, 기념품 가판대가 모여 밤거리를 이룬다. 관광객과 현지인이 섞여 활기찬 분위기를 즐길 수 있다.",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "푸꾸옥 공항으로 이동",
            "nameEn": null,
            "summary": null,
            "detail": "푸꾸옥 국제공항 출발",
            "image": null,
            "images": []
          }
        ]
      },
      {
        "dayNo": 5,
        "title": "푸꾸옥 → 한국",
        "content": "푸꾸옥 → 한국",
        "hotelName": null,
        "items": []
      }
    ]
  },
  {
    "id": 87,
    "slug": "qingdao",
    "name": "칭다오 3박 4일 완전정복 PKG",
    "country": "중국",
    "cities": [
      "칭다오"
    ],
    "nights": 3,
    "days": 4,
    "maxPax": 8,
    "minDeparturePax": 4,
    "shoppingCount": 2,
    "hasOptionalTour": true,
    "guideType": "현지 한국가이드",
    "headline": "",
    "heroImage": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkk5v9f-1551szl.jpg",
    "isPackageTour": true,
    "highlights": [
      {
        "category": "shopping",
        "label": "쇼핑",
        "content": "2회 방문"
      },
      {
        "category": "optional",
        "label": "선택관광",
        "content": "있음"
      },
      {
        "category": "guide",
        "label": "가이드",
        "content": "현지 한국가이드"
      },
      {
        "category": "sightseeing",
        "label": "관광",
        "content": "중산로, 대복도, 천주교당, 5.4광장, 칭다오 올림픽 요트 경기장, 피차이웬 등"
      }
    ],
    "inclusions": {
      "included": [
        "3박 호텔 숙박",
        "전 일정 식사 제공 (기내식 제외)",
        "차량 이동 서비스",
        "관광지 입장료",
        "여행자 보험"
      ],
      "excluded": [
        "항공료",
        "가이드 팁 $50",
        "샌딩비 30,000원"
      ],
      "isDefault": true
    },
    "notices": {
      "cancelPolicy": null,
      "caution": null,
      "passportVisa": null
    },
    "itinerary": [
      {
        "dayNo": 1,
        "title": "한국 → 청도 국제공항",
        "content": "중산로, 대복도, 천주교당, 잔교",
        "hotelName": "칭다오 청양 포포인츠 쉐라톤 호텔",
        "items": [
          {
            "kind": "move",
            "label": "출국",
            "nameEn": null,
            "summary": null,
            "detail": "인천 국제 공항 출발 (출발 시간 : 07:00~09:00 적용 필수)",
            "image": null,
            "images": []
          },
          {
            "kind": "move",
            "label": "도착",
            "nameEn": null,
            "summary": null,
            "detail": "청도 도착 가이드 미팅 후 청도 시내로 이동 (약 1 시간 소요)",
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "산동요리",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjiq6g-30htwe.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjiq6g-30htwe.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjis9c-2bswcg.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjiuzf-anclix.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "중산로",
            "nameEn": "Zhongshan Road, Qingdao",
            "summary": "역사 건물과 상점이 늘어선 보행거리",
            "detail": "1897년 독일 점령기에 시작된 칭다오 중산로는 상하이 난징루, 베이징 왕푸징과 함께 유명했던 칭다오의 백년역사를 가진 유명한 상업 중심지였습니다. <br>남쪽으로는 잔교, 북쪽으로는 대요골과 접하며, 길이는 약 1500m입니다, 칭다오 중심상가로 유명한 중산로는 남북을 관통하고 기복이 굽이쳐 마치 역사적 강물처럼 옛 칭다오 사람들의 마음속에 100년 동안 흐르고 있습니다,<br> 오늘날의 번화하고 깨끗한 상가를 주시하며 백년의 중산로를 돌아보면 창상격변하여 사람들을 놀라게 합니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjbvv-vlaziy.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjbvv-vlaziy.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjdh3-r6pdgy.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjfqc-1v7x4jb.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "대복도",
            "nameEn": "Daibodao (Daifu Island)",
            "summary": "칭다오 근해의 작은 해안 섬",
            "detail": "대복도는 고대마을로 청도시의 발원지 중 하나입니다. 독일이 청도를 점령한 뒤 독일인들은 옛대복도 마을을 중심으로 중국인이 거주하는 복도구를 만들었습니다.<br>대복도는 청도시의 최초의 상업중심지이자 상업번영의“요람”이며 “칭다오 1세대”의 130년 창업 역사를 기록했습니다, ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjy0w-l8winc.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjjy0w-l8winc.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjk09s-frjj3m.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjk311-buagp1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "천주교당(성미카엘성당) (외부관람)",
            "nameEn": "St. Michael's Cathedral (Qingdao)",
            "summary": "로마네스크 양식의 붉은 벽돌 성당",
            "detail": "원래 성미카엘성당으로 알려진 칭다오 천주교당은 1932년에 독일 디자이너 빌로하가 고딕양식과 로마네스크 양식에 따라 설계했으며 1934년에 완공 되였습니다.<br>총부지는 11480㎡입니다. 평면이 십자형으로 교회 본체에 두개의 날개 같이 각각 첨탑이 솟아 있고 꼭대기에는 각각 4.5m의 거대한 십자가가 세워져 있습니다.<br>이탈리아 르네상스 시대의 장식이 적용됐고 돔은 성상 벽화로 그려져 있습니다. 천주교 성당은 청도 지역에서 가장 큰 성당이자 중국 유일의 축성교회입니다. ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjknkt-3n535m.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjknkt-3n535m.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjkpmq-5dt9bm.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjkror-1m0wja4.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "청도 잔교 (차창관광)",
            "nameEn": "Zhanqiao Pier",
            "summary": "바다로 뻗은 청도 대표 목조(형식) 잔교",
            "detail": "잔교는 청도의 상징입니다. 해안에서 앞바다로 뻗어 있으며 서기 1892년에 처음 지어졌고 1931년 개건과 1985년 포수로 현재는 폭8m, 전체 길이는 440m입니다.<br>다리 남단에 반원형 방파제를 쌓았는데 제방안에는 민족적 풍격을 갖춘 2층 팔각정으로 금색기와 주홍색벽과 투구 지붕과 나는 듯한 처마로 “회란각”이라는 이름을 붙였습니다. <br>바다를 가르며 바다에 누어 있는 용같은 다리를 따라 들어가니 마치 바다릐 품으로 들어가는 것 같고 정자 위층으로 오라가면 온통 넓은 창으로 또 다른 즐거운 풍경이 펼져 집니다. ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjla2d-sqp1uu.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjla2d-sqp1uu.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjlc15-1rhaf7z.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "샤브샤브 무제한",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjm078-gtrsqa.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjm078-gtrsqa.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjm2fh-1dyvm1a.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjm4ng-1u9pr5m.jpg"
            ]
          },
          {
            "kind": "hotel",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 체크인 및 휴식 (칭다오 청양 포포인츠 쉐라톤 호텔(5 성급))",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjmexx-1qy6ehz.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjmexx-1qy6ehz.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjmgyh-ic31sd.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjmj6u-18bknn5.jpg"
            ]
          },
          {
            "kind": "notice",
            "label": "호텔 체크인 시 유의사항",
            "nameEn": null,
            "summary": null,
            "detail": "&lt;호텔 체크인 시 유의사항&gt; <br>1. 일반적으로 호텔 체크인은 오후 3시 이후부터 가능합니다. 상이한 호텔이 있을 수 있으니 체크인 시간을 미리 확인해주세요.<br>2. 호텔 프론트에서 여권으로 체크인하시면 됩니다. 체크인 시 여권을 호텔측에서 보관하였다가 체크 아웃시 돌려주는 호텔이 있을 수 있습니다. 이 점 참고해주세요. <br>3. 체크인 시 보증금(Deposit)을 위한 신용카드 또는 현금을 요구하는 경우가 있습니다. 호텔 숙박시 파손 및 개인 사용 경비에 대한 보증 개념으로 체크아웃 시 사용 내역이 없으면 자동 취소 및 환불됩니다.<br>4. 객실의 층수, 베드타입은 체크인 시 확정됩니다. 출발 전 여행사에 요청을 하셨더라도 확정되는 부분이 아니오니 체크인시 호텔에 한번 더 요청 및 확인해주세요. <br>5. 일반적인 체크아웃 시간은 12시 입니다. 체크아웃 시간 이후에 체크아웃을 할 경우에 추가비용이 발생될 수 있습니다.",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "전신마사지 60 분 1회",
            "nameEn": "Full Body Massage (60 min)",
            "summary": "전신을 집중적으로 풀어주는 60분 마사지",
            "detail": "중국 칭다오에서 제공되는 60분 전신 마사지 서비스이다. 근육 이완과 혈액순환 개선을 위해 전신을 마사지하며 휴식과 피로 회복을 돕는다.<br>* 요금 : 35$",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "칭다오 맥주 박물관",
            "nameEn": "Tsingtao Brewery Museum",
            "summary": "칭다오 맥주 역사와 생산 과정 전시관",
            "detail": "중국의 유명한 맥주인 칭다오 맥주[青岛啤酒]의 역사를 보여주는 곳입니다. 1903년 독일인들이 시작한 칭다오 맥주회사의 공장과 설비를 보존하여 2001년 박물관으로 만들었습니다. <br>맥주공장, 미니어처로 보여주는 맥주제조 과정과 각종 장비, 청도 맥주의 역사, 세계 각국의 맥주 등을 엿볼 수 있습니다.<br>* 요금 : 30$",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjhkl9-r35c0i.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjhkl9-r35c0i.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjhmbx-183x1dv.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkji9p3-1bzi6ow.jpg"
            ]
          }
        ]
      },
      {
        "dayNo": 2,
        "title": "칭다오",
        "content": "지모루 시장, 피차이웬, 5.4광장, 칭다오 올림픽 요트경기장",
        "hotelName": "칭다오 청양 포포인츠 쉐라톤 호텔",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjp6iu-41x9i1.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjp6iu-41x9i1.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "지모루 시장",
            "nameEn": "Zhimoru Market",
            "summary": "지역 주민이 찾는 전통 재래시장",
            "detail": "칭도 지모루 소상품시장은 1980년 11월에 건설되었으며 시장 면적은 14,800㎡이고 건축면적은 6,800㎡이며 1,300개 이상의 노점이 있습니다.<br>1987년에 11,000개 이상의 품종이 출시되였고 취급 품목에는 의류(부자재 포함), 소형 백화점, 신발 및 모자, 토산품，공예품, 트리밍, 가방 등이 있으며 칭다오에서 가장 유명한 소상품 시장이 되었습니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjq4m3-1ecahv5.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjq4m3-1ecahv5.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjq6hf-2ygzp9.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjq8j7-105bn55.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "쇼핑 2회 (보이차, 침향)",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": null,
            "images": []
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "사천요리",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjqjee-1w80pfo.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjqjee-1w80pfo.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjqn57-1ugbhkm.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjqp2x-fcj9fz.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "피차이웬",
            "nameEn": "Pichaiyuan",
            "summary": "칭다오에 자리한 전통풍 정원",
            "detail": "1902년 경극 공연 골목으로 시작된 피차이위엔은 칭다오의 전통 먹자골목으로 탈바꿈하여 다양한 꼬치요리 등 거리 음식들이 가득한 곳입니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjr4gq-1jr7gra.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjr4gq-1jr7gra.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjr653-16719z5.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjr849-yn05qq.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "5.4 광장",
            "nameEn": "May Fourth Square",
            "summary": "바닷가 도심의 상징적 광장",
            "detail": "5.4운동의 기념으로 【五四广场】 이라고 명명되었으며 , 청도의 유명한 명물중 하나이다. 시정부와 해안 선 중간에 위치하고 있으며 시청광장 , 중심광장 . 해양공원으로 타오르는 듯한 조각상은 청도의 미래 발전상이기도 하다 .",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjroxv-6qqvk4.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjroxv-6qqvk4.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjrqxf-1siio8p.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjrswp-16n7i2r.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "칭다오 올림픽 요트경기장",
            "nameEn": "Qingdao Olympic Sailing Center",
            "summary": "해변에 조성된 올림픽 요트 경기장",
            "detail": "2008년 베이징 올림픽대회와 제13회 장애인올림픽대회 요트 경기가 이곳에서 개최되었습니다. 올림픽 요트 경기를 맞이하고<br>“요트의 도시를 만들기 위해 칭다오시 인민 정부는 북해 조선소 전체를 서해안 신구의 해서만으로 이전하고 국제 요트 센터를 칭다오 시만의 독특한 해상 스포츠 특성을 가진 건축구역으로 건설하여<br>“녹색 올림픽, 과학 기술 올림픽, 인문 올림픽”의 개념을 구현했습니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjs95m-1tdx4xt.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjs95m-1tdx4xt.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjsb00-3cs4og.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjsd2d-175qwmz.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "무제한 양꼬치",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjt5ki-eddm2g.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjt5ki-eddm2g.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjt7pj-192vfp4.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (칭다오 청양 포포인츠 쉐라톤 호텔)",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "노산풍경구",
            "nameEn": "Laoshan Scenic Area",
            "summary": "해안 절경의 암봉이 있는 산",
            "detail": "노산은 산과 바다를 끼고 있어 아름다운 경치뿐만 아니라 모두가 동경하는 해변의 백사장 해수욕장이 있기 때문에 노산의 영혼이라고 합니다. <br>군봉은 높고 가파르며 기이함을 다투고 깍아지른듯한 절벽 아래에는 많은 기이한 돌과 이상한 동굴이 숨겨져 있습니다. <br>풍경구에는 선산궁전, 태평궁전, 기봉이석, 심곡유간, 명인유적, 만해사,해만백사장등이 있습니다<br>* 가격 : 왕복케이블카 포함 $100 ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjpmbn-2m2yog.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjpmbn-2m2yog.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjpojw-jfn3j.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjpql3-11seeh4.jpg"
            ]
          },
          {
            "kind": "option",
            "label": "운상해천 전망대",
            "nameEn": "Yunshang Haichen Observation Deck",
            "summary": "바다와 도심을 동시에 볼 수 있는 전망대다",
            "detail": "해천 중심 센터 도시 전망대는 청도국신해천중심 T2타워 81F에 위치하고 있으며 고속엘리베이터 4대를 갖추고 있으며 B1 매표소에서 81F 전망대까지 45초면 도착 합니다.<br>전망대는 전국 최초로 돌출형 발코니형 전경 유리 전망대-유리상자을 구축하였습니다. <br>유리상자위에 올라서면 발밑의 공중에 떠 있는 유리 바닥이 마치 구름 위를 거닐고 있는 것 같고 사방의 구름과 안개가 손에 닿을 듯 말 듯 “하늘의 도시”의 전면적인 시각을 열어줍니다.<br>전망대 안에는 3개의 유리 상자가 있으며 하나의 유리 상자에 5~8명을 수용할수 있습니다. 전망대는 지상 330m높이에 있으며 청도에서 산과 바다보는 새로운 경관을 더해줍니다. <br>* 가격 :  운상해천 전망대+커피 1 잔 제공 $50",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjspe0-oddd5k.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjspe0-oddd5k.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjsrdi-c0z2ly.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjstau-1hdz3wh.jpg"
            ]
          }
        ]
      },
      {
        "dayNo": 3,
        "title": "칭다오",
        "content": "소어산, 파케거리, 팔대관, 청도시 박물관",
        "hotelName": "칭다오 청양 포포인츠 쉐라톤 호텔",
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkju5bi-rdis3y.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkju5bi-rdis3y.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "소어산",
            "nameEn": "Laoshan (Mount Lao)",
            "summary": "청도 해안의 도교 성지 산",
            "detail": "칭다오의 고전적인 명소로 유명합니다.산은 높지 않지만 멀리 바라 볼수 있고 등산해서 내려다보면 서쪽에서 동쪽으로 연안의 아름다운 경치를 볼 수 있습니다.<br>1934년에 불교를 선양하기 위해 소어산 꼭대기에 강경각 (讲经阁)을 짓고 불교 거 사가 경문을 듣고 수련하는 곳으로 잔산정사(湛山精舍)라는 이름을 붙였습니다. ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjuvj1-1jj6mom.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjuvj1-1jj6mom.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjutiy-3jngzz.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "중식",
            "nameEn": null,
            "summary": null,
            "detail": "삼계탕",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjv831-1akobml.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjv831-1akobml.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjv9t4-1vumljr.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjvbsq-96gvsc.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "파케거리",
            "nameEn": "Pake Street, Qingdao",
            "summary": "칭다오 중심의 소규모 상업 거리",
            "detail": "칭다오 도심의 상업·외식 거리로 카페와 상점이 늘어선 곳이다. 산책하며 먹거리와 소규모 상점을 둘러보는 코스가 이어진다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjvson-usra63.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjvson-usra63.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjvum2-pk7mrb.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjvx0v-r4cphd.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "팔대관",
            "nameEn": "Badaguan Scenic Area",
            "summary": "유럽풍 별장과 가로수가 있는 역사적 해안 거리",
            "detail": "이른바”팔대관”은 이곳에 8개의 도로가 있기 때문이며 중국 고대 유명한 요충지의 이름을 따서 명명되였습니다. 유럽풍 고전 건물이 즐비합니다.<br>소수는 독일 통치 시기(1897년-1914년)에 세워졌고 대부분은 1930년에 청도정부에서는 태평만가에서 땅을 개간하고 중국인과 외국인을 위해 별장들을 건설 했고 <br>이 별장들은 영국/미국/프랑스/그리스/일본 등 여러 국가의 풍격을 띄고 있어“건축박물관”이라고도 합니다. ",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwaaj-mxnhl7.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwaaj-mxnhl7.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwc91-uiwpcd.jpg"
            ]
          },
          {
            "kind": "spot",
            "label": "청도시 박물관",
            "nameEn": "Qingdao City Museum",
            "summary": "청도 지역 역사·문화를 전시하는 박물관",
            "detail": "전시 면적은 7천㎡ 이상인 지방 종합 역사와예술 박물관 입니다. 1965년 정식으로 개관하고 2000년 정식으로 시민에게 정식으로 개방 했습니다.<br>박물관 소장품에는 석상, 서예, 회화,도자기, 청동기, 옥기, 동전, 갑골 등이 포함 되며 1급 소장품 150점, 원, 명, 청 이래 유명한 서화 4000여점이 있습니다. <br>2019년 말 칭다오시 박물관 소장품은 121,678점 / 세트 귀중한 문화재는 1,024점/세트입니다. 칭다오 박물관은 국가 1급 박물관이자 국가 고대 서적의 핵심 보호 단위 입니다.",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwvrj-iwycjz.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwvrj-iwycjz.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwxt5-nujwbk.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjwzvu-psm66z.jpg"
            ]
          },
          {
            "kind": "meal",
            "label": "석식",
            "nameEn": null,
            "summary": null,
            "detail": "교자연",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxvza-1tyfd2w.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxvza-1tyfd2w.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxy1i-1wxaz3f.jpg"
            ]
          },
          {
            "kind": "info",
            "label": "휴식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 투숙 및 휴식 (칭다오 청양 포포인츠 쉐라톤 호텔)",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "실크로드 천고정",
            "nameEn": "Silk Road Tiangong Pavilion",
            "summary": "실크로드 관련 전시를 하는 전시관",
            "detail": "실크로드와 관련한 유물과 정보, 사진을 전시하며 교류와 교통의 역사를 소개하는 공간이다. 전시와 교육 프로그램을 통해 당시 문화 교류를 알 수 있다.<br>*가격 : $70",
            "image": null,
            "images": []
          },
          {
            "kind": "option",
            "label": "명월산해간 불야성",
            "nameEn": "Mingyue Mountain Seaside Nightscape",
            "summary": "강가와 해안을 밝히는 야경 명소",
            "detail": "중국 최초의 상고 신화인 “산해경”(山海经）을 주제로 한 프로젝트입니다. 명월산해 불야성은 현대 조각 공예, 조명 디자인 등을 사용하여 고서 속 신화 장면을 전방위로 재현하여 관광, 민속 체험, 미식 체험 등 여러가지 체험 할수 있는 곳입니다. <br>불야성에서는 청도의 산과 바다의 특징 및 지리적인 문화를 비롯하여 산과 바다 문화, 맥주 문화, 어촌 민속 등 많은 요소가 결합되어 있습니다. <br>불야성에서 여러가지 다채로운 공연을 즐길수 있으며 노래방, 탑험옥, VR체험, 밀실 탈출 등도 체험 할수 있습니다.<br>재미있는 프로그램 이외 불고기, 해산물 등 다양한 전통 청도 음식을 맛볼수 있으며 현지 특산품 외에도 섬서성 뱡뱡면, 무한 열건면, 신장 꼬치구이, 운남 치즈두리안전, 광동 요리, 스시, 떡볶이, 청주 등 국내외에서 온 맛있는 음식을 즐길 수 있습니다. <br>* 영업시간: 월요일~금요일 11:00-23:00  <br>* 가격 : 35$",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxf3v-zgp3ak.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxf3v-zgp3ak.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxhwn-hr881m.jpg",
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjxk55-mvsbyd.jpg"
            ]
          }
        ]
      },
      {
        "dayNo": 4,
        "title": "청도 국제공항 → 한국",
        "content": "청도 국제공항 → 한국",
        "hotelName": null,
        "items": [
          {
            "kind": "meal",
            "label": "조식",
            "nameEn": null,
            "summary": null,
            "detail": "호텔 조식 후 체크아웃",
            "image": "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjz8p1-aqrqd7.jpg",
            "images": [
              "https://api.tlabal.co.kr/api/assets/itinerary/87-mvkjz8p1-aqrqd7.jpg"
            ]
          },
          {
            "kind": "move",
            "label": "공항으로 이동",
            "nameEn": null,
            "summary": null,
            "detail": null,
            "image": null,
            "images": []
          }
        ]
      }
    ]
  }
];
