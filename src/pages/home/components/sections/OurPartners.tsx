import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const OurPartners = () => {
  const settings = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <section className="our-partner mt-5">
      <Slider {...settings}>
        {Array.from({ length: 100 }).map((_, _index) => (
          <img src="partner1.jpg" alt={`Partner ${_index}`} />
        ))}
      </Slider>
      <StyleSheet />
    </section>
  );
};

const StyleSheet = () => (
  <style>
    {`

  `}
  </style>
);
