import { FeaturedServices } from "./sections/FeaturedServices";
import { WelcomeHero } from "./sections/WelcomeHero";
import { OurPartners } from "./sections/OurPartners";
import { Services } from "./sections/Services";
import { StatsCounter } from "./sections/StatsCounter";
import FinalHero from "./sections/FinalHero";

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
