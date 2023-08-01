import { Container, useMediaQuery } from "@mui/material";
import styles from "./TestimonialsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import "./testimonials-swiper-pagination.css";

const TestimonialsSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <section className={styles["main-section"]}>
      <Container maxWidth="xl" disableGutters={!isLargeScreen}>
        <div className={styles.info}>
          <h2 className={styles.info__title}>Отзывы клиентов о нашей работе</h2>
          <p className={styles.info__undertitle}>
            Каждый отзыв набран текстом для удобства его чтения и к нему
            прикреплена фотография реального отзыва.
          </p>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper2"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            485: {
              slidesPerView: 2,
            },
            825: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <h3 className={styles.slide__title}>
                ЗАО “ИЖОРСКИЙ ТРУБНЫЙ ЗАВОД”
              </h3>
              <p className={styles.slide__description}>
                На ЗАО “Ижорский Трубный Завод” с лета 2006 года
                эксплуатировалась эжекционная градирня производства ООО
                “Гидрокул” (Санкт-Петербург). За период эксплуатации эжекционная
                градирня обеспечила требования производства и заявленные
                производителем параметры.
              </p>
              <a href="#" className={styles.slide__link}>
                весь отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <h3 className={styles.slide__title}>
                ЗАО “ИЖОРСКИЙ ТРУБНЫЙ ЗАВОД”
              </h3>
              <p className={styles.slide__description}>
                На ЗАО “Ижорский Трубный Завод” с лета 2006 года
                эксплуатировалась эжекционная градирня производства ООО
                “Гидрокул” (Санкт-Петербург). За период эксплуатации эжекционная
                градирня обеспечила требования производства и заявленные
                производителем параметры.
              </p>
              <a href="#" className={styles.slide__link}>
                весь отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <h3 className={styles.slide__title}>
                ЗАО “ИЖОРСКИЙ ТРУБНЫЙ ЗАВОД”
              </h3>
              <p className={styles.slide__description}>
                На ЗАО “Ижорский Трубный Завод” с лета 2006 года
                эксплуатировалась эжекционная градирня производства ООО
                “Гидрокул” (Санкт-Петербург). За период эксплуатации эжекционная
                градирня обеспечила требования производства и заявленные
                производителем параметры.
              </p>
              <a href="#" className={styles.slide__link}>
                весь отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <h3 className={styles.slide__title}>
                ЗАО “ИЖОРСКИЙ ТРУБНЫЙ ЗАВОД”
              </h3>
              <p className={styles.slide__description}>
                На ЗАО “Ижорский Трубный Завод” с лета 2006 года
                эксплуатировалась эжекционная градирня производства ООО
                “Гидрокул” (Санкт-Петербург). За период эксплуатации эжекционная
                градирня обеспечила требования производства и заявленные
                производителем параметры.
              </p>
              <a href="#" className={styles.slide__link}>
                весь отзыв
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
