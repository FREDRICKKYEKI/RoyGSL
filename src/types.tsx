export type Service = {
  name: string;
  key: string;
  desc: string;
  icon: string;
};

export type IconMap = {
  [key: string]: string;
};

export type MidHeaderProps = {
  icon: string;
  text: string;
  smallText: string;
};
