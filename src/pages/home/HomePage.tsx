import { FeaturedServices } from "./components/sections/FeaturedServices";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSections";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <ServicesSection />
        <FeaturedServices />
      </div>
      <StyleSheet />
    </>
  );
};

export default HomePage;

const StyleSheet = () => {
  return <style>{``}</style>;
};
