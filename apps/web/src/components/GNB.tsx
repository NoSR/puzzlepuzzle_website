import Link from 'next/link';
import styles from './GNB.module.css';

export default function GNB() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        PuzzlePuzzle
      </Link>
      <div className={styles.links}>
        <Link href="/themes" className={styles.link}>Themes</Link>
        <Link href="/login" className={styles.link}>Login</Link>
      </div>
    </nav>
  );
}
