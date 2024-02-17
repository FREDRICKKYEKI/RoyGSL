import { finalHeroText, flags } from "../../../utils";

const FinalHero = () => {
  return (
    <section className="final-hero row bg-dark mt-5">
      <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
        <p dangerouslySetInnerHTML={{ __html: finalHeroText }} />
      </div>
      <div className="col-lg-6 col-sm-12 ">
        <div className="flags d-flex align-items-center">
          {flags.map((flag, index) => (
            <img
              key={index}
              src={`images/flags/${flag}`}
              alt="flag"
              className="flag"
            />
          ))}
        </div>
      </div>
      <StyleSheet />
    </section>
  );
};

export default FinalHero;

const StyleSheet = () => {
  return (
    <style>{`
    .final-hero .flags{
        height: 300px;
        width: 300px;
        aspect-ratio: 1/1;
        background-color: var(--color-white-02);
    }

    .final-hero p {
        font-size: 1.4rem;
        color: var(--color-white-02);
    }
  `}</style>
  );
};
