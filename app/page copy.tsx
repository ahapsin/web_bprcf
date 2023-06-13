"use client";
import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Text,
  useTheme,
} from "@nextui-org/react";
import {
  IconBuildingBank,
  IconBusinessplan,
  IconDots,
  IconListDetails,
  IconPigMoney,
} from "@tabler/icons-react";
import IconLogo from "./components/icon/IconLogo";
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
