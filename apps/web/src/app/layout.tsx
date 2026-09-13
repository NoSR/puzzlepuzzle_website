import "./globals.css";
import GNB from "../components/GNB";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import CubeParticles from "../components/CubeParticles";
import BookingModal from "../components/BookingModal";
import { StoreProvider } from "../context/StoreContext";

export const metadata = {
  title: "퍼즐퍼즐 (Puzzle Puzzle) | 2026 트렌디 인터랙티브 방탈출",
  description: "두뇌를 자극하는 스타일리시한 공간, 3D 입체 퍼즐 & 네온 감성 포토존 - 퍼즐퍼즐 홍대점",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StoreProvider>
          <CursorGlow />
          <CubeParticles />
          <GNB />
          <main style={{ position: 'relative', zIndex: 2 }}>{children}</main>
          <Footer />
          <BookingModal />
        </StoreProvider>
      </body>
    </html>
  );
}
