import Box from "../Box";
import Typography from "../Typography";
import Container from "../Container";

const Hero = () => {
  return (
    <Box css={{ paddingBlock: "4rem" }}>
      <Container>
        <Typography variant="h1" as="h1" css={{ textAlign: "center" }}>
          Google Apps Package for Everyone!
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
