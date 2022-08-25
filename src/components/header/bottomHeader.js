import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bottomHeader.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  faAngleDown,
  faBars,
  faCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BottomHeader = () => {
  return (
    <div className="header-3 row ">
      <div className="main-h col-md-4 col-lg-4 ">
        <div className="main-h-1">
          <div className="main-h-1a">
            <div className="all-dep">
              <div className="all-dep-1">
                <span>
                  <button>
                    <FontAwesomeIcon className="bar" icon={faBars}/> 
                    All department
                    <FontAwesomeIcon className="ang" icon={faAngleDown} />
                  </button>
                </span>
              </div>
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
        </div>
      </div>

      <div className="main-h-2  col-md-5 col-lg-5">
        <div className="m-h-3 ">
          <div className="m3">
            <a href="#">All Categories</a> <FontAwesomeIcon className="faAng" icon={faAngleDown} />
            <input type="text" placeholder="What do you need?"></input>
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="help-1 col-md-3 col-lg-3">
        <FontAwesomeIcon className="faphone"  icon={faCircle}/>
        <div className="ph-1">
          <FontAwesomeIcon className="faphone1"  icon={faPhone} />
        </div>
        <div className="help-1a">  
          <p className="help-3a">+91-9005573011</p>
          <p className="help-3b">support 24/7 time</p>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
