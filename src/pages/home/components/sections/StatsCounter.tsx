export const StatsCounter = () => {
  return (
    <section className="stats-counter parallaxie row mt-5">
      <h3 className="stats-title mb-4">Our Company in Numbers</h3>
      <div className="col-md-3 col-sm-6 mt-3">
        <div className="stats-item  text-center">
          <h4 className="counter">125</h4>
          <small>Projects Completed</small>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mt-3">
        <div className="stats-item  text-center">
          <h4 className="counter">150</h4>
          <small>Happy Clients</small>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mt-3">
        <div className="stats-item  text-center">
          <h4 className="counter">1390</h4>
          <small>Working Hours</small>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 mt-3">
        <div className="stats-item  text-center">
          <h4 className="counter">15</h4>
          <small>Awards Won</small>
        </div>
      </div>
      <StyleSheet />
    </section>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
        .parallaxie {
          background-image: url(images/stats/stats-bg.jpg);
          background-size: cover;
        }
        .stats-counter {
            padding: 40px 0;
            color: var(--color-white-03) !important;
            text-align: center;
        }
        `}
    </style>
  );
};
