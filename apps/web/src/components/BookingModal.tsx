'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { TIME_SLOTS } from '../data/storeData';

export default function BookingModal() {
  const { isBookingModalOpen, selectedGameForBooking, closeBookingModal, addBooking, games } = useStore();

  const [selectedGameId, setSelectedGameId] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('14:00');
  const [players, setPlayers] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [requests, setRequests] = useState<string>('');

  useEffect(() => {
    if (selectedGameForBooking) {
      setSelectedGameId(selectedGameForBooking.id);
      setPlayers(selectedGameForBooking.minPlayers || 2);
    } else if (games.length > 0) {
      setSelectedGameId(games[0].id);
      setPlayers(games[0].minPlayers || 2);
    }
    // 오늘 날짜 YYYY-MM-DD
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
  }, [selectedGameForBooking, games, isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const currentGame = games.find((g) => g.id === selectedGameId) || games[0];
  const totalPrice = (currentGame?.pricePerPerson || 22000) * players;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('예약자 이름과 연락처를 입력해 주세요.');
      return;
    }

    addBooking({
      userId: 'guest',
      userName: name,
      userPhone: phone,
      userEmail: email || 'guest@example.com',
      gameId: currentGame.id,
      gameTitle: currentGame.title,
      date,
      time,
      players,
      totalPrice,
      customRequests: requests,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(2, 6, 24, 0.85)',
        backdropFilter: 'blur(16px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBookingModal();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0f172b',
          border: '1px solid rgba(168, 85, 247, 0.35)',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          borderRadius: '1rem',
          padding: '2rem',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={closeBookingModal}
          aria-label="닫기"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.25rem 0.5rem',
          }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: '#ec4899',
              textTransform: 'uppercase',
            }}
          >
            REAL-TIME RESERVATION
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
              fontSize: '2rem',
              letterSpacing: '1px',
              margin: '0.25rem 0 0.5rem 0',
              color: '#ffffff',
            }}
          >
            방탈출 게임 예약하기 🎯
          </h2>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8' }}>
            원하시는 테마와 일정을 선택하고 실시간 예약을 완료하세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* 1. 테마 선택 */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
              선택한 테마
            </label>
            <select
              value={selectedGameId}
              onChange={(e) => {
                setSelectedGameId(e.target.value);
                const g = games.find((item) => item.id === e.target.value);
                if (g) setPlayers(g.minPlayers);
              }}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            >
              {games.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.title} ({g.playTimeMinutes}분 / 1인 {g.pricePerPerson.toLocaleString()}원)
                </option>
              ))}
            </select>
          </div>

          {/* 2. 날짜 & 시간 선택 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
                방문 날짜
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.5rem' }}>
                시간대
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              >
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. 인원 수 선택 & 가격 계산 */}
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'block' }}>참여 인원</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => setPlayers((p) => Math.max(currentGame.minPlayers, p - 1))}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                  {players}명
                </span>
                <button
                  type="button"
                  onClick={() => setPlayers((p) => Math.min(currentGame.maxPlayers, p + 1))}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>총 결제 예상 금액</span>
              <div
                style={{
                  fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
                  fontSize: '1.75rem',
                  color: '#a855f7',
                  letterSpacing: '1px',
                  fontWeight: 700,
                }}
              >
                {totalPrice.toLocaleString()}원
              </div>
            </div>
          </div>

          {/* 4. 예약자 정보 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                예약자명 *
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                연락처 *
              </label>
              <input
                type="tel"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
              이메일 (선택)
            </label>
            <input
              type="email"
              placeholder="puzzle@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
              요청사항 / 방문 경로
            </label>
            <input
              type="text"
              placeholder="예: 생일 기념 방문, 조용한 방 요청 등"
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                outline: 'none',
              }}
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            style={{
              marginTop: '0.5rem',
              width: '100%',
              padding: '1rem',
              backgroundColor: '#a855f7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)',
              transition: 'all 0.2s ease',
            }}
          >
            {totalPrice.toLocaleString()}원 현장 결제 예약 확정하기 →
          </button>
        </form>
      </div>
    </div>
  );
}
