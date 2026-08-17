import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {new Date().getFullYear()} PuzzlePuzzle. All rights reserved.</p>
    </footer>
  );
}
