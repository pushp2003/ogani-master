import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "../components/header1.css";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header1 = () => {
  return (
    <div className="header row bg-light ">
      <div className="header-1 col-md-6 ">
        <ul className="header-li">
          <li className="header-1-li ">
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> hello@pushp.com
            </span>
          </li>
          <li className="header-1-li ">
            <span>Free Shipping for all Order of Rs. 499</span>
          </li>
        </ul>
      </div>

      <div className="header-2 col-md-6 ">
        <div className="container">
          <a href="#" classname="fac">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="twi">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="lin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" classname="pin">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="#" className="use">
            <FontAwesomeIcon icon={faUser} /> Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header1;
