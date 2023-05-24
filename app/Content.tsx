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
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        <Card
          img="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          title="TABUNGAN"
          subtitle="Suku Bunga Tinggi"
          desc="Dengan membuka dan memiliki tabungan Cahaya Fajar, maka Anda akan mendapatkan banyak kemudahan beserta keuntungan dalam transaksi perbankan."
        />
        <Card
          img="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          title="DEPOSITO"
          subtitle="Investasi Terbaik"
          desc="Deposito Cahaya Fajar merupakan pilihan yang aman dan sangat menguntungkan bagi anda yang ingin menyimpan dan mengembangkan dana anda secara pasti."
        />
        <Card
          img="https://images.unsplash.com/photo-1537849244241-351b40016963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          title="KREDIT"
          subtitle="Bunga Kompetitif"
          desc="Mewujudkan rencana dalam hidup adalah impian bagi semua orang, tentu banyak hal yang membutuhkan perencanaan dan dana untuk mewujudkan impian anda."
        />
      </div>
      <Testimoni />
    </Box>
  </NextUIProvider>
);
