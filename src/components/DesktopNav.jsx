import { NavLink } from "react-router-dom";
import style from "./DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <div className={style["list__wrapper"]}>
      <ul className={style.list}>
        <li>
          <NavLink
            to="/"
            className={style["list__link"]}
            style={({ isActive }) =>
              isActive ? { color: "#FCDB5C" } : undefined
            }
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
          >
            О компании
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
