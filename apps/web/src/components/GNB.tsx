import Link from 'next/link';
import styles from './GNB.module.css';

export default function GNB() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Puzzle<span>Puzzle</span>
      </Link>
      <div className={styles.links}>
        <Link href="/themes" className={styles.link}>테마 목록</Link>
        <Link href="/login" className={styles.link}>로그인</Link>
      </div>
    </nav>
  );
}
