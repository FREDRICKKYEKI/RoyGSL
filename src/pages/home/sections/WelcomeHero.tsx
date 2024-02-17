export const WelcomeHero = () => {
  return (
    <>
      <section className="welcome-hero slider-wrapper theme-default">
        <div id="slider" className="nivoSlider">
          <img
            src="images/welcome-hero/one.png"
            data-thumb="images/welcome-hero/one.png"
            alt=""
            title="#htmlcaption1"
            data-transition="slideInLeft"
          />
          <img
            src="images/welcome-hero/five.jpg"
            data-thumb="images/welcome-hero/five.jpg"
            alt=""
            title="#htmlcaption2"
          />
          <img
            src="images/welcome-hero/two.png"
            data-thumb="images/welcome-hero/two.png"
            alt=""
            title="#htmlcaption3"
            data-transition="boxRandom"
          />
        </div>
        <div id="htmlcaption1" className="nivo-caption">
          <div className="welcome-hero-txt first">
            <h2>Get the right workforce for your company</h2>
            <p>
              We help companies find the right talent to drive their business
            </p>
          </div>
        </div>
        <div id="htmlcaption2" className="nivo-caption">
          <div className="welcome-hero-txt second">
            <h2>Guaranteed Job Placement for the right candidates</h2>
            <p>
              We help candidates find the right job and get placed in the right
              company
            </p>
          </div>
        </div>
        <div id="htmlcaption3" className="nivo-caption">
          <div className="welcome-hero-txt third">
            <h2>Get a chance to study and work abroad</h2>
            <p>We help students get scholarships and study abroad</p>
          </div>
        </div>

        <StyleSheet />
      </section>
    </>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
            .welcome-hero img {
              background: var(--color-dark);
              animation: slowZoom 20s ease-in-out;
            }

            @keyframes slowZoom {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.5);
              }
            }

            .welcome-hero-txt {
              transform: translateY(120%);
              color: var(--white-color-02);
              font-size: 16px;
              min-height: 150px;
              margin-left: 10%;
              text-align: start;
            }

            .welcome-hero-txt h2 {
              animation: bounceInDown 1s ease-in-out !important;
            }

            .welcome-hero-txt p {
                animation: flipInY 1s ease-in-out;
            }

            .welcome-hero-txt.second h2 {
              animation: bounceInLeft 1s ease-in-out !important;
            }

            .welcome-hero-txt.third h2 {
              animation: bounceInRight 1s ease-in-out !important;
            }

            .welcome-hero-txt.second p {
              animation: bounceInRight 1s ease-in-out !important;
            }

            .welcome-hero-txt.third p {
              animation: ${(window as any).animations[6]} 1s ease-in-out;
            }


            .welcome-hero-txt.third p {
                animation: bounceInUp 1s ease-in-out;
            }

            .welcome-hero-txt h2,
            .welcome-hero-txt p {
                opacity: 1 !important;
            }

            .welcome-hero-txt h2 {
                text-transform: uppercase;
                font-weight: 700;
            }

            .nivo-caption {
              background-color: var(--color-trans-dark) !important;
              height: 100%;
              inset: 0;
            }

            @media screen and (max-width: 767px) {
              .nivo-caption {
                height: 100%;
                inset: 0;
              }

              .welcome-hero-txt h2 {
                font-size: 1rem !important;
              }

              .welcome-hero-txt {
                transform: translateY(0%);
              }
            }

        `}
    </style>
  );
};
