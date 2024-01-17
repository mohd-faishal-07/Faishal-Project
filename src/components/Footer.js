
import React from 'react'
import { Link } from 'react-router-dom'
import {  FaFacebookF, FaInstagram, FaLinkedin,  FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <hr />
                <div className='foot'>
                    <div className='foot-contact'>
                        <Link to="#">
                            <p>Contact</p>
                        </Link>
                        <ul>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">hello@ekart.com</Link></li>
                            <li><Link to="#">Order</Link></li>
                            <li><Link to="#">Affiliate</Link></li>
                        </ul>
                    </div>
                    <div className='foot-care'>
                        <Link to="#">
                            <p>Care</p>
                        </Link>
                        <ul>
                            <li><Link to="#">Shipping & Delivery</Link></li>
                            <li><Link to="#">Returns & Exchange</Link></li>
                            <li><Link to="#">Warranty</Link></li>
                            <li><Link to="#">Payment Plans</Link></li>
                            <li><Link to="#">FAQ's</Link></li>
                        </ul>
                    </div>
                    <div className='foot-education'>
                        <Link to="#">
                            <p>Education</p>
                        </Link>
                        <ul>
                            <li><Link to="#">Buying Guide</Link></li>
                            <li><Link to="#">Fabrics</Link></li>
                            <li><Link to="#">Electronics</Link></li>
                            <li><Link to="#">Sizes</Link></li>
                        </ul>
                    </div>
                    <div className='foot-brand'>
                        <Link to="#">
                            <p>Brand</p>
                        </Link>
                        <ul>
                            <li><Link to="#">Our Story</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className='foot-stay'>
                        <h3>Stay Connected</h3>
                        <p className='foot-desc'>Join our mailing list for the latest products, news and offers!</p>
                        <div className='email'>
                            <input type='email' placeholder='Enter Email Address..' />
                            <button className='foot-btn'>Submit</button>
                        </div>
                        <div className='icons'>
                            <ul>
                                <li><Link to="https://www.youtube.com/"><FaYoutube/></Link></li>
                                <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                                <li><Link to="https://www.facebook.com/"><FaFacebookF/></Link></li>
                                <li><Link to="https://www.twitter.com/"><FaTwitter/></Link></li>
                                <li><Link to="https://www.linkedin.com/"><FaLinkedin/></Link></li>
                                <li><Link to="https://www.facebook.com/"><FaPinterestP/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='copyright'>
                    <h4>Copyright 2024 © E-Kart All rights reserved</h4>
                </div>
            </div>
        </div>
    )
}
