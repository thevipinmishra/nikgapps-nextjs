import Head from "next/head";
import Stack from "../components/Stack";
import Box from "../components/Box";
import Layout from "../components/layout";
import Typography from "../components/Typography";
import Anchor from "../components/Anchor";
import NikAvatar from "../assets/images/NikAvatar.jpg";
import AryaAvatar from "../assets/images/Arya.png";
import Image from "../components/Image";
import genericAvatar from "../assets/images/male.svg";

const teamData = [
  {
    name: "Nikhil Menghani",
    role: "Nikgapps Founder & Maintainer",
    avatar: NikAvatar,
    intro:
      "I am an Android Anthusiast, a software developer by profession. I spend my time creating Softwares that saves my time.",
    links: {
      facebook: "https://www.facebook.com/nikhilmenghani",
      telegram: "http://t.me/inikhilmenghani",
    },
  },
  {
    name: "Vipin Mishra",
    role: "Frontend Developer",
    intro:
      "I spend my time creating good looking websites on the Internet & try to share what I learn by making videos on the Youtube Channel",
    links: {
      portfolio: "https://thevipinmishra.github.io/",
      telegram: "http://t.me/thevipinmishra",
    },
  },
  {
    name: "DrAMoled",
    role: "Project Analyst",
    avatar: AryaAvatar,
    intro:
      "I'm an Android enthusiast too, more than Nik obviously by tremendous amount. Have some little knowledge about Android if that counts. I criticize Nik work because i got no better things to do. Also i love graphic design and cats",
    links: {
      telegram: "http://t.me/DrAMoled",
      mail: "mailto:dramoled@gmail.com",
    },
  },
];

const Team = () => {
  return (
    <>
      <Head>
        <title>Team | Nikgapps</title>
      </Head>
      <Stack gap={4}>
        {teamData.map((item, idx) => (
          <Box
            key={idx}
            css={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
              padding: 24,
              borderRadius: 6,
            }}
          >
            <Stack>
              <Image
                css={{
                  height: 100,
                  width: 100,
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                }}
                src={item.avatar ? item.avatar.src : genericAvatar.src}
              />
              <Typography variant="h3" as="h3">
                {item.name}
              </Typography>
              <Typography css={{ color: "$primary" }}>{item.role}</Typography>
              <Typography>{item.intro}</Typography>
            </Stack>
            <Stack
              css={{
                flexDirection: "row",
                gap: ".65rem",
                color: "$textLight",
                marginBlockStart: "1rem",
              }}
            >
              {Object.entries(item.links).map((item, idx) => (
                <Anchor
                  key={idx}
                  href={item[1]}
                  target="_blank"
                  css={{ textDecoration: "underline" }}
                >
                  {item[0]}
                </Anchor>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );
};

Team.getLayout = (page) => (
  <Layout
    withContent={{
      title: "Team",
    }}
  >
    {page}
  </Layout>
);

export default Team;
