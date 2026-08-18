import "@puzzlepuzzle/ui/src/styles/theme.css";
import "./globals.css";

export const metadata = { title: "PuzzlePuzzle - Player App" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "var(--color-surface)", color: "var(--color-foreground)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, display: "flex", flexDirection: "column", width: "100%", maxWidth: "1024px", margin: "0 auto", padding: "var(--spacing-6)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
