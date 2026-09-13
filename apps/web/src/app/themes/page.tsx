'use client';

import React from 'react';
import Image from 'next/image';
import styles from './themes.module.css';
import { useStore } from '../../context/StoreContext';
import NoiseOverlay from '../../components/NoiseOverlay';

export default function ThemesPage() {
  const { games, openBookingModal } = useStore();

  return (
    <div className={styles.container}>
      <NoiseOverlay opacity={0.03} />

      <header className={styles.pageHeader}>
        <span className={styles.pageTag}>SELECT YOUR MISSION</span>
        <h1 className={styles.pageTitle}>게임 테마 예약</h1>
        <p className={styles.pageSubtitle}>
          퍼즐퍼즐만의 차별화된 3D 큐브 기믹과 감성 공간이 결합된 3가지 시그니처 테마를 만나보세요.
        </p>
      </header>

      <div className={styles.themesList}>
        {games.map((game) => (
          <article key={game.id} className={styles.themeItemCard} id={game.id}>
            {/* 좌측 이미지 */}
            <div className={styles.imageSection}>
              <Image
                src={game.image}
                alt={game.title}
                width={800}
                height={600}
                className={styles.themeImg}
                priority
              />
              <div className={styles.imageOverlay} />
              <div className={styles.badgesOverlay}>
                <span className={styles.badgeCategory}>{game.category}</span>
                {game.highlightBadges.map((b, idx) => (
                  <span key={idx} className={styles.badgeHighlight}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측 정보 */}
            <div className={styles.infoSection}>
              <div className={styles.infoHeader}>
                <h2 className={styles.themeTitle}>{game.title}</h2>
                <div className={styles.themeSubtitle}>{game.subtitle}</div>
                <p className={styles.themeDesc}>{game.description}</p>

                <div className={styles.tagRow}>
                  {game.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.actionFooter}>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>난이도</span>
                    <span className={styles.metaValue} style={{ color: '#f59e0b' }}>
                      {'★'.repeat(game.difficulty) + '☆'.repeat(5 - game.difficulty)}
                    </span>
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>제한 시간</span>
                    <span className={styles.metaValue}>{game.playTimeMinutes}분</span>
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>추천 인원</span>
                    <span className={styles.metaValue}>{game.minPlayers}~{game.maxPlayers}인</span>
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>1인 요금</span>
                    <span className={styles.priceDisplay}>
                      {game.pricePerPerson.toLocaleString()}원
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal(game)}
                  className={styles.bookBtn}
                >
                  이 테마 예약하기 🎯
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
