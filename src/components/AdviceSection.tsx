import styled from "styled-components";
import AdviceBox from "./AdviceBox";
import { adviceData } from "../helpers/adviceData";

export default function AdviceSection() {
  return (
    <Wrapper>
      {adviceData.map((advice) => (
        <AdviceBox
          key={advice.type}
          image={advice.image}
          title={advice.title}
          paragraph={advice.paragraph}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: 10rem 10rem;
  background-color: #e8f3f9;
  border-radius: 20px;
  padding: 6rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 2rem 0;
    margin: 8rem 2rem;
  }
`;
