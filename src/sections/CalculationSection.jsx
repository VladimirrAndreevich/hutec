import { Container } from "@mui/material";
import CalculationAccordian from "../components/CalculationAccordian";
import styles from "./CalculationSection.module.css";

const CalculationSection = () => {
  return (
    <section className={styles.section}>
      <Container maxWidth="xl">
        <h2 className={styles.section__title}>
          Рaсчет стоимости строительства
        </h2>
        <CalculationAccordian />
      </Container>
    </section>
  );
};

export default CalculationSection;
