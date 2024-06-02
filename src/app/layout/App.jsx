import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Main from "../pages/Main/Main";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { bgImageActions, useBgImage } from "../context/bgImageProvider";

export default function App() {
  const location = useLocation();
  const { state, dispatch } = useBgImage();
  const [backgroundColor, setBackgroundColor] = useState("rgba(0,0,0,.3)");

  useEffect(() => {
    console.log(location.pathname);

    const clearBackground = () => {
      dispatch({ type: bgImageActions.change, payload: "none" });
      setBackgroundColor("rgb(255,255,255");
    };

    if (location.pathname.startsWith("/holiday/")) return clearBackground();

    switch (location.pathname) {
      case "/helpfull-information":
      case "/useful-statements":
      case "/tourist-visa":
      case "/rules":
      case "/seasons":
      case "/holidays-and-festivals":
        clearBackground();
        break;
      default: {
        setBackgroundColor("rgba(0,0,0,.3)");
        dispatch({ type: bgImageActions.change, payload: "url(/buta.svg)" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: state.bgImage,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "full",
        backgroundColor,
        backgroundBlendMode: "multiply",
        gap: 5,
      }}
    >
      <CssBaseline />
      <Header />

      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </Box>
  );
}
