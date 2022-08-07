import { globalCss } from "../stitches.config";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "../assets/css/table.css";

const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*::before": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    minBlockSize: "100vh",
    fontFamily: "$sansSerif",
    fontSize: "1rem",
    lineHeight: "1.55",
    backgroundColor: "$bodyBg",
    color: "$bodyText",
    overflowX: "hidden",
    textRendering: "optimizeSpeed",
  },
  img: {
    display: "block",
    maxBlockSize: "100%",
  },
  "ul, ol": {
    listStyle: "none",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
