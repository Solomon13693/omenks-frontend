import React from "react";
import Bubble from "./../assets/img/header/header_4_bubble.png";
import Hero from "./../assets/img/hero.png";
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Banner = () => {
    return (
        <>
            <header class="style-4" style={{ paddingTop: "140px" }}>
                <div class="content">
                    <div class="container">
                        <div class="row gx-0">

                            <div class="col-md-7 align-self-center">
                                <div class="info">
                                    <h1 class="mb-30">
                                        Are you looking to invest in <span>real estate</span> but don’t want to cover the entire bill on your own?
                                    </h1>
                                    <p class="text">
                                        Or are you simply looking to invest in real estate? Omenks Investment is here to help pull together different investors to invest in multiple properties to help build <br /> long term and passive wealth.
                                    </p>

                                    <div class="d-flex align-items-center mt-5">
                                        <a href="https://app-omenks.vercel.app/dashboard"
                                            class="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4"
                                        >
                                            <small>
                                                Get Started Now
                                                <i class="fas fa-long-arrow-alt-right"> <ArrowRightLineIcon /> </i>
                                            </small>
                                        </a>
                                        <div class="inf mt-3 mt-lg-0">
                                            <p class="color-999"> Support Email </p>
                                            <a href="mailto:omenksinv@gmail.com" class="fw-bold">
                                                omenksinv@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-5 d-flex justify-content-end">

                                <Swiper
                                    direction={"vertical"}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    className="mySwiper"
                                    modules={[Autoplay,]}
                                >
                                    <SwiperSlide>   <div class="img">
                                        <img
                                            src={Hero}
                                            alt=""
                                        />
                                    </div> </SwiperSlide>
                                    <SwiperSlide>   <div class="img">
                                        <img
                                            src={Hero}
                                            alt=""
                                        />
                                    </div> </SwiperSlide>
                                    <SwiperSlide>   <div class="img">
                                        <img
                                            src={Hero}
                                            alt=""
                                        />
                                    </div> </SwiperSlide>
                                </Swiper>

                            </div>

                        </div>
                    </div>
                    <img src={Bubble} alt="" class="bubble" />
                </div>
            </header>
        </>
    );
};

export default Banner;
