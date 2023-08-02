import styled from "@emotion/styled";
import { Container, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import block1 from "../assets/technique/block1.jpg";
import block2 from "../assets/technique/block2.jpg";
import block3 from "../assets/technique/block3.jpg";
import block4 from "../assets/technique/block4.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import "./swiper-pagination.css";

const MainSection = styled("section")(() => ({
  paddingTop: 50,
  paddingBottom: 22,

  backgroundColor: "#2C2C32",

  "@media (min-width: 992px)": {
    paddingTop: 114,
    paddingBottom: 104,
  },
}));
const Counter = styled("h2")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "42px",
  color: "#FCDB5C",
  textAlign: "center",

  "@media (min-width: 992px)": {
    width: 170,
    textAlign: "end",
    fontSize: "44px",
  },
}));
const TitleWrapper = styled("div")(() => ({
  "@media (min-width: 992px)": {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
}));
const UnderTitle = styled("p")(() => ({
  marginTop: 26,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "16px",
  color: "#A1A1A1",
  textTransform: "uppercase",

  "@media (min-width: 992px)": {
    marginTop: 0,
  },
}));

const Line = styled("hr")(() => ({
  height: 1,
  border: "none",
  marginTop: 15,
  marginBottom: 15,

  backgroundColor: "#A1A1A1",
}));
const MainTitle = styled("h2")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "24px",
  color: "#FFFFFF",
  textTransform: "uppercase",

  "@media (min-width: 992px)": {
    fontSize: "34px",
    maxWidth: 753,
  },
}));
const SlideImg = styled("img")(() => ({
  width: "100%",

  "@media (min-width: 992px)": {
    clipPath: "polygon(5% 0, 100% 0%, 95% 100%, 0% 100%)",
  },
}));
const SlideWrapp = styled("div")(() => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#2c2c32ad",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,

  cursor: "pointer",
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },

  "@media (max-width: 992px)": {
    ".swiper-slide-active &": {
      opacity: 1,
    },
  },
}));
const SlideTitle = styled("h3")(() => ({
  fontSize: "25px",
  color: "#FCDB5C",

  "&:last-of-type": {
    marginBottom: 20,
  },
}));
const SlideDescription = styled("p")(() => ({
  fontSize: "16px",
  color: "#F7F6F2",
}));

const TechniqueSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <MainSection>
      <Container maxWidth="xl">
        <TitleWrapper>
          <Counter>180 единиц</Counter>
          <div>
            <UnderTitle>техника, используемая ПСК НЬЮТЕК</UnderTitle>
            <Line />
            <MainTitle>
              строительная техника для работ в нашей компании
            </MainTitle>
          </div>
        </TitleWrapper>
      </Container>

      <Container maxWidth="xl" disableGutters={!isLargeScreen}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <SlideImg src={block1} alt="image"></SlideImg>
            <SlideWrapp>
              <SlideTitle>Мин экскаватор</SlideTitle>
              <SlideTitle>бобкэт</SlideTitle>
              <SlideDescription>Ямобур</SlideDescription>
              <SlideDescription>Завинчивание свай</SlideDescription>
              <SlideDescription>
                Доставка манипулятор эвакуатором
              </SlideDescription>
            </SlideWrapp>
          </SwiperSlide>
          <SwiperSlide>
            <SlideImg src={block2} alt="image"></SlideImg>
            <SlideWrapp>
              <SlideTitle>Мин экскаватор</SlideTitle>
              <SlideTitle>бобкэт</SlideTitle>
              <SlideDescription>Ямобур</SlideDescription>
              <SlideDescription>Завинчивание свай</SlideDescription>
              <SlideDescription>
                Доставка манипулятор эвакуатором
              </SlideDescription>
            </SlideWrapp>
          </SwiperSlide>
          <SwiperSlide>
            <SlideImg src={block3} alt="image"></SlideImg>
            <SlideWrapp>
              <SlideTitle>Мин экскаватор</SlideTitle>
              <SlideTitle>бобкэт</SlideTitle>
              <SlideDescription>Ямобур</SlideDescription>
              <SlideDescription>Завинчивание свай</SlideDescription>
              <SlideDescription>
                Доставка манипулятор эвакуатором
              </SlideDescription>
            </SlideWrapp>
          </SwiperSlide>
          <SwiperSlide>
            <SlideImg src={block4} alt="image"></SlideImg>
            <SlideWrapp>
              <SlideTitle>Мин экскаватор</SlideTitle>
              <SlideTitle>бобкэт</SlideTitle>
              <SlideDescription>Ямобур</SlideDescription>
              <SlideDescription>Завинчивание свай</SlideDescription>
              <SlideDescription>
                Доставка манипулятор эвакуатором
              </SlideDescription>
            </SlideWrapp>
          </SwiperSlide>
        </Swiper>
      </Container>
    </MainSection>
  );
};

export default TechniqueSection;
