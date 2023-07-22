import { Container } from "@mui/material";
import CalculationSection from "../sections/CalculationSection";
import HeroSection from "../sections/HeroSection";
import LocationSection from "../sections/LocationSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">
        <CalculationSection />
      </Container>
      <LocationSection />
    </>
  );
};

export default HomePage;
