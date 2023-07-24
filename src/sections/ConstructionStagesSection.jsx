import styled from "@emotion/styled";
import { STAGES } from "./ArrayStages";
import { useState } from "react";
import ListItem from "../components/ListItem";

const MainSection = styled("section")(() => ({
  paddingTop: "30px",
  paddingBottom: "30px",
}));

const MainTitle = styled("h2")(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 700,
  fontSize: "27px",
  color: "#383736",
  textAlign: "center",
  textTransform: "uppercase",
}));

const UnderTitle = styled("h3")(() => ({
  marginTop: 11,
  paddingLeft: "20px",
  paddingRight: "20px",

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "16px",
  color: "#787878",
  textAlign: "center",
  textTransform: "uppercase",
}));

const List = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  marginTop: 30,
}));

const ConstructionStagesSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const setActive = (itemId) => {
    setActiveItem((prevActive) => (prevActive === itemId ? null : itemId));
  };

  return (
    <MainSection>
      <MainTitle>Этапы строительства</MainTitle>
      <UnderTitle>Каждый этап выполняем своими силами</UnderTitle>
      <List>
        {STAGES.map((stage) => (
          <ListItem
            key={stage.id}
            isActive={stage.id === activeItem}
            item={stage}
            setActive={setActive}
          />
        ))}
      </List>
    </MainSection>
  );
};

export default ConstructionStagesSection;
//conclusion: Make inner component
