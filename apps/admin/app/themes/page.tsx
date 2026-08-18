import styles from './page.module.css';

export default function ThemesPage() {
  const dummyThemes = [
    { id: 1, name: 'Secret of the Pharaoh', duration: '60 min', difficulty: 'Hard', status: 'Active' },
    { id: 2, name: 'Haunted Mansion', duration: '75 min', difficulty: 'Medium', status: 'Maintenance' },
    { id: 3, name: 'Space Escape', duration: '60 min', difficulty: 'Medium', status: 'Active' },
    { id: 4, name: 'Bank Heist', duration: '90 min', difficulty: 'Hard', status: 'Active' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Themes Management</h1>
          <p>Manage your escape room themes</p>
        </div>
        <button className={styles.addButton}>+ Add New Theme</button>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Duration</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyThemes.map(theme => (
                <tr key={theme.id}>
                  <td>{theme.id}</td>
                  <td><strong>{theme.name}</strong></td>
                  <td>{theme.duration}</td>
                  <td>{theme.difficulty}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[theme.status.toLowerCase()]}`}>
                      {theme.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn}>Edit</button>
                    <button className={`${styles.actionBtn} ${styles.danger}`}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
