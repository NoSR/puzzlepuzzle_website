import "./globals.css";
import GNB from "../components/GNB";
import Footer from "../components/Footer";

export const metadata = { title: "퍼즐퍼즐 | 방탈출 카페", description: "최고의 방탈출 경험 - 퍼즐퍼즐" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GNB />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
