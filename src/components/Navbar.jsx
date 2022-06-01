import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <div className="header__links">
        <ul
          className={isMobile ? "header__lists__mobile" : "header__lists"}
          onClick={() => setIsMobile(false)}
        >
          <li className="header__home">HOME</li>
          <li className="header__about">ABOUT</li>
          <li className="header__contact">CONTACT</li>
          <li className="header__rotate">|</li>
          <li className="header__call">
            CALL NOW FOR A CONSULT
            <span className="header__x"> XXX.XXX.XXXX</span>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
