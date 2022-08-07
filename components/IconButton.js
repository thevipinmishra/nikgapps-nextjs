import { mauve } from "@radix-ui/colors";
import { styled } from "../stitches.config";

const IconButton = styled("button", {
  all: "unset",
  boxSizing: "border-box",

  $$size: "38px",
  height: "$$size",
  width: "$$size",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${mauve.mauve4}`,
  borderRadius: "6px",
});

export default IconButton;
