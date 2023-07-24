import { Container } from "@mui/material";
import CalculationSection from "../sections/CalculationSection";
import HeroSection from "../sections/HeroSection";
import LocationSection from "../sections/LocationSection";
import ConstructionStagesSection from "../sections/ConstructionStagesSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">
        <CalculationSection />
      </Container>
      <LocationSection />
      <ConstructionStagesSection />
    </>
  );
};

export default HomePage;
