import React from "react";
import './middleHeader.css';
import {TiHeart} from "react-icons/ti";
import {GiShoppingBag} from "react-icons/gi";
import Logo from '../../assets/img/logo.png';

const MiddleHeader = () => {
  return (
    <div className="header-section-mid">
      <div className="container">
        <div className="header-inner-mid">
          <div className="logo">
            <img src={Logo}></img>
          </div>
          <div className="main-section">
            <a href="#" className="home">
              HOME
            </a>
            <a href="#">SHOP</a>
            <a href="#" className="page-sec">
              PAGES
              <ul className="l-1">
                <li>
                  <a href="#">Shop Details</a>
                </li>
                <li>
                  <a href="#">Shoping Cart</a>
                </li>
                <li>
                  <a href="#">Check Out</a>
                </li>
                <li>
                  <a href="#">Blog Details</a>
                </li>
              </ul>
            </a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
          </div>
          <div className="cart-section">
            <a className="fav"><TiHeart/></a>
            <a className="bag"><GiShoppingBag/></a>
            <span>items : $30.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
