import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './middleHeader.css'
import {
  faBasketShopping,
  faHeart,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

import Logo from '../../assets/img/logo.png';

const MiddleHeader = () => {
  return (
    <div className="header-2 row ">

      <div className="bottom-header-1 col-md-4 col-lg-4">
        <a href="#">
          <img src={Logo}></img>
        </a>
      </div>
      
      <div className="bottom-header-2 col-md-5 col-lg-5">
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

      <div className="bottom-header-3 col-md-1 col-lg-1">
        <a href="#" className="heart">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="#" className="basket">
          <FontAwesomeIcon icon={faBasketShopping} />
        </a>
      </div>

      <div className="bottom-header-4 col-md-2 col-lg-2">
        item: 
        <span className="money"> <FontAwesomeIcon className="icon" icon={faIndianRupeeSign} /> 384.24</span>
      </div>


    </div>
  );
};

export default MiddleHeader;
