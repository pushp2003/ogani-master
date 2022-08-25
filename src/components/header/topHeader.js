import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./topHeader.css";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
  return (
    <div className="header row bg-light ">
      <div className="header-1 col-md-6 col-lg-6 ">
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

      <div className="header-2 col-md-6 col-lg-6 ">
        <div className="cont">
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
          <a href="/signin" className="use">
            <FontAwesomeIcon icon={faUser} /> Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
