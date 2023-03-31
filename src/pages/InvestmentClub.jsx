import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'
import feat_11_pattern from '../assets/img/feat_11_pattern.png'
import CTA from '../components/CTA'
import Testimoney from '../components/Testimony'

const InvestmentClub = () => {
    return (
        <>

            <Header />

            <BreadCrumb page='Investment Strategy' title="Investment Strategy" />

            <section class="features style-11">
                <div class="container">
                    <div class="content section-padding border-1 border-top brd-gray">
                        <div class="row justify-content-between align-items-center">

                            <div class="col-lg-5">

                                <div class="info">
                                    <div class="section-head wow fadeInUp mb-3">
                                        <h6 class="color-green text-uppercase"> //    Core Community </h6>
                                        <h2 class=""> Talks about what investment company is all about: </h2>
                                    </div>

                                    <p class="text mb-4">
                                        At Omenks Investment we help our investors earn passive income whether it is short term or long term by pulling together different properties such as commercial, rentals, or flipping homes.
                                    </p>

                                    <p class="text">
                                        First start by understanding your goal, are you looking to invest in real estate for a short period or time or are you looking to grow your finances in the future. Whichever your case may be we have different properties in our portfolio and we will cater to you based on your needs.
                                    </p>

                                    <a href="#0" class="btn rounded-pill fw-bold border-1 border brd-gray hover-green mt-40 wow fadeInUp" data-wow-delay="0.3s">
                                        <small> Join the Community </small>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="features-cards">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <div class="cards-side">
                                                <div class="feat-card wow fadeInUp">
                                                    <h3> <span> Rentals </span> Home </h3>
                                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="cards-side">

                                                <div class="feat-card wow fadeInUp" data-wow-delay="0.2s">
                                                    <h3> <span> Commercial </span> Home </h3>
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                </div>

                                                <div class="feat-card mt-30 wow fadeInUp" data-wow-delay="0.4s">
                                                    <h3> <span> Flipping  </span> Home </h3>
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <img src={feat_11_pattern} alt="" class="pattern rotate-center" />
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

export default InvestmentClub