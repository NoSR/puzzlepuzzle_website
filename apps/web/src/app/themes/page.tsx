import Link from 'next/link';
import styles from './themes.module.css';

export default function ThemesPage() {
  const themes = [
    { id: '1', title: '미스터리 맨션', genre: '공포', difficulty: 'Hard' },
    { id: '2', title: '우주 탈출', genre: 'SF', difficulty: 'Medium' },
    { id: '3', title: '은행 강도', genre: '액션', difficulty: 'Easy' },
    { id: '4', title: 'Jungle Quest', genre: 'Adventure', difficulty: 'Medium' },
  ];

  return (
    <div className={styles.container}>
      <h1>All 테마 목록</h1>
      <p>Find the perfect escape room for your team.</p>
      
      <div className={styles.grid}>
        {themes.map((theme) => (
          <Link key={theme.id} href={`/themes/${theme.id}`} className={styles.themeCard}>
            <div className={styles.imagePlaceholder}>이미지 준비중</div>
            <h2>{theme.title}</h2>
            <p>장르: {theme.genre}</p>
            <p>난이도: {theme.difficulty}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
