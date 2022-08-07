import { mauve } from "@radix-ui/colors";
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
              <Typography
                variant="h2"
                as="h2"
                css={{
                  display: "inline-block",
                  color: mauve.mauve12,
                  position: "relative",
                  "&::after": {
                    content: `''`,
                    position: "absolute",
                    height: 3,
                    width: 30,
                    backgroundColor: "$primary",
                    left: "-3rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                  "&::before": {
                    content: `''`,
                    position: "absolute",
                    height: 3,
                    width: 30,
                    backgroundColor: "$primary",
                    right: "-3rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                }}
              >
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
