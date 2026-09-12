import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 상단 골드 그래디언트 라인 */}
      <div className={styles.topLine} aria-hidden="true" />

      <div className={styles.inner}>
        {/* 메인 그리드 */}
        <div className={styles.grid}>
          {/* 브랜드 컬럼 */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>PUZZLE</span>
              <span className={styles.logoAccent}>PUZZLE</span>
            </Link>
            <p className={styles.brandDesc}>
              몰입형 방탈출 경험의 새로운 기준.<br />
              당신의 한계를 시험하세요.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="인스타그램"
              >
                IG
              </a>
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="카카오채널"
              >
                KA
              </a>
            </div>
          </div>

          {/* 테마 링크 */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>테마</h3>
            <nav aria-label="테마 목록">
              <Link href="/themes/1" className={styles.footerLink}>미스터리 맨션</Link>
              <Link href="/themes/2" className={styles.footerLink}>우주 탈출</Link>
              <Link href="/themes/3" className={styles.footerLink}>은행 강도</Link>
              <Link href="/themes/4" className={styles.footerLink}>정글 퀘스트</Link>
            </nav>
          </div>

          {/* 고객 지원 */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>고객 지원</h3>
            <nav aria-label="고객 지원">
              <Link href="/" className={styles.footerLink}>예약 안내</Link>
              <Link href="/" className={styles.footerLink}>자주 묻는 질문</Link>
              <Link href="/" className={styles.footerLink}>단체 예약</Link>
              <Link href="/" className={styles.footerLink}>오시는 길</Link>
            </nav>
          </div>

          {/* 매장 정보 */}
          <div className={styles.infoCol}>
            <h3 className={styles.colTitle}>매장 정보</h3>
            <address className={styles.address}>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>주소</span>
                서울시 강남구 테헤란로 123
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>전화</span>
                010-0000-0000
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>운영</span>
                매일 10:00 – 23:00
              </p>
            </address>
          </div>
        </div>

        {/* 하단 */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 PuzzlePuzzle. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/" className={styles.legalLink}>개인정보처리방침</Link>
            <Link href="/" className={styles.legalLink}>이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

