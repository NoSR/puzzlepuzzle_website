export default function ReadyPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      textAlign: "center",
      gap: "var(--spacing-6)"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "var(--spacing-4)" }}>입장이 완료되었습니다!</h1>
      <p style={{ fontSize: "1.5rem", color: "var(--color-foreground)", opacity: 0.8, lineHeight: "1.6" }}>
        안내 직원이 배정될 때까지 잠시만 대기해 주세요.<br />
        곧 테마 입장 안내를 도와드리겠습니다.
      </p>
      
      <div style={{
        marginTop: "var(--spacing-8)",
        width: "60px",
        height: "60px",
        border: "6px solid var(--color-border)",
        borderTopColor: "var(--color-primary)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
}
