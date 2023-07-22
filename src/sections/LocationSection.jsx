import styled from "@emotion/styled";
import { Container } from "@mui/material";
import mapIcon from "../assets/map.svg";
import lightLogoIcon from "../assets/lightLogo.svg";
import documentIcon from "../assets/documentIcon.svg";
import bgUp from "../assets/backgrounds/geometric_blocks_shape_in_white_background.svg";
import bgDown from "../assets/backgrounds/geometric_blocks_shape_in_white_background_down.svg";

const MainSection = styled("section")(() => ({
  position: "relative",
  paddingTop: "35px",
  paddingBottom: "35px",
  backgroundColor: "#2C2C32",
  "@media (min-width: 992px)": {
    paddingTop: "90px",
    paddingBottom: "50px",
    backgroundImage: `url(${bgUp})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0",

    "&:after": {
      content: '""',
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundImage: `url(${bgDown})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom -140px left 0",
    },
  },
  "@media (min-width: 1400px)": {
    "&:after": {
      backgroundPosition: "bottom -100px left 0",
    },
  },
  "@media (min-width: 1800px)": {
    "&:after": {
      backgroundPosition: "bottom -50px left 0",
    },
  },
}));

const MapImage = styled("img")(() => ({
  alignSelf: "stretch",
  zIndex: "1",
  "@media (min-width: 665px)": {
    flexBasis: "60%",
  },
}));

const MainContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "@media (min-width: 665px)": {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center ",
  },
  "@media (min-width: 992px)": {
    flexDirection: "row",
  },
}));

const InfoWrapper = styled("div")(() => ({
  "@media (min-width: 665px)": {
    flexBasis: "40%",
  },
}));

const MainTitle = styled("h2")(() => ({
  marginTop: "35px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "27px",
  color: "#FCDB5C",
}));

const List = styled("ul")(() => ({
  listStyle: "initial",
  marginTop: "20px",
}));

const ListItem = styled("li")(() => ({
  marginLeft: "25px",
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "16px",
  color: "#F7F6F2",

  "&:not(:first-of-type)": {
    marginTop: "14px",
  },
}));

const DownloadLink = styled("a")(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "30px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "16px",
  color: "#FCDB5C",
}));

const DownloadIcon = styled("img")(() => ({
  marginRight: "10px",
  marginLeft: "10px",
}));

const MainWrapper = styled("div")(() => ({
  "@media (min-width: 1300px)": {
    position: "relative",
  },
}));

const Decorator = styled("div")(() => ({
  display: "none",
  "@media (min-width: 1300px)": {
    position: "absolute",
    display: "block",
    right: "0",
    top: "0",
    bottom: "0",
    width: "8%",
    backgroundColor: "#ffffff",
    clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0% 100%)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    right: "0",
    display: "block",
    height: "100%",
    width: "90%",
    backgroundColor: "#FCDB5C",
    clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0% 100%)",
  },
}));

const LocationSection = () => {
  return (
    <MainWrapper>
      <MainSection>
        <MainContainer maxWidth="lg">
          <MapImage src={mapIcon} alt="map icon" />

          <InfoWrapper>
            <img src={lightLogoIcon} alt="light logo icon" />
            <MainTitle>Склад Авто - Стёкла 1440 м2</MainTitle>
            <List>
              <ListItem>Разработка Проектной документации;</ListItem>
              <ListItem>Фундаментные работы;</ListItem>
              <ListItem>Изготовление и монтаж металлокаркаса 75 тонн;</ListItem>
              <ListItem>
                Монтаж сендвич-панелей 3128 м2 с фасонными элементами;
              </ListItem>
              <ListItem>
                Устройство дренажа участка и установка дренажных колодцев;
              </ListItem>
            </List>

            <DownloadLink href="./assets/files/test.png" download>
              <DownloadIcon src={documentIcon} alt="document icon" />
              Скачать референс лист
            </DownloadLink>
          </InfoWrapper>
        </MainContainer>
      </MainSection>
      <Decorator></Decorator>
    </MainWrapper>
  );
};

export default LocationSection;
