import {
  email,
  facebook,
  instagram,
  phone1,
  phone2,
  whatsapp,
} from "../../utils";

export const Socials = ({ variant = "drk" }: { variant?: "drk" | "lght" }) => {
  return (
    <div className="d-flex  align-items-center gap-5">
      <a href={`${facebook}`} target="_blank" rel="noreferrer">
        <img
          src={`${
            variant == "lght"
              ? "icons/facebook-light.svg"
              : "icons/facebook.svg"
          }`}
          alt="facebook"
        />
      </a>
      <a href={`${instagram}`} target="_blank" rel="noreferrer">
        <img
          src={`${variant == "lght" ? "icons/ig-light.svg" : "icons/ig.svg"}`}
          alt="ig"
        />
      </a>
      <a href={`${whatsapp}`} target="_blank" rel="noreferrer">
        <img
          src={`${variant == "lght" ? "icons/wa-light.svg" : "icons/wa.svg"}`}
          alt="wa"
        />
      </a>
    </div>
  );
};

export const TopHeader = () => {
  return (
    <div className="top-head p-2">
      <div className="container">
        <div className="d-flex gap-5 justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <img src="icons/phone.svg" alt="phone" />
              <span>
                {phone1} | {phone2}
              </span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <img src="icons/mail.svg" alt="phone" />
              <span>
                <a href={`mailto:${email}`} className="mail">
                  {email}
                </a>
              </span>
            </div>
          </div>
          <Socials />
        </div>
      </div>
      <StyleSheet />
    </div>
  );
};

const StyleSheet = () => {
  return (
    <style>
      {`
          .top-head {
              border-bottom: 1px solid var(--color-primary);
          }

          .top-head a {
            text-decoration: none;
            color: var(--color-text)
          }
          `}
    </style>
  );
};
