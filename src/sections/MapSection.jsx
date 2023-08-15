import classes from "./MapSection.module.scss";

const MapSection = () => {
  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <address className={classes.address}>
        Санкт-Петербург, Пулковское шоссе, дом 30 к 4, офис 205
      </address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.4499115233266!2d30.327602999999996!3d59.82505799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469625268f088a0f%3A0x9d24ac7cfc3c3175!2sPulkovskoye%20Shosse%2C%2030%20%D0%BA%D0%BE%D1%80%D0%BF.%204%2C%20Ofis%20205%2C%20Sankt-Peterburg%2C%20Russia%2C%20196105!5e0!3m2!1sen!2slt!4v1692100032079!5m2!1sen!2slt"
        width="100%"
        height="580"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default MapSection;
