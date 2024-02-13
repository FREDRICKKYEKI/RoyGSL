interface BrandProps {
    variant?: "sm" | "lg";
}
export const Brand = ({ variant = "sm" }: BrandProps) => {
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
