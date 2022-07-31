import React from 'react';

const Banner = () => {
    return (
        <section className="slider-area">
            <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center">
                    <div className="slider-overlay-bg" />
                    <div className="slider-bg-shape" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-11">
                                <div className="slider-content text-center">
                                    <h2 data-animation="fadeInUpS" data-delay=".3s">Delivery Express</h2>
                                    <p data-animation="fadeInUpS" data-delay=".6s">Explore ways to become more efficient, see printing offers and solutions
                                        insights and inspiration for your small business.</p>
                                    <div className="slider-form" data-animation="fadeInUpS" data-delay=".9s">
                                        <form action="#">
                                            <input type="text" placeholder="Tracking id" />
                                            <button className="btn">Tracking</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;