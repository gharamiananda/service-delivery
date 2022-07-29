import React from 'react';

const Category = () => {
    return (
        <section className="category-area">
            <div className="container">
                <div className="category-bg">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-list">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div className="category-icon">
                                                <i className="flaticon-cruise" />
                                            </div>
                                            <h5>Sea Freight</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="service-air.html">
                                            <div className="category-icon">
                                                <i className="flaticon-air-freight" />
                                            </div>
                                            <h5>Air Freight</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="category-icon">
                                                <i className="flaticon-delivery-1" />
                                            </div>
                                            <h5>Insurance</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="category-icon">
                                                <i className="flaticon-warehouse" />
                                            </div>
                                            <h5>Warehousing</h5>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="category-icon">
                                                <i className="flaticon-package" />
                                            </div>
                                            <h5>Forwarding</h5>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;