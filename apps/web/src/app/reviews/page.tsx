'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './reviews.module.css';
import { useStore } from '../../context/StoreContext';
import NoiseOverlay from '../../components/NoiseOverlay';

export default function ReviewsPage() {
  const { reviews, games, addReview } = useStore();
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [userName, setUserName] = useState('');
  const [gameId, setGameId] = useState(games[0]?.id || 'game-1');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('인생샷, 꿀잼');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !content.trim()) return;

    const game = games.find((g) => g.id === gameId);
    const tags = tagInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    addReview({
      userId: 'user-' + Date.now(),
      userName,
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      gameId,
      gameTitle: game?.title || '퍼즐퍼즐 테마',
      rating,
      content,
      tags: tags.length ? tags : ['만족'],
    });

    setUserName('');
    setContent('');
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      <NoiseOverlay opacity={0.03} />

      <header className={styles.pageHeader}>
        <span className={styles.pageTag}>COMMUNITY REVIEWS</span>
        <h1 className={styles.pageTitle}>플레이어 솔직 리뷰</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: '0 auto' }}>
          퍼즐퍼즐을 직접 경험하고 탈출에 도전한 생생한 후기를 확인하세요.
        </p>
      </header>

      {/* 평점 통계 바 */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <div className={styles.statVal}>4.9 / 5.0</div>
          <div className={styles.statLabel}>평균 만족도</div>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
        <div className={styles.statItem}>
          <div className={styles.statVal}>{reviews.length}+</div>
          <div className={styles.statLabel}>누적 플레이 후기</div>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
        <div className={styles.statItem}>
          <div className={styles.statVal}>98%</div>
          <div className={styles.statLabel}>재방문 추천율</div>
        </div>
      </div>

      {/* 리뷰 작성 토글 */}
      <button
        onClick={() => setShowForm(!showForm)}
        className={styles.formToggleBtn}
      >
        {showForm ? '닫기 ✕' : '✍️ 나도 탈출 후기 작성하기'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className={styles.reviewFormBox}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#ffffff', fontSize: '1.2rem' }}>
            새 리뷰 작성하기
          </h3>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              닉네임
            </label>
            <input
              type="text"
              placeholder="예: 탈출러_민수"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              플레이한 테마
            </label>
            <select
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className={styles.formInput}
            >
              {games.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              평점 (1 ~ 5)
            </label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className={styles.formInput}
            >
              <option value={5}>★★★★★ (5점 - 최고예요!)</option>
              <option value={4}>★★★★☆ (4점 - 재밌어요)</option>
              <option value={3}>★★★☆☆ (3점 - 보통이에요)</option>
              <option value={2}>★★☆☆☆ (2점 - 아쉬워요)</option>
              <option value={1}>★☆☆☆☆ (1점 - 비추천)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              후기 내용
            </label>
            <textarea
              rows={4}
              placeholder="조명 연출, 퍼즐 난이도, 기믹 등에 대한 솔직한 평을 남겨주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              태그 (쉼표로 구분)
            </label>
            <input
              type="text"
              placeholder="인생샷, 기믹대박, 커플추천"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className={styles.formInput}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.85rem',
              background: '#a855f7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            }}
          >
            리뷰 등록하기 ✨
          </button>
        </form>
      )}

      {/* 리뷰 그리드 리스트 */}
      <div className={styles.reviewsGrid}>
        {reviews.map((rev) => (
          <article key={rev.id} className={styles.reviewCard}>
            <div>
              <div className={styles.reviewerRow}>
                <Image
                  src={rev.userAvatar}
                  alt={rev.userName}
                  width={44}
                  height={44}
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.reviewerName}>{rev.userName}</div>
                  <div className={styles.gameName}>{rev.gameTitle}</div>
                </div>
              </div>

              <div className={styles.stars}>
                {'★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating)}
              </div>

              <p className={styles.reviewContent}>
                "{rev.content}"
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
              <div className={styles.tagRow}>
                {rev.tags.map((t, idx) => (
                  <span key={idx} className={styles.tag}>
                    #{t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
                <span>{rev.createdAt}</span>
                <span>👍 {rev.likesCount}명 추천</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
