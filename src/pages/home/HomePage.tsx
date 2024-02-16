import { FeaturedServices } from "./components/sections/FeaturedServices";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSections";
import StatsCounter from "./components/sections/StatsCounter";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <ServicesSection />
        <FeaturedServices />
        <StatsCounter />
      </div>
      <StyleSheet />
    </>
  );
};

export default HomePage;

const StyleSheet = () => {
  return <style>{``}</style>;
};
