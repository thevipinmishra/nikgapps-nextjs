import Box from "../Box";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import Typography from "../Typography";
import Container from "../Container";

const Packages = () => {
  return (
    <Box
      css={{
        paddingBlock: "2.5rem",
        backgroundColor: "$gray1",
      }}
    >
      <Container>
        <SectionTitle>Packages</SectionTitle>
        <Typography css={{ textAlign: "center" }}>
          Here's a list of all the Packages and Addons NikGApps has to offer,
          please head over to <Link href="/downloads">Downloads</Link> page to
          download one!
        </Typography>
      </Container>
    </Box>
  );
};

export default Packages;
