import styled from "@emotion/styled";
import plusIcon from "../assets/plusIconLight.svg";
import minusIcon from "../assets/minusIconLight.svg";
import { useState } from "react";
import { Collapse } from "@mui/material";

const MainList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
}));
const ListItem = styled("li")(() => ({
  borderRadius: 10,
}));
const ListItemWrapp = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  columnGap: 17,
  cursor: "pointer",
  userSelect: "none",
}));
const ListItemTitle = styled("h3")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "21px",
  color: "#FFFFFF",

  "@media (min-width: 992px)": {
    fontSize: "27px",
  },
}));

const ListItemDescription = styled("p")(() => ({
  padding: "13px 20px 25px 41px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "14px",
  color: "#FFFFFF",

  "@media (min-width: 992px)": {
    fontSize: "16px",
    lineHeight: "26px",
    maxWidth: 674,
  },
}));

const Item = ({ isActive, title, description, clickHandler }) => {
  return (
    <ListItem>
      <ListItemWrapp onClick={clickHandler}>
        {isActive ? (
          <img src={minusIcon} alt="minus icon" style={{ marginTop: 2 }} />
        ) : (
          <img src={plusIcon} alt="plus icon" style={{ marginTop: 2 }} />
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
    title: "Чем больше мегапикселей тем лучше качество фото?",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 2,
    title: "Сколько мегапикселей нужно для хорошего фото?",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 3,
    title: "Почему мегапиксели не главное?",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 4,
    title: "Что влияет на качество снимков?",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
  {
    id: 5,
    title: "Какое самое лучшее качество фото?",
    description:
      "Если увеличить любое изображение на экране дисплея, вы увидите его в виде «сетки», состоящей из пикселей. Чем больше пикселей – тем лучше изображение. Чем больше мегапикселей – тем выше разрешение, а чем оно выше, тем качественнее получится снимок при широкоформатной печати.",
  },
];

const QuestionsAccordion = () => {
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

export default QuestionsAccordion;
