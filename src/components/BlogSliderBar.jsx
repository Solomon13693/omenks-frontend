import React from 'react'
import { Link } from 'react-router-dom'
import BlogImage from '../assets/img/blog.png'

const BlogSliderBar = () => {
    return (
        <div class="side-blog style-5 pe-lg-5 mt-5 mt-lg-0">
            <form class="search-form mb-50" method="post">
                <h6 class="title mb-20 text-uppercase fw-normal">
                    search
                </h6>
                <div class="form-group position-relative">
                    <input type="text" class="form-control rounded-pill" placeholder="Type and hit enter" />
                    <button class="search-btn border-0 bg-transparent"> <i class="fas fa-search"></i> </button>
                </div>
            </form>

            <div class="side-recent-post mb-50">
                <h6 class="title mb-20 text-uppercase fw-normal">
                    recent post
                </h6>

                <Link to='' class="post-card">
                    <div class="img me-3">
                        <img src={BlogImage} alt="" />
                    </div>
                    <div class="inf">
                        <h6> AI With Fingerprint </h6>
                        <p> If there’s one way that wireless technology has [...] </p>
                    </div>
                </Link>

            </div>

            <div class="side-categories mb-50">
                <h6 class="title mb-20 text-uppercase fw-normal">
                    categories
                </h6>

                <Link to='' class="cat-item">
                    <span> all </span>
                    <span> 265 </span>
                </Link>

                <Link to='' class="cat-item">
                    <span> News </span>
                    <span> 38 </span>
                </Link>

            </div>

            <div class="side-newsletter mb-50">
                <h6 class="title mb-10 text-uppercase fw-normal">
                    newsletter
                </h6>
                <div class="text">
                    Register now to get latest updates on promotions & coupons.
                </div>
                <form action="https://iteck-html.themescamp.com/contact.php" class="form-subscribe" method="post">
                    <div class="email-input d-flex align-items-center py-3 px-3 bg-white mt-3 radius-5">
                        <span class="icon me-2 flex-shrink-0">
                            <i class="far fa-envelope"></i>
                        </span>
                        <input type="text" placeholder="Email Address" class="border-0 bg-transparent fs-13px" />
                    </div>
                    <button class="btn bg-blue5 sm-butn text-white hover-darkBlue w-100 mt-3 radius-5 py-3">
                        <span>Subscribe</span>
                    </button>
                </form>
            </div>

        </div>
    )
}

export default BlogSliderBar