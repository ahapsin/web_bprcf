"use client";
import { useTheme } from "@nextui-org/react";
import { Content } from "./Content";

export default function Home() {
  const collapseItems = [
    "Beranda",
    "Produk",
    "Tentang Kami",
    "WBS",
    "Hubungi Kami",
  ];
  const { isDark } = useTheme();
  return (
    <>
      <Content />
    </>
  );
}
