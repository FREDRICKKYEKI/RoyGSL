interface BrandProps {
    variant?: "small" | "large";
}
export const Brand = ({ variant = "small" }: BrandProps) => {
  return (
    <div className="nav-logo">
      <a href="index.html">
        <img
          style={{ width: variant === "small" ? "150px" : "250px" }}
          src="logo/logo.png"
          alt="logo"
        />
      </a>
    </div>
  );
};
