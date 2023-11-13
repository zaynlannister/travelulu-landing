import FeatureSection from "./components/Feature/FeatureSection";
import HeaderSection from "./components/Header/HeaderSection";

const App = () => {
  return (
    <>
      <div>
        <HeaderSection />
      </div>
      <div className="border-y border-line">
        <FeatureSection />
      </div>
    </>
  );
};

export default App;
