import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "./Footer";
import theme from "./theme";

const Layout = (props) => {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        {props.children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
