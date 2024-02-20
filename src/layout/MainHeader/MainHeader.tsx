import { useState } from "react";
import "./MainHeader.scss";
import { Link } from "react-router-dom";

type mainHeaderProps = {
  theme?: "light" | "dark";
  bg?: "light" | "dark";
};

const MainHeader = ({ theme, bg }: mainHeaderProps) => {
  const [isMenuSelected, setIsMenuSelected] = useState(false);
  return (
    <header className={`main-header ${bg ? `bg-color-${bg}` : ""}`}>
      <div
        className={`main-header-wrapper ${theme ? `color-theme-${theme}` : ""}`}
      >
        <span className="main-header-logo">
          <Link to="/">cryptonix</Link>
        </span>
        <div className="main-header-right-side">
          <Link to="/signup">
            <button className="signin-btn">Sign up</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Log in</button>
          </Link>
          <button
            className="header-widget-hamburger-menu"
            onClick={() => setIsMenuSelected(!isMenuSelected)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
