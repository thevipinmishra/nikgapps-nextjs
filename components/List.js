import { styled } from "../stitches.config";

export const ListItem = styled("li", {});

export const List = styled("ul", {
  listStyle: "square",
  paddingInlineStart: "1rem",

  [`& ${ListItem} + ${ListItem}`]: {
    marginBlockStart: ".5rem",
  },
});
