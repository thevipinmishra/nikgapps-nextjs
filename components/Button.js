import { styled } from "../stitches.config";

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  cursor: "pointer",

  display: "inline-flex",
  padding: ".5rem 1rem",
  borderRadius: "6px",
  backgroundColor: "$primary",
  color: "$primaryContrast",
});

export default Button;
