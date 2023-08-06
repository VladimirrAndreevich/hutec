import styles from "./HeroSection.module.css";
import darkGift from "../assets/darkGift.svg";
import lightGift from "../assets/lightGift.svg";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__main}>
        <div className={styles.complex}>
          <h2 className={styles.complex__title}>КОМПЛЕКС СТРОИТЕЛЬНЫХ РАБОТ</h2>
          <p className={styles.complex__undertitle}>
            промышленные и коммерческие здания от 800 кв.м.
          </p>
          <ul className={styles.complex__list}>
            <li>Ангары и склады (теплые и холодные)</li>
            <li>Производственные здания и комплексы</li>
            <li>Логистические и распределительные центры</li>
            <li>Спортивно-оздоровительные комплексы</li>
            <li>Торговые комплексы</li>
            <li>и другое</li>
          </ul>
        </div>
        <div className={styles.gift}>
          <div className={styles.gift__wrapper}>
            <img
              src={darkGift}
              alt="gift icon"
              className={styles.gift__icon}
              style={{ width: 40 }}
            />
            <h2 className={styles.gift__header}>подарок от 1 млн рублей!</h2>
          </div>
          <p className={styles.gift__additional_lg}>
            проект на ваше сооружение
          </p>
          <span className={styles.gift__mark}> в подарок</span>
          <div className={styles.gift__wrapper + " " + styles.gift__wrapper_lg}>
            <img
              src={lightGift}
              alt="gift icon"
              className={styles.gift__icon}
              style={{ width: 40 }}
            />
            <h2 className={styles.gift__header}>от 1 млн рублей!</h2>
          </div>
          <p className={styles.gift__text}>
            При заказе строительных работ в компании ООО ”ПСК Ньютек”
          </p>
          <p className={styles.gift__text}>
            Разрабатываем рабочую и проектную документацию на Ваше здание
            <span> БЕСПЛАТНО</span>
          </p>
          <a href="tel:+70000000000" className={styles.gift__tel}>
            +7 (000) 000-00-00
          </a>
          <button className={styles.gift__button}>Оставить заявку</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
