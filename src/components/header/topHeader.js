import React from "react";
import { HiMail } from "react-icons/hi";
import {ImFacebook} from "react-icons/im";
import {BsTwitter} from "react-icons/bs";
import {GrLinkedinOption} from "react-icons/gr";
import {FaPinterestP} from "react-icons/fa";
import {RiArrowDropDownLine} from "react-icons/ri";
import {FcManager} from "react-icons/fc";
import LangPng from "../../assets/img/language.png";
import "./topHeader.css";
const TopHeader = () => {
  return (
    <div className="header-section">
      <div className="container">
        <div className="header-inner">
          <div className="mail-section">
            <ul>
              <li>
                <span>
                  <HiMail />
                </span>
                Hello@gmail.com
              </li>
              <li>Free Shipping for all orders of $99</li>
            </ul>
          </div>
          <div className="social-section">
            <ul className="social-section-1">
              <li><a className="face"><ImFacebook/></a></li>
              <li><a className="twitter"><BsTwitter/></a></li>
              <li><a className="linked"><GrLinkedinOption/></a></li>
              <li><a className="pint"><FaPinterestP/></a></li>
            </ul>
            <span className="lang">
              <img src={LangPng}></img>
              English
              <a>
                <RiArrowDropDownLine/>
              </a>
            </span>
            <span className="login">
              <a><FcManager/></a>Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
