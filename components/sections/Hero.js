import Box from "../Box";
import Typography from "../Typography";
import Container from "../Container";
import Button from "../Button";
import Flex from "../Flex";
import Stack from "../Stack";
import { IconCloudDownload, IconInfoSquare } from "@tabler/icons";

const Hero = () => {
  return (
    <Box
      css={{
        paddingBlock: "4rem",
        textAlign: "center",
        borderTop: ".5rem solid",
        borderTopColor: "$primary",
        backgroundColor: "$gray1",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23e9ecef' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <Container>
        <Stack gap="2">
          <Typography variant="h1" as="h1">
            Google Apps Package for Everyone!
          </Typography>
          <Typography css={{ color: "$gray11" }}>
            Have full control over your GApps installation, widely supported
            accross Android versions and regular updates!
          </Typography>
          <Flex direction="column" gap="2">
            <Button size="large">
              <IconCloudDownload /> Downloads
            </Button>
            <Button size="large">
              <IconInfoSquare /> Know More
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
