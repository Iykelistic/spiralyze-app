import React from "react";
import AllRights from "../images/AllRights.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__holder">
            <img src={AllRights} alt="footer-rights" className="footer__img" />
          </div>

          <div className="footer__parts">
            <p className="footer__privacy">Privacy Policy | </p>
            <p className="footer__terms">Terms of Use | </p>
            <p className="footer__site">Site Map</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
