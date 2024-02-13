
export const Nav = () => {
  return (
    <nav className="bg-prim d-flex justify-content-between">
      <ul className="d-flex list-unstyled">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="position-relative">
          <a className="" href="about.html">
            About Us
          </a>
          <ul className="drop-down">
            <li>
              <a href="our-team.html">Our Team</a>
            </li>
            <li>
              <a href="portal.html">Employer's Portal</a>
            </li>
            <li>
              <a href="branches.html">Our Branches</a>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <a href="services.html">Get Hired</a>
          <ul className="drop-down">
            <li>
              <a href="jobs-available.html">Jobs Available</a>
            </li>
            <li>
              <a href="success-stories.html">Success stories</a>
            </li>
            <li>
              <a href="partners.html">Partners</a>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <a href="gallery.html">Study Abroad</a>
          <ul className="drop-down">
            <li>
              <a href="study-abroad.html">Study Abroad</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="consultation.html">Book Appointment</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact Us</a>
        </li>
      </ul>
      <div className="header-elem-2 d-flex align-items-center bg-dark">
        <a className="p-4" href="#">
          Free Consulting
        </a>
      </div>
      <StyleSheet />
    </nav>
  );
};


function StyleSheet() {
    return (
      <style>
        {`
            nav {
                height: max-content;
                transform: translateY(50%);
            }

            nav ul {
                margin: 0;
            }

            nav ul li {
              padding: 23px 15px;
            }

            nav a {
                font-weight: 500;
                text-transform: uppercase;
                color: var(--color-white-02);
                text-decoration: none;
                font-size: 16px;
            }

            .header-elem-2 {
                position: relative;
                z-index: 1;
            }

            .header-elem-2::before {
                z-index: -1;
                background-color: var(--color-dark);
                content: "";
                height: 100%;
                left: -41px;
                position: absolute;
                top: 0;
                -webkit-transform: skewX(-50deg);
                transform: skewX(-50deg);
                width: 82px;
            }
            .drop-down ul {
              display: flex;
              flex-direction: column;
            }

            .drop-down li {
              transition: all 0.35s;
              padding: 10px 15px;
              border-bottom: 1px solid var(--color-gray-02);
            }

            .drop-down li:hover {
              opacity: 0.6;
            }

            .drop-down li a{
              font-size: 13px;
              font-weight: 400;
            }

            li .drop-down {
              width: 200%;
            }

            li:hover .drop-down {
                transform: scaleY(1);
            }
            `}
      </style>
    );
}
