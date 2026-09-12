'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@puzzlepuzzle/ui';
import FadeIn from '../components/FadeIn';
import NoiseOverlay from '../components/NoiseOverlay';

const featuredThemes = [
  {
    id: '1',
    title: '미스터리 맨션',
    genre: '공포',
    difficulty: 'Hard',
    difficultyLabel: '어려움',
    desc: '어둠 속에 숨겨진 진실을 밝혀라. 1920년대 저택에서의 60분.',
    gradientClass: 'cardGradient1',
  },
  {
    id: '2',
    title: '우주 탈출',
    genre: 'SF',
    difficulty: 'Medium',
    difficultyLabel: '보통',
    desc: '산소가 떨어지고 있다. 지구로 귀환할 방법을 찾아라.',
    gradientClass: 'cardGradient2',
  },
  {
    id: '3',
    title: '은행 강도',
    genre: '액션',
    difficulty: 'Medium',
    difficultyLabel: '보통',
    desc: '9단계 보안 시스템을 뚫어라. 경보가 울리기 전에.',
    gradientClass: 'cardGradient3',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <NoiseOverlay opacity={0.035} />
      <div className={styles.heroContent}>
        <div className={styles.heroTags}>
          <span className={styles.heroTag}>#방탈출</span>
          <span className={styles.heroTag}>#미스터리</span>
          <span className={styles.heroTag}>#아드레날린</span>
        </div>
        <span className={styles.heroLabel}>퍼즐퍼즐 · 방탈출 카페</span>
        <h1 className={styles.heroTitle}>
          한계를<em>시험하라</em>
        </h1>
        <p className={styles.heroSubtitle}>
          최고 수준의 방탈출 테마가 기다립니다. 팀워크, 논리, 그리고 약간의 용기가 필요합니다.
        </p>
        <div className={styles.heroCta}>
          <Link href="/themes">
            <Button size="lg">테마 보기</Button>
          </Link>
          <Link href="/themes">
            <Button size="lg" variant="outline">예약하기</Button>
          </Link>
        </div>
      </div>
      <div className={styles.heroScrollHint}>
        <span className={styles.heroScrollLabel}>Scroll</span>
        <div className={styles.heroScrollLine} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />

      {/* Featured Themes */}
      <section className={styles.themesSection}>
        <FadeIn>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>테마 목록</p>
            <h2 className={styles.sectionTitle}>어느 방에 들어갈 건가요</h2>
          </div>
        </FadeIn>

        <div className={styles.themeGrid}>
          {featuredThemes.map((theme, i) => (
            <FadeIn key={theme.id} delay={i * 120} className={styles.themeCardWrapper}>
              <Link href={`/themes/${theme.id}`} className={styles.themeCard}>
                <div className={styles.imageWrapper}>
                  <div className={styles.cardBadge}>{theme.genre}</div>
                  <div className={`${styles.imagePlaceholder} ${styles[theme.gradientClass]}`}>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{theme.title}</h3>
                  <p className={styles.cardInfo}>{theme.desc}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardDifficulty}>
                      <span className={styles.cardDiffLabel}>난이도</span>
                      <span className={styles.cardDiffValue}>{theme.difficultyLabel}</span>
                    </div>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whySection}>
        <NoiseOverlay opacity={0.03} />
        <div className={styles.whyInner}>
          <FadeIn>
            <div className={styles.whyText}>
              <p className={styles.sectionLabel} style={{ justifyContent: 'flex-start' }}>왜 퍼즐퍼즐인가</p>
              <h2>
                단순한 게임이
                <span>아닙니다</span>
              </h2>
              <p>
                퍼즐퍼즐은 단순한 자물쇠 따기가 아닙니다. 몰입형 스토리텔링, 고품질 세트 디자인, 그리고 철저하게 설계된 퍼즐 흐름으로 진짜 경험을 제공합니다.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>3+</span>
                  <span className={styles.statDesc}>독점 테마</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>500+</span>
                  <span className={styles.statDesc}>누적 플레이</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>4.9</span>
                  <span className={styles.statDesc}>평균 별점</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className={styles.whyVisual}>
            {[
              { num: '1', title: '몰입형 스토리', desc: '단순한 퍼즐이 아닌, 진짜 이야기 속으로 들어가는 경험.' },
              { num: '2', title: '혁신적 잠금장치', desc: '디지털과 아날로그를 결합한 창의적 퍼즐 시스템.' },
              { num: '3', title: '라이브 사운드', desc: '전문 사운드 디자이너가 설계한 몰입형 사운드스케이프.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardNum}>{item.num}</div>
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardDesc}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} />
        <NoiseOverlay opacity={0.04} />
        <FadeIn>
          <div className={styles.ctaBannerInner}>
            <h2 className={styles.ctaBannerTitle}>
              도전할 준비가
              <span>되셨나요?</span>
            </h2>
            <p className={styles.ctaBannerSub}>
              팀을 구성하고 지금 바로 예약하세요. 매일 새로운 도전이 기다리고 있습니다.
            </p>
            <div className={styles.ctaBannerButtons}>
              <Link href="/themes">
                <Button size="lg">지금 예약하기</Button>
              </Link>
              <Link href="/themes">
                <Button size="lg" variant="outline">전체 테마 보기</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
