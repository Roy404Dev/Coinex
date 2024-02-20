import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="login-page-footer">
      <ol className="login-page-socials">
        <li className="social-link">
          <Link to="#">facebook</Link>
        </li>
        <li className="social-link">
          <Link to="#">twitter</Link>
        </li>
        <li className="social-link">
          <Link to="#">blog</Link>
        </li>
      </ol>
      <ul className="login-page-footer-elements">
        <li className="login-page-footer-element">
          <span>Terms of service</span>
        </li>
        <li className="login-page-footer-element">
          <span>Contact</span>
        </li>
        <li className="login-page-footer-element">
          <span>Support</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
