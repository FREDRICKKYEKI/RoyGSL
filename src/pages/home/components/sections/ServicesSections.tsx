import { useState } from "react";
import { Service } from "../../../../types";
import { SERVICES_LIST, icons } from "../../../../utils";

export const ServicesSection = () => {
  const [active, setActive] = useState<Service>(SERVICES_LIST[0]);

  return (
    <section className="services row">
      <ul className="col-md-4 col-sm-6 col-xs-12 d-flex flex-column gap-2 mt-4">
        {SERVICES_LIST.map((service) => (
          <li
            key={service.key}
            id={`${service.key}`}
            data-active={active["key"] === service["key"] ? "true" : "false"}
            className="service d-flex gap-2  align-items-center"
            onClick={() => setActive(service)}
          >
            <img
              src={
                active["key"] === service["key"]
                  ? icons[`${service.icon}_light`]
                  : icons[service.icon]
              }
              width="30"
              height="30"
            />

            <p>{service.name}</p>
          </li>
        ))}
      </ul>
      <article className="service-description col-md-8 col-sm-6 col-xs-12 d-flex flex-column gap-3 mt-4">
        <h4>{active["name"]}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: `<p>${active["desc"]}</p>` }}
        ></div>
        <strong>
          <a href="#">Learn More</a>
        </strong>
      </article>
      <StyleSheet />
    </section>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
        .services ul {
            padding: 0;
        }

        .services li {
            cursor: pointer;
            padding: 20px 15px;
            list-style: none;
            background-color: var(--color-gray-05);
            font-weight: 500;
        }

        .service-description p {
            animation: backInRight;
        }

        .service-description strong a {
            text-decoration: underline;
            color: var(--color-primary) !important;
        }

        [data-active="true"] {
            background-color: var(--color-primary) !important;
            color: var(--color-white-03);
        }

        `}
    </style>
  );
};
