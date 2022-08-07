import { createStitches } from "@stitches/react";
import { blue, gray, mauveDark, violet } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      sansSerif: "Outfit, sans-serif",
    },
    colors: {
      ...blue,
      ...violet,
      ...gray,
      ...mauveDark,
      primary: "$violet9",
      primaryContrast: "$gray1",
      primaryDisabled: "$indigo4",
      bodyBg: "$gray2",
      card: "$gray1",
      bodyText: "$gray12",
      textLight: "$gray11",
      paper: "$gray1",
    },
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: " (min-width: 992px)",
  },
});
