import { Box, Collapse, Container, useMediaQuery } from "@mui/material";
import logoDark from "../assets/darkLogo.svg";
import logoLight from "../assets/lightLogo.svg";
import NavButton from "./NavButton";
import styles from "./MainNavigation.module.css";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Info from "./Info";
import DesktopNav from "./DesktopNav";

const MainNavigation = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  const logo = isLargeScreen ? logoDark : logoLight;

  const handleChange = () => {
    setIsVisibleNav((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container maxWidth="lg" className={styles.section}>
        <img src={logo} alt="Logo" />
        <Info />
        <NavButton clickHandler={handleChange} />
      </Container>

      <DesktopNav />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          width: "100%",
        }}
      >
        <Collapse in={isVisibleNav}>
          <div>
            <MobileNav closeHandler={handleChange} />
          </div>
        </Collapse>
      </Box>
    </header>
  );
};

export default MainNavigation;
