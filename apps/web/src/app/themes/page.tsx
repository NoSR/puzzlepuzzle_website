import Link from 'next/link';
import styles from './themes.module.css';

export default function ThemesPage() {
  const themes = [
    { id: '1', title: 'Mystery Mansion', genre: 'Horror', difficulty: 'Hard' },
    { id: '2', title: 'Space Escape', genre: 'Sci-Fi', difficulty: 'Medium' },
    { id: '3', title: 'Bank Heist', genre: 'Action', difficulty: 'Easy' },
    { id: '4', title: 'Jungle Quest', genre: 'Adventure', difficulty: 'Medium' },
  ];

  return (
    <div className={styles.container}>
      <h1>All Themes</h1>
      <p>Find the perfect escape room for your team.</p>
      
      <div className={styles.grid}>
        {themes.map((theme) => (
          <Link key={theme.id} href={`/themes/${theme.id}`} className={styles.themeCard}>
            <div className={styles.imagePlaceholder}>Image Placeholder</div>
            <h2>{theme.title}</h2>
            <p>Genre: {theme.genre}</p>
            <p>Difficulty: {theme.difficulty}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
