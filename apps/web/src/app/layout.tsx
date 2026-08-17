import "./globals.css";
import GNB from "../components/GNB";
import Footer from "../components/Footer";

export const metadata = { title: "PuzzlePuzzle" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GNB />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
