import { email, footerText, newsletterText, phone1, phone2 } from "../../utils";
import { Brand } from "../Brand";
import { Socials } from "../header/TopHeader";
import BottomFooter from "./BottomFooter";

export const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="p-4">
        <div className="row d-flex justify-content-between">
          {/* Brand */}
          <div className="col-lg-2 col-md-12 d-flex ">
            <div className="circ-wrapper">
              <Brand variant="sm" />
            </div>
          </div>
          {/* Footer text */}
          <div className="col-lg-3 col-md-12 d-flex flex-column gap-2">
            <h4>Roy Globally Solutions LTD</h4>
            <small>{footerText}</small>
            <Socials variant="lght" />
          </div>
          {/* Useful links */}
          <div className="col-lg-2 col-md-12 flex-0">
            <h4>Useful Links</h4>
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
          <div className="col-lg-2 col-md-12">
            <h4>Contacts</h4>
            <ul>
              <li className="d-flex gap-2">
                <img src="icons/phone-light.svg" alt="phone" />
                {phone1}
              </li>
              <li className="d-flex gap-2">
                <img src="icons/phone-light.svg" alt="phone" />
                {phone2}
              </li>
              <li className="d-flex gap-2">
                <img src="icons/mail-light.svg" alt="mail" />
                <a href={`mailto:${email}`} className="mail">
                  {email}
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-lg-3 w-20 col-md-12">
            <h4>Newsletter</h4>
            <small>{newsletterText}</small>
            <form className="mt-2 form d-flex align-items-center justify-content-between">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <img src="icons/send.svg" alt="send" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <BottomFooter />
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
          font-size: 0.9rem;
        }
        footer h3,
        footer h4 {
          margin-top: 1rem;
          margin-bottom: .2rem;
        }

        footer h3,
        footer h4,
        footer small,
        footer ul li a {
          color: var(--color-white-02);
          text-decoration: none;
        }

        .circ-wrapper {
          width: 100px;
          height: 100px;
          padding: 4rem;
          border-radius: 50%;
          background-color: var(--color-white-01);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        form {
          border-radius: 50px;
          background-color: var(--color-white-01);
          padding: 7.5px 10px;
          width: 100%
        }
        form input {
          all: unset;
          width: 100%;
        }
        form button {
          all: unset;
          padding: 7.5px 10px;
          width: 10%;
          display: flex;
          justify-content: center;
          color: var(--color-white-01);
          border-radius: 50pc;
          background-color: var(--color-primary);
        }

        `}</style>
  );
};
