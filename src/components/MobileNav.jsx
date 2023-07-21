import { Link } from "react-router-dom";
import style from "./MobileNav.module.css";
import close from "../assets/close.svg";

const MobileNav = ({ closeHandler }) => {
  return (
    <div className={style.list__wrapp}>
      <ul className={style.list}>
        <li>
          <Link to="/" className={style["list__link"]}>
            Строительство
          </Link>
        </li>
        <li>
          <Link to="/" className={style["list__link"]}>
            Производство
          </Link>
        </li>
        <li>
          <Link to="/" className={style["list__link"]}>
            Проектирование
          </Link>
        </li>
        <li>
          <Link to="/" className={style["list__link"]}>
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/" className={style["list__link"]}>
            партнеры
          </Link>
        </li>
        <li>
          <Link to="/" className={style["list__link"]}>
            О компании
          </Link>
        </li>
      </ul>
      <img
        className={style["list__close-btn"]}
        src={close}
        alt="close icon"
        onClick={closeHandler}
      />
    </div>
  );
};

export default MobileNav;
