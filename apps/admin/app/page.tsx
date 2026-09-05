import styles from './page.module.css';

export default function DashboardPage() {
  const dummyThemes = [
    { id: 1, name: 'Secret of the Pharaoh', status: '활성', todayPlays: 12 },
    { id: 2, name: 'Haunted Mansion', status: 'Maintenance', todayPlays: 0 },
    { id: 3, name: '우주 탈출', status: '활성', todayPlays: 25 },
    { id: 4, name: '은행 강도', status: '활성', todayPlays: 18 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>대시보드</h1>
        <p>다시 오신 것을 환영합니다, Admin</p>
      </header>
      
      <div className={styles.dashboardGrid}>
        <div className={styles.mainContent}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>테마 현황 & Activity</h2>
            </div>
            <div className={styles.cardContent}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Theme Name</th>
                    <th>Status</th>
                    <th>Today's Plays</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyThemes.map(theme => (
                    <tr key={theme.id}>
                      <td>{theme.name}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[theme.status.toLowerCase()]}`}>
                          {theme.status}
                        </span>
                      </td>
                      <td>{theme.todayPlays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className={styles.widgetsGrid}>
          <div className={styles.widget}>
            <h3>Connection Stats</h3>
            <div className={styles.statValue}>1,245</div>
            <div className={styles.statLabel}>활성 users today (Web + Player)</div>
          </div>
          
          <div className={styles.widget}>
            <h3>일일 예상 매출</h3>
            <div className={styles.statValue}>₩2,450,000</div>
            <div className={styles.statLabel}>Estimated today</div>
          </div>
          
          <div className={styles.widget}>
            <h3>Weekly Revenue</h3>
            <div className={styles.statValue}>₩15,800,000</div>
            <div className={styles.statLabel}>Estimated this week</div>
          </div>
          
          <div className={styles.widget}>
            <h3>Monthly Revenue</h3>
            <div className={styles.statValue}>₩64,200,000</div>
            <div className={styles.statLabel}>Estimated this month</div>
          </div>
        </div>
      </div>
    </div>
  );
}
