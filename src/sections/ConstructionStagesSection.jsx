import styled from "@emotion/styled";
import { Collapse, Container, duration, useMediaQuery } from "@mui/material";
import arrowIcon from "../assets/arrowIcon.svg";
import { useState } from "react";
import bgInfo from "../assets/backgrounds/bgBulding.jpg";

const STAGES = [
  {
    id: 1,
    title: "Разработка проектной документации и инженерные изыскания",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 442,
  },
  {
    id: 2,
    title: "Получение разрешения на строительство",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 342,
  },
  {
    id: 3,
    title: "Производство металлоконструкций",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 310,
  },
  {
    id: 4,
    title: "Планировка земельного участка",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 315,
  },
  {
    id: 5,
    title: "Фундаментные работы",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 276,
  },
  {
    id: 6,
    title: "Монтаж металлоконструкций",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 296,
  },
  {
    id: 7,
    title: "Монтаж сэндвич-панелей",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 296,
  },
  {
    id: 8,
    title: "Монтаж инженерных сетей",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 296,
  },
  {
    id: 9,
    title: "Благоустройство территории",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 296,
  },
  {
    id: 10,
    title: "Получения ввода в эксплуатацию",
    text: "Фундаментные работы – комплекс мероприятий, необходимых для возведения надежного основания под здания. Они включают в себя рытье траншеи, создание строительного «пирога» против усадки, армирование, бетонирование и иные меры. Специалисты нашей компании проводят фундаментные работы с соблюдением СНиПов и ГОСТов, поэтому основания, возводимые нами, отличаются надежностью, долговечностью и прочностью.Требования к основанию.",
    additionalText:
      "Фундамент – несущая конструкция, которая повышает срок эксплуатации зданий и любых других сооружений. Он берет на себя основные нагрузки, то есть вес постройки, равномерно распределяя его по всей площади. Наиболее часто фундаментную конструкцию изготавливают из бетона, поскольку именно этот материал обладает максимальной долговечностью и прочностью.",
    maxWidth: 296,
  },
];

const MainSection = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 60,
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

const MobileItem = styled("li")(() => ({
  "--offset-skey-x": "354deg",

  "@media (min-width: 1200px)": {
    "--offset-skey-x": "350deg",
  },
}));

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
    position: "relative",
    columnGap: 32,
    paddingRight: 32,
    maxWidth: maxWidth ? maxWidth : 300,

    "&:after": {
      content: "''",
      position: "absolute",
      // display: isActive ? "block" : "none",
      top: 0,
      bottom: 0,
      right: -12,
      width: 15,

      opacity: isActive ? 1 : 0,
      transition: `opacity ${duration.standard}ms ease`,

      backgroundColor: "#2C2C32",
      transform: "skewX(var(--offset-skey-x))",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: -8,
      width: 15,

      backgroundColor: "#ffffff",
      transform: "skewX(var(--offset-skey-x))",
    },
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

    "--offset-skey-x": "354deg",

    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 60,
      left: 60,
      zIndex: -1,

      backgroundColor: "#2C2C32",

      transform: "skewX(var(--offset-skey-x))",
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

      transform: "skewX(var(--offset-skey-x))",
    },
  },

  "@media (min-width: 1200px)": {
    "--offset-skey-x": "350deg",
  },

  "@media (min-width: 1400px)": {
    marginRight: 180,
  },
}));

const MobileItemIcon = styled("img")(({ isActive }) => ({
  transition: `transform ${duration.standard}ms ease`,
  transform: isActive ? "rotate(180deg)" : "",
}));

const CounteButton = styled("button")(() => ({
  position: "relative",

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

  // backgroundColor: "#FCDB5C",
  backgroundColor: "transparent",
  border: "none",
  // clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
  zIndex: 2,
  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,

    backgroundColor: "#FCDB5C",

    transform: "skewX(var(--offset-skey-x))",
  },
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

  clipPath: "polygon(90px 0%, 100% 0%, 100% 100%, 0% 100%)",

  "@media (min-width: 1200px)": {
    clipPath: "polygon(230px 0%, 100% 0%, 100% 100%, 90px 100%)",
  },
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
        <InfoImg src={bgInfo} alt="info bacground" />
        {activeItem && (
          <MobileItemText>
            <InfoTitle>{STAGES[activeItem - 1].title}</InfoTitle>
            {STAGES[activeItem - 1].text}
            <br />
            <br />
            {STAGES[activeItem - 1].additionalText &&
              STAGES[activeItem - 1].additionalText}
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
