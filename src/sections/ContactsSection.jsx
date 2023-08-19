import { Container } from "@mui/material";
import classes from "./ContactsSection.module.scss";
import phoneIcon from "../assets/contacts_icons/phoneIcon.svg";
import mailIcon from "../assets/contacts_icons/mailIcon.svg";

const Social = ({ type, data }) => {
  if (type === "mail") {
    return (
      <div className={classes.social}>
        <img
          src={mailIcon}
          alt="mail icon"
          className={classes["social__img"]}
        />
        <a href={`mailto:${data}`} className={classes["social__link"]}>
          {data}
        </a>
      </div>
    );
  }

  return (
    <div className={classes.social}>
      <img
        src={phoneIcon}
        alt="phone icon"
        className={classes["social__img"]}
      />
      <a href="tel:+80000000000" className={classes["social__link"]}>
        8(000) 000 - 00 - 00
      </a>
    </div>
  );
};

const ContactsSection = () => {
  return (
    <section className={classes.section}>
      <Container maxWidth="xl">
        <h2 className={classes.title}>Контактные данные</h2>
        <ul className={classes.list}>
          <li className={classes.item}>
            <h3 className={classes.item__title}>ОФИС</h3>
            <Social />
            <Social type="mail" data="mail@mail.ru" />

            <h3 className={classes.item__title}>ДИРЕКТОР ПО СТРОИТЕЛЬСТВУ</h3>
            <Social />
            <Social type="mail" data="mail@mail.ru" />

            <address>
              Санкт-Петербург, Пулковское шоссе, дом 30 к 4, офис 205
            </address>
          </li>
          <li className={classes.item}>
            <h3 className={classes.item__title}>ПРОИЗВОДСТВО</h3>
            <Social />
            <Social type="mail" data="mail@mail.ru" />

            <h3 className={classes.item__title}>НАЧАЛЬНИК ПРОИЗВОДСТВА</h3>
            <Social />
            <Social type="mail" data="mail@mail.ru" />

            <address>
              Санкт-Петербург, тер. Старо-Паново, ул. Рабочая 7 б
            </address>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ContactsSection;
