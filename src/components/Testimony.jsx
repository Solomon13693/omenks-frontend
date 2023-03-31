import React from 'react'
import { Link } from 'react-router-dom'

const Testimoney = () => {
    return (
        <section class="testimonials style-4 pt-70">
            <div class="container">
                <div class="content">
                    <div class="row">

                        <div class="col-lg-5 mb-4">
                            <div class="section-head style-4">
                                <small class="title_small">Testimonials</small>
                                <h2 class="mb-30">Loved From <span> Customers </span> </h2>
                            </div>

                            <p class="text mb-40">
                                “Omenks loved from thoudsands customer worldwide and get trusted from big companies.
                            </p>

                            <div class="numbs">
                                <div class="num-card">
                                    <h2>2,5M+</h2>
                                    <p> Users Invested</p>
                                </div>
                                <div class="num-card">
                                    <h2>4.8</h2>
                                    <p>Based on 1,258 reviews</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center mt-50">
                                <Link to='/' class="btn rounded-pill bg-blue4 fw-bold text-white me-4">
                                    <small> Get Started Now </small>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="testi-cards">
                                <div class="client_card">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user4.png" alt="" />
                                    </div>
                                    <div class="inf_content">
                                        <div class="stars mb-2">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h6>
                                            “You can even send emails to Evernote and gather  <br /> all of the things you need in a single place.”
                                        </h6>
                                        <p>jurgen k.   <span class="text-muted"> /  Senior Marketing at <span>Brator</span> </span></p>
                                    </div>
                                </div>
                                <div class="client_card">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user5.png" alt="" />
                                    </div>
                                    <div class="inf_content">
                                        <div class="stars mb-2">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h6>
                                            “Omenks - 1st my choice for notes app. Awesome”
                                        </h6>
                                        <p>foden p.  <span class="text-muted"> /  Director at <span>Ecoland Resort</span> </span></p>
                                    </div>
                                </div>
                                <div class="client_card">
                                    <div class="user_img">
                                        <img src="assets/img/testimonials/user6.png" alt="" />
                                    </div>
                                    <div class="inf_content">
                                        <div class="stars mb-2">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h6>
                                            “.This app is seriously good. It’s simple, clean and <br /> a real joy to use.”                                    </h6>
                                        <p>Kerry T. <span class="text-muted"> /  Designer at <span>Teckzone Inc</span> </span></p>
                                    </div>
                                </div>
                                <img src="assets/img/contact_globe.svg" alt="" class="testi-globe" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimoney