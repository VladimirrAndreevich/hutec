import { Container, useMediaQuery } from "@mui/material";
import classes from "./RequisitesSection.module.scss";
import downloadIcon from "../assets/downloadIcon.svg";
import catImg from "../assets/cat.jpg";

const requisites = [
  {
    title: "Полное наименование организации",
    description: "Общество с ограниченной ответственностью «Весна»",
  },
  {
    title: "ЮРИДИЧЕСКИЙ АДРЕС",
    description: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
  },
  {
    title: "Почтовый адрес",
    description: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
  },
  {
    title: "ИНН",
    description: "7712345678",
  },
  {
    title: "КПП",
    description: "779101001",
  },
  {
    title: "БИК",
    description: "044521234",
  },
  {
    title: "Р/С",
    description:
      "40702810123450101230 в Московский банк ПАО Сбербанк г. Москва",
  },
  {
    title: "ОКПО",
    description: "12345678",
  },
  {
    title: "ОКВЭД (основной)",
    description: "18.15",
  },
  {
    title: "ОГРН",
    description: "1047712345678",
  },
  {
    title: "Генеральный директор",
    description: "Петров Сергей Петрович",
  },
  {
    title: "Электронная почта",
    type: "mail",
    description: "info@vesna.ru",
  },
  {
    title: "Телефон",
    type: "tel",
    description: "+749512345678",
  },
  {
    title: "Сайт",
    type: "website",
    description: "www.vesna.ru",
  },
];

const DownloadLink = () => {
  return (
    <div className={classes.download}>
      <a href={catImg} download className={classes["download__link"]}>
        <img src={downloadIcon} alt="file icon" />
        Скачать в формате PDF
      </a>
    </div>
  );
};

const RequisitesSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");

  return (
    <section className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <div className={classes["inner-container"]}>
          {!isLargeScreen && (
            <h3 className={classes.title}>реквизиты компании</h3>
          )}

          <ul className={classes["list"]}>
            {requisites.map((item, index) => {
              let contentDescription;

              switch (item.type) {
                case "website":
                  contentDescription = (
                    <a
                      href={item.description}
                      className={classes["item__description"]}
                    >
                      {item.description}
                    </a>
                  );
                  break;
                case "tel":
                  contentDescription = (
                    <a
                      href={`tel:${item.description}`}
                      className={classes["item__description"]}
                    >
                      {item.description}
                    </a>
                  );
                  break;
                case "mail":
                  contentDescription = (
                    <a
                      href={`mailto:${item.description}`}
                      className={classes["item__description"]}
                    >
                      {item.description}
                    </a>
                  );
                  break;
                default:
                  contentDescription = (
                    <p className={classes["item__description"]}>
                      {item.description}
                    </p>
                  );
                  break;
              }

              return (
                <div key={index} className={classes["item"]}>
                  <h4 className={classes["item__title"]}>{item.title}</h4>
                  {contentDescription}
                </div>
              );
            })}
          </ul>

          <div className={classes["aside-container"]}>
            {isLargeScreen && (
              <>
                <h3 className={classes.title}>реквизиты компании</h3>
                <div>
                  <h5 className={classes["add-info__title"]}>
                    Не нашли нужного ответа?
                  </h5>
                  <p className={classes["add-info__text"]}>
                    Вы всегда можете уточнить любой интересующий вас вопрос у
                    нашего менеджера по телефону или заполнив специальную форму
                    ниже
                  </p>
                </div>
              </>
            )}
            <DownloadLink />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequisitesSection;
