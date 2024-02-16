import { FeaturedServices } from "./components/sections/FeaturedServices";
import { HeroSection } from "./components/sections/HeroSection";
import { OurPartners } from "./components/sections/OurPartners";
import { Services } from "./components/sections/Services";
import { StatsCounter } from "./components/sections/StatsCounter";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <Services />
        <FeaturedServices />
        <StatsCounter />
        <OurPartners />
      </div>
      <StyleSheet />
    </>
  );
};

export default HomePage;

const StyleSheet = () => {
  return <style>{``}</style>;
};
