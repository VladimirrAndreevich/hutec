import { Container } from "@mui/material";
// import CalculationSection from "../sections/CalculationSection";
import HeroSection from "../sections/HeroSection";
import LocationSection from "../sections/LocationSection";
import ConstructionStagesSection from "../sections/ConstructionStagesSection";
import FactsSection from "../sections/FactsSection";
import TechniqueSection from "../sections/TechniqueSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import QuestionsSection from "../sections/QuestionsSection";
import GiftSection from "../sections/GiftSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <Container maxWidth="lg">{/* <CalculationSection /> */}</Container>
      <LocationSection />
      <ConstructionStagesSection />
      <GiftSection />
      <FactsSection />
      <TechniqueSection />
      <TestimonialsSection />
      <QuestionsSection />
    </>
  );
};

export default HomePage;
