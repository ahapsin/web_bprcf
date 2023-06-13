"use client";
import { Text, Spacer, NextUIProvider } from "@nextui-org/react";
import { Box } from "./Box";
import Hero from "./components/hero";
import Cta from "./components/cta";
import Section from "./components/section";
import Card from "./components/card";
import Title from "./components/title";
import CardBlog from "./components/card/cardblog";
import Testimoni from "./components/testimoni";
const text = "Almost before we knew it, we had left the ground.";
export const Content = () => (
  <NextUIProvider>
    {" "}
    <Hero />
    <Box>
      <Section />
      <Title
        heading="cek penawaran terbaik kami !"
        subtitle="nikmati produk produk pelayanan"
      />
      <Testimoni />
    </Box>
  </NextUIProvider>
);
