import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import houseIcon from "../assets/calculation/house.svg";
import doorIcon from "../assets/calculation/doors.svg";
import foundationIcon from "../assets/calculation/foundation.svg";
import gateIcon from "../assets/calculation/gates.svg";
import roofIcon from "../assets/calculation/roof.svg";
import wallIcon from "../assets/calculation/walls.svg";
import windowIcon from "../assets/calculation/windows.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ expanded }) => ({
    backgroundColor: expanded ? "rgba(173, 194, 42)" : "rgb(249, 249, 249)",
    borderRadius: "8px",
    padding: "19px 30px",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      columnGap: "12px",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "8px",
  backgroundColor: "rgba(173, 194, 42)",
  marginTop: "8px",
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionTitle = styled("h2")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 500,
  fontSize: "21px",
  // [theme.breakpoints.up("lg")]: {
  //   color: "red",
  // },
}));

// const AccordionSummaryWrapper = styled("div")(() => ({
//   display: "flex",
// }));

const CalculationAccordian = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
        marginTop: "25px",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expanded={expanded === "panel1"}
        >
          <img src={houseIcon} alt="an house icon" />
          <AccordionTitle>Габариты здания</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expanded={expanded === "panel2"}
        >
          <img src={foundationIcon} alt="an house icon" />
          <AccordionTitle>Фундамент</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expanded={expanded === "panel3"}
        >
          <img src={wallIcon} alt="an house icon" />
          <AccordionTitle>Стены</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          expanded={expanded === "panel4"}
        >
          <img src={roofIcon} alt="an house icon" />
          <AccordionTitle>Кровля</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          expanded={expanded === "panel5"}
        >
          <img src={gateIcon} alt="an house icon" />
          <AccordionTitle>Ворота</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          expanded={expanded === "panel6"}
        >
          <img src={doorIcon} alt="an house icon" />
          <AccordionTitle>Двери</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          expanded={expanded === "panel7"}
        >
          <img src={windowIcon} alt="an house icon" />
          <AccordionTitle>Окна</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CalculationAccordian;
