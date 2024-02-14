import { email, footerText, newsletterText, phone1, phone2 } from "../../utils";
import { Brand } from "../Brand";
import { Socials } from "../header/TopHeader";

export const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-lg-2 col-sm-12">
            <Brand variant="sm" />
          </div>
          {/* Footer text */}
          <div className="col-lg-2 col-sm-12">
            <p>{footerText}</p>
            <Socials />
          </div>
          {/* Useful links */}
          <div className="col-lg-2 col-sm-12">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="index.html">Scholarships</a>
              </li>
              <li>
                <a href="services.html">Study Visas</a>
              </li>
              <li>
                <a href="contact.html">Consultation</a>
              </li>
            </ul>
          </div>
          {/* Contacts */}
          <div className="col-lg-2 col-sm-12">
            <h3>Contacts</h3>
            <ul>
              <li className="d-flex">{phone1}</li>
              <li className="d-flex">{phone2}</li>
              <li className="d-flex">
                <a href={`mailto:${email}`} className="mail">
                  {email}
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-lg-2 col-sm-12">
            <p>{newsletterText}</p>
            <form className="form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <StyleSheet />
    </footer>
  );
};

const StyleSheet = () => {
    return (
        <style>{`
        footer ul li {
            color: var(--color-white-02);
            list-style: none;
        }
        footer ul li a {
            color: var(--color-white-02);
            text-decoration: none;
        }
        `}</style>
    )
}
