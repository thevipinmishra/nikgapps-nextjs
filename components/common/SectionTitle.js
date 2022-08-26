import Typography from "../Typography";
import Box from "../Box";
import { mauve } from "@radix-ui/colors";

const SectionTitle = ({ children, ...props }) => {
  return (
    <Box css={{ textAlign: "center", marginBottom: "3rem" }}>
      <Typography
        variant="h2"
        as="h2"
        css={{
          display: "inline-block",
          color: mauve.mauve12,
          position: "relative",
          "&::after": {
            content: `''`,
            position: "absolute",
            height: 3,
            width: 30,
            backgroundColor: "$primary",
            left: "-3rem",
            top: "50%",
            transform: "translateY(-50%)",
          },
          "&::before": {
            content: `''`,
            position: "absolute",
            height: 3,
            width: 30,
            backgroundColor: "$primary",
            right: "-3rem",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
        {...props}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
