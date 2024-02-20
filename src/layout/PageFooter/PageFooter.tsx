import { Link } from "react-router-dom";
import "./PageFooter.scss";
const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-wrapper">
        <img src="" alt="" />
        <ol className="services-list">
          <li className="service">
            <Link to="#">Wallet</Link>
          </li>
          <li className="service">
            <Link to="#">Calculator</Link>
          </li>
          <li className="service">
            <Link to="#">Markets</Link>
          </li>
          <li className="service">
            <Link to="#">Trading</Link>
          </li>
          <li className="service">
            <Link to="#">Crypto News</Link>
          </li>
          <li className="service">
            <Link to="#">Blockchain Event</Link>
          </li>
        </ol>
        <ol className="logos-list">
          <li>
            <img src="src/assets/icons/logos/google.svg" alt="google logo" />
          </li>
          <li>
            <img
              src="src/assets/icons/logos/Facebook.svg"
              alt="facebook logo"
            />
          </li>
          <li>
            <img src="src/assets/icons/logos/Behance.svg" alt="behance logo" />
          </li>
          <li>
            <img
              src="src/assets/icons/logos/Linkedin.svg"
              alt="linkedin logo"
            />
          </li>
          <li>
            <img src="src/assets/icons/logos/Twitter.svg" alt="twitter logo" />
          </li>
        </ol>
        <ol className="footer-legal-information">
          <li>Terms of service</li>
          <li>Contact</li>
          <li>Support</li>
        </ol>
      </div>
      <div className="copyrights-banner">
        <span>
          CopyRight © 2024-2025 Cryptonix Inc, San Francisco. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default PageFooter;
