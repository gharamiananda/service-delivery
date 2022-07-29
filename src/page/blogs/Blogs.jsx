import React from 'react';

const Blogs = () => {
    return (
        <section className="blog-area blog-bg pt-115 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-70">
                            <h6>Latest News</h6>
                            <h2>Latest Popular Articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post mb-30">
                            <div className="blog-thumb">
                                <a href="blog-details.html"><img src="img/blog/blog_thumb01.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock" /> OCTOBER 9, 2019</li>
                                        <li><a href="#"><i className="far fa-comments" /> 03</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">Track your airfreight shipment by airwaybill</a></h4>
                                <p>Express delivery is an innovative service refers effective logi solution but the majorty have an suffered alteration the
                                    delivery.</p>
                                <div className="blog-read-more text-center">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post mb-30">
                            <div className="blog-thumb">
                                <a href="blog-details.html"><img src="img/blog/blog_thumb02.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock" /> OCTOBER 9, 2019</li>
                                        <li><a href="#"><i className="far fa-comments" /> 03</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">Consignments may be tracked feeding the airline code</a></h4>
                                <p>Express delivery is an innovative service refers effective logi solution but the majorty have an suffered alteration the
                                    delivery.</p>
                                <div className="blog-read-more text-center">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post mb-30">
                            <div className="blog-thumb">
                                <a href="blog-details.html"><img src="img/blog/blog_thumb03.jpg" alt="img" /></a>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><i className="far fa-clock" /> OCTOBER 9, 2019</li>
                                        <li><a href="#"><i className="far fa-comments" /> 03</a></li>
                                    </ul>
                                </div>
                                <h4><a href="blog-details.html">Words Cargo and Freight Refer Particular to Goods</a></h4>
                                <p>Express delivery is an innovative service refers effective logi solution but the majorty have an suffered alteration the
                                    delivery.</p>
                                <div className="blog-read-more text-center">
                                    <a href="blog-details.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;