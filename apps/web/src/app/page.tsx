import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const featuredThemes = [
    { id: '1', title: 'Mystery Mansion', genre: 'Horror' },
    { id: '2', title: 'Space Escape', genre: 'Sci-Fi' },
    { id: '3', title: 'Bank Heist', genre: 'Action' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to PuzzlePuzzle</h1>
        <p>Experience the best escape rooms in town.</p>
      </section>

      <section>
        <h2>Featured Themes</h2>
        <div className={styles.slider}>
          {featuredThemes.map((theme) => (
            <Link key={theme.id} href={`/themes/${theme.id}`} className={styles.themeCard}>
              <div className={styles.imagePlaceholder}>Image Placeholder</div>
              <h3>{theme.title}</h3>
              <p>Genre: {theme.genre}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
