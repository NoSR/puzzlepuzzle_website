'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './GNB.module.css';
import { useStore } from '../context/StoreContext';

export default function GNB() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBookingModal } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navClass = [styles.nav, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ');

  return (
    <nav className={navClass} aria-label="글로벌 네비게이션">
      {/* 로고 */}
      <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        <span className={styles.logoText}>PUZZLE</span>
        <span className={styles.logoAccent}>PUZZLE</span>
        <span className={styles.logoBadge}>2026</span>
      </Link>

      {/* 데스크톱 링크 */}
      <div className={styles.links} role="list">
        <Link href="/" className={styles.link} role="listitem">
          홈
        </Link>
        <Link href="/themes" className={styles.link} role="listitem">
          게임 예약
        </Link>
        <Link href="/reviews" className={styles.link} role="listitem">
          고객 리뷰
        </Link>
        <Link href="/notices" className={styles.link} role="listitem">
          공지 & 이벤트
        </Link>
        <Link href="/about" className={styles.link} role="listitem">
          브랜드 소개
        </Link>
        <button
          onClick={() => openBookingModal()}
          className={styles.cta}
          role="listitem"
          style={{ cursor: 'pointer', border: 'none' }}
        >
          지금 예약 🎯
        </button>
      </div>

      {/* 모바일 햄버거 버튼 */}
      <button
        className={[styles.hamburger, menuOpen ? styles.open : ''].filter(Boolean).join(' ')}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {/* 모바일 드로어 */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          <Link href="/" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            홈
          </Link>
          <Link href="/themes" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            게임 예약
          </Link>
          <Link href="/reviews" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            고객 리뷰
          </Link>
          <Link href="/notices" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            공지 & 이벤트
          </Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            브랜드 소개
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              openBookingModal();
            }}
            className={`${styles.mobileLink} ${styles.mobileCta}`}
            style={{ cursor: 'pointer', border: 'none' }}
          >
            지금 예약 🎯
          </button>
        </div>
      )}
    </nav>
  );
}
