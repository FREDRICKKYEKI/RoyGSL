import { useState } from "react";
import { SERVICES_LIST } from "../../../utils";
import { IconMap, Service } from "../../../types";

import scholarship_logo from "../../../assets/svgs/scholarship_logo.svg";
import scholarship_logo_light from "../../../assets/svgs/scholarship_logo-light.svg";
import calendar from "../../../assets/svgs/calendar.svg";
import calendar_light from "../../../assets/svgs/calendar-light.svg";
import flight from "../../../assets/svgs/flight.svg";
import flight_light from "../../../assets/svgs/flight-light.svg";
import job from "../../../assets/svgs/job.svg";
import job_light from "../../../assets/svgs/job-light.svg";
export const ServicesSection = () => {
    const [active, setActive] = useState<Service>(SERVICES_LIST[0]);
    const icons: IconMap = {
      scholarships: scholarship_logo,
      scholarships_light: scholarship_logo_light,
      jobs: job,
      jobs_light: job_light,
      flight: flight,
      flight_light: flight_light,
      calendar: calendar,
      calendar_light: calendar_light,
    };
    return (
      <section className="services row">
        <ul className="col-md-4 col-sm-6 col-xs-12 d-flex flex-column gap-2">
          {SERVICES_LIST.map((service) => (
            <li
              key={service.key}
              id={`${service.key}`}
              data-active={active["key"] === service["key"] ? "true" : "false"}
              className="service d-flex gap-2"
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
        <article className="service-description col-md-8 col-sm-6 col-xs-12 d-flex flex-column gap-3">
          <h4>{active["name"]}</h4>
          <p>{active["desc"]}</p>
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
}
