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
import NavbarCollapse from "@nextui-org/react/types/navbar/navbar-collapse";
import Link from "next/link";

const MainNavbar = () => {
  const rightMenu = [
    { title: "Permohonan Kredit", link: "/submission" },
    { title: "WBS", link: "/wbs" },
    { title: "Karir", link: "/karir" },
    { title: "Login", link: "http://bprcahayafajar.co.id:82/bprcf" },
  ];
  const collapseItems = [
    { title: "Beranda", link: "/" },
    { title: "Tabungan", link: "/produk/tabungan" },
    { title: "Deposito", link: "/produk/deposito" },
    { title: "Kredit", link: "/produk/kredit" },
    { title: "Berita", link: "/news" },
    { title: "Tentang Kami", link: "/about" },
    { title: "Login", link: "http://bprcahayafajar.co.id:82/bprcf" },
  ];

  return (
    <>
      <Navbar shouldHideOnScroll variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />
          <IconLogo width={25} />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item key={"beranda"}>
            <Link href={"/"} color={"text"}>
              Beranda
            </Link>
          </Navbar.Item>
          <Navbar.Item key={"produk"}>
            <div className="dropdown dropdown-end">
              <Link href="#" color={"text"}>
                <label tabIndex={0}>Produk</label>
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/produk/tabungan"} color={"text"}>
                    Tabungan
                  </Link>
                </li>
                <li>
                  <Link href={"/produk/deposito"} color={"text"}>
                    Deposito
                  </Link>
                </li>
                <li>
                  <Link href={"/produk/kredit"} color={"text"}>
                    Kredit
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Item>
          <Navbar.Item key={"berita"}>
            <Link href={"/produk/tabungan"} color={"text"}>
              Berita
            </Link>
          </Navbar.Item>
          <Navbar.Item key={"about"}>
            <Link href={"/about"} color={"text"}>
              Tentang Kami
            </Link>
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
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52"
              >
                {rightMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} color={"text"}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link href={item.link} color={"text"}>
                {item.title}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavbar;
