import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partners } from "../../../../utils";

export const OurPartners = () => {
  const settings = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true, // Pause autoplay when hovering over the slider
  };
  return (
    <section className="our-partners mt-5">
      <h3 className="primary-underline mb-5">Our Partners</h3>
      <Slider {...settings}>
        {partners.map((resource, _index) => (
          <img
            key={resource}
            src={`images/partners/${resource}`}
            alt={`Partner-${resource.slice(0, -4)}`}
          />
        ))}
      </Slider>
      <StyleSheet />
    </section>
  );
};

const StyleSheet = () => (
  <style>
    {`
      .our-partners img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin: 0 1rem;
      }
  `}
  </style>
);
