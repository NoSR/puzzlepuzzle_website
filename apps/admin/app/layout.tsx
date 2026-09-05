import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

// Using common UI tokens
import '@puzzlepuzzle/ui/src/styles/theme.css';

export const metadata: Metadata = {
  title: 'Puzzle퍼즐 관리자',
  description: 'Admin 대시보드 for PuzzlePuzzle',
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
              <h2>퍼즐 관리자</h2>
            </div>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>대시보드</Link>
              <Link href="/themes" className={styles.navLink}>테마 목록</Link>
              <Link href="/settings" className={styles.navLink}>설정</Link>
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
