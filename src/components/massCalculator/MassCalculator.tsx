import { useState, useEffect } from "react";
import styled from "styled-components";
import massCalculator from "../../helpers/massCalculator";

export default function MassCalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBmi] = useState<number | string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10) as number;
    setHeight(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleInputChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10) as number;
    setWeight(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleButtonClick = () => {
    setBmi(() => Number(massCalculator(Number(height), Number(weight))));
  };

  const handleButtonClickReset = () => {
    setBmi("");
    setHeight("");
    setWeight("");
    setMessage("");
  };

  useEffect(() => {
    setMessage("");
    if (typeof bmi === "number") {
      if (bmi < 18.5) {
        setMessage(
          "Your BMI suggest you're not in a healthy weight. This number indicates you're underweight"
        );
      } else if (bmi > 18.5 && bmi < 25) {
        const lowerRange: number = parseFloat(
          (18.5 * ((Number(height) / 100) * (Number(height) / 100))).toFixed(1)
        );
        const upperRange: number = parseFloat(
          (24.9 * ((Number(height) / 100) * (Number(height) / 100))).toFixed(1)
        );

        setMessage(
          `Your BMI suggest you're a healthy weight. Your ideal is between ${lowerRange}kg and ${upperRange}kg`
        );
      } else if (bmi > 25 && bmi < 30) {
        setMessage(
          "Your BMI suggest you're not in a healthy weight. This number indicates you're overweight"
        );
      } else {
        setMessage(
          "Your BMI suggest you're not in a healthy weight. This number indicates you're obese"
        );
      }
    }
    console.log(message);
  }, [bmi, message, height]);

  return (
    <>
      <Wrapper>
        <p>Enter your details bellow in metric system (cm / kg)</p>
        <Container>
          <InfoContainer>
            <label>Height</label>
            <Input
              type="number"
              id="metric"
              value={height}
              onChange={handleInputChangeHeight}
            />
          </InfoContainer>

          <InfoContainer>
            <label>Weight</label>
            <Input
              type="number"
              id="imperial"
              value={weight}
              onChange={handleInputChangeWeight}
            />
          </InfoContainer>
        </Container>
        {!bmi ? (
          <Container>
            <Button onClick={handleButtonClick}>Calculate BMI</Button>
          </Container>
        ) : (
          ""
        )}
        <Container>
          <InfoContainerShape>
            {bmi ? (
              <>
                <ResultContainer>
                  <ResultContainerText bmiColor={Number(bmi)}>
                    <h3>Your BMI is...</h3>
                    <h1>{bmi}</h1>
                  </ResultContainerText>
                  <ResultContainerMessage>
                    <p>{message}</p>
                    <Button onClick={handleButtonClickReset}>Reset BMI</Button>
                  </ResultContainerMessage>
                </ResultContainer>
              </>
            ) : (
              <ShapeContainer>
                <>
                  <h2>Welcome!</h2>

                  <p>
                    Enter your height and weight and you'll see your BMI result
                    here
                  </p>
                </>
              </ShapeContainer>
            )}
          </InfoContainerShape>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: 2rem;
  padding: 2rem;
  background-color: white;
  color: black;
  width: 100%;
  max-width: 30rem;
  max-height: 24rem;
  border-radius: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const InfoContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 6px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  font-weight: 700;
  border-style: solid;
  border-radius: 0px;
  box-shadow: 0px 0px 5px #6889ff;
  margin-right: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const InfoContainerShape = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  background-color: #6889ff;
  color: #ffffff;
  max-height: 16rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  button {
    margin-top: 0;
  }
`;

const ShapeContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #6889ff;
  color: #ffffff;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  max-width: 10rem;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 25rem;
`;

const ResultContainerText = styled.div<{ bmiColor: number }>`
  justify-content: flex-start;

  h1 {
    color: ${(props) =>
      props.bmiColor > 18.5 && props.bmiColor < 25 ? "lightgreen" : "red"};
    font-weight: 900;
    margin: 0;
  }
`;

const ResultContainerMessage = styled(ResultContainer)`
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
