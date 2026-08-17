import styles from './login.module.css';
import { Button } from '@puzzlepuzzle/ui';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Sign In</h1>
        <p>Login to manage your reservations and view your escape records.</p>
        
        <Button variant="outline" className={styles.googleBtn}>
          <div className={styles.icon} />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
