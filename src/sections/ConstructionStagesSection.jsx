import styled from "@emotion/styled";
import { Collapse, Container, duration, useMediaQuery } from "@mui/material";
import arrowIcon from "../assets/arrowIcon.svg";
import { STAGES } from "./ArrayStages";
import { useState } from "react";
import bgInfo from "../assets/backgrounds/bgBulding.jpg";

const MainSection = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 30,
  paddingBottom: 25,
}));

const MainTitle = styled("h2")(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 700,
  fontSize: "27px",
  color: "#383736",
  textAlign: "center",
  textTransform: "uppercase",

  "@media (min-width: 992px)": {
    fontSize: 41,
    textAlign: "left",
    paddingLeft: 0,
  },
}));

const UnderTitle = styled("h3")(() => ({
  marginTop: 11,
  paddingLeft: "20px",
  paddingRight: "20px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "16px",
  color: "#787878",
  textAlign: "center",
  textTransform: "uppercase",

  "@media (min-width: 992px)": {
    textAlign: "left",
    paddingLeft: 0,
  },
}));

const MobileList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  marginTop: 30,
}));

const DesktopList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
}));

const MobileItem = styled("li")(() => ({}));

const MobileItemWrapper = styled("div")(({ isActive, maxWidth }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: 10,
  padding: "20px 14px",

  color: isActive ? "#383736" : "#787878",
  backgroundColor: isActive ? "#FCDB5C" : "#F7F6F2",
  cursor: "pointer",
  userSelect: "none",

  transitionProperty: "background-color, color",
  transitionDuration: `${duration.standard}ms`,
  transitionTimingFunction: "ease",

  "@media (min-width: 992px)": {
    columnGap: 32,
    paddingRight: 32,
    maxWidth: maxWidth ? maxWidth : 300,
  },
}));

const MobileItemNumber = styled("span")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "24px",
}));

const MobileItemTitle = styled("h3")(() => ({
  width: "100%",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "15px",

  "@media (min-width: 450px)": {
    textAlign: "center",
    fontSize: 16,
  },

  "@media (min-width: 992px)": {
    textAlign: "left",
  },
}));

const MobileItemText = styled("div")(() => ({
  position: "relative",
  padding: "30px 20px",
  backgroundColor: "#2C2C32",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 400,
  fontSize: "16px",
  color: "#C8C8C8",

  "@media (min-width: 992px)": {
    backgroundColor: "transparent",

    margin: "auto 10% auto 0",
    padding: "70px 20%",

    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 60,
      left: 60,
      zIndex: -1,

      backgroundColor: "#2C2C32",

      transform: "skewX(343deg)",
    },

    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "22px",

      width: 32,

      zIndex: -1,

      backgroundColor: "#FCDB5C",

      transform: "skewX(343deg)",
    },
  },
}));

const MobileItemIcon = styled("img")(({ isActive }) => ({
  transition: `transform ${duration.standard}ms ease`,
  transform: isActive ? "rotate(180deg)" : "",
}));

const CounteButton = styled("button")(() => ({
  display: "block",
  width: "100%",
  paddingTop: 25,
  paddingBottom: 25,
  marginTop: 30,
  maxWidth: 350,
  marginLeft: "auto",
  marginRight: "auto",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "18px",
  color: "#383736",

  backgroundColor: "#FCDB5C",
  border: "none",
  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
}));

const DesktopInfo = styled("div")(() => ({
  position: "relative",
  width: "100%",

  // backgroundImage: `url(${bgInfo})`,
  // backgroundRepeat: "no-repeat",
  "@media (min-width: 992px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    paddingLeft: 50,
  },
}));

const MainContainer = styled((props) => <Container {...props} />)(() => ({
  display: "flex",
  marginTop: 60,
}));

const InfoImg = styled("img")(() => ({
  position: "absolute",
  zIndex: -1,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  height: "100%",
}));

const InfoTitle = styled("h2")(() => ({
  marginBottom: 30,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: 27,
  color: "#FFFFFF",
  textTransform: "uppercase",
}));

const ConstructionStagesSection = () => {
  const [activeItem, setActiveItem] = useState(1);
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  const setActive = (itemId) => {
    if (isLargeScreen) {
      setActiveItem(itemId);
    } else {
      setActiveItem((prevActive) => (prevActive === itemId ? null : itemId));
    }
  };

  const mainContent = isLargeScreen ? (
    <MainContainer maxWidth="xl">
      <DesktopList>
        {STAGES.map((stage) => {
          const isActiveItem = stage.id === activeItem;

          return (
            <MobileItem key={stage.id}>
              <MobileItemWrapper
                onClick={() => {
                  setActive(stage.id);
                }}
                isActive={isActiveItem}
                maxWidth={stage.maxWidth}
              >
                <MobileItemNumber>
                  {stage.id < 10 ? `0${stage.id}` : stage.id}
                </MobileItemNumber>
                <MobileItemTitle>{stage.title}</MobileItemTitle>
              </MobileItemWrapper>
            </MobileItem>
          );
        })}
      </DesktopList>
      <DesktopInfo>
        {/* make clipPath */}
        <InfoImg src={bgInfo} alt="info bacground" />
        {activeItem && (
          <MobileItemText>
            <InfoTitle>{STAGES[activeItem].title}</InfoTitle>
            {STAGES[activeItem].text}
            <br />
            <br />
            {STAGES[activeItem].additionalText &&
              STAGES[activeItem].additionalText}

            <CounteButton>Расчитать стоимость</CounteButton>
          </MobileItemText>
        )}
      </DesktopInfo>
    </MainContainer>
  ) : (
    <MobileList>
      {STAGES.map((stage) => {
        const isActiveItem = stage.id === activeItem;

        return (
          <MobileItem key={stage.id}>
            <MobileItemWrapper
              onClick={() => {
                setActive(stage.id);
              }}
              isActive={isActiveItem}
            >
              <MobileItemNumber>{stage.id}</MobileItemNumber>
              <MobileItemTitle>{stage.title}</MobileItemTitle>
              <MobileItemIcon
                src={arrowIcon}
                alt="arrow icon"
                isActive={isActiveItem}
              />
            </MobileItemWrapper>
            <Collapse in={isActiveItem}>
              <MobileItemText>
                {stage.text}
                <br />
                <br />
                {stage.additionalText && stage.additionalText}

                <CounteButton>Расчитать стоимость</CounteButton>
              </MobileItemText>
            </Collapse>
          </MobileItem>
        );
      })}
    </MobileList>
  );

  return (
    <MainSection>
      <Container maxWidth="xl">
        <MainTitle>Этапы строительства</MainTitle>
        <UnderTitle>Каждый этап выполняем своими силами</UnderTitle>
      </Container>

      {mainContent}
    </MainSection>
  );
};

export default ConstructionStagesSection;
