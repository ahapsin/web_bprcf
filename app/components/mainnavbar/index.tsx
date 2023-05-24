"use client";
import { Dropdown, Navbar, Link, Text, useTheme } from "@nextui-org/react";
import {
  IconBuildingBank,
  IconBusinessplan,
  IconDotsVertical,
  IconPigMoney,
} from "@tabler/icons-react";
import IconLogo from "../icon/IconLogo";
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
              <IconLogo width="32px" />
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
              Tabungan
            </Dropdown.Item>
            <Dropdown.Item
              key="deposito"
              showFullDescription
              description="Investasi Terbaik"
              icon={<IconBusinessplan />}
            >
              Deposito
            </Dropdown.Item>
            <Dropdown.Item
              key="kredit"
              showFullDescription
              description="Bunga Kompetitif"
              icon={<IconBuildingBank />}
            >
              Kredit
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link href="/blog">Berita</Navbar.Link>
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
              Tentang Kami
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "32px",
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
                },
              },
            }}
          >
            <Dropdown.Item key="tabungan">
              <Link href="/about/#visi-misi">Visi Misi</Link>
            </Dropdown.Item>

            <Dropdown.Item key="struktur">
              <Link href="about/#struktur">Struktur</Link>
            </Dropdown.Item>
            <Dropdown.Item key="laporan">
              <Link href="about/#laporan">Laporan</Link>
            </Dropdown.Item>
            <Dropdown.Item key="medsos">
              <Link href="about/#visi-misi">Media Sosial</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
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
                <IconDotsVertical />
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "32px",
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
                  },
                },
              }}
            >
              <Dropdown.Item key="wbs">
                <Link href="/wbs">WBS</Link>
              </Dropdown.Item>
              <Dropdown.Item key="pengajuan_kredit">
                Pengajuan Kredit
              </Dropdown.Item>
              <Dropdown.Item key="karir">Karir</Dropdown.Item>
              <Dropdown.Item key="login">
                <Link
                  href="https://bprcahayafajar.co.id"
                  isExternal
                  target="blank"
                >
                  login
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Link>
        {/* <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item> */}
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
