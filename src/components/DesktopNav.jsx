import { Link } from "react-router-dom";
import style from "./DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <div className={style["list__wrapper"]}>
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
    </div>
  );
};

export default DesktopNav;
