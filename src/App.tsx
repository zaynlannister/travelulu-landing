import CommentsSection from "./components/Comments/CommentsSection";
import FeatureSection from "./components/Feature/FeatureSection";
import FooterSection from "./components/Footer/FooterSection";
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
      <div className="container">
        <CommentsSection />
      </div>
      <div className="container">
        <FooterSection />
      </div>
    </>
  );
};

export default App;
