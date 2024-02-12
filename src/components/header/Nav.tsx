
export const Nav = () => {
    return (
      <nav>
        <div className="container">
          <div className="nav-logo">
            <a href="index.html">
              <img src="logo/logo.png" alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
