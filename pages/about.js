import Head from "next/head";
import Layout from "../components/layout";
import Typography from "../components/Typography";
import Stack from "../components/Stack";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Nikgapps</title>
      </Head>
      <Stack>
        <Typography>
          NikGapps project started with the goal to provide custom gapps
          packages that suits everyone's needs. A package that a user needs but
          cannot find and ends up setting up the device installing more apps and
          removing unwanted apps manually.
        </Typography>

        <Typography>
          NikGapps is a gapps package built from my own device. As my device is
          always updated with latest version of Google Apps, every time I build
          a new package, I am on latest version of Google Apps.
        </Typography>

        <Typography>
          NikGapps is a bit different than other Gapps packages. It focuses on
          providing apps that most of the people uses but can't find it in other
          Gapps packages and ends up installing the apps manually.
        </Typography>

        <Typography>
          NikGapps doesn't have stock YouTube, instead it has YouTube vanced. It
          doesn't have Pixel Launcher, instead it has Lawnchair launcher
        </Typography>

        <Typography>
          It also allows optimizing Google Play Services (when you turn off Find
          My Device) so that you can sleep with peace without having to worry
          about Google play services eating your battery.
        </Typography>

        <Typography>
          Just like OpenGapps, it allows you to dirty flash it anytime you want.
          It also supports addon.d so you need not flash the package again and
          again after every nightly flash.
        </Typography>

        <Typography>
          NikGapps comes with nikgapps.config file (can be found at
          /sdcard/NikGapps folder) which allows you to configure your
          installation. Now you can control the installation the way you desire.
        </Typography>

        <Typography>
          NikGapps offers separate addon.d scripts for each package that it
          comes with. Easy to control which package you want to restore after
          dirty flash!
        </Typography>

        <Typography>
          NikGapps also comes with debloater.config file (can be found at
          /sdcard/NikGapps folder) which allows you to configure the apps/files
          you would like to debloat. The same is persistent across dirty
          flashes.
        </Typography>
      </Stack>
    </>
  );
};

About.getLayout = (page) => (
  <Layout
    withContent={{
      title: "About",
    }}
  >
    {page}
  </Layout>
);

export default About;
