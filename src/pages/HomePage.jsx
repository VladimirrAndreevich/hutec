import HeroSection from "../sections/HeroSection";
import LocationSection from "../sections/LocationSection";
import ConstructionStagesSection from "../sections/ConstructionStagesSection";
import FactsSection from "../sections/FactsSection";
import TechniqueSection from "../sections/TechniqueSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import QuestionsSection from "../sections/QuestionsSection";
import GiftSection from "../sections/GiftSection";
import MapSection from "../sections/MapSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <CalculationSection /> */}
      <ConstructionStagesSection />
      <LocationSection />
      <FactsSection />
      <GiftSection />
      <TechniqueSection />
      <TestimonialsSection />
      <QuestionsSection />
      <MapSection />
    </>
  );
};

export default HomePage;
