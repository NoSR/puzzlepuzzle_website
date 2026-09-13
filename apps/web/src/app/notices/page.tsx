'use client';

import React, { useState } from 'react';
import styles from './notices.module.css';
import { useStore } from '../../context/StoreContext';
import NoiseOverlay from '../../components/NoiseOverlay';

export default function NoticesPage() {
  const { notices } = useStore();
  const [expandedId, setExpandedId] = useState<string | null>(notices[0]?.id || null);

  const toggleNotice = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCategoryClass = (cat: string) => {
    if (cat === 'event') return styles.catEvent;
    if (cat === 'winner') return styles.catWinner;
    return styles.catNotice;
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === 'event') return '이벤트';
    if (cat === 'winner') return '당첨자발표';
    return '공지';
  };

  return (
    <div className={styles.container}>
      <NoiseOverlay opacity={0.03} />

      <header className={styles.pageHeader}>
        <span className={styles.pageTag}>NOTICE & EVENT</span>
        <h1 className={styles.pageTitle}>공지 & 이벤트</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: '0 auto' }}>
          퍼즐퍼즐의 최신 소식, 시즌 챌린지 굿즈 이벤트 및 주요 안내사항입니다.
        </p>
      </header>

      <div className={styles.noticesList}>
        {notices.map((notice) => {
          const isExpanded = expandedId === notice.id;
          return (
            <article
              key={notice.id}
              className={styles.noticeCard}
              onClick={() => toggleNotice(notice.id)}
            >
              <div className={styles.noticeTop}>
                <div className={styles.noticeTitleRow}>
                  <span className={`${styles.categoryTag} ${getCategoryClass(notice.category)}`}>
                    {getCategoryLabel(notice.category)}
                  </span>
                  {notice.isPinned && (
                    <span style={{ fontSize: '0.7rem', color: '#ec4899', fontWeight: 700 }}>
                      [필독]
                    </span>
                  )}
                  <h2 className={styles.noticeTitle}>{notice.title}</h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className={styles.noticeDate}>{notice.date}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className={styles.noticeBody}>
                  {notice.content}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
