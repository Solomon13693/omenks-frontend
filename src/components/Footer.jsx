import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/img/omenks.png'
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';

const Footer = () => {
    return (
        <>

            <footer class="style-4 mt-0 pt-100">
                <div class="container">
                    <div class="foot">
                        <div class="row align-items-center">
                            <div class="col-lg-2">
                                <div class="logo">
                                    <img src={LOGO} alt="Logo Not Available" /> 
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <ul class="links">
                                    
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>

                                    <li>
                                        <Link to='/about-us'>About</Link>
                                    </li>

                                    <li>
                                        <Link to='/portfolio'>Portfolio</Link>
                                    </li>

                                    <li>
                                        <Link to='/real-estate'>Real Estate</Link>
                                    </li>


                                    <li>
                                        <Link to='/faqs'>FAQs</Link>
                                    </li>

                                    <li>
                                        <Link to='/blog'>Blog</Link>
                                    </li>

                                    <li>
                                        <Link to='/contact-us'>Contact Us</Link>
                                    </li>

                                </ul>
                            </div>

                            <div class="col-lg-2">

                            <ul class="links">

                                <div className="icon d-flex flex-row align-items-center">

                                    <li>
                                        <a href='' target='_blank' no> <FacebookCircleFillIcon size={20} /> </a>
                                    </li>

                                    <li>
                                        <a href='' target='_blank' no> <InstagramFillIcon size={20} /> </a>
                                    </li>

                                    <li>
                                        <a href='' target='_blank' no> <TwitterFillIcon size={20} /> </a>
                                    </li>

                                    </div>

                                </ul>

                            </div>

                        </div>
                    </div>
                    <div class="copywrite text-center">
                        <small class="small">
                            © { new Date().getFullYear() } Copyrights by <a href="#" class="fw-bold text-decoration-underline"> Omenks </a> All Rights Reserved.
                        </small>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer