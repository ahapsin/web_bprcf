import { Box } from "./Box";
import { Content } from "./Content";
import Card from "./components/card";
import Announcement from "./components/announcement";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Section from "./components/section";
import Testimoni from "./components/testimoni";
import "./globals.css";
import { Inter } from "next/font/google";
import CardBlog from "./components/card/cardblog";
import Title from "./components/title";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Announcement />
        <Box
          css={{
            maxW: "100%",
          }}
        >
          {children}
          <Content />
        </Box>
        <div className="flex">
          <Card />
          <Card />
          <Card />
        </div>
        <Section />
        <Title />
        <div className="flex gap-2 py-6">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
        <Cta />
        <Testimoni />
        <Footer />
      </body>
    </html>
  );
}
