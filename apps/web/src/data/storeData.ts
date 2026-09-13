export interface GameTheme {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  difficulty: number; // 1 ~ 5
  minPlayers: number;
  maxPlayers: number;
  playTimeMinutes: number;
  pricePerPerson: number;
  image: string;
  tags: string[];
  category: string;
  isFeatured: boolean;
  highlightBadges: string[];
  gradientClass?: string;
  accentColor?: string;
}

export interface StoreNotice {
  id: string;
  title: string;
  content: string;
  category: 'event' | 'notice' | 'winner';
  date: string;
  isPinned: boolean;
  isImportant: boolean;
  views: number;
}

export interface CustomerReview {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  gameId: string;
  gameTitle: string;
  rating: number;
  content: string;
  tags: string[];
  createdAt: string;
  likesCount: number;
  isVerifiedBooking: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  userEmail: string;
  gameId: string;
  gameTitle: string;
  date: string;
  time: string;
  players: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  customRequests?: string;
}

export const INITIAL_GAMES: GameTheme[] = [
  {
    id: "game-1",
    title: "큐브 스페이스: 차원의 문",
    subtitle: "시공간이 뒤엉킨 3D 퍼즐 차원에서 탈출하라!",
    summary: "입체적인 퍼즐 루빅스 큐브의 원리를 이용해 차원의 열쇠를 찾는 화려한 SF 인버시브 테마",
    description: `차원의 문이 열리고 3D 공간의 퍼즐 장치들이 작동합니다. 
팀원들과 협동하여 입체 블록을 맞추고, 숨겨진 암호를 해독해 차원의 에너지를 정상화해야 합니다!
네온 라이팅과 최첨단 인터랙티브 기믹이 결합된 '퍼즐퍼즐'의 대표 인기 테마.`,
    difficulty: 3,
    minPlayers: 2,
    maxPlayers: 6,
    playTimeMinutes: 60,
    pricePerPerson: 22000,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80",
    tags: ["SF/미래", "입체퍼즐", "협동필수", "커플추천", "사진맛집"],
    category: "입체 퍼즐룸",
    isFeatured: true,
    highlightBadges: ["BEST 1위", "인증샷 명소", "난이도 ★★★☆☆"],
    gradientClass: "neonPurpleGradient",
    accentColor: "#a855f7"
  },
  {
    id: "game-2",
    title: "미스테리 룸: 아티팩트의 비밀",
    subtitle: "고대 유물 속에 숨겨진 퍼즐 고리를 풀어라",
    summary: "신비로운 아티팩트와 감성적인 조명, 두뇌 플레이를 극대화하는 감성 퍼즐 어드벤처",
    description: `박물관 지하 비밀 수장고에 보관된 고대 퍼즐 상자들. 
각 상자를 풀 때마다 숨겨진 보석의 비밀이 드러납니다. 
직관적인 감각과 관찰력이 필요한 감성 중심의 인테리어와 몰입감 높은 퍼즐 게임!`,
    difficulty: 4,
    minPlayers: 2,
    maxPlayers: 5,
    playTimeMinutes: 70,
    pricePerPerson: 24000,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["미스테리", "감성테마", "두뇌회전", "친구들과", "몰입감최상"],
    category: "어드벤처 퍼즐",
    isFeatured: true,
    highlightBadges: ["NEW 테마", "두뇌풀가동", "난이도 ★★★★☆"],
    gradientClass: "neonPinkGradient",
    accentColor: "#ec4899"
  },
  {
    id: "game-3",
    title: "마법의 퍼즐 저택",
    subtitle: "알록달록 젤리 마법사와 함께하는 퍼즐 파티!",
    summary: "귀여운 비주얼과 다채로운 색감의 미니 퍼즐 미션이 가득한 포토제닉 테마",
    description: `마법 저택의 구석구석을 탐험하며 젤리 마법사가 만든 수수께끼 퍼즐을 풀어보세요. 
어렵지 않고 재미있는 감성 인터랙티브 미션이 가득하여 20대 데이트 및 친구들의 인생샷 촬영지로 대인기!`,
    difficulty: 2,
    minPlayers: 2,
    maxPlayers: 4,
    playTimeMinutes: 50,
    pricePerPerson: 20000,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    tags: ["귀여움", "입문자추천", "인생샷", "색감맛집", "쉬운난이도"],
    category: "파티 퍼즐룸",
    isFeatured: true,
    highlightBadges: ["입문자 강추", "데이트 1위", "난이도 ★★☆☆☆"],
    gradientClass: "neonIndigoGradient",
    accentColor: "#6366f1"
  }
];

export const STORE_CONFIG = {
  badgeText: "✨ 2026 TRENDY PUZZLE STORE ✨",
  title: "두뇌를 자극하는 스타일리시한 공간",
  highlightTitleText: "Puzzle Puzzle",
  subtitle: "상상했던 모든 퍼즐이 감각적인 플레이 공간으로 펼쳐집니다.",
  description: "친구, 연인과 함께 몰입하는 3D 인터랙티브 퍼즐 체험 스토어. 지금 예약하고 특별한 모험을 시작하세요!",
  address: "서울특별시 마포구 와우산로 21길 19 (홍대입구역 9번 출구 도보 5분)",
  phone: "02-789-1024",
  businessHours: "매일 11:00 ~ 23:00 (연중무휴)",
  instagramUrl: "https://instagram.com",
  kakaoUrl: "https://kakao.com",
  primaryButtonText: "지금 바로 예약하기 🎯",
  secondaryButtonText: "스토어 안내 및 위치 📍",
};

export const INITIAL_NOTICES: StoreNotice[] = [
  {
    id: "notice-1",
    title: "📢 [이벤트] 여름 시즌 한정 퍼즐 챌린지 및 스페셜 굿즈 증정!",
    content: "여름 시즌을 맞아 큐브 스페이스를 40분 이내에 클리어하시는 분들께 한정판 퍼즐퍼즐 아크릴 키링을 증정합니다. 네온 조명 아래에서 클리어 인증샷을 남겨보세요!",
    category: "event",
    date: "2026-07-20",
    isPinned: true,
    isImportant: true,
    views: 1240
  },
  {
    id: "notice-2",
    title: "🧩 신규 게임 [미스테리 룸: 아티팩트의 비밀] 정식 오픈!",
    content: "오래 기다려주신 신규 아티팩트 테마가 오픈되었습니다. 상시 예약이 가능하며 난이도는 별 4개입니다. 고대 룬 문자를 해독하는 특별한 두뇌 플레이를 경험하세요.",
    category: "notice",
    date: "2026-07-15",
    isPinned: true,
    isImportant: false,
    views: 890
  },
  {
    id: "notice-3",
    title: "🏆 [당첨자 발표] 6월 베스트 리뷰어 이벤트 당첨자 안내",
    content: "6월 한 달간 정성스러운 사진 리뷰를 작성해주신 5분의 당첨자를 발표합니다. 축하드리며, 개별 안내 문자를 확인해 주세요!",
    category: "winner",
    date: "2026-07-01",
    isPinned: false,
    isImportant: false,
    views: 450
  }
];

export const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    userId: "u-101",
    userName: "퍼즐마스터_민지",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    gameId: "game-1",
    gameTitle: "큐브 스페이스: 차원의 문",
    rating: 5,
    content: "진짜 조명 연출이랑 퍼즐 기믹 미쳤어요!! 인생샷도 엄청 건졌고 큐브 맞출 때 쾌감이 대박입니다. 친구들이랑 다음 테마도 또 하러 올 거예요 💜",
    tags: ["인생샷", "기믹대박", "재방문의사100%"],
    createdAt: "2026-07-24",
    likesCount: 18,
    isVerifiedBooking: true
  },
  {
    id: "rev-2",
    userId: "u-102",
    userName: "데이트러버_현우",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    gameId: "game-3",
    gameTitle: "마법의 퍼즐 저택",
    rating: 5,
    content: "여자친구랑 100일 기념으로 왔는데 너무 만족스러웠어요! 아기자기해서 어렵지 않고 재밌게 풀 수 있었습니다. 강력 추천!",
    tags: ["커플강추", "분위기굿", "친절해요"],
    createdAt: "2026-07-22",
    likesCount: 12,
    isVerifiedBooking: true
  },
  {
    id: "rev-3",
    userId: "u-103",
    userName: "추리매니아_성진",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    gameId: "game-2",
    gameTitle: "미스테리 룸: 아티팩트의 비밀",
    rating: 5,
    content: "아날로그 소품들의 디테일이 살아있습니다. 마지막 반전 장치 작동할 때 소름 돋았네요. 난이도는 꽤 있으니 퍼즐 좀 풀어보신 분들에게 추천합니다!",
    tags: ["두뇌풀가동", "반전기믹", "디테일최고"],
    createdAt: "2026-07-18",
    likesCount: 24,
    isVerifiedBooking: true
  }
];

export const TIME_SLOTS = [
  "11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:30"
];
