import styles from './theme-detail.module.css';
import { Button } from '@puzzlepuzzle/ui';

export default function ThemeDetailPage({ params }: { params: { id: string } }) {
  // Mock data for display purposes
  const theme = {
    id: params.id,
    title: `Theme ${params.id}`,
    genre: 'Mystery',
    difficulty: 'Hard',
    description: 'This is a placeholder description for the theme. Will be replaced by actual data later.',
    duration: '60 mins',
    players: '2-6 players'
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>Hero 이미지 준비중</div>
      
      <div className={styles.details}>
        <h1>{theme.title}</h1>
        <p><strong>장르:</strong> {theme.genre}</p>
        <p><strong>난이도:</strong> {theme.difficulty}</p>
        <p><strong>Duration:</strong> {theme.duration}</p>
        <p><strong>Players:</strong> {theme.players}</p>
        <p>{theme.description}</p>
      </div>

      <div className={styles.reservation액션}>
        <h2>Ready to Escape?</h2>
        <p>Reservation feature coming soon!</p>
        <Button variant="primary" size="lg">Book Now</Button>
      </div>
    </div>
  );
}
