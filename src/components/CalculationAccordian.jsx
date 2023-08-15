import { useState } from "react";
import classes from "./CalculationAccordian.module.scss";
import { Collapse, MenuItem, Select, useMediaQuery } from "@mui/material";
import SvgComponent from "../assets/calculation/house";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const styles = {
  select: {
    borderRadius: "10px",
    fontFamily: "Raleway, sans-serif",
    fontSize: 18,
    color: "#787878",

    "& .MuiSelect-select": {
      paddingLeft: "17px",
    },
  },
  menu_item: {
    fontFamily: "Raleway, sans-serif",
    fontSize: 16,
    color: "#787878",
  },
};

const ListItem = ({ id, title, isActive, clickHandler }) => {
  const isHorizontalStyle = useMediaQuery("(min-width: 700px)");

  if (isHorizontalStyle) {
    return (
      <li className={isActive ? classes.item_active : ""}>
        <div className={classes.item__wrapper} onClick={clickHandler}>
          <SvgComponent idSvg={`svg${id}`} color="#383736" />
          <h3>{title}</h3>
        </div>
        <div>
          <div className={classes.item__description}>
            <h4 className={classes["item__description-title"]}>Ширина</h4>
            <Select
              labelId="width-label"
              id="width"
              defaultValue={40}
              className={classes.select}
              sx={styles.select}
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value={10} sx={styles.menu_item}>
                10 метров
              </MenuItem>
              <MenuItem value={20} sx={styles.menu_item}>
                20 метров
              </MenuItem>
              <MenuItem value={30} sx={styles.menu_item}>
                30 метров
              </MenuItem>
              <MenuItem value={40} sx={styles.menu_item}>
                40 метров
              </MenuItem>
              <MenuItem value={50} sx={styles.menu_item}>
                50 метров
              </MenuItem>
              <MenuItem value={60} sx={styles.menu_item}>
                60 метров
              </MenuItem>
            </Select>
            <h4 className={classes["item__description-title"]}>Длина</h4>
            <Select
              labelId="lenght-label"
              id="lenght"
              defaultValue={40}
              className={classes.select}
              sx={styles.select}
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value={10} sx={styles.menu_item}>
                10 метров
              </MenuItem>
              <MenuItem value={20} sx={styles.menu_item}>
                20 метров
              </MenuItem>
              <MenuItem value={30} sx={styles.menu_item}>
                30 метров
              </MenuItem>
              <MenuItem value={40} sx={styles.menu_item}>
                40 метров
              </MenuItem>
              <MenuItem value={50} sx={styles.menu_item}>
                50 метров
              </MenuItem>
              <MenuItem value={60} sx={styles.menu_item}>
                60 метров
              </MenuItem>
            </Select>
            <h4 className={classes["item__description-title"]}>Высота</h4>
            <Select
              labelId="height-label"
              id="height"
              defaultValue={40}
              className={classes.select}
              sx={styles.select}
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value={10} sx={styles.menu_item}>
                10 метров
              </MenuItem>
              <MenuItem value={20} sx={styles.menu_item}>
                20 метров
              </MenuItem>
              <MenuItem value={30} sx={styles.menu_item}>
                30 метров
              </MenuItem>
              <MenuItem value={40} sx={styles.menu_item}>
                40 метров
              </MenuItem>
              <MenuItem value={50} sx={styles.menu_item}>
                50 метров
              </MenuItem>
              <MenuItem value={60} sx={styles.menu_item}>
                60 метров
              </MenuItem>
            </Select>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={isActive ? classes.item_active : ""}>
      <div className={classes.item__wrapper} onClick={clickHandler}>
        <SvgComponent idSvg={`svg${id}`} color="#383736" />
        <h3>{title}</h3>
      </div>
      <Collapse in={isActive}>
        <div className={classes.item__description}>
          <h4 className={classes["item__description-title"]}>Ширина</h4>
          <Select
            labelId="width-label"
            id="width"
            defaultValue={40}
            className={classes.select}
            sx={styles.select}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10} sx={styles.menu_item}>
              10 метров
            </MenuItem>
            <MenuItem value={20} sx={styles.menu_item}>
              20 метров
            </MenuItem>
            <MenuItem value={30} sx={styles.menu_item}>
              30 метров
            </MenuItem>
            <MenuItem value={40} sx={styles.menu_item}>
              40 метров
            </MenuItem>
            <MenuItem value={50} sx={styles.menu_item}>
              50 метров
            </MenuItem>
            <MenuItem value={60} sx={styles.menu_item}>
              60 метров
            </MenuItem>
          </Select>
          <h4 className={classes["item__description-title"]}>Длина</h4>
          <Select
            labelId="lenght-label"
            id="lenght"
            defaultValue={40}
            className={classes.select}
            sx={styles.select}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10} sx={styles.menu_item}>
              10 метров
            </MenuItem>
            <MenuItem value={20} sx={styles.menu_item}>
              20 метров
            </MenuItem>
            <MenuItem value={30} sx={styles.menu_item}>
              30 метров
            </MenuItem>
            <MenuItem value={40} sx={styles.menu_item}>
              40 метров
            </MenuItem>
            <MenuItem value={50} sx={styles.menu_item}>
              50 метров
            </MenuItem>
            <MenuItem value={60} sx={styles.menu_item}>
              60 метров
            </MenuItem>
          </Select>
          <h4 className={classes["item__description-title"]}>Высота</h4>
          <Select
            labelId="height-label"
            id="height"
            defaultValue={40}
            className={classes.select}
            sx={styles.select}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10} sx={styles.menu_item}>
              10 метров
            </MenuItem>
            <MenuItem value={20} sx={styles.menu_item}>
              20 метров
            </MenuItem>
            <MenuItem value={30} sx={styles.menu_item}>
              30 метров
            </MenuItem>
            <MenuItem value={40} sx={styles.menu_item}>
              40 метров
            </MenuItem>
            <MenuItem value={50} sx={styles.menu_item}>
              50 метров
            </MenuItem>
            <MenuItem value={60} sx={styles.menu_item}>
              60 метров
            </MenuItem>
          </Select>
        </div>
      </Collapse>
    </li>
  );
};

const LIST = [
  {
    id: 1,
    title: "Габариты здания",
  },
  {
    id: 2,
    title: "Фундамент",
  },
  {
    id: 3,
    title: "Стены",
  },
  {
    id: 4,
    title: "Кровля",
  },
  {
    id: 5,
    title: "Ворота",
  },
  {
    id: 6,
    title: "Двери",
  },
  {
    id: 7,
    title: "Окна",
  },
];

const CalculationAccordian = () => {
  const [activeItem, setActiveItem] = useState(1);

  const setActive = (itemId) => {
    setActiveItem((prevActive) => (prevActive === itemId ? null : itemId));
  };

  return (
    <ul className={classes.list}>
      {LIST.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          isActive={activeItem === item.id}
          clickHandler={() => {
            setActive(item.id);
          }}
        />
      ))}
    </ul>
  );
};

export default CalculationAccordian;
