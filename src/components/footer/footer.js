import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Logo from '../../assets/img/logo.png';
import './footer.css';
import {
    faFacebookF,
    faPinterestP,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pic from '../../assets/img/payment-item.png';



const Footer = () => {
    return (
        <div className="footer row">
            <div className="container row">

                <div className="address col-md-4 col-lg-4 ">
                    <div className='sub-address'>
                        <img src={Logo}></img>
                        <p>Address: Ahemdabad Gujraat 380060</p>
                        <p>Phone: +91-9005573011</p>
                        <p>Email: hello@pushp.com</p>
                    </div>
                </div>

                <div className='links col-md-3 col-lg-3'>
                    <div className='imp-link'>
                        <table>
                            <h6>Useful Links</h6>
                            <tr>
                                <td><a hre="#">About Us</a></td>
                                <td><a hre="#">Who We Are</a></td>
                            </tr>
                            <tr>
                                <td><a hre="#">About Our Shop</a></td>
                                <td><a hre="#">Our Services</a></td>
                            </tr>
                            <tr>
                                <td><a hre="#">Secure Shopping</a></td>
                                <td><a hre="#">Projects</a></td>
                            </tr>
                            <tr>
                                <td><a hre="#">Delivery infomation</a></td>
                                <td><a hre="#">Contact</a></td>
                            </tr>
                            <tr>
                                <td><a hre="#">Privacy Policy</a></td>
                                <td><a hre="#">Innovation</a></td>
                            </tr>
                            <tr>
                                <td><a hre="#">Our Sitemap</a></td>
                                <td><a hre="#">Testimonials</a></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className='join col-md-5 col-lg-5'>
                    <div className='join-us'>
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form>
                            <input type='text' placeholder='Enter your mail'></input>
                            <button>SUBSCRIBE</button>
                        </form>
                        <div className='social'>
                            <button><FontAwesomeIcon icon={faFacebookF}/></button>
                            <button><FontAwesomeIcon icon={faInstagram}/></button>
                            <button><FontAwesomeIcon icon={faTwitter}/></button>
                            <button><FontAwesomeIcon icon={faPinterestP}/></button>
                        </div>
                    </div>
                </div>

                <div className='copyright'>
                    <hr></hr>
                    <p>Copyright ©2022 All rights reserved | This template is made with <FontAwesomeIcon className='heart' icon={faHeart}/> by <a href='#' >Pushp.</a></p>
                    <div className='payment'><img src={Pic}></img></div>
                    <br></br>
                </div>

            </div>


        </div>
    );
}

export default Footer;
