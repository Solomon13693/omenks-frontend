import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/omenks.png'
import Menu3LineIcon from 'remixicon-react/Menu3LineIcon';

const Header = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 120 ? setScroll(true) : setScroll(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <nav className={`navbar navbar-expand-lg navbar-light style-14 ${scroll && 'nav-scroll'} `}>
            
            <div class="container">

                <Link class="navbar-brand me-5 " to='/'>
                    <img src={LOGO} alt="Logo not available" />
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class=""><Menu3LineIcon /></span>
                </button>

                <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto">

                        <li class="nav-item">
                            <Link class="nav-link" to='/'>
                                Home
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/about-us'>
                                About Us
                            </Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><Link class="dropdown-item" to='/real-estate'>Real Estate</Link></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/portfolio'>
                                Portfolio
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/investment-strategy'>
                                Investment Strategy
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to='/contact-us'>
                                Contact Us
                            </Link>
                        </li>

                    </ul>

                    <div class="nav-side mt-3 mt-lg-0">
                        <a href="https://app-omenks.vercel.app/sign-in" class="btn rounded-pill text-dark bg-white hover-red1 shadow-lg fw-bold me-2">
                            <small> Sign In <i class="fal fa-long-arrow-right ms-1"></i> </small>
                        </a>
                        <a href="https://app-omenks.vercel.app/sign-up" class="btn rounded-pill text-white bg-red1 shadow-lg fw-bold">
                            <small> Sign Up </small>
                        </a>
                    </div>

                </div>

            </div>
        </nav>

    )
}

export default Header