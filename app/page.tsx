"use client";
import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Text,
  useTheme,
} from "@nextui-org/react";
import { IconAccessibleOffFilled } from "@tabler/icons-react";
import IconLogo from "./components/icon/IconLogo";

export default function Home() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
  const { isDark } = useTheme();
  return (
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />

        <Text b color="inherit" hideIn="xs">
          <IconLogo />
          bprcf
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline"
      >
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
              Features
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
              key="autoscaling"
              showFullDescription
              description="ACME scales apps to meet user demand, automagically, based on load."
              icon={<IconAccessibleOffFilled />}
            >
              Autoscaling
            </Dropdown.Item>
            <Dropdown.Item
              key="usage_metrics"
              showFullDescription
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Usage Metrics
            </Dropdown.Item>
            <Dropdown.Item
              key="production_ready"
              showFullDescription
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Production Ready
            </Dropdown.Item>
            <Dropdown.Item
              key="99_uptime"
              showFullDescription
              description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              +99% Uptime
            </Dropdown.Item>
            <Dropdown.Item
              key="supreme_support"
              showFullDescription
              description="Overcome any challenge with a supporting team ready to respond."
            >
              +Supreme Support
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
