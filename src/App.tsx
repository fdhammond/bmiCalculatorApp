import Hero from "./components/Hero";
import ResultSection from "./components/ResultSection";
import AdviceSection from "./components/AdviceSection";
import { adviceData } from "./helpers/adviceData";

function App() {
  return (
    <>
      <Hero />
      <ResultSection />
      {adviceData.map((advice) => {
        return (
          <AdviceSection
            key={advice.type}
            image={advice.image}
            title={advice.title}
            paragraph={advice.paragraph}
          />
        );
      })}
    </>
  );
}

export default App;
