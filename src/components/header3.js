import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/header3.css';
import "bootstrap/dist/css/bootstrap.css";
import {
  faAngleDown,
  faBars,
  faCaretDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Header3 = () => {
  return (
    <div className="header-3 row">
      <div className="main-h col-md-3">
        <pre>
          <FontAwesomeIcon icon={faBars} /> <span> All Department </span>{" "}
          <FontAwesomeIcon icon={faCaretDown} />
        </pre>
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

      <div className="main-h-2 col-md-6">
        <div className="m-h-3">
          <pre>
            All Categories <FontAwesomeIcon icon={faAngleDown} />
          </pre>
        </div>
        <div className="m-h-4">
          <input type="text" placeholder="What do you need?"></input>
        </div>
        <div className="m-h-5">
          <button>Search</button>
        </div>
      </div>

      <div className="help-1 col-md-3">
        <FontAwesomeIcon icon={faPhone} />
        <p className="help-3a">+91-9005573011</p>
        <p className="help-3b">support 24/7 time</p>
      </div>
    </div>
  );
};

export default Header3;
