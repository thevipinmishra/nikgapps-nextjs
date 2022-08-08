import { sage } from "@radix-ui/colors";
import Link from "next/link";
import dayjs from "dayjs";
import Anchor from "../Anchor";
import Box from "../Box";
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import { List, ListItem } from "../List";
import Typography from "../Typography";

const Footer = () => {
  return (
    <Box
      as="footer"
      css={{
        paddingBlock: "1.5rem",
        marginBlockStart: 48,
        borderTop: `2px dashed ${sage.sage4}`,
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h4"
            css={{ marginBlockEnd: 24, textAlign: "center" }}
          >
            Links
          </Typography>

          <Box
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            <Button
              as="a"
              size="small"
              variant="light"
              href="https://forum.xda-developers.com/android/software/arm64-nikgapps-t3915866"
            >
              XDA Thread
            </Button>

            <Button
              as="a"
              size="small"
              variant="light"
              href="https://t.me/NikGapps"
            >
              Join on Telegram
            </Button>

            <Button
              as="a"
              size="small"
              variant="light"
              href="https://t.me/NikGappsGroup"
            >
              Get Help
            </Button>

            <Button
              as="a"
              size="small"
              variant="light"
              href="https://t.me/inikhilmenghani"
            >
              Contact Developer
            </Button>
          </Box>
        </Box>

        <Box css={{ marginBlockStart: 40, textAlign: "center" }}>
          <Typography css={{ color: sage.sage10 }}>
            © {dayjs().year()} NikGApps
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
