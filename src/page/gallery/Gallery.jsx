import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery-area gallery-bg pt-115 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <h6>Delivery Anything</h6>
                            <h2>Exclusive Cargo Gallery</h2>
                        </div>
                    </div>
                </div>
                <div className="row gallery-active">
                    <div className="col-lg-8 col-md-12 grid-item grid-sizer">
                        <div className="single-gallery-img mb-30">
                            <a href="#"><img src="img/gallery/gallery_thumb01.jpg" alt="img" /></a>
                            <div className="gallery-overlay">
                                <h5 className="gallery-overlay-title"><a href="#">Cargo Truck</a></h5>
                                <span>Blanding , Digital</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item grid-sizer">
                        <div className="single-gallery-img mb-30">
                            <a href="#"><img src="img/gallery/gallery_thumb02.jpg" alt="img" /></a>
                            <div className="gallery-overlay">
                                <h5 className="gallery-overlay-title"><a href="#">Cargo Truck</a></h5>
                                <span>Blanding , Digital</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item grid-sizer">
                        <div className="single-gallery-img mb-30">
                            <a href="#"><img src="img/gallery/gallery_thumb03.jpg" alt="img" /></a>
                            <div className="gallery-overlay">
                                <h5 className="gallery-overlay-title"><a href="#">Cargo Truck</a></h5>
                                <span>Blanding , Digital</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item grid-sizer">
                        <div className="single-gallery-img mb-30">
                            <a href="#"><img src="img/gallery/gallery_thumb04.jpg" alt="img" /></a>
                            <div className="gallery-overlay">
                                <h5 className="gallery-overlay-title"><a href="#">Cargo Truck</a></h5>
                                <span>Blanding , Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="gallery-btn text-center mt-30">
                            <a href="#" className="btn">view gallery</a>
                            <div className="gallery-overlay">
                                <h5 className="gallery-overlay-title"><a href="#">Cargo Truck</a></h5>
                                <span>Blanding , Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;