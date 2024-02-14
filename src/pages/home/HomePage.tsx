const HomePage = () => {
  return (
    <>
      <section className="welcome-hero slider-wrapper theme-default">
        <div id="slider" className="nivoSlider">
          <img
            src="images/welcome-hero/banner1.jpg"
            data-thumb="images/welcome-hero/banner1.jpg"
            alt=""
            title="#htmlcaption1"
          />
          <img
            src="images/welcome-hero/banner2.jpg"
            data-thumb="images/welcome-hero/banner2.jpg"
            alt=""
            title="#htmlcaption2"
            data-transition="slideInLeft"
          />
          <img
            src="images/welcome-hero/banner3.jpg"
            data-thumb="images/welcome-hero/banner3.jpg"
            alt=""
            title="#htmlcaption3"
            data-transition="boxRandom"
          />
          <img
            src="images/welcome-hero/banner4.jpg"
            data-thumb="images/welcome-hero/banner4.jpg"
            alt=""
            title="#htmlcaption4"
            data-transition="boxRainGrowReverse"
          />
          <img
            src="images/welcome-hero/banner5.jpg"
            data-thumb="images/welcome-hero/banner5.jpg"
            alt=""
            title="#htmlcaption5"
          />
        </div>
        <div id="htmlcaption1" className="nivo-caption">
          <div className="welcome-hero-txt">
            <h2>
              best place to find and explore <br /> all you the Human Resource
              you need
            </h2>
            <p>
              Find and explore the top rated Human Resource you need for your
              business
            </p>
          </div>
        </div>
        <div id="htmlcaption2" className="nivo-caption">
          <div className="welcome-hero-txt">
            <h2>Unlock Your Business Potential</h2>
            <p>
              Explore a world of Human Resources tailored to your requirements
            </p>
          </div>
        </div>
        <div id="htmlcaption3" className="nivo-caption">
          <div className="welcome-hero-txt">
            <h2>Empower Your Team</h2>
            <p>Find the talent you need to drive your business forward</p>
          </div>
        </div>
        <div id="htmlcaption4" className="nivo-caption">
          <div className="welcome-hero-txt">
            <h2>Grow Your Business with Us</h2>
            <p>Discover how our Human Resources can fuel your success</p>
          </div>
        </div>
        <div id="htmlcaption5" className="nivo-caption">
          <div className="welcome-hero-txt">
            <h2>Experience Excellence</h2>
            <p>Join hands with the best Human Resources available</p>
          </div>
        </div>
        <StyleSheet />
      </section>
    </>
  );
};

export default HomePage;


const StyleSheet = () => {

    return (
      <style>
        {`
            .welcome-hero-txt {
                color: var(--white-color-02);
                font-size: 16px;
                animation: ${(window as any).randomAnimation} 1s ease-in-out;
                text-align: center;
            }

            .welcome-hero-txt h2,
            .welcome-hero-txt p {
                opacity: 1 !important;
            }

            .welcome-hero-txt h2 {
                text-transform: uppercase;
                font-weight: 700;
            }

        `}
      </style>
    );
}
