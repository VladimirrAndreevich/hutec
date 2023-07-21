import listIcon from "../assets/listIcon.svg";
import styles from "./NavButton.module.css";

const NavButton = ({ clickHandler }) => {
  return (
    <div className={styles.button} onClick={clickHandler}>
      <img src={listIcon} alt="nav icon" />
    </div>
  );
};

export default NavButton;
