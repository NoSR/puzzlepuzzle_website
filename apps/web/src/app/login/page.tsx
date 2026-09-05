import styles from './login.module.css';
import { Button } from '@puzzlepuzzle/ui';

export default function 로그인Page() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Sign In</h1>
        <p>로그인 to manage your reservations and view your escape records.</p>
        
        <Button variant="outline" className={styles.googleBtn}>
          <div className={styles.icon} />
          구글로 로그인
        </Button>
      </div>
    </div>
  );
}
