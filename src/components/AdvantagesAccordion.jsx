import styled from "@emotion/styled";
import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";
import { useState } from "react";
import { Collapse } from "@mui/material";

const MainList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  marginTop: 20,
}));
const ListItem = styled("li")(() => ({
  borderRadius: 10,

  backgroundColor: "#F7F6F2",
}));
const ListItemWrapp = styled("div")(() => ({
  display: "flex",
  padding: "20.5px 20px",
  columnGap: 30,
  cursor: "pointer",
  userSelect: "none",
}));
const ListItemTitle = styled("h3")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "18px",
  color: "#383736",

  "@media (min-width: 992px)": {
    fontWeight: 500,
    fontSize: "27px",
  },
}));

const ListItemDescription = styled("p")(() => ({
  padding: "0 20px 20.5px 20px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "14px",
  color: "#383736",

  "@media (min-width: 992px)": {
    fontSize: "16px",
    lineHeight: "26px",
  },
}));

const Item = ({ isActive, title, description, clickHandler }) => {
  return (
    <ListItem>
      <ListItemWrapp onClick={clickHandler}>
        {isActive ? (
          <img src={minusIcon} alt="minus icon" />
        ) : (
          <img src={plusIcon} alt="plus icon" />
        )}
        <ListItemTitle>{title}</ListItemTitle>
      </ListItemWrapp>

      <Collapse in={isActive}>
        <ListItemDescription>{description}</ListItemDescription>
      </Collapse>
    </ListItem>
  );
};

const ADVANTAGES = [
  {
    id: 1,
    title: "Собственное производство металлоконструкций",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 2,
    title: "Собственный отдел проектирования",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 3,
    title: "Собственный отдел логистики и снабжения",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 4,
    title: "Собственный отдел инженерных изысканий",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 5,
    title: "Собственный парк техники",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
];

const AdvantagesAccordion = () => {
  const [activeItem, setActiveItem] = useState(1);

  const setActive = (itemId) => {
    setActiveItem((prevActive) => (prevActive === itemId ? null : itemId));
  };

  return (
    <MainList>
      {ADVANTAGES.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          isActive={activeItem === item.id}
          clickHandler={() => {
            setActive(item.id);
          }}
        />
      ))}
    </MainList>
  );
};

export default AdvantagesAccordion;
