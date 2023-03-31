import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/BreadCrumb'
import Icon from '../../assets/img/icon1.png'

const RealEstate = () => {
    return (
        <>

            <Header />

            <BreadCrumb page='Real Estate' title="Real Estate" />

            <header className="style-5">

            <div class="container text-center m-auto">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="info">
                        
                        <p className='fs-4 mb-4 text-dark'>We invest in our portfolio of rented buildings in the US and manage your money for returns through rent and capital appreciation.</p>
                    </div>

                    <h6 class="my-2"><span class="text-muted">Historical Returns: </span><span class="capitalize text-darkGray">14% per annum</span></h6>

                    <h6><span class="text-muted">Risk Level: </span><span class="capitalize text-darkGray">Medium</span></h6>

                    <a href="#0" class="btn rounded-pill fw-bold bg-green mt-40 text-white">
                                    <small> Start Investing </small>
                                </a>
                    
                </div>
            </div>
        </div>

            </header>

            <section class="choose-us style-14 section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-head text-center mb-40">
                            <p class="color-red1 text-uppercase fw-bold mb-10"> why choose us </p>
                            <h2 class="fs-2"> Why Choose Omenks For Real Estate Investment. </h2>
                        </div>
                    </div>
                </div>
                <div class="content">
                    
                    <div class="row">

                        <div class="col-lg-4 col-sm-6">
                            <div class="choose-card">
                                <div class="icon">
                                    <img src={Icon} alt="" />
                                </div>
                                <div class="info">
                                    <p> Our focus is investing in American properties with the best price to rent ratio and maximize your returns on investment. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="choose-card">
                                <div class="icon">
                                    <img src={Icon} alt="" />
                                </div>
                                <div class="info">
                                    <p> Our relationship with leading US service providers and being active in the market allows us to deliver a smooth investing process and increase your earnings. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="choose-card">
                                <div class="icon">
                                    <img src={Icon} alt="" />
                                </div>
                                <div class="info">
                                    <p> We manage all the paperwork and personnel issues to reduce the stress involved with property investments </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>


            <Footer />

        </>
    )
}

export default RealEstate