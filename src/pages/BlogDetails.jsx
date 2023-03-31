import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogImage from '../assets/img/blog.png'
import BlogSliderBar from '../components/BlogSliderBar'
import BlogComment from '../components/BlogComment'

const BlogDetails = () => {

    const { slug } = useParams()

    return (
        <>

            <Header />

            <div className="blog-page style-5 pt-80">

                <section class="all-news section-padding pt-50 blog bg-transparent style-3">

                    <div class="container">

                        <div class="blog-details-slider mb-100">
                            <div class="section-head text-center mb-60 style-5">
                                <h2 class="mb-20 color-000"> How To Become A Python Develop Expert </h2>
                                <small class="d-block date text">
                                    <a href="#" class="text-uppercase border-end brd-gray pe-3 me-3 color-blue4 fw-bold"> news </a>
                                    <i class="bi bi-clock me-1"></i>
                                    <span class="op-8">Posted on 15 Days ago</span>
                                </small>
                            </div>
                            <div class="content-card">
                                <div class="img">
                                    <img src={BlogImage} alt="" />
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="cont">
                                                <small class="date small mb-20"> <span class="text-uppercase border-end brd-gray pe-3 me-3"> News </span> <i class="far fa-clock me-1"></i> Posted on 3 Days ago </small>
                                                <h2 class="title">
                                                    Solutions For Big Data Issue, Expert Perspective
                                                </h2>
                                                <p class="fs-12px mt-10 text-light text-info">If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row gx-4 gx-lg-5">

                            <div class="col-lg-4">
                                <BlogSliderBar />
                            </div>

                            <div class="col-lg-8">

                                <div class="d-flex small align-items-center justify-content-between mb-70 fs-12px">
                                    <div class="l_side d-flex align-items-center">
                                        <a href="#" class="me-3 me-lg-5">
                                            <span class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                                                a
                                            </span>
                                            <span class="">
                                                By Admin
                                            </span>
                                        </a>
                                        <a href="#" class="me-3 me-lg-5">
                                            <i class="bi bi-chat-left-text me-1"></i>
                                            <span>24 Comments</span>
                                        </a>
                                    </div>
                                    <div class="r-side mt-1">
                                        <a href="#">
                                            <i class="bi bi-info-circle me-1"></i>
                                            <span>Share</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-content-info">
                                    <h4 class="fw-bold color-000 lh-4 mb-30">To mark the first UK show of artist Henri Barande, developer <a href="#" class="color-blue4">Moussa</a> and German studio Schultzschultz  have created The Lodge Wooden at Berlin City</h4>
                                    <div class="text mb-10 color-666">
                                        Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.
                                    </div>
                                    <div class="text color-666 mb-20">
                                        Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. <br /> Located in the heart of Warwickshire.
                                    </div>

                                    <BlogComment />

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

export default BlogDetails