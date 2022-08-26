import Box from "../Box";
import Typography from "../Typography";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../Button";
import Flex from "../Flex";
import Stack from "../Stack";
import {
  IconApps,
  IconBrandAndroid,
  IconClock2,
  IconMoodCrazyHappy,
  IconPuzzle,
  IconRefresh,
} from "@tabler/icons";
import { mauve } from "@radix-ui/colors";

const ICON_SIZE = 36;
const ICON_STROKE = 1.25;
const ICON_FILL = mauve.mauve12;

const featuresData = [
  {
    icon: <IconApps stroke={ICON_STROKE} color={ICON_FILL} size={ICON_SIZE} />,
    title: "Customizable Installation",
    des: "Have full control over what you install. Only install the package you want to!",
  },
  {
    icon: (
      <IconBrandAndroid
        stroke={ICON_STROKE}
        color={ICON_FILL}
        size={ICON_SIZE}
      />
    ),
    title: "Wide Support",
    des: "From core to full package, NikGapps offers a wide range of packages to suit your needs",
  },
  {
    icon: (
      <IconClock2 stroke={ICON_STROKE} color={ICON_FILL} size={ICON_SIZE} />
    ),
    title: "Regular Updates",
    des: "Updates are usually weekly, any longer than that means something really interesting is cooking",
  },
  {
    icon: (
      <IconPuzzle stroke={ICON_STROKE} color={ICON_FILL} size={ICON_SIZE} />
    ),
    title: "Addons Support",
    des: "NikGapps comes with freeware Addons that are widely used along side gapps",
  },
  {
    icon: (
      <IconRefresh stroke={ICON_STROKE} color={ICON_FILL} size={ICON_SIZE} />
    ),
    title: "Seamless OTA Updates",
    des: "NikGapps comes with full addon.d support to provide you flash and forget experience",
  },
  {
    icon: (
      <IconMoodCrazyHappy
        stroke={ICON_STROKE}
        color={ICON_FILL}
        size={ICON_SIZE}
      />
    ),
    title: "Happy Community",
    des: "NikGapps has a friendly community that helps you get what you're looking for in NikGapps",
  },
];

const Features = () => {
  return (
    <Box
      css={{
        paddingBlock: "2.5rem",
        backgroundColor: "$gray1",
      }}
    >
      <Container>
        <SectionTitle>Why NikGApps</SectionTitle>

        <Box
          css={{
            display: "grid",
            gap: "2rem",
          }}
        >
          {featuresData.map((item, i) => (
            <Box
              key={i}
              css={{
                padding: "1.5rem",
                borderRadius: "6px",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                backgroundColor: "$violet1",
              }}
            >
              <Box css={{ marginBlockEnd: ".25rem" }}>{item.icon}</Box>
              <Typography
                variant="h4"
                as="h4"
                css={{ marginBlockEnd: ".2rem", color: "$primary" }}
              >
                {item.title}
              </Typography>
              <Typography css={{ color: "$gray11" }}>{item.des}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
