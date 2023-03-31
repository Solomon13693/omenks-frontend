import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Testimony from "./../components/Testimony";
import AboutOne from "./../assets/img/about_1.jpg";
import AboutTwo from "./../assets/img/about_2.png";


const AboutPage = () => {
  return (
    <div className='about-page style-2'>

      <Header />

      <BreadCrumb page='About' title="About Our Company" />

      <section class="about style-7 mt-0">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-lg-6">
              <div class="info">
                <div class="section-head style-4 mb-40">
                  <div class="top-title mb-10">
                    <h5> About Us </h5>
                  </div>
                  <h2 class="">
                    Meet With <span> Omenks </span> <br /> Investment.
                  </h2>
                </div>
                <div class="text mb-30">
                  Omenks Investment started back in 2019 when two friends came together and were talking about how much real estate was growing and ended up acquiring one property together. <br /> <br /> We figured why not help other people who may not have all the funds that are required to purchase a property come together and pool their money into different properties to see a return on their investment.
                </div>

              </div>
            </div>

            <div class="col-lg-6">
              <div class="img">
                <img src={AboutOne} alt="" class="main-img" />
                <span class="circle scale_up_down"></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="about style-2 section-padding">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-lg-6 mb-4">
              <div class="img img-cover">
                <img src={AboutTwo} alt="" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="info px-lg-5">
                <div class="section-head style-5 mb-40">
                  <h2 class="mb-20"> Work For Your Incredible Success  </h2>
                </div>

                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="abt1-tab" data-bs-toggle="pill" data-bs-target="#abt1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                      Our Mission
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="abt2-tab" data-bs-toggle="pill" data-bs-target="#abt2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      Our vision
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="abt3-tab" data-bs-toggle="pill" data-bs-target="#abt1" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      Our Goal
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="abt1" role="tabpanel">
                    <p class="text"> The uploading and updating processes made by suppliers can be streamlined through front-end dashboards that create better ease of access. </p>
                    <div class="d-flex align-items-center mt-40">
                      <div class="btns">
                        <a href="#" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                          <span> Learn More </span>
                        </a>
                      </div>
                      <div class="inf ms-3">
                        <p class="color-999"> Support Email </p>
                        <a href="#" class="fw-bold color-000"> omenksinv@gmail.com </a>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="abt2" role="tabpanel">
                    <p class="text"> The uploading and updating processes made by suppliers can be streamlined through front-end dashboards that create better ease of access. </p>
                    <div class="d-flex align-items-center mt-40">
                      <div class="btns">
                        <a href="#" class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold">
                          <span> Learn More </span>
                        </a>
                      </div>
                      <div class="inf ms-3">
                        <p class="color-999"> Support Email </p>
                        <a href="#" class="fw-bold color-000"> omenksinv@gmail.com </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

      <Testimony />

      <Footer />

    </div>
  )
}

export default AboutPage