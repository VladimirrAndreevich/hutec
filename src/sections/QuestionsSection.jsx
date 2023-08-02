import { Container, useMediaQuery } from "@mui/material";
import styles from "./QuestionsSection.module.css";
import QuestionsAccordion from "../components/QuestionsAccordion";

const QuestionsSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <section className={styles["main-section"]}>
      {!isLargeScreen && (
        <h2 className={styles["main-title"]}>часто задаваемые вопросы</h2>
      )}

      <Container maxWidth="xl" disableGutters={!isLargeScreen}>
        <div className={styles["main-wrapper"]}>
          <QuestionsAccordion />

          <div className={styles["additional-info"]}>
            {isLargeScreen && (
              <h2 className={styles["main-title"]}>часто задаваемые вопросы</h2>
            )}

            <h3 className={styles["additional-info__title"]}>
              Не нашли нужного ответа?
            </h3>
            <p>
              Вы всегда можете уточнить любой интересующий вас вопрос у нашего
              менеджера по телефону или заполнив специальную форму ниже.
            </p>
            <a href="#" className={styles["additional-info__link"]}>
              Задать свой вопрос
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuestionsSection;
