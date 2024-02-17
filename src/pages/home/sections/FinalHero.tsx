import { finalHeroText, flags } from "../../../utils";

const FinalHero = () => {
  return (
    <section className="final-hero bg-dark mt-5">
      <div className="row w-100">
        <div className="col-lg-6 col-sm-12 p-0 d-flex align-items-center justify-content-center">
          <p dangerouslySetInnerHTML={{ __html: finalHeroText }} />
        </div>
        <div className="col-lg-6 col-sm-12 p-0 ">
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
        max-height: 300px;
        max-width: 300px;
        aspect-ratio: 1/1;
        background-color: var(--color-white-02);
    }

    .final-hero p {
        font-size: 1.4rem;
        color: var(--color-white-02);
    }

    .flags img {
        max-height: 100px;
        max-width: 100px;
        aspect-ratio: 1/1;
        margin: 0 10px;
    }
  `}</style>
  );
};
