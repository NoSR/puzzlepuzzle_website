'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { useStore } from '../context/StoreContext';
import NoiseOverlay from '../components/NoiseOverlay';

export default function Home() {
  const { games, reviews, storeConfig, openBookingModal } = useStore();

  return (
    <div className={styles.container}>
      <NoiseOverlay opacity={0.035} />

      {/* ── 1. Hero Section ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            {storeConfig.badgeText}
          </div>
          <h1 className={styles.heroTitle}>
            {storeConfig.title}
            <span className={styles.heroTitleHighlight}>
              {storeConfig.highlightTitleText}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            {storeConfig.description}
          </p>

          <div className={styles.heroCtaRow}>
            <button
              onClick={() => openBookingModal(games[0])}
              className={styles.primaryCta}
            >
              {storeConfig.primaryButtonText}
            </button>
            <Link href="/about" className={styles.secondaryCta}>
              {storeConfig.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Feature Gimmicks Section ───────────────────── */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🎮</span>
            <h3 className={styles.featureTitle}>독창적 입체 기믹</h3>
            <p className={styles.featureDesc}>
              자체 개발한 3D 루빅스 큐브 연동 장치와 디지털 모션 센서 기반으로 손맛과 두뇌 회전을 극대화한 독점 퍼즐.
            </p>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📸</span>
            <h3 className={styles.featureTitle}>감성 포토존 스팟</h3>
            <p className={styles.featureDesc}>
              20대 취향저격의 감각적인 네온 조명과 파스텔톤 시그니처 큐브 오브제 연출로 탈출 성공 시 인생샷 보장!
            </p>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>⚡</span>
            <h3 className={styles.featureTitle}>스마트 힌트 시스템</h3>
            <p className={styles.featureDesc}>
              진행 상황에 맞춘 인터랙티브 힌트 패드로 입문자부터 고수까지 흐름이 끊기지 않는 100% 몰입 경험을 선사합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Themes Showcase Section ────────────────────── */}
      <section className={styles.gamesSection} id="games-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>CHALLENGE YOUR LIMITS</span>
          <h2 className={styles.sectionTitle}>대표 시그니처 테마</h2>
          <p className={styles.sectionSub}>
            다양한 난이도와 스토리로 준비된 퍼즐퍼즐의 3대 테마를 확인하고 지금 예약하세요.
          </p>
        </div>

        <div className={styles.gamesGrid}>
          {games.map((game) => (
            <div key={game.id} className={styles.gameCard} id={game.id}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={game.image}
                  alt={game.title}
                  width={600}
                  height={400}
                  className={styles.cardImg}
                  priority
                />
                <div className={styles.cardGradientOverlay} />
                <div className={styles.cardBadgeGroup}>
                  <span className={styles.categoryBadge}>{game.category}</span>
                  {game.highlightBadges.slice(0, 1).map((badge, idx) => (
                    <span key={idx} className={styles.highlightBadge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{game.title}</h3>
                <p className={styles.cardSubtitle}>{game.subtitle}</p>
                <p className={styles.cardSummary}>{game.summary}</p>

                <div className={styles.tagGroup}>
                  {game.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagPill}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooterMeta}>
                  <div className={styles.cardMetaLeft}>
                    <span className={styles.cardMetaTime}>
                      ⏱ {game.playTimeMinutes}분 | 👥 {game.minPlayers}~{game.maxPlayers}인
                    </span>
                    <span className={styles.cardPrice}>
                      1인 {game.pricePerPerson.toLocaleString()}원
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal(game)}
                    className={styles.bookBtn}
                  >
                    예약하기 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Reviews Teaser Section ─────────────────────── */}
      <section className={styles.reviewsTeaserSection}>
        <div className={styles.reviewsTeaserInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>REAL PLAYER REVIEWS</span>
            <h2 className={styles.sectionTitle}>플레이어 생생 리뷰 ⭐ 4.9</h2>
            <p className={styles.sectionSub}>
              실제 방문객들이 남겨주신 솔직하고 짜릿한 탈출 후기입니다.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewerRow}>
                  <Image
                    src={review.userAvatar}
                    alt={review.userName}
                    width={42}
                    height={42}
                    className={styles.reviewerAvatar}
                  />
                  <div>
                    <div className={styles.reviewerName}>{review.userName}</div>
                    <div className={styles.reviewGame}>{review.gameTitle}</div>
                  </div>
                </div>

                <div className={styles.reviewStars}>
                  {'★'.repeat(review.rating)}
                </div>

                <p className={styles.reviewContent}>
                  "{review.content}"
                </p>

                <div className={styles.tagGroup} style={{ marginBottom: 0 }}>
                  {review.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagPill}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/reviews" className={styles.secondaryCta}>
              전체 후기 {reviews.length}개 보러가기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Location & Booking Banner ──────────────────── */}
      <section className={styles.locationBanner}>
        <div className={styles.locationBox}>
          <div className={styles.locationInfo}>
            <span className={styles.sectionTag}>VISIT US</span>
            <h3>홍대입구역 9번 출구에서 5분 거리!</h3>
            <p>📍 {storeConfig.address}</p>
            <p>📞 {storeConfig.phone} | ⏰ {storeConfig.businessHours}</p>
          </div>

          <button
            onClick={() => openBookingModal(games[0])}
            className={styles.primaryCta}
            style={{ whiteSpace: 'nowrap' }}
          >
            지금 예약하고 방문하기 🎯
          </button>
        </div>
      </section>
    </div>
  );
}
