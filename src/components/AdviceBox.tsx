import styled from "styled-components";

type AdviceProps = {
  image: string;
  title: string;
  paragraph: string;
};

export default function AdviceBox({ image, title, paragraph }: AdviceProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <ImageBackground>
          <img src={image} alt="" />
        </ImageBackground>
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 667px) {
    display: flex;
    align-items: center;
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1.5rem;
  }
`;

const ImageBackground = styled.div`
  width: 75px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-top: 1.5rem;
  max-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
