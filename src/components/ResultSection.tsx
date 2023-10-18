import styled from "styled-components";

export default function ResultSection() {
  return (
    <>
      <Container>
        <ResultImage>
          <ResultImageShape>
            <img
              src="https://res.cloudinary.com/dzkqopnby/image/upload/v1697637628/maneating_fgvkum.png"
              alt=""
            />
          </ResultImageShape>
        </ResultImage>
        <ResultText>
          <h1>What your BMI result means</h1>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight."
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </ResultText>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8rem;
  @media (max-width: 768px) {
    margin-top: 40rem;
    gap: 2rem;
  }
`;

const ResultImage = styled.div`
  max-width: 100%;
  img {
    position: absolute;
    width: 45rem;
    max-width: 100%;
    max-height: 100%;
  }
`;

const ResultImageShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b9e0ff;
  border-radius: 45px;
  height: 18rem;
  width: 30rem;
  @media (max-width: 768px) {
    height: 10rem;
    width: 20rem;
  }
`;

const ResultText = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 100%;
  line-height: 1.5rem;
  text-align: left;
  @media (max-width: 768px) {
    margin: 0 4rem;
  }
`;
