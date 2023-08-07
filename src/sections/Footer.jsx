import styled from "@emotion/styled";
import lightLogo from "../assets/lightLogo.svg";
import { Container, useMediaQuery } from "@mui/material";
import wkIcon from "../assets/socials/wk.svg";
import telegramIcon from "../assets/socials/telegram.svg";
import whatsappIcon from "../assets/socials/whatsapp.svg";
import yandexReviewIcon from "../assets/yandex_review.png";
import locationIcon from "../assets/location.svg";

const MainFooter = styled("footer")(() => ({
  backgroundColor: "#2C2C32",

  paddingBottom: 26,
  paddingTop: 40,
}));

const MainContainer = styled((props) => <Container {...props} />)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@media (min-width: 992px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

const MainList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 40,

  rowGap: 10,

  textAlign: "center",

  "@media (min-width: 992px)": {
    columnGap: 20,
    marginTop: 15,
  },
  "@media (min-width: 1150px)": {
    flexDirection: "row",
  },
  "@media (min-width: 1200px)": {
    columnGap: 40,
  },
}));
const NavLink = styled("a")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 700,
  fontSize: "14px",
  color: "#FFFFFF",
  textTransform: "uppercase",

  transitionProperty: "color, text-decoration",
  transitionDuration: "400ms",
  transitionTimingFunction: "ease",
  "&:hover": {
    color: "#FCDB5C",
    textDecoration: "underline",
  },
}));

const Socials = styled("ul")(() => ({
  display: "flex",
  justifyContent: "center",
  columnGap: 10,
  marginTop: 30,

  "& a img": {
    transition: "transform 0.3s ease",
  },
  "& a:hover img": {
    transform: "scale(1.3);",
  },
}));

const Info = styled("p")(() => ({
  marginTop: 32,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "13px",
  color: "#626270",
  textTransform: "uppercase",
  lineHeight: "16px",
  textAlign: "center",
  letterSpacing: "10%",
  "@media (min-width: 992px)": {
    fontSize: 14,
  },
}));
const InfoSpan = styled("span")(() => ({
  marginBottom: 5,
  fontWeight: 700,
  color: "#F7F6F2",
}));
const LocationIcon = styled("img")(() => ({
  marginRight: 6,
  transform: "translateY(2px)",
}));
const YandexReview = styled("img")(() => ({
  marginTop: 26,
}));
const Rights = styled("p")(() => ({
  marginTop: 25,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "13px",
  color: "#626270",
  textTransform: "uppercase",
  lineHeight: "26px",
  textAlign: "center",
}));
const CompanyInfo = styled("div")(() => ({
  marginTop: 34,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 400,
  fontSize: "14px",
  color: "#F7F6F2",
  textTransform: "uppercase",
  lineHeight: "24px",
  "& a": {
    color: "#F7F6F2",
  },
}));

const Footer = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <MainFooter>
      <MainContainer maxWidth="xl">
        <div>
          <img src={lightLogo} alt="light logo" />
          {isLargeScreen && (
            <CompanyInfo>
              <p>ООО “ПСК НЬЮЬЕК”</p>
              <p>ОГРН: 1047712345678</p>
              <p>ИНН: 7712345678</p>
            </CompanyInfo>
          )}
        </div>

        <div>
          <nav>
            <MainList>
              <li>
                <NavLink href="#">Строительство</NavLink>
              </li>
              <li>
                <NavLink href="#">Производство</NavLink>
              </li>
              <li>
                <NavLink href="#">Проектирование</NavLink>
              </li>
              <li>
                <NavLink href="#">Услуги</NavLink>
              </li>
              <li>
                <NavLink href="#">партнеры</NavLink>
              </li>
              <li>
                <NavLink href="#">О компании</NavLink>
              </li>
            </MainList>
          </nav>

          <Socials>
            <li>
              <a href="#">
                <img src={wkIcon} alt="wk icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={telegramIcon} alt="telegram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={whatsappIcon} alt="whatsapp icon" />
              </a>
            </li>
          </Socials>

          {!isLargeScreen && (
            <CompanyInfo>
              <a href="tel:+70000000000">+7 (000) 000-00-00</a>
              <br />
              <a href="www.newteck.ru" target="_blank">
                www.newteck.ru
              </a>
              <p>-</p>
              <p>ООО “ПСК НЬЮЬЕК”</p>
              <p>ОГРН: 1047712345678</p>
              <p>ИНН: 7712345678</p>
            </CompanyInfo>
          )}

          <Info>
            <InfoSpan>
              {isLargeScreen && (
                <LocationIcon src={locationIcon} alt="location icon" />
              )}
              офис:{" "}
            </InfoSpan>
            {!isLargeScreen && <br />}
            Санкт-Петербург, Пулковское шоссе, дом 30 к 4, офис 205
            <br />
            <br />
            <InfoSpan>
              {isLargeScreen && (
                <LocationIcon src={locationIcon} alt="location icon" />
              )}
              производство:{" "}
            </InfoSpan>
            {!isLargeScreen && <br />}
            Санкт-Петербург, тер. Старо-Паново, ул. Рабочая 7 б
          </Info>
        </div>

        <div>
          {isLargeScreen && (
            <CompanyInfo>
              <a href="tel:+70000000000">+7 (000) 000-00-00</a>
              <br />
              <a href="www.newteck.ru" target="_blank">
                www.newteck.ru
              </a>
            </CompanyInfo>
          )}
          <YandexReview src={yandexReviewIcon} alt="yandex review" />
        </div>
      </MainContainer>
      <Rights>2022-2023 All rights reserved</Rights>
    </MainFooter>
  );
};

export default Footer;
