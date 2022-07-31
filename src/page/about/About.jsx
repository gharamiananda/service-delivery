
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import about from '../../img/about.jpg';
import { Controller } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const About = () => {
    return (
        <section className="about-area about-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-active">

                            <Swiper
                                // install Swiper modules
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}


                            >
                                <SwiperSlide>
                                    <div className="single-about-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="about-img">
                                                    <img src={about} className='img-fluid' alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-content">
                                                    <div className="section-title about-title mb-25">
                                                        <h2>About Our Cargo Delivery</h2>
                                                        <h6>Express delivery is an innovative service</h6>
                                                    </div>
                                                    <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                                                        is useful for companies of various effective logistics scale.</p>
                                                    <a href="#" className="btn">comparison</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-about-wrap">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="about-img">
                                                    <img src={about} className='img-fluid' alt="img" />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-content">
                                                    <div className="section-title about-title mb-25">
                                                        <h2>About Our Cargo Delivery</h2>
                                                        <h6>Express delivery is an innovative service</h6>
                                                    </div>
                                                    <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                                                        is useful for companies of various effective logistics scale.</p>
                                                    <a href="#" className="btn">comparison</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>



                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;