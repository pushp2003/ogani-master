import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faBasketShopping,
  faCaretDown,
  faEnvelope,
  faHeart,
  faIndianRupeeSign,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faPinterest,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="top-header">
        <div className="top-header-1">
          <ul>
            <li className="top-h-1">
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> pushprajs316@gmail.com
              </span>
            </li>
            <li className="top-h-2">
              <span>Free Shipping for all Order of Rs. 499</span>
            </li>
          </ul>
        </div>
        <div className="top-header-2">
          <a href="#" classname="fac">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="twi">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="lin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" classname="pint">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="#" className="log">
            <FontAwesomeIcon icon={faUser} /> Login
          </a>
        </div>
      </div>
      <div className="bottom-header">
        <div className="bottom-header-1">
          <a href="#">
            <img src={logo}></img>
          </a>
        </div>
        <div className="bottom-header-2">
          <a href="#" className="hom-1">
            HOME
          </a>
          <a href="#">SHOP</a>
          <a href="#" className="list">
            PAGES
            <ul className="l-1">
              <li>
                <a href="#">Shop Details</a>
              </li>
              <br></br>
              <li>
                <a href="#">Shoping Cart</a>
              </li>
              <br></br>
              <li>
                <a href="#">Check Out</a>
              </li>
              <br></br>
              <li>
                <a href="#">Blog Details</a>
              </li>
            </ul>
          </a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="bottom-header-3">
          <a href="#" className="heart">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#" className="basket">
            <FontAwesomeIcon icon={faBasketShopping} />
          </a>
        </div>
        <div className="bottom-header-4">
          Price:
          <span className="rupee">
            <FontAwesomeIcon icon={faIndianRupeeSign} />
          </span>
          <span className="money"> 384.24</span>
        </div>
      </div>
      <div className="main-header">
        <div className="main-h">
          <div className="main-h-1">
            <pre><FontAwesomeIcon icon={faBars} />  <span> All Department </span>      <FontAwesomeIcon icon={faCaretDown} /></pre>
          </div>
          <div className="list-line">
            <ul>
              <li>
                <a href="#">Fresh Meat</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Fruit & Nut Gifts</a>
              </li>
              <li>
                <a href="#">Fresh Berries</a>
              </li>
              <li>
                <a href="#">Ocean Foods</a>
              </li>
              <li>
                <a href="#">Butter & Eggs</a>
              </li>
              <li>
                <a href="#">Fastfood</a>
              </li>
              <li>
                <a href="#">Fresh Onion</a>
              </li>
              <li>
                <a href="#">Papayaya & Crisps</a>
              </li>
              <li>
                <a href="#">Oatmeal</a>
              </li>
              <li>
                <a href="#">Fresh Bananas</a>
              </li>
            </ul>
          </div>
        </div> 

        <div className="main-h-2">
          <div className="m-h-3">
          <pre>All Categories    <FontAwesomeIcon icon={faAngleDown}/></pre>
          </div>
          <div className="m-h-4"> 
            <input type="text" placeholder="What do you need?"></input> 
          </div>
          <div className="m-h-5"><button>Search</button></div>
        </div>
        <div className="help-1">
          <FontAwesomeIcon icon={faPhone}/>
        </div>
        <div className="help-2">
          <p className="help-3a">+91-9005573011</p>
          <p className="help-3b">support 24/7 time</p>
        </div>






      </div>



    </div>
  );
};

export default Header;
