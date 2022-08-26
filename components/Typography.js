import { styled } from "../stitches.config";

const Typography = styled("p", {
  fontSize: "1rem",
  "& a": {
    color: "$primary",
    textDecoration: "underline",
  },

  variants: {
    variant: {
      h1: {
        fontWeight: 800,
        fontSize: "clamp(2rem, 8vw, 3.5rem)",
        lineHeight: "1.25",
      },
      h2: {
        fontWeight: 700,
        fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
        lineHeight: "1.3",
      },
      h3: {
        fontWeight: 700,
        fontSize: "clamp(1.125rem, 5vw, 2rem)",
        lineHeight: "1.3",
      },
      h4: {
        fontWeight: 600,
        fontSize: "clamp(1rem, 4vw, 1.25rem)",
        lineHeight: "1.4",
      },
    },
  },
});

export default Typography;
