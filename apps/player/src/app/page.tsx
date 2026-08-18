import Link from "next/link";
import { Button } from "@puzzlepuzzle/ui";

export default function WelcomePage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      textAlign: "center",
      gap: "var(--spacing-8)"
    }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "var(--spacing-4)" }}>환영합니다!</h1>
        <p style={{ fontSize: "1.5rem", color: "var(--color-foreground)", opacity: 0.8 }}>
          예약자: 김퍼즐 님<br />
          테마: 잃어버린 기억을 찾아서<br />
          인원: 4명
        </p>
      </div>

      <Link href="/briefing" style={{ textDecoration: "none" }}>
        <Button size="lg" style={{ fontSize: "2rem", padding: "var(--spacing-6) var(--spacing-8)" }}>
          시작하기
        </Button>
      </Link>
    </div>
  );
}
