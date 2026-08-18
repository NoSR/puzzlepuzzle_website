import styles from './page.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>System Settings</h1>
        <p>Configure global application settings</p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.section}>
          <h2>Player App Settings</h2>
          
          <div className={styles.formGroup}>
            <div className={styles.toggleRow}>
              <div>
                <label className={styles.label}>Require Waiver Signature</label>
                <p className={styles.description}>Prompt players to sign a waiver before starting</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.toggleRow}>
              <div>
                <label className={styles.label}>Enable Briefing Mode</label>
                <p className={styles.description}>Show the story briefing to players</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Web App Settings</h2>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Homepage Hero Banner URL</label>
            <p className={styles.description}>Enter the image URL for the main banner on the homepage</p>
            <input 
              type="text" 
              className={styles.input} 
              defaultValue="https://example.com/banners/main-hero.jpg"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.saveButton}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
