import Head from "next/head";
import Box from "../components/Box";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Packages from "../components/sections/Packages";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Nikgapps</title>
      </Head>

      <Hero />
      <Features />
      <Packages />
      <Footer />
    </Box>
  );
}
