import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogImage from '../assets/img/blog.png'
import { Link } from 'react-router-dom'
import BlogSliderBar from '../components/BlogSliderBar'

const Blog = () => {

    function generateRandomString(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        const values = crypto.getRandomValues(new Uint32Array(length));
        for (let i = 0; i < length; i++) {
          result += charset[values[i] % charset.length];
        }
        return result;
      }

    return (
        <>

            <Header />

            <div className="blog-page style-5 pt-80">

                <section class="all-news section-padding blog bg-transparent style-3">
                    <div class="container">
                        <div class="row gx-4 gx-lg-5">

                            <div class="col-lg-4">
                                <BlogSliderBar />
                            </div>

                            <div class="col-lg-8">

                                <div class="card border-0 bg-transparent rounded-0 border-bottom brd-gray pb-30">
                                    <div class="row">

                                        <div class="col-lg-5">
                                            <div class="img img-cover">
                                                <img src={BlogImage} class="radius-7" alt="..." />
                                            </div>
                                        </div>

                                        <div class="col-lg-7 align-self-center">
                                            <div class="card-body p-0">
                                                <small class="d-block date text">
                                                    <Link to='' class="text-uppercase border-end brd-gray pe-3 me-3 color-blue5 fw-bold"> news </Link>
                                                    <i class="bi bi-clock me-1"></i>
                                                    <span to='' class="op-8">12 Days ago</span>
                                                </small>
                                                <Link to={`/blog/${generateRandomString(32)}`} class="card-title mb-10">How To Become A Python Develop Expert</Link>
                                                <p class="fs-13px color-666">If there’s one way that wireless technology has changed the way we work, it’s that will everyone [...]</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>

            <Footer />

        </>
    )
}

export default Blog