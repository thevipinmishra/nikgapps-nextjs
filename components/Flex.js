import { styled } from "../stitches.config";
import Box from "./Box";

const Flex = styled(Box, {
  display: "flex",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    gap: {
      1: {
        gap: ".5rem",
      },
      2: {
        gap: "1rem",
      },
      3: {
        gap: "1.5rem",
      },
      4: {
        gap: "2rem",
      },
      5: {
        gap: "2.5rem",
      },
      6: {
        gap: "3rem",
      },
    },
  },
});

export default Flex;
