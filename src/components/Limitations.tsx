import styled from "styled-components";

export default function Limitations() {
  return (
    <Container>
      <Grid>
        <GridItem className="div1">
          <h1>Gender</h1>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </GridItem>
        <GridItem className="div2">
          <h1>Age</h1>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </GridItem>
        <GridItem className="div3">
          <h1>Muscle</h1>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </GridItem>
        <GridItem className="div4">
          <h1>Pregnancy</h1>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </GridItem>
        <GridItem className="div5">
          <h1>Race</h1>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </GridItem>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  border-color: #6889ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  width: 100%;
`;

const GridItem = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  h1 {
    margin: 0 0 1rem 0;
  }
  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
