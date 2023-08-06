import { Container, useMediaQuery } from "@mui/material";
import styles from "./GiftSection.module.css";

const GiftSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  const requestContent = (
    <div className={styles["request"]}>
      <p className={styles["request__title"]}>
        Оставьте заявку, чтобы получить ваш подарок
      </p>
      <div className={styles["request__count"]}>от 1 млн рублей!</div>
      <p className={styles["request__order"]}>
        Закажите консультацию менеджера
      </p>
      <p className={styles["request__details"]}>
        Узнайте подробности получения “проекта” бесплатно
      </p>
      <a href="tel:+70000000000" className={styles["request__number"]}>
        +7 (000) 000-00-00
      </a>
      <button className={styles["request__button"]}>оставить заявку</button>
    </div>
  );

  return (
    <section className={styles["main-section"]}>
      <Container maxWidth="xl" disableGutters={!isLargeScreen}>
        <div className={styles["main-wrapper"]}>
          <div className={styles["wrapper"]}>
            <div>
              <h3 className={styles["under-title"]}>
                От проектного отдела ПСК НЬЮТЕК
              </h3>
              <hr className={styles["separate-line"]} />
              <h2 className={styles["main-title"]}>
                Проектная и рабочая документация бесплатно
              </h2>
            </div>

            <div className={styles["info"]}>
              <h2 className={styles["info__title"]}>БЕСПЛАТНО</h2>
              <p className={styles["info__description"]}>
                Разработаем проектную и рабочую документацию
              </p>
              <p className={styles["info__additional"]}>
                *При заказе комплекса строительных работ
              </p>
            </div>
          </div>

          {isLargeScreen && requestContent}
        </div>
      </Container>

      {!isLargeScreen && requestContent}
    </section>
  );
};

export default GiftSection;
