import Link from 'next/link';
import styles from './page.module.css';
import { Button } from '@puzzlepuzzle/ui';

export default function Home() {
  const featuredThemes = [
    { id: '1', title: '미스터리 맨션', genre: '공포', difficulty: 'Hard' },
    { id: '2', title: '우주 탈출', genre: 'SF', difficulty: 'Medium' },
    { id: '3', title: '은행 강도', genre: '액션', difficulty: 'Medium' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>퍼즐퍼즐에 오신 것을 환영합니다</h1>
          <p className={styles.heroSubtitle}>최고의 방탈출을 경험해보세요. 한계를 시험할 준비가 되셨나요?</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/themes">
              <Button size="lg">예약하기</Button>
            </Link>
            <Link href="/themes">
              <Button size="lg" variant="outline">테마보기</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.themesSection}>
        <h2 className={styles.sectionTitle}>추천 테마</h2>
        <div className={styles.slider}>
          {featuredThemes.map((theme) => (
            <Link key={theme.id} href={`/themes/${theme.id}`} className={styles.themeCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>이미지 준비중</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{theme.title}</h3>
                <p className={styles.cardInfo}>장르: {theme.genre}</p>
                <div className={styles.cardFooter}>
                  <span>난이도: {theme.difficulty}</span>
                  <span>상세보기 &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
