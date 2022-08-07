import Link from "next/link";
import {
  IconMenu,
  IconInfoCircle,
  IconCloudDownload,
  IconChartBar,
  IconUsers,
  IconArticle,
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
  DropdownMenuItemIndicator,
} from "../Dropdown";

const Nav = () => {
  return (
    <Box
      css={{
        paddingBlock: "1.25rem",
        position: "relative",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
      }}
    >
      <Container>
        <Flex css={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            component="h1"
            css={{ fontWeight: 800, fontSize: "1.275rem" }}
          >
            <Link href="/">NikGapps</Link>
          </Typography>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton>
                <IconMenu />
              </IconButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent withArrow sideOffset={5} align="end">
              <DropdownMenuItem>
                <IconInfoCircle size={15} />
                About
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCloudDownload size={15} /> Downloads
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconChartBar size={15} /> Stats
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconUsers size={15} /> Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconArticle size={15} /> Blog
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
