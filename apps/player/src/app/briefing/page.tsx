import Link from "next/link";
import { Button } from "@puzzlepuzzle/ui";

export default function BriefingPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      padding: "var(--spacing-4) 0"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-6)" }}>사전 브리핑</h1>
      
      <div style={{
        width: "100%",
        maxWidth: "800px",
        aspectRatio: "16 / 9",
        backgroundColor: "var(--color-border)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "var(--spacing-8)",
        color: "var(--color-foreground)",
        fontSize: "1.5rem"
      }}>
        영상/이미지 영역 (Placeholder)
      </div>

      <Link href="/consent" style={{ textDecoration: "none" }}>
        <Button size="lg" style={{ fontSize: "1.5rem", padding: "var(--spacing-4) var(--spacing-8)" }}>
          서약서 작성하기
        </Button>
      </Link>
    </div>
  );
}
