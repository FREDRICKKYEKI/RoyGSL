import { FC } from "react";

interface BrandProps {
  variant?: "sm" | "lg";
}

export const Brand: FC<BrandProps> = ({ variant = "sm" }) => {
  return (
    <div className="nav-logo">
      <a href="index.html">
        <img
          style={{ width: variant === "sm" ? "150px" : "250px" }}
          src="logo/logo.png"
          alt="logo"
        />
      </a>
    </div>
  );
};
