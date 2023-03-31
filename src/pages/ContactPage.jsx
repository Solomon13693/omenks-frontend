import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'

const ContactPage = () => {
    return (
        <>

            <Header />

            <BreadCrumb page='Contact' title="Contact Us" />

            <section class="contact section-padding pt-0 style-6 mt-5 pt-5">
                <div class="container">

                    <div class="text-center mb-100">
                        <h2 class="ltspc-5 text-uppercase mb-3 color-blue5">(+23) 5535 68 68</h2>
                        <h4 class="fw-normal mb-20 color-000">omenksinv@gmail.com</h4>
                        <h4 class="fw-normal mb-10 color-000">58 Howard St, San Francisco, CA 941</h4>
                    </div>

                    <div class="content">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <form class="form" method="post">
                                    <div class="row">

                                        <div class="col-lg-6">
                                            <div class="form-group mb-20">
                                                <input type="text" name="name" class="form-control" placeholder="First Name" />
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group mb-20">
                                                <input type="text" name="name" class="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group mb-20">
                                                <input type="text" name="email" class="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group mb-20">
                                                <input type="text" name="phone" class="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <textarea rows="10" class="form-control" placeholder="How can we help you?"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 text-center mt-5">
                                            <input type="submit" value="Send Your Request" class="btn rounded-pill bg-blue4 fw-bold text-white text-light fs-12px" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24219.60999175365!2d-73.9764341314902!3d40.64198229194528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b400c94a227%3A0x18e2a4d3fb21f0ec!2sFlatbush%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1651361759450!5m2!1sen!2seg" height="500" className='w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer />

        </>
    )
}

export default ContactPage