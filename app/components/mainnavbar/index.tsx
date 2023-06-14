"use client";

import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import IconLogo from "../icon/IconLogo";
import {
  IconBuildingBank,
  IconBusinessplan,
  IconDots,
  IconDotsVertical,
  IconPigMoney,
} from "@tabler/icons-react";

const MainNavbar = () => {
  const collapseItems = [
    "Beranda",
    "Tabungan",
    "Deposito",
    "Kredit",
    "Berita",
    "Tentang Kami",
    "WBS",
    "Karir",
    "Login",
  ];
  return (
    <Navbar shouldHideOnScroll>
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn={"xs"}
          className="p-2"
        />
        <IconLogo width={32} classname="p-1" />
        <strong className="text-sky-900 ps-2">PT. BPR CAHAYA FAJAR</strong>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Item key={"beranda"}>
          <Link href={"/"}> Beranda</Link>
        </Navbar.Item>
        <Navbar.Item>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                Produk
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$primary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="tabungan"
                showFullDescription
                description="Suku Bunga Tinggi"
                icon={<IconPigMoney />}
              >
                <Link href="/produk/tabungan">Tabungan</Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="deposito"
                showFullDescription
                description="Investasi Terbaik"
                icon={<IconBusinessplan />}
              >
                <Link href="/produk/deposito">Deposito</Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="kredit"
                showFullDescription
                description="Bunga Kompetitif"
                icon={<IconBuildingBank />}
              >
                <Link href="/produk/kredit">Kredit</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
        <Link href={"news"}> Berita</Link>

        <Link href={"about"}> Tentang Kami</Link>
      </Navbar.Content>
      <Navbar.Content>
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Trigger>
              <span className="p-2 hover:bg-slate-100 rounded-lg">
                <IconDotsVertical />
              </span>
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu aria-label="ACME features">
            <Dropdown.Item key="wbs">
              <Link href="/wbs">WBS</Link>
            </Dropdown.Item>
            <Dropdown.Item key="pengajuan_kredit">
              <Link href="/submission">Pengajuan Kredit</Link>
            </Dropdown.Item>
            <Dropdown.Item key="karir">Karir</Dropdown.Item>
            <Dropdown.Item key="login">
              <Link href="http://bprcahayafajar.co.id:82/bprcf/" passHref>
                Login
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link color="inherit" href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
