'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './GNB.module.css';

export default function GNB() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      </Link>

      {/* 데스크톱 링크 */}
      <div className={styles.links} role="list">
        <Link href="/themes" className={styles.link} role="listitem">
          테마 목록
        </Link>
        <Link href="/reservation" className={styles.link} role="listitem">
          예약 안내
        </Link>
        <Link href="/login" className={styles.link} role="listitem">
          로그인
        </Link>
        <Link href="/themes" className={styles.cta} role="listitem">
          예약하기
        </Link>
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
          <Link
            href="/themes"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            테마 목록
          </Link>
          <Link
            href="/reservation"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            예약 안내
          </Link>
          <Link
            href="/login"
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            로그인
          </Link>
          <Link
            href="/themes"
            className={`${styles.mobileLink} ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            예약하기
          </Link>
        </div>
      )}
    </nav>
  );
}
