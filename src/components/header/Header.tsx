import { useEffect, useState } from "react";
import { MidHeader } from "./MidHeader";

import { TopHeader } from "./TopHeader";
import { Brand } from "../Brand";

const HeaderAccordion = ({
  title,
  items,
}: {
  title: { name: string; link: string };
  items: { title: string; link: string }[];
}) => {
  const [openAcc, setOpenAcc] = useState(false);
  return (
    <div className="d-flex flex-column position-relative">
      <div className="d-flex justify-content-between ">
        <a href={title.link}>{title.name}</a>
        <h2
          className={`text-large btn-acc ${openAcc ? "open" : "close"}`}
          onClick={() => setOpenAcc(!openAcc)}
        >
          +
        </h2>
      </div>
      <ul
        className={`accordion-items ${openAcc ? "open" : "close"}`}
        onClick={() => setOpenAcc(!openAcc)}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HeaderSm = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="d-flex justify-content-between align-items-center position-relative">
      <Brand variant="sm" />
      <span
        onClick={() => setOpenDropdown(!openDropdown)}
        className="sidebarBtn d-flex flex-column m-3 align-items-end"
      >
        <span className="bg-dark bar"></span>
        <span className="bg-dark bar"></span>
        <span className="bg-dark bar"></span>
        <span className="bg-dark bar"></span>
      </span>

      <div className={`drop-down ${openDropdown ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <HeaderAccordion
              title={{ name: "About Us", link: "about.html" }}
              items={[
                { title: "Our Team", link: "our-team.html" },
                { title: "Employer's Portal", link: "portal.html" },
                { title: "Our Branches", link: "branches.html" },
              ]}
            />
          </li>
          <li>
            <HeaderAccordion
              title={{ name: "Get Hired", link: "services.html" }}
              items={[
                { title: "Jobs Available", link: "jobs-available.html" },
                { title: "Success stories", link: "success-stories.html" },
                { title: "Partners", link: "partners.html" },
              ]}
            />
          </li>
          <li>
            <HeaderAccordion
              title={{ name: "Study Abroad", link: "study-abroad.html" }}
              items={[
                { title: "Scholarship", link: "scholarship.html" },
                { title: "Study Visas", link: "study-visas.html" },
                { title: "Book Appointment", link: "consultation.html" },
              ]}
            />
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const HeaderLg = () => {
  return (
    <>
      <TopHeader />
      <MidHeader />
    </>
  );
};

export const Header = () => {
  const [windowSize, setWindowSize] = useState<number | null>(500);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div>
        {windowSize && windowSize < 768 ? <HeaderSm /> : <HeaderLg />}
        <StyleSheet />
      </div>
    </header>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
        header {
          position: fixed;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 100;
          background-color: var(--color-trans-white);
          backdrop-filter: blur(30px);
        }

        header > div{
            border-bottom: 1px solid var(--color-primary);
            position: relative;
        }

        header li,
        header a {
          color: var(--color-white-02);
          text-decoration: none;
          list-style: none;
        }

        .sidebarBtn {
          gap:5px;
        }

        .sidebarBtn .bar {
          width: 25px;
          height: 2px;
        }

        .sidebarBtn .bar:nth-child(2),
        .sidebarBtn .bar:nth-child(3) {
          width: 15px;
        }

        .drop-down,
        .accordion-items {
          transform-origin: top;
          transform: scaleY(0);
          transition: transform 0.35s;
          transition-timing-function: cubic-bezier(0.17,-0.01, 0, 0.98)
          height: 0;
          overflow: hidden;
        }

        .accordion-items {
        }

        .drop-down {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-primary);
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 5px rgba(0,0,0,.5);
        }

        .accordion-items.open {
          height: 100%;
        }
        .accordion-items.close {
          height: 0;
        }

        .accordion-items.open,
        .drop-down.open {
          transform: scaleY(1);
        }

        .accordion-items.close,
        .drop-down.close {
          transform: scaleY(0);
        }

        .drop-down ul li {
          padding: 10px 20px;
        }
        .btn-acc {
          transition: transform 0.35s;
        }

        .btn-acc.open {
          transform: rotate(45deg);
        }

        .btn-acc.close {
          transform: rotate(0);
        }
        @media (max-width: 768px) {
          header {
            position: relative;
          }
        }
      `}
    </style>
  );
};
