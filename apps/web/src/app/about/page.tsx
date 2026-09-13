'use client';

import React from 'react';
import styles from './about.module.css';
import { useStore } from '../../context/StoreContext';
import NoiseOverlay from '../../components/NoiseOverlay';

export default function AboutPage() {
  const { storeConfig, openBookingModal } = useStore();

  return (
    <div className={styles.container}>
      <NoiseOverlay opacity={0.03} />

      <header className={styles.pageHeader}>
        <span className={styles.pageTag}>BRAND STORY & LOCATION</span>
        <h1 className={styles.pageTitle}>퍼즐퍼즐 소개 & 오시는 길</h1>
      </header>

      {/* 브랜드 스토리 박스 */}
      <section className={styles.storyBox}>
        <div className={styles.storyLead}>
          "단순한 자물쇠 열기가 아닌, 실제 차원을 넘나드는 감각적인 퍼즐 플레이"
        </div>

        <p className={styles.storyText}>
          <strong>'퍼즐퍼즐(Puzzle Puzzle)'</strong>은 상상 속 입체 퍼즐과 고난도 트릭 장치를 트렌디한 공간 디자인과 결합한 프리미엄 방탈출 체험 스토어입니다.
          시각, 청각, 촉각을 모두 자극하는 몰입형 기믹과 20대 감성에 맞춘 세련된 네온 조명 인테리어로 최고의 모험과 인증샷을 선사합니다.
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureTitle}>🎮 독창적 입체 기믹</div>
            <p className={styles.featureText}>
              자체 개발한 3D 루빅스 큐브 연동 장치와 디지털 모션 센서 기반 퍼즐로 손끝에서 펼쳐지는 놀라운 손맛을 경험하세요.
            </p>
          </div>

          <div className={styles.featureItemPink}>
            <div className={styles.featureTitle}>📸 감성 포토존 스팟</div>
            <p className={styles.featureText}>
              20대 취향저격 네온 조명과 파스텔톤 시그니처 큐브 오브제 연출로 플레이 전후 인생샷을 남길 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 매장 정보 & 오시는 길 */}
      <section className={styles.storeInfoCard}>
        <div className={styles.infoCol}>
          <h3>홍대 플래그십 스토어</h3>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>주소</span>
            <span className={styles.infoVal}>{storeConfig.address}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>연락처</span>
            <span className={styles.infoVal}>{storeConfig.phone}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>운영시간</span>
            <span className={styles.infoVal}>{storeConfig.businessHours}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>인스타그램</span>
            <span className={styles.infoVal}>@puzzlepuzzle_official</span>
          </div>
        </div>

        <div className={styles.infoCol} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3>대중교통 & 주차 안내</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.7', margin: '0 0 1rem 0' }}>
              • 지하철 2호선 / 공항철도 <strong>홍대입구역 9번 출구</strong>에서 홍대 걷고싶은거리 방면 도보 5분 거리입니다.<br />
              • 건물 내 주차 공간이 협소하므로 인근 공영주차장 이용을 권장합니다.
            </p>
          </div>

          <button
            onClick={() => openBookingModal()}
            style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
            }}
          >
            지금 홍대점 예약하기 🎯
          </button>
        </div>
      </section>
    </div>
  );
}
