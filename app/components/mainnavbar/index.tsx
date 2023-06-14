"use client";

import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import IconLogo from "../icon/IconLogo";
import {
  IconBuildingBank,
  IconBusinessplan,
  IconDots,
  IconDotsVertical,
  IconPigMoney,
} from "@tabler/icons-react";
import Link from "next/link";

const MainNavbar = () => {
  const collapseItems = [
    { title: "Beranda", link: "/" },
    { title: "Tabungan", link: "/produk/tabungan" },
    { title: "Deposito", link: "/produk/deposito" },
    { title: "Kredit", link: "/produk/kredit" },
    { title: "Berita", link: "/produk/news" },
    { title: "Tentang Kami", link: "/about" },
    { title: "WBS", link: "/WBS" },
    { title: "Karir", link: "/karir" },
    { title: "Login", link: "http://bprcahayafajar.co.id:82/bprcf" },
  ];
  return (
    <>
      <Navbar shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <IconLogo width={25} />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item key={"beranda"}>
            <Link href={"/"}>Beranda</Link>
          </Navbar.Item>
          <Navbar.Item key={"produk"}>
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>Produk</label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/produk/tabungan"}>Tabungan</Link>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </Navbar.Item>
          <Navbar.Item key={"berita"}>
            <Link href={"/produk/tabungan"}>Berita</Link>
          </Navbar.Item>
          <Navbar.Item key={"about"}>
            <Link href={"/about"}>Tentang Kami</Link>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item key={"more"}>
            <div className="dropdown dropdown-end">
              <span tabIndex={0} className="bg-slate-800 cursor-pointer">
                <IconDotsVertical />
              </span>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {collapseItems.map((item, index) => (
                  <li key={item.id}>
                    <Link href={"/produk/tabungan"}>Tabungan</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default MainNavbar;
