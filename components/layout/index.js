import Box from "../Box";
import Container from "../Container";
import Typography from "../Typography";
import Nav from "./Nav";

export default function Layout({ children, withContent }) {
  return (
    <Box>
      <Nav />
      <Box as="main">
        {withContent && (
          <Box css={{ paddingBlock: "2rem", textAlign: "center" }}>
            <Container>
              <Typography variant="h2" as="h2" css={{ color: "$primary" }}>
                {withContent.title}
              </Typography>
            </Container>
          </Box>
        )}
        <Box>
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
}
