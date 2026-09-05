import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Puzzle<span>Puzzle</span>
            </Link>
            <p className={styles.brandDesc}>
              몰입형 방탈출 경험의 새로운 기준.<br />
              당신의 한계를 시험하세요.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>테마</h4>
              <Link href="/themes/1" className={styles.link}>미스터리 맨션</Link>
              <Link href="/themes/2" className={styles.link}>우주 탈출</Link>
              <Link href="/themes/3" className={styles.link}>은행 강도</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>고객 지원</h4>
              <Link href="/" className={styles.link}>자주 묻는 질문</Link>
              <Link href="/" className={styles.link}>예약 안내</Link>
              <Link href="/" className={styles.link}>단체 예약</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 PuzzlePuzzle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
