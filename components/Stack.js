import Flex from "./Flex";
import { styled } from "../stitches.config";

const Stack = styled(Flex, {
  flexDirection: "column",
  gap: ".75rem",

  variants: {
    gap: {
      0: {
        gap: 0,
      },
      1: {
        gap: "1rem",
      },
      2: {
        gap: "1.5rem",
      },
      3: {
        gap: "2rem",
      },
      4: {
        gap: "3rem",
      },
      5: {
        gap: "4rem",
      },
    },
  },
});

export default Stack;
