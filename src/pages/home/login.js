import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Rt from "../assets/rt.jpg";
import Rt1 from "../assets/rt1.jpg";
import Rt2 from "../assets/rt2.jpg";
import Rt3 from "../assets/rt3.jpg";
const Login = () => {
  return (
    <div className="login">
      <div className="log-1">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Rt} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={Rt1} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={Rt2} className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={Rt3} className="d-block w-100" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
