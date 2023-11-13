import FeatureSection from "./components/Feature/FeatureSection";
import HeaderSection from "./components/Header/HeaderSection";
import ToolList from "./components/ToolList/ToolList";

const App = () => {
  return (
    <>
      <div>
        <HeaderSection />
      </div>
      <div className="border-y border-line">
        <FeatureSection />
      </div>
      <div className="container">
        <ToolList />
      </div>
    </>
  );
};

export default App;
