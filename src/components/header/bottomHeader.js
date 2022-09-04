import React from "react";
import {GoThreeBars} from "react-icons/go";
import {RiArrowDropDownLine} from "react-icons/ri";
import{ImPhone} from "react-icons/im";
import "./bottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="header-section-bottom">
      <div className="container">
        <div className="header-inner-bottom">
          <div className="list-item-btn">
            <button>
              <span>
                <a className="bars"><GoThreeBars/></a>
                <a className="txt">All departments</a>
                <a className="drop"><RiArrowDropDownLine/></a>
              </span>
            </button>
          </div>
          <div className="search-box">
            <span className="search-in">
              <a>All Categories</a>
              <RiArrowDropDownLine/>           
              <input type="text" placeholder="What do you need?"></input>
              <button  className="search-btn" type="submit">SEARCH</button>
            </span>
          </div>
          <div className="support">
            <div className="help-line">
              <a><ImPhone/></a>
            </div>
            <div className="help-line-num">
              <h6>+91-9005573011</h6>
              <span>Support 24/7 time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
