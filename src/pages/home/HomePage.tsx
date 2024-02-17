import { FeaturedServices } from "./components/sections/FeaturedServices";
import { WelcomeHero } from "./components/sections/WelcomeHero";
import { OurPartners } from "./components/sections/OurPartners";
import { Services } from "./components/sections/Services";
import { StatsCounter } from "./components/sections/StatsCounter";
import FinalHero from "./components/sections/FinalHero";

const HomePage = () => {
  return (
    <>
      <WelcomeHero />
      <div className="container">
        <Services />
        <FeaturedServices />
        <StatsCounter />
        <OurPartners />
      </div>
      <FinalHero />
      <StyleSheet />
    </>
  );
};

export default HomePage;

const StyleSheet = () => {
  return <style>{``}</style>;
};
