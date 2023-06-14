import { Inter } from "next/font/google";
import Footer from "./components/footer";
import MainNavbar from "./components/mainnavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BPR Cahaya Fajar",
  description: "Mitra Terpercaya Dalam Usaha Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
