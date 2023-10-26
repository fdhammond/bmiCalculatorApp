import { useState, useEffect } from "react";
import styled from "styled-components";
import massCalculator from "../../helpers/massCalculator";

interface InputProps {
  onError: boolean;
  // Add any other props you expect here
}

export default function MassCalculator() {
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBmi] = useState<number | string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleInputChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10) as number;
    setHeight(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleInputChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value, 10) as number;
    setWeight(isNaN(parsedValue) ? "" : parsedValue);
  };

  const handleButtonClick = () => {
    if (height === "" || weight === "") {
      setError(true);
    } else {
      setBmi(() => Number(massCalculator(Number(height), Number(weight))));
      setError(false);
    }
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
        <CalculatorTitle>
          <p>Enter your details bellow in metric system (cm / kg)</p>
        </CalculatorTitle>
        <Container>
          <InfoContainer>
            <label>Height</label>
            <Input
              type="number"
              id="metric"
              value={height}
              onChange={handleInputChangeHeight}
              onError={error}
            />
          </InfoContainer>

          <InfoContainer>
            <label>Weight</label>
            <Input
              type="number"
              id="imperial"
              value={weight}
              onChange={handleInputChangeWeight}
              onError={error}
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
  height: auto;
  max-width: 34rem;
  max-height: 26rem;
  border-radius: 0.5rem;
  border-radius: 20px;
  -webkit-box-shadow: 5px 5px 5px 5px #d0cece;
  box-shadow: 5px 5px 25px 5px #d0cece;
  p {
    font-size: 1.2em;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    max-width: 22.8rem;
    max-height: 34rem;
  }
  @media (min-width: 1024px) {
    margin-right: 6rem;
  }
`;

const CalculatorTitle = styled.div`
  p {
    font-size: 1.2em;
    font-weight: 700;
    color: #233247;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    button {
      margin-top: 0;
    }
  }
`;

const InfoContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  label {
    font-size: 14px;
    color: #818181;
  }

  &:nth-child(1) {
    margin-right: 2rem;
  }
  &:nth-child(2) {
    margin-right: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0.5rem;
    input {
      width: 90%;
      margin: 1rem 0;
      font-size: 24px;
    }
  }
`;

const Input = styled.input<InputProps>`
  padding: 8px;
  font-size: 16px;
  background-color: #ffffff;
  color: #6889ff;
  font-weight: 700;
  border-style: solid;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #6889ff;
  margin-top: 0.5rem;
  height: 2.5rem;
  font-size: 18.8px;
  width: 100%;
  border-color: ${(props) => (props.onError ? "red" : "#cccccc")};
  border-width: ${(props) => (props.onError ? "2px" : "1px")};
  &:focus {
    outline: none;
  }
`;

const InfoContainerShape = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: #6889ff;
  color: #ffffff;
  max-height: 16rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
  }
  button {
    margin-top: 0;
  }
`;

const ShapeContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #ffffff;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  max-width: 10rem;
  color: black;
  border-color: none;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  max-width: 25rem;
  @media (max-width: 768px) {
    height: 10rem;
    padding: 2rem;
  }
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
  @media (max-width: 768px) {
    margin: 0;
    padding: 0 2rem 0 2rem;
  }
`;
