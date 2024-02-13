import { email, facebook, instagram, phone1, phone2, whatsapp } from "../../utils";

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
          <div className="d-flex gap-2 align-items-center">
            <a href={`${facebook}`} target="_blank" rel="noreferrer">
              <img src="icons/facebook.svg" alt="facebook" />
            </a>
            <a href={`${instagram}`} target="_blank" rel="noreferrer">
              <img src="icons/ig.svg" alt="ig" />
            </a>
            <a href={`${whatsapp}`} target="_blank" rel="noreferrer">
              <img src="icons/wa.svg" alt="wa" />
            </a>
          </div>
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

          `}
    </style>
  );
}
