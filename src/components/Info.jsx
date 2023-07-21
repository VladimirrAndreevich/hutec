import globeIcon from "../assets/info_icons/globe.svg";
import location from "../assets/info_icons/location.svg";
import phone from "../assets/info_icons/phone.svg";
import style from "./Info.module.css";

const Info = () => {
  return (
    <ul className={style.list}>
      <li className={style["list__item"]}>
        <img src={globeIcon} alt="globe icon" />
        <div>
          <p>ОФИС: СПб, Пулковское шоссе, дом 30 к 4, офис 205</p>
          <p>Производство: СПб, Пулковское шоссе, дом 30 к 4</p>
        </div>
      </li>
      <li className={style["list__item"]}>
        <img src={location} alt="location icon" />
        <div>
          <p>круглосуточно</p>
          <p>
            <a href="tel:+70000000000" className={style["list__link"]}>
              +7 (000) 000-00-00
            </a>
          </p>
        </div>
      </li>
      <li className={style["list__item"]}>
        <img src={phone} alt="phone icon" />
        <div>
          <p>сайт компании</p>
          <p>
            <a
              href="www.newteck.ru"
              target="_blank"
              className={style["list__link"]}
            >
              www.newteck.ru
            </a>
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Info;
