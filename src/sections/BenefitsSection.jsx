import { Container } from "@mui/material";
import classes from "./BenefitsSection.module.scss";
import markIcon from "../assets/benefits/markIcon.svg";
import cartIcon from "../assets/benefits/cartIcon.svg";
import truckIcon from "../assets/benefits/truckIcon.svg";
import clockIcon from "../assets/benefits/clockIcon.svg";

const BenefitsSection = () => {
  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <h2 className={classes.title}>Почему изготовить нужно у нас</h2>
        <p className={classes["additional-info"]}>
          В случае срыва сроков вернем 20% от стоимости
        </p>
        <ul className={classes.list}>
          <li className={classes.item}>
            <div className={classes["img-wrapper"]}>
              <img src={markIcon} alt="mark icon" />
            </div>
            <p className={classes["item__text"]}>
              Гарантируем срок выполнения заказа. В случае срыва срока - вернем
              20% от стоимости работ.
            </p>
          </li>
          <li className={classes.item}>
            <div className={classes["img-wrapper"]}>
              <img
                className={classes["cart-svg"]}
                src={cartIcon}
                alt="cart icon"
              />
            </div>
            <p className={classes["item__text"]}>
              Мы не зарабатываем на разнице при закупке материалов. Предлагаем
              цены напрямую от поставщиков металла.
            </p>
          </li>
          <li className={classes.item}>
            <div className={classes["img-wrapper"]}>
              <img src={truckIcon} alt="truck icon" />
            </div>
            <p className={classes["item__text"]}>
              Собственная служба логистики и парк техники. Организацию
              перемещения - берем на себя.
            </p>
          </li>
          <li className={classes.item}>
            <div className={classes["img-wrapper"]}>
              <img src={clockIcon} alt="clock icon" />
            </div>
            <p className={classes["item__text"]}>
              Производство работает 24/7 в две смены. Позволяет выдерживать
              сроки производства.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default BenefitsSection;
