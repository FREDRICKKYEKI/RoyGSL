import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSections";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <ServicesSection/>
      </div>
      <StyleSheet />
    </>
  );
};

export default HomePage;


const StyleSheet = () => {

    return (
      <style>
        {``}
      </style>
    );
}
