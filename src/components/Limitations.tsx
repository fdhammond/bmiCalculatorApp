import { PiGenderIntersex, PiCakeBold, PiBabyBold } from "react-icons/pi";
import { GiBiceps } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { BiBone } from "react-icons/bi";
import styled from "styled-components";

export default function Limitations() {
  return (
    <>
      <TextContainer>
        <h1>Limitations of BMI</h1>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </TextContainer>
      <Container>
        <Grid>
          <GridItem>
            <TitleContainer>
              <PiGenderIntersex className="iconStyle-gender" />
              <h1>Gender</h1>
            </TitleContainer>
            <p>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </GridItem>
          <GridItem>
            <TitleContainer>
              <PiCakeBold className="iconStyle-age" />
              <h1>Age</h1>
            </TitleContainer>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </GridItem>
          <GridItem>
            <TitleContainer>
              <GiBiceps className="iconStyle-muscle" />
              <h1>Muscle</h1>
            </TitleContainer>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </GridItem>
          <GridItem>
            <TitleContainer>
              <PiBabyBold className="iconStyle-pregnancy" />
              <h1>Pregnancy</h1>
            </TitleContainer>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </GridItem>
          <GridItem>
            <TitleContainer>
              <FaBaby className="iconStyle-race" />
              <h1>Race</h1>
            </TitleContainer>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </GridItem>
          <GridItem>
            <TitleContainer>
              <BiBone className="iconStyle-bone" />
              <h1>Bone Density</h1>
            </TitleContainer>
            <p>
              Some people have denser bones and larger frames than others.
              However, people with large frames will have higher BMIs, even
              though they may be healthy and not overweight.
            </p>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
  padding-bottom: 10rem;
  overflow: auto; // Add this for horizontal scrolling
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    padding-left: 1.5rem;
  }

  .iconStyle-gender {
    font-size: 1.8rem;
    color: #b14141;
  }
  .iconStyle-age {
    font-size: 1.8rem;
    color: #00e7e7;
  }
  .iconStyle-muscle {
    font-size: 1.8rem;
    color: #d600d6;
  }
  .iconStyle-pregnancy {
    font-size: 1.8rem;
    color: #cbc325;
  }
  .iconStyle-race {
    font-size: 1.8rem;
    color: #ff34a0;
  }
  .iconStyle-bone {
    font-size: 1.8rem;
    color: #acacac;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin-left: 10rem;
  h1 {
    font-size: 3.5rem;
  }
  p {
    max-width: 400px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    position: relative;
    max-width: 300px;
    margin-left: 2rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      max-width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 380px));
  gap: 1rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column layout for small screens
  }
`;

const GridItem = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 16px #b9e0ff;
  padding: 2rem;
  h1 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: #333;
  }
  p {
    margin: 0;
    color: #666;
  }

  @media (max-width: 768px) {
    // Add mobile-specific styles if needed
  }
`;
