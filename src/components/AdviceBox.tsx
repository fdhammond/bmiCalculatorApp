import styled from "styled-components";

type AdviceProps = {
  image: string;
  title: string;
  paragraph: string;
};

export default function AdviceBox({ image, title, paragraph }: AdviceProps) {
  return (
    <>
      <Wrapper>
        <ImageContainer>
          <ImageBackground>
            <img src={image} alt="" />
          </ImageBackground>
        </ImageContainer>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
        <p>{paragraph}</p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  img {
    max-width: 50px;
    max-height: 50px;
  }
`;

const ImageBackground = styled.div`
  width: 70px; /* Increase the width and height for a larger background circle */
  height: 70px; /* Adjust the size as needed */
  border-radius: 50%; /* Creates a circle */
  background-color: #ccc; /* Grey color background */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin: 0.5rem 0%;
  width: 100%;
  height: 100%;
`;
