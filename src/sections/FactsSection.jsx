import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Fact from "../components/Fact";
import AdvantagesAccordion from "../components/AdvantagesAccordion";

const MainSection = styled("section")(() => ({
  paddingTop: 14,
  paddingBottom: 22,

  "@media (min-width: 992px)": {
    paddingTop: 106,
    paddingBottom: 52,
  },
}));
const MainTitle = styled("h2")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 700,
  fontSize: "27px",
  color: "#383736",
  textAlign: "center",

  "@media (min-width: 775px)": {
    fontSize: 41,
  },
}));
const UnderTitle = styled("h3")(() => ({
  marginTop: 20,
  paddingLeft: 10,
  paddingRight: 10,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "14px",
  textAlign: "center",
  color: "#787878",

  "@media (min-width: 775px)": {
    marginTop: 10,
    fontSize: 16,
  },
}));

const FactsList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  marginTop: 32,

  "@media (min-width: 775px)": {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  "@media (min-width: 1000px)": {
    marginTop: 50,

    justifyContent: "space-around",
  },
}));

const FactsItem = styled("li")(() => ({
  // display: "flex",
  // [theme.breakpoints.up("lg")]: {
  //   color: "red",
  // },
}));

const FactsSection = () => {
  return (
    <MainSection>
      <Container maxWidth="lg">
        <MainTitle>Факты о компании ПСК “Ньютек”</MainTitle>
        <UnderTitle>
          полный цикл строительства от проектирования до ввода в эксплуатацию
        </UnderTitle>

        <FactsList>
          <FactsItem>
            <Fact
              counter="13"
              description="лет на рынке"
              needTransferFirstLetter={true}
            />
          </FactsItem>
          <FactsItem>
            <Fact
              counter="200.000+"
              description="кв.м построено"
              needTransferFirstLetter={true}
            />
          </FactsItem>
          <FactsItem>
            <Fact counter="60+" description="человек работает у нас" />
          </FactsItem>
        </FactsList>

        <AdvantagesAccordion />
      </Container>
    </MainSection>
  );
};

export default FactsSection;
