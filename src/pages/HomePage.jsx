import { Container } from "@mui/material";
import CalculationSection from "../sections/CalculationSection";
import HeroSection from "../sections/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">
        <CalculationSection />
      </Container>
    </>
  );
};

export default HomePage;
