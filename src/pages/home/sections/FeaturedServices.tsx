import { featuredServices, icons } from "../../../utils";

export const FeaturedServices = () => {
  return (
    <section className="featured-services row mt-5">
      <h2 className="primary-underline mb-5">{featuredServices.title}</h2>
      <p className="mb-4 p-0">{featuredServices.desc}</p>
      {featuredServices.services.map((service) => (
        <div
          key={service.name}
          className="col-md-4 col-sm-6 col-xs-12 d-flex justify-content-between gap-3 mb-3"
        >
          <div>
            <img src={icons[service.icon]} alt={`${service.name}`} />
          </div>
          <article>
            <h4 className="mb-1">{service.name}</h4>
            <p>{service.desc}</p>
          </article>
        </div>
      ))}
      <StyleSheet />
    </section>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
        .featured-services {
          padding: 2rem;
         background: var(--color-gray-05);
         animation: fadeInUp 1s;
        }

        .featured-services h2 {
          position: relative;
          padding: unset;
          font-size: 28px;
        }

        .featured-services h4 {
          font-size: 20px;
        }
      `}
    </style>
  );
};
