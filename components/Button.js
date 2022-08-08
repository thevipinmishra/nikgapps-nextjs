import { styled } from "../stitches.config";

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  cursor: "pointer",

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "baseline",
  padding: ".5rem 1rem",
  borderRadius: "6px",
  fontWeight: 500,
  backgroundColor: "$primary",
  color: "$primaryContrast",
  textAlign: "center",

  variants: {
    variant: {
      light: {
        backgroundColor: "$primaryLight",
        color: "$primaryLightContrast",
      },
    },
    size: {
      small: {
        fontSize: ".88rem",
        padding: ".4rem 1rem",
      },
    },
  },
});

export default Button;
