import styled from "@emotion/styled";
import arrowIcon from "../assets/arrowIcon.svg";
import { Collapse, duration } from "@mui/material";

const ListItemWrapper = styled("div")(({ isActive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: 10,
  padding: "20px 14px",

  color: isActive ? "#383736" : "#787878",
  backgroundColor: isActive ? "#FCDB5C" : "#F7F6F2",
  cursor: "pointer",
  userSelect: "none",

  transitionProperty: "background-color, color",
  transitionDuration: `${duration.standard}ms`,
  transitionTimingFunction: "ease",
}));

const ListItemNumber = styled("span")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "24px",
  // color: "#787878",
}));

const ListItemTitle = styled("h3")(() => ({
  width: "100%",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "15px",
  // color: "#787878",
}));

const ListItemIcon = styled("img")(({ isActive }) => ({
  transition: `transform ${duration.standard}ms ease`,
  transform: isActive ? "rotate(180deg)" : "",
}));

const ListItemText = styled("p")(() => ({
  padding: "30px 20px",
  backgroundColor: "#2C2C32",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 400,
  fontSize: "16px",
  color: "#C8C8C8",
}));

const CounteButton = styled("button")(() => ({
  width: "100%",
  paddingTop: 25,
  paddingBottom: 25,
  marginTop: 30,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "18px",
  color: "#383736",

  backgroundColor: "#FCDB5C",
  border: "none",
  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
}));

const ListItem = ({ isActive, item, setActive }) => {
  console.log(duration);
  return (
    <li>
      <ListItemWrapper isActive={isActive} onClick={() => setActive(item.id)}>
        <ListItemNumber>
          {item.id < 10 ? `0${item.id}` : item.id}
        </ListItemNumber>
        <ListItemTitle>{item.title}</ListItemTitle>
        <ListItemIcon src={arrowIcon} alt="arrow icon" isActive={isActive} />
      </ListItemWrapper>

      <Collapse in={isActive}>
        <ListItemText>
          {item.text}
          <br />
          <br />
          {item.additionalText && item.additionalText}

          <CounteButton>Расчитать стоимость</CounteButton>
        </ListItemText>
      </Collapse>
    </li>
  );
};

export default ListItem;
