import Link from 'next/link';
import styles from './themes.module.css';

const themes = [
  {
    id: '1',
    title: '미스터리 맨션',
    genre: '공포',
    difficulty: 'HARD',
    difficultyLabel: '어려움',
    duration: '60분',
    minPlayers: 2,
    maxPlayers: 6,
    desc: '1920년대 저택에 숨겨진 진실. 어둠 속에서 단서를 모아라.',
    tag: 'BESTSELLER',
    gradientClass: 'gradient1',
  },
  {
    id: '2',
    title: '우주 탈출',
    genre: 'SF',
    difficulty: 'MEDIUM',
    difficultyLabel: '보통',
    duration: '60분',
    minPlayers: 2,
    maxPlayers: 4,
    desc: '산소가 0이 되기 전에. 우주선에서 살아남아라.',
    tag: 'NEW',
    gradientClass: 'gradient2',
  },
  {
    id: '3',
    title: '은행 강도',
    genre: '액션',
    difficulty: 'MEDIUM',
    difficultyLabel: '보통',
    duration: '75분',
    minPlayers: 3,
    maxPlayers: 8,
    desc: '9단계 보안 시스템을 뚫어라. 경보가 울리기 전에.',
    tag: null,
    gradientClass: 'gradient3',
  },
  {
    id: '4',
    title: '정글 퀘스트',
    genre: '어드벤처',
    difficulty: 'EASY',
    difficultyLabel: '쉬움',
    duration: '60분',
    minPlayers: 2,
    maxPlayers: 6,
    desc: '고대 문명의 유적을 탐험하라. 함정을 피하며 보물을 찾아라.',
    tag: null,
    gradientClass: 'gradient4',
  },
];

export default function ThemesPage() {
  return (
    <div className={styles.container}>
      {/* 페이지 Hero */}
      <header className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <p className={styles.pageHeroLabel}>ESCAPE ROOMS</p>
          <h1 className={styles.pageHeroTitle}>모든 테마</h1>
          <p className={styles.pageHeroSub}>
            당신의 팀에게 완벽한 도전을 선택하세요. 총 {themes.length}개의 테마가 준비되어 있습니다.
          </p>
        </div>
      </header>

      {/* 테마 그리드 */}
      <section className={styles.themesSection}>
        <div className={styles.themeGrid}>
          {themes.map((theme, i) => (
            <Link
              key={theme.id}
              href={`/themes/${theme.id}`}
              className={styles.themeCard}
              style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
            >
              {/* 이미지 영역 */}
              <div className={styles.imageWrapper}>
                <div className={`${styles.imageBg} ${styles[theme.gradientClass]}`} />
                <div className={styles.imageOverlay} />
                <div className={styles.cardBadges}>
                  <span className={styles.genreBadge}>{theme.genre}</span>
                  {theme.tag && <span className={styles.tagBadge}>{theme.tag}</span>}
                </div>
                <div className={styles.cardOverlayInfo}>
                  <span className={styles.durationBadge}>⏱ {theme.duration}</span>
                  <span className={styles.playersBadge}>👥 {theme.minPlayers}~{theme.maxPlayers}인</span>
                </div>
              </div>

              {/* 카드 내용 */}
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{theme.title}</h2>
                <p className={styles.cardDesc}>{theme.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.difficultyMeter}>
                    <span className={styles.diffLabel}>난이도</span>
                    <div className={styles.diffDots}>
                      <span className={`${styles.dot} ${theme.difficulty !== 'EASY' ? styles.dotFilled : styles.dotEmpty}`} />
                      <span className={`${styles.dot} ${theme.difficulty === 'MEDIUM' || theme.difficulty === 'HARD' ? styles.dotFilled : styles.dotEmpty}`} />
                      <span className={`${styles.dot} ${theme.difficulty === 'HARD' ? styles.dotFilled : styles.dotEmpty}`} />
                    </div>
                    <span className={styles.diffValue}>{theme.difficultyLabel}</span>
                  </div>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 예약 CTA */}
        <div className={styles.bookingCta}>
          <p className={styles.bookingCtaText}>원하는 테마를 찾지 못하셨나요? 단체 예약은 별도 문의해 주세요.</p>
          <Link href="/" className={styles.bookingCtaBtn}>단체 예약 문의 →</Link>
        </div>
      </section>
    </div>
  );
}
