import Logo from "assets/image/icon/footer-logo.svg";

import "assets/styles/container.css";
import "assets/styles/all.css";
import "./style.css";
import Button from "components/button";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-logo__wrap">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-line__box">
            <span className="footer-line"></span>
          </div>
          <div className="footer-zoom">
            <h4 className="footer-logo__title">Virtual Class for Zoom</h4>
          </div>
        </div>
        <div className="footer-search__wrap">
          <h3 className="footer-search__title">
            Subscribe to get our Newsletter
          </h3>
          <div className="footer-email__wrap">
            <div className="footer-email">
              <input
                className="footer-search"
                type="search"
                placeholder="Your Email"
              />
            </div>
            <div className="footer-button">
              <Button title={"Subscribe"} className={"footer-btn"} />
            </div>
          </div>
        </div>
        <div className="footer-copyRight">
          <div className="footer-copyRight__titles">
            <p className="footer-copyRight__title">Careers</p>
            <p className="footer-copyRight__title">Privacy Policy</p>
            <p className="footer-copyRight__title">Terms & Conditions</p>
          </div>
          <p className="copyRight">© 2021 Class Technologies Inc. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
