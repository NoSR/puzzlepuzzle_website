import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {new Date().getFullYear()} PuzzlePuzzle. 모든 권리 보유.</p>
    </footer>
  );
}
