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
            <h3 className={styles.colTitle}>게임 테마</h3>
            <nav aria-label="테마 목록">
              <Link href="/themes#game-1" className={styles.footerLink}>큐브 스페이스: 차원의 문</Link>
              <Link href="/themes#game-2" className={styles.footerLink}>미스테리 룸: 아티팩트의 비밀</Link>
              <Link href="/themes#game-3" className={styles.footerLink}>마법의 퍼즐 저택</Link>
            </nav>
          </div>

          {/* 바로가기 */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>바로가기</h3>
            <nav aria-label="바로가기">
              <Link href="/themes" className={styles.footerLink}>실시간 게임 예약</Link>
              <Link href="/reviews" className={styles.footerLink}>생생 고객 리뷰</Link>
              <Link href="/notices" className={styles.footerLink}>공지 & 이벤트</Link>
              <Link href="/about" className={styles.footerLink}>브랜드 소개 & 위치</Link>
            </nav>
          </div>

          {/* 매장 정보 */}
          <div className={styles.infoCol}>
            <h3 className={styles.colTitle}>홍대 스토어</h3>
            <address className={styles.address}>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>위치</span>
                서울특별시 마포구 와우산로 21길 19 (홍대입구역 9번 출구 도보 5분)
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>전화</span>
                02-789-1024
              </p>
              <p className={styles.infoItem}>
                <span className={styles.infoLabel}>운영시간</span>
                매일 11:00 ~ 23:00 (연중무휴)
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

