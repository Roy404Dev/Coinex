import "./Header.scss";
import logo from "/logo.svg?url";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuSelected, setIsMenuSelected] = useState(false);

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-widgets">
          <button className="header-widget-messages">
            <img src="assets/interface/messages.svg" alt="messages" />
          </button>
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
      <div
        className={
          isMenuSelected
            ? "header-side-menu header-side-menu-selected"
            : "header-side-menu"
        }
      >
        <ul className="header-side-menu-list">
          <li className="header-side-menu-element">
            <Link to="login">
              <span>Log In</span>
            </Link>
            <button
              className="closeBtn"
              onClick={() => setIsMenuSelected(!isMenuSelected)}
            >
              <img
                className="closeIcon"
                src="assets/interface/closeIcon.svg"
                alt="close icon"
              />
            </button>
          </li>
          <li className="header-side-menu-element">
            <Link to="signup">
              <span>Sign Up</span>
            </Link>
          </li>
          <li className="header-side-menu-element">
            <Link to="#">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="header-side-menu-element">
            <Link to="#">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="header-side-menu-element">
            <Link to="#">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="header-side-menu-element">
            <Link to="#">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="header-side-menu-element">
            <Link to="#">
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
