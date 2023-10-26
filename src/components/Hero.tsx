import styled from "styled-components";
import MassCalculator from "./massCalculator/MassCalculator";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContainerText>
        <img
          src="https://res.cloudinary.com/dzkqopnby/image/upload/v1697553635/logoguy-01_vv8f6b.png"
          alt=""
        />
        <HeroText>
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </HeroText>
      </HeroContainerText>
      <MassCalculatorContainer>
        <MassCalculator />
      </MassCalculatorContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-color: white;
  color: #233247;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const HeroContainerText = styled(HeroContainer)`
  background: rgb(225, 241, 254);
  background: linear-gradient(
    90deg,
    rgba(225, 241, 254, 1) 0%,
    rgba(240, 254, 255, 1) 50%,
    rgba(225, 241, 254, 1) 80%,
    rgb(185, 224, 255) 100%
  );
  border-radius: 0 0 40px 40px;
  width: 100%;
  max-width: 90rem;
  margin-left: 1rem;
  img {
    max-width: 6rem;
    max-height: 8rem;
    margin-left: 6rem;
    @media (max-width: 768px) {
      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const HeroText = styled.div`
  margin-left: 8rem;
  max-width: 30rem;
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 1.2em;
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const MassCalculatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-left: 55%;
  position: absolute;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20rem 6rem 6rem 2rem;
    top: 75%;
  }
  @media (max-width: 667px) {
    display: flex;
    margin-left: 2rem;
    justify-content: center;
    width: 90%;
  }
`;
