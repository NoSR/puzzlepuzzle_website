"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './theme-detail.module.css';
import { Button } from '@puzzlepuzzle/ui';
import FadeIn from '../../../components/FadeIn';

// 더미 테마 데이터
const THEMES: Record<string, {
  title: string;
  genre: string;
  difficulty: string;
  difficultyNum: string;
  duration: string;
  players: string;
  ageLimit: string;
  tagline: string;
  story: { title: string; text: string }[];
  features: { icon: string; title: string; desc: string }[];
  reviews: { stars: number; text: string; author: string }[];
}> = {
  '1': {
    title: '미스터리 맨션',
    genre: '공포',
    difficulty: '어려움',
    difficultyNum: '4/5',
    duration: '60분',
    players: '2 – 6명',
    ageLimit: '15세 이상',
    tagline: '어둠 속에 숨겨진 진실을 밝혀라. 시간이 촉박하다.',
    story: [
      {
        title: '사라진 주인을\n찾아서',
        text: '1920년대 귀족이 소유했던 저택. 주인은 어느 날 갑자기 자취를 감추었고, 그 이후로 아무도 저택의 진실을 알지 못한다. 당신은 저택에 갇혔다. 1시간 안에 탈출하라.',
      },
      {
        title: '단서는\n곳곳에 있다',
        text: '서재의 먼지 쌓인 책들, 잠긴 보석함, 벽 뒤에서 들려오는 소리… 모든 것이 연결되어 있다. 팀원들과 협력하여 퍼즐을 풀어야만 문이 열린다.',
      },
      {
        title: '탈출 성공률\n단 22%',
        text: '지금까지 이 방에 도전한 수백 팀 중 성공한 팀은 5팀 중 1팀. 당신은 그 1팀이 될 수 있을까?',
      },
    ],
    features: [
      { icon: '🎭', title: '몰입형 세트', desc: '1920년대 저택을 100% 재현한 실제 소품과 세트로 완벽한 몰입감을 제공합니다.' },
      { icon: '🔦', title: '인터랙티브 퍼즐', desc: '물리적 자물쇠부터 디지털 암호 해독까지, 다양한 방식의 퍼즐 12종이 기다립니다.' },
      { icon: '🎵', title: '라이브 사운드', desc: '공포 분위기를 극대화하는 실시간 사운드 이펙트 및 전문 배우가 연출을 도와드립니다.' },
    ],
    reviews: [
      { stars: 5, text: '"지금까지 해본 방탈출 중 단연 최고였어요. 정말 공포 영화 속에 들어간 것 같았습니다."', author: '김민준 · 네이버 예약' },
      { stars: 5, text: '"퍼즐의 완성도가 정말 높아요. 억지로 끼워 맞춘 느낌 없이, 스토리와 퍼즐이 자연스럽게 연결됩니다."', author: '이서연 · 카카오 리뷰' },
      { stars: 5, text: '"팀워크가 정말 중요한 방입니다. 혼자서는 절대 못 풀어요. 회사 팀 빌딩으로 강추!"', author: '박지호 · 구글 리뷰' },
    ],
  },
  '2': {
    title: '우주 탈출',
    genre: 'SF',
    difficulty: '보통',
    difficultyNum: '3/5',
    duration: '60분',
    players: '2 – 8명',
    ageLimit: '12세 이상',
    tagline: '산소가 떨어지고 있다. 지구로 귀환할 방법을 찾아라.',
    story: [
      {
        title: '2157년,\n우주 정거장',
        text: '당신은 지구 궤도를 도는 우주 정거장 OMEGA-7의 승무원. 갑작스러운 시스템 폭발로 인해 정거장이 통제 불능 상태에 빠졌다.',
      },
      {
        title: '60분 안에\n귀환하라',
        text: '비상 탈출 포드까지 남은 시간은 60분. 고장난 시스템을 복구하고, 에어록을 열어 생존하라.',
      },
    ],
    features: [
      { icon: '🚀', title: 'LED 인터랙션', desc: '3,000개의 LED 패널과 홀로그램 디스플레이로 실제 우주 정거장 분위기를 재현합니다.' },
      { icon: '🤖', title: 'AI 코드 해독', desc: '인공지능 시스템 ARIA와 실시간 상호작용하며 미션을 수행합니다.' },
      { icon: '🔬', title: '과학 퍼즐', desc: '물리학, 화학, 수학 기반의 논리 퍼즐로 팀의 두뇌를 풀가동합니다.' },
    ],
    reviews: [
      { stars: 5, text: '"세트가 진짜 우주선 같아서 깜짝 놀랐어요. 아이들도 너무 좋아했습니다."', author: '최은지 · 구글 리뷰' },
      { stars: 5, text: '"가족 단위로 오기 정말 좋은 곳이에요. 난이도 조절도 잘 되어 있어서 초보도 즐길 수 있습니다."', author: '정민호 · 네이버 예약' },
      { stars: 5, text: '"SF 팬이라면 반드시 와봐야 합니다. 완성도가 정말 놀랍습니다."', author: '한수아 · 카카오 리뷰' },
    ],
  },
  '3': {
    title: '은행 강도',
    genre: '액션',
    difficulty: '보통',
    difficultyNum: '3/5',
    duration: '60분',
    players: '3 – 8명',
    ageLimit: '14세 이상',
    tagline: '당신이 강도인가, 탐정인가. 선택하라.',
    story: [
      {
        title: '완벽한\n강도 작전',
        text: '서울 중심가의 초호화 은행. 금고에는 1,000억원의 현금이 들어있다. 당신의 팀은 보안 시스템을 5분 내로 무력화시켜야 한다.',
      },
      {
        title: '경보가\n울리기 전에',
        text: '레이저 센서, 지문 인식, 암호화된 금고… 모든 장벽을 넘어야 한다. 60분 안에 금고를 열지 못하면 경찰이 온다.',
      },
    ],
    features: [
      { icon: '🔐', title: '다층 보안 시스템', desc: '실제 은행 금고를 모티브로 한 9단계 보안 시스템을 단계적으로 해제합니다.' },
      { icon: '💻', title: '해킹 미니게임', desc: '터미널을 통해 은행 내부 시스템을 직접 해킹하는 독특한 퍼즐 경험.' },
      { icon: '📹', title: 'CCTV 미션', desc: '실시간 CCTV 화면을 분석하여 경비원의 순찰 루틴을 파악해야 합니다.' },
    ],
    reviews: [
      { stars: 5, text: '"역대급 스릴. 가슴이 두근두근해서 퍼즐 풀 시간도 없었어요."', author: '이건우 · 구글 리뷰' },
      { stars: 5, text: '"친구들과 왔는데 이렇게 재미있을 줄 몰랐어요. 무조건 재방문합니다!"', author: '김하늘 · 네이버 예약' },
      { stars: 5, text: '"퍼즐의 논리가 탄탄해서 풀 때 진짜 뿌듯합니다."', author: '오지훈 · 카카오 리뷰' },
    ],
  },
};

function ParallaxHero({ title, genre, tagline }: { title: string; genre: string; tagline: string }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.heroLabel}>{genre}</p>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroTagline}>{tagline}</p>
      </div>
    </section>
  );
}

export default function ThemeDetailPage({ params }: { params: { id: string } }) {
  const theme = THEMES[params.id] || THEMES['1'];

  return (
    <div className={styles.page}>
      {/* Section 1: Cinematic Hero */}
      <ParallaxHero title={theme.title} genre={theme.genre} tagline={theme.tagline} />

      {/* Section 2: Stats Bar */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>👥</span>
            <span className={styles.statValue}>{theme.players}</span>
            <span className={styles.statLabel}>인원</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>⏳</span>
            <span className={styles.statValue}>{theme.duration}</span>
            <span className={styles.statLabel}>제한시간</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>🔥</span>
            <span className={styles.statValue}>{theme.difficultyNum}</span>
            <span className={styles.statLabel}>난이도</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>🔞</span>
            <span className={styles.statValue}>{theme.ageLimit}</span>
            <span className={styles.statLabel}>이용 연령</span>
          </div>
        </div>
      </div>

      {/* Section 3: Story Blocks (Alternating) */}
      <div className={styles.storySection}>
        {theme.story.map((block, i) => (
          <FadeIn key={i} delay={0}>
            <div className={`${styles.storyBlock} ${i % 2 !== 0 ? styles.reverse : ''}`}>
              <div className={styles.storyText}>
                <h2 className={styles.storyTitle}>
                  {block.title.split('\n').map((line, j) => (
                    <span key={j} style={{ display: 'block' }}>{line}</span>
                  ))}
                </h2>
                <p className={styles.storyBody}>{block.text}</p>
              </div>
              <div className={styles.storyImage}>
                <div className={styles.storyImageAccent} />
                <div className={styles.storyImageInner}>이미지 준비중</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Section 4: Features */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <FadeIn>
            <p className={styles.sectionLabel}>이 테마의 특징</p>
            <h2 className={styles.featuresTitle}>당신을 기다리는 것들</h2>
          </FadeIn>
          <div className={styles.featuresGrid}>
            {theme.features.map((feat, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className={styles.featureCard}>
                  <span className={styles.featureEmoji}>{feat.icon}</span>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsInner}>
          <FadeIn>
            <p className={styles.sectionLabel}>실제 후기</p>
            <h2 className={styles.featuresTitle}>플레이어들의 반응</h2>
          </FadeIn>
          <div className={styles.reviewsGrid}>
            {theme.reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={styles.reviewCard}>
                  <p className={styles.reviewStars}>{'★'.repeat(review.stars)}</p>
                  <p className={styles.reviewText}>{review.text}</p>
                  <p className={styles.reviewAuthor}>{review.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Big CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <FadeIn>
          <p className={styles.ctaLabel}>퍼즐퍼즐 · {theme.title}</p>
          <h2 className={styles.ctaTitle}>
            미션을
            <span>시작하라</span>
          </h2>
          <p className={styles.ctaSub}>
            지금 바로 예약하세요. 당신의 팀이 이 방을 정복할 수 있을지 확인해 보세요.
          </p>
          <div className={styles.ctaButtons}>
            <Button size="lg">지금 예약하기</Button>
            <Link href="/themes">
              <Button size="lg" variant="outline">다른 테마 보기</Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
