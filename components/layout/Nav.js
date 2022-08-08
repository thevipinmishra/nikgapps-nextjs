import Link from "next/link";
import { useRouter } from "next/router";
import {
  IconMenu,
  IconInfoCircle,
  IconCloudDownload,
  IconChartBar,
  IconUsers,
  IconArticle,
  IconQuestionMark,
} from "@tabler/icons";
import Box from "../Box";
import Container from "../Container";
import Flex from "../Flex";
import IconButton from "../IconButton";
import Typography from "../Typography";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../Dropdown";

const ICON_SIZE = 16;

const navLinks = [
  {
    anchor: "About",
    href: "/about",
    icon: <IconInfoCircle size={ICON_SIZE} />,
  },
  {
    anchor: "Downloads",
    href: "/downloads",
    icon: <IconCloudDownload size={ICON_SIZE} />,
  },
  {
    anchor: "Stats",
    href: "/stats",
    icon: <IconChartBar size={ICON_SIZE} />,
  },
  {
    anchor: "Faqs",
    href: "/faqs",
    icon: <IconQuestionMark size={ICON_SIZE} />,
  },
  {
    anchor: "Team",
    href: "/team",
    icon: <IconUsers size={ICON_SIZE} />,
  },
  {
    anchor: "Blog",
    href: "/blog",
    icon: <IconArticle size={ICON_SIZE} />,
  },
];

const Nav = () => {
  const router = useRouter();
  return (
    <Box
      as="header"
      css={{
        paddingBlock: "1.25rem",
        position: "relative",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
      }}
    >
      <Container>
        <Flex css={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography as="h1" css={{ fontWeight: 800, fontSize: "1.275rem" }}>
            <Link href="/">NikGapps</Link>
          </Typography>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton>
                <IconMenu />
              </IconButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent withArrow sideOffset={5} align="end">
              {navLinks.map((item) => (
                <DropdownMenuItem
                  key={item.anchor}
                  onClick={() => router.push(item.href)}
                >
                  {item.icon}
                  {item.anchor}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
