import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export const Contact = () => {
    return (
        <>
            <div className='contact-us'>
                <div className='container'>
                    <div className='info-contact'>
                        <div className='heading-contact'>
                            <p>Contact Us</p>
                        </div>

                        <div className='contacting'>
                            <div className='message contacts'>
                                <p className='heading'>
                                    Chat With Us
                                </p>
                                <p className='contact-content'>
                                    E-Kart is available to chat Monday - Friday 9am - 5pm EST
                                </p>

                                <span><Link to="#">Chat With Us</Link></span>
                            </div>
                            <div className='message email-us'>
                                <p className='heading'>
                                    Email Us
                                </p>
                                <p className='contact-content'>
                                    Send an email to mailto : hello@ekart.com for any questions or concerns. Our Customer Care Team will be happy to assist you. We strive to respond to all inquiries within 1 business day!
                                </p>
                                <span><Link to="#">Email Us</Link></span>

                            </div>
                            <div className='message call-us'>
                                <p className='heading'>
                                    Call Us
                                </p>
                                <p className='contact-content'>
                                    You can reach our Customer Care Team by telephone +978 928 6273 with any questions and concerns. We are available Monday - Friday, 9am - 5pm EST.
                                </p>
                                <span><Link to="#">Call Us</Link></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
