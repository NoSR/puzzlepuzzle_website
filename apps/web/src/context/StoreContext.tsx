'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GameTheme,
  StoreNotice,
  CustomerReview,
  Booking,
  INITIAL_GAMES,
  INITIAL_NOTICES,
  INITIAL_REVIEWS,
  STORE_CONFIG,
} from '../data/storeData';

interface StoreContextType {
  games: GameTheme[];
  notices: StoreNotice[];
  reviews: CustomerReview[];
  bookings: Booking[];
  storeConfig: typeof STORE_CONFIG;
  selectedGameForBooking: GameTheme | null;
  isBookingModalOpen: boolean;
  toastMessage: string | null;
  openBookingModal: (game?: GameTheme) => void;
  closeBookingModal: () => void;
  addBooking: (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => Booking;
  addReview: (reviewData: Omit<CustomerReview, 'id' | 'createdAt' | 'likesCount' | 'isVerifiedBooking'>) => void;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_PREFIX = 'puzzle_v1_';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [games] = useState<GameTheme[]>(INITIAL_GAMES);
  const [storeConfig] = useState(STORE_CONFIG);
  const [notices] = useState<StoreNotice[]>(INITIAL_NOTICES);

  // 로컬스토리지 연동 reviews
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}reviews`);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_REVIEWS;
  });

  // 로컬스토리지 연동 bookings
  const [bookings, setBookings] = useState<Booking[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}bookings`);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  const [selectedGameForBooking, setSelectedGameForBooking] = useState<GameTheme | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const openBookingModal = (game?: GameTheme) => {
    setSelectedGameForBooking(game || games[0]);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedGameForBooking(null);
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const newBooking: Booking = {
      ...bookingData,
      id: `bk-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
      status: 'confirmed',
    };
    const nextBookings = [newBooking, ...bookings];
    setBookings(nextBookings);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_PREFIX}bookings`, JSON.stringify(nextBookings));
    }
    showToast(`🎉 '${newBooking.gameTitle}' 예약이 확정되었습니다!`);
    closeBookingModal();
    return newBooking;
  };

  const addReview = (reviewData: Omit<CustomerReview, 'id' | 'createdAt' | 'likesCount' | 'isVerifiedBooking'>) => {
    const newReview: CustomerReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      likesCount: 1,
      isVerifiedBooking: true,
    };
    const nextReviews = [newReview, ...reviews];
    setReviews(nextReviews);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_PREFIX}reviews`, JSON.stringify(nextReviews));
    }
    showToast('✨ 소중한 리뷰가 등록되었습니다!');
  };

  return (
    <StoreContext.Provider
      value={{
        games,
        notices,
        reviews,
        bookings,
        storeConfig,
        selectedGameForBooking,
        isBookingModalOpen,
        toastMessage,
        openBookingModal,
        closeBookingModal,
        addBooking,
        addReview,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            backgroundColor: '#0f172b',
            color: '#ffffff',
            border: '1px solid #a855f7',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.45)',
            padding: '0.85rem 1.75rem',
            borderRadius: '9999px',
            fontSize: '0.925rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backdropFilter: 'blur(16px)',
            animation: 'fadeInUp 0.3s ease-out forwards',
          }}
        >
          {toastMessage}
        </div>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return ctx;
}
