import styles from './page.module.css';

export default function ThemesPage() {
  const dummyThemes = [
    { id: 1, name: 'Secret of the Pharaoh', duration: '60 min', difficulty: 'Hard', status: '활성' },
    { id: 2, name: 'Haunted Mansion', duration: '75 min', difficulty: 'Medium', status: 'Maintenance' },
    { id: 3, name: '우주 탈출', duration: '60 min', difficulty: 'Medium', status: '활성' },
    { id: 4, name: '은행 강도', duration: '90 min', difficulty: 'Hard', status: '활성' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>테마 목록 Management</h1>
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
                <th>난이도</th>
                <th>Status</th>
                <th>액션s</th>
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
                    <button className={styles.actionBtn}>수정</button>
                    <button className={`${styles.actionBtn} ${styles.danger}`}>삭제</button>
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
