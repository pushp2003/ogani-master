import React from 'react';
import Banner from '../../assets/img/hero/banner.jpg';
import './ban1.css';
const Ban1 = () => {
    return (
        <div className="ban ">
            <img src={Banner}></img>
            <div className="banner-txt">
                <div className="l">FRUIT FRESH</div>
                <div className="l-2">Vegetable<br></br>100% Organic</div>
                <div className="l-3"><p>Free Pickup and Delivery Available</p></div>
                <div className="l-4"><button>SHOP NOW</button></div>
            </div>
            
        </div>
    );
}

export default Ban1;
