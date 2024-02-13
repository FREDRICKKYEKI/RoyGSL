
export const Nav = () => {
  return (
      <nav className="bg-prim d-flex justify-content-between">
        <ul className="d-flex list-unstyled">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="services.html">Get Hired</a>
          </li>
          <li>
            <a href="gallery.html">Study Abroad</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
      </ul>
      <div className="header-elem-2 d-flex align-items-center bg-dark">
        <a className="p-4" href="#">Free Consulting</a>
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
            `}
      </style>
    );
}
