import { Container } from "@mui/material";
import classes from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <h3 className={classes.title}>Cтраница не найдена!</h3>
        <Link to="/" className={classes.comeback}>
          Вернуться на главную
        </Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
