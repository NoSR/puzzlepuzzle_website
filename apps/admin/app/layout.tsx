import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

// Using common UI tokens
import '@puzzlepuzzle/ui/src/styles/theme.css';

export const metadata: Metadata = {
  title: 'PuzzlePuzzle Admin',
  description: 'Admin Dashboard for PuzzlePuzzle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.logo}>
              <h2>Puzzle Admin</h2>
            </div>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>Dashboard</Link>
              <Link href="/themes" className={styles.navLink}>Themes</Link>
              <Link href="/settings" className={styles.navLink}>Settings</Link>
            </nav>
          </aside>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
