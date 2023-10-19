import styled from "styled-components";
import Hero from "./components/Hero";
import ResultSection from "./components/ResultSection";
import AdviceSection from "./components/AdviceSection";

function App() {
  return (
    <>
      <Hero />
      <ResultSection />
      <AdviceSection />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
