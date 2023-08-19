import { NavLink } from "react-router-dom";
import style from "./MobileNav.module.css";
import close from "../assets/close.svg";

const MobileNav = ({ closeHandler }) => {
  return (
    <div className={style.list__wrapp}>
      <ul className={style.list}>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            Строительство
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/production"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            Производство
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/design"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            Проектирование
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/services"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            Услуги
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/partners"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            партнеры
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
            to="/about-company"
            className={style["list__link"]}
            onClick={closeHandler}
          >
            О компании
          </NavLink>
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
