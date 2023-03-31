import React from 'react'
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Testimoney from "../components/Testimony";
import CTA from '../components/CTA';
import ScreenShotOne from "./../assets/img/screenshot_1.png";
import ScreenShotTwo from "./../assets/img/screenshot_2.png";

const Home = () => {
    return (
        <>

            <Header />

            <Banner />

            <section class="feat-dark">
                <div class="container">
                    <div class="row">

                        <div  class="col-lg-4 mb-lg-0 mb-5">
                            <div class="item d-flex text-white">
                                <div class="icon">
                                    <span class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-phone"></i>
                                    </span>
                                </div>
                                <div class="cont">
                                    <h6>Perfect Responsive</h6>
                                    <p>Our Template is full Perfect for all device. You can visit our template all device
                                        easily.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-lg-0 mb-5">
                            <div class="item d-flex text-white">
                                <div class="icon">
                                    <span class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-brush"></i>
                                    </span>
                                </div>
                                <div class="cont">
                                    <h6> Modern Design </h6>
                                    <p> Modern and Unique design you can feel this in every little detail in our template </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-lg-0">
                            <div class="item d-flex text-white">
                                <div class="icon">
                                    <span class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-headset"></i>
                                    </span>
                                </div>
                                <div class="cont">
                                    <h6>Fast & Friendly Support</h6>
                                    <p>We are provide 24 hours support for all clients.You can purchase without hesitation.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="pattern bg-img"></div>
            </section>

            <section class="screenshots style-14 section-padding">
                <div class="container">

                    <div class="about-row mb-150">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6">
                                <div class="info">
                                    <div class="section-head mb-40">
                                        <p class="color-red1 text-uppercase fw-bold mb-10"> easy pick payment </p>
                                        <h2 class="fs-1"> Bill Your Clients </h2>
                                    </div>
                                    <div class="text">
                                        Open your own local currency account in the U.S., Europe, UK & more & get paid as easily as having a local bank account!
                                    </div>
                                    <div class="text">
                                        Transfer funds from your Iteck account to your local bank account, in local currency. Ensure you always have the currency that you need for your global payments by using our multi currency conversion service.
                                    </div>
                                    <a href="#0" class="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30">
                                        <small> Get Started <i class="fal fa-long-arrow-right ms-1"></i> </small>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="img mt-5 mt-lg-0">
                                    <div class="row gx-0">
                                        <div class="col-6">
                                            <img src={ScreenShotOne} alt="" class="main-img slide_up_down" />
                                        </div>
                                        <div class="col-6 pt-50">
                                            <img src={ScreenShotTwo} alt="" class="main-img slide_up_down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="about-row">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6">
                                <div class="img">
                                    <div class="row gx-0">
                                        <div class="col-6">
                                            <img src={ScreenShotOne} alt="" class="main-img slide_up_down" />
                                        </div>
                                        <div class="col-6 pt-50">
                                            <img src={ScreenShotTwo} alt="" class="main-img slide_up_down" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="info mt-5 mt-lg-0">
                                    <div class="section-head mb-40">
                                        <p class="color-red1 text-uppercase fw-bold mb-10"> easy pick payment </p>
                                        <h2 class="fs-1"> Marketplaces & Networks </h2>
                                    </div>
                                    <div class="text">
                                        Open your own local currency account in the U.S., Europe, UK & more & get paid as easily as having a local bank account!
                                    </div>
                                    <div class="text">
                                        Transfer funds from your Iteck account to your local bank account, in local currency. Ensure you always have the currency that you need for your global payments by using our multi currency conversion service.
                                    </div>
                                    <a href="#0" class="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30">
                                        <small> Get Started <i class="fal fa-long-arrow-right ms-1"></i> </small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Testimoney />

            <CTA />

            <Footer />


        </>
    )
}

export default Home