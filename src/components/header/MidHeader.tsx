import { FC } from "react";
import { MidHeaderElems } from "../../utils";
import { Brand } from "../Brand";
import { Nav } from "./Nav";
import { MidHeaderProps } from "../../types";

const HeaderElement: FC<MidHeaderProps> = ({ icon, text, smallText }) => {
  return (
    <div className="d-flex gap-2 col-lg-3 col-md-4 justify-content-end">
      <img className="icon-w-15" src={icon} alt={text} />
      <p className="d-flex flex-column">
        <b>{text}</b>
        <small>{smallText}</small>
      </p>
    </div>
  );
};

export const MidHeader = () => {
  return (
    <div className="mid-head container ">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-3 col-md-12">
          <Brand />
        </div>
        {MidHeaderElems.map((elem, i) => (
          <HeaderElement key={i} {...elem} />
        ))}
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
        .mid-head b {
            font-size: 16px;
            font-weight: 500;
        }
            `}
    </style>
  );
};
