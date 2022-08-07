import Head from "next/head";
import Box from "../components/Box";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Nikgapps</title>
      </Head>

      <Hero />
    </Box>
  );
}
