import React from 'react';

const Testimonials = () => {
    return (
        <section className="area-wrapper black-bg position-relative pt-115 pb-120">
            <div className="area-wrap-bg" />
            <div className="testimonial-map-bg" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testimonial-area">
                            <div className="section-title white-title mb-55">
                                <h6>Happy Customer Quotes</h6>
                                <h2>Our Top Reviews</h2>
                            </div>
                            <div className="testimonial-active">
                                <div className="single-testimonial">
                                    <div className="testimonial-cat mb-30">
                                        <h5>Shipping Cargo</h5>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="testimonial-content mb-45">
                                        <p>“ Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This
                                            service is useful companied various effective logistics scala ”</p>
                                    </div>
                                    <div className="testimonial-avatar">
                                        <div className="testi-avatar-img">
                                            <img src="img/images/testi_avatar01.png" alt="img" />
                                        </div>
                                        <div className="testi-avatar-info">
                                            <h6>Tonoy Alexander</h6>
                                            <span>Founder Cargo</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-area cta-pl">
                            <div className="section-title white-title mb-60">
                                <h6>Clients Trust Us</h6>
                                <h2>Cargo Request Quote</h2>
                            </div>
                            <div className="cta-from">
                                <form action="#">
                                    <div className="cta-form-col d-flex justify-content-between">
                                        <select className="custom-select">
                                            <option selected>Select Service</option>
                                            <option>Air Freight</option>
                                            <option>Shipping Cargo</option>
                                            <option>Rail Cargo</option>
                                            <option>Warehousing</option>
                                        </select>
                                        <input type="text" placeholder="Length cm" />
                                        <input type="text" placeholder="Hight cm" />
                                    </div>
                                    <div className="cta-form-col d-flex justify-content-between">
                                        <select className="custom-select">
                                            <option selected>From Country</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica">Antarctica</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                        </select>
                                        <select className="custom-select">
                                            <option selected>To Country</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea, Republic of">Korea, Republic of</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                        </select>
                                    </div>
                                    <div className="cta-form-col d-flex justify-content-between">
                                        <select className="custom-select">
                                            <option selected>Weight kg</option>
                                            <option>100Kg</option>
                                            <option>200Kg</option>
                                            <option>300Kg</option>
                                            <option>400Kg</option>
                                            <option>500Kg</option>
                                            <option>600Kg</option>
                                            <option>700Kg</option>
                                        </select>
                                        <input className="cta-email" type="email" placeholder="Email ID" />
                                    </div>
                                    <h4 className="extra-services"><i className="fas fa-binoculars" />Extra Service</h4>
                                    <ul>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Air Freight</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Shipping Cargo</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">Rail Cargo</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" htmlFor="customCheck4">Warehousing</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="btn">comparison</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;