"use client";
import { Dropdown, Navbar, Text, useTheme } from "@nextui-org/react";
import {
  IconBuildingBank,
  IconBusinessplan,
  IconDotsVertical,
  IconPigMoney,
} from "@tabler/icons-react";
import IconLogo from "../icon/IconLogo";
import Link from "next/link";
const MainNavbar = () => {
  const collapseItems = [
    "Beranda",
    "Tabungan",
    "Deposito",
    "Kredit",
    "Berita",
    "Tentang Kami",
  ];
  const { isDark } = useTheme();
  return (
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />
        <Text b color="inherit">
          <div className="flex place items-center">
            <div className="p-2">
              <IconLogo width={32} />
            </div>
            <div className="p-2 flex items-center text-sky-900 text-sm">
              <strong>PT. BPR CAHAYA FAJAR </strong>
            </div>
          </div>
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link href="/">Beranda</Navbar.Link>
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
        <Navbar.Link href="/blog">Berita</Navbar.Link>
        <Navbar.Link href="/about">Tentang Kami</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
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
              more
            </Dropdown.Button>
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
                login
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
