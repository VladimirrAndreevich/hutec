import { Container, useMediaQuery } from "@mui/material";
import classes from "./ExperienceSection.module.scss";
import mapImg from "../assets/map2.svg";

const ExperienceSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  return (
    <section className={classes.section}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLargeScreen && (
          <div style={{ flexBasis: "60%" }}>
            <img src={mapImg} alt="map img" />
          </div>
        )}

        <div
          style={{
            maxWidth: 320,
            fontFamily: `"Raleway", sans-serif`,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 45,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: 80,
                fontWeight: 700,
                color: "#FCDB5C",
              }}
            >
              13
            </span>
            <span
              style={{
                textTransform: "uppercase",
              }}
            >
              лет опыта
            </span>
          </h2>
          <hr style={{ width: "40%", margin: "25px auto", height: 1 }} />
          <h2
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: 80,
                textTransform: "uppercase",
              }}
            >
              Более
            </span>
            <span
              style={{
                display: "block",
                fontSize: 80,
                fontWeight: 700,
                color: "#FCDB5C",
              }}
            >
              250
            </span>
            реализованных объектов
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
