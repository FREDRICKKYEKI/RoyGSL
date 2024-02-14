import { address, officeHrs, phone1, phone2 } from "../../utils";
import { Brand } from "../Brand";
import { Nav } from "./Nav";

const HeaderElement = ({ icon, text, smallText }: { icon: string; text: string; smallText: string }) => {
    return (
      <div className="d-flex gap-2">
        <img className="icon-w-15" src={icon} alt={text} />
        <p className="d-flex flex-column">
          <b>{text}</b>
          <small>{smallText}</small>
        </p>
      </div>
    );
}

export const MidHeader = () => {
  return (
    <div className="mid-head container ">
      <div className="d-flex justify-content-between align-items-center">
        <Brand />
        <HeaderElement
          icon="icons/phone.svg"
          text={`${phone1} | ${phone2}`}
          smallText="Hotline"
        />
        <HeaderElement
          icon="icons/location.svg"
          text={address}
          smallText="Address"
        />
        <HeaderElement
          icon="icons/clock.svg"
          text={officeHrs}
          smallText="Office Hours"
        />
        <Styles />
      </div>
      <Nav />
    </div>
  );
};

const Styles = () => {
    return (
        <style>
        {`
          .mid-head {
            // transform: translateY(10%);
          }

          .mid-head b {
              font-size: 16px;
              font-weight: 500;
          }
            `}
        </style>
    );
}
