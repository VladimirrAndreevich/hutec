import { useMediaQuery } from "@mui/material";
import backgroundImg from "../assets/backgrounds/bg_lg.png";

const DecorSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");

  if (isLargeScreen) {
    return (
      <div
        style={{
          height: 325,
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
    );
  }

  return <></>;
};

export default DecorSection;
