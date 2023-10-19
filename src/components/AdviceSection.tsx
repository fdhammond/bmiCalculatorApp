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
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Create three equal columns
  gap: 20px; // Adjust this value for spacing between columns
  margin: 10rem 10rem;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // On smaller screens, have one column
  }

  // You can add additional CSS for styling the columns if needed
  /* .column {
       border: 1px solid #ccc;
       padding: 10px;
  } */
`;
