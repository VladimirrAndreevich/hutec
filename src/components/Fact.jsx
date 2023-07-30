import styled from "@emotion/styled";

const MainWrapper = styled("div")(() => ({
  padding: "14px 30px 18px 30px",
  maxWidth: 300,
  marginRight: "auto",
  marginLeft: "auto",

  borderRadius: 20,
  backgroundColor: "#F7F6F2",
  textAlign: "center",

  "@media (min-width: 775px)": {
    marginRight: 0,
    marginLeft: 0,
    width: 300,
  },

  "@media (min-width: 1000px)": {
    padding: "30px 20px",

    width: 350,
    maxWidth: 350,
  },
}));

const CounterText = styled("p")(() => ({
  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 700,
  fontSize: "51px",
  color: "#FCDB5C",

  "@media (min-width: 1000px)": {
    fontSize: "61px",
  },
}));

const DescriptionText = styled("p")(() => ({
  marginTop: 10,
  paddingLeft: 10,
  paddingRight: 10,

  fontFamily: `"Raleway", sans-serif`,
  fontWeight: 600,
  fontSize: "24px",
  color: "#383736",
  textTransform: "uppercase",

  "@media (min-width: 1000px)": {
    fontSize: "31px",
  },
}));

const Fact = ({ counter, description, needTransferFirstLetter }) => {
  let firstWord = description;
  let restOfText = "";

  if (needTransferFirstLetter) {
    const words = description.split(" ");
    firstWord = words.length > 0 ? words[0] : description;
    restOfText = words.slice(1).join(" ");
  }

  return (
    <MainWrapper>
      <CounterText>{counter}</CounterText>
      <DescriptionText>
        {needTransferFirstLetter ? (
          <>
            {firstWord}
            <br />
            {restOfText}
          </>
        ) : (
          description
        )}
      </DescriptionText>
    </MainWrapper>
  );
};

export default Fact;
