import React from 'react';

const ServiceDetail = () => {
    return (
        <main>
            {/* breadcrumb-area */}
            <div className="breadcrumb-area breadcrumb-bg s-breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="dots" />
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Railway Freight</li>
                                        <li className="dots2" />
                                    </ol>
                                </nav>
                                <h2>Railway Freight</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb-area-end */}
            {/* services-details */}
            <div className="services-details-area pt-120 pb-115">
                <div className="container">
                    <div className="services-details-wrap">
                        <div className="row">
                            <div className="col-lg-4 order-2 order-lg-0">
                                <aside className="services-sidebar">
                                    <div className="services-widget mb-40">
                                        <div className="service-widget-title">
                                            <h3>Service Category</h3>
                                        </div>
                                        <div className="service-cat-list">
                                            <ul>
                                                <li><a href="#">All Service</a></li>
                                                <li><a href="service-air.html">Air Freight</a></li>
                                                <li><a href="service-warehouse.html">Cargo Warehouse</a></li>
                                                <li className="active"><a href="service-Railway.html">Railway Freight</a></li>
                                                <li><a href="service-door-to-door.html">Door To Door Service</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="services-widget mb-40">
                                        <div className="service-doc-list">
                                            <ul>
                                                <li><a href="#">Startesk Company Listing <i className="fas fa-file-pdf" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="services-widget mb-40">
                                        <div className="service-sidebar-support">
                                            <h3>Need Support?</h3>
                                            <p>Express delivery is an innovative service is effective logies</p>
                                            <a href="#" className="btn">contact Us</a>
                                        </div>
                                    </div>

                                </aside>
                            </div>
                            <div className="col-lg-8">
                                <div className="services-details-content">
                                    <h4>How It Works?</h4>
                                    <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                                        is useful for companies of various effective logistics scale.transport logistic is the world´s biggest trade show for
                                        logistics, mobility, IT and supply chain management. It takes place every two years in early May, at the Messe München
                                        exhibition center in Munich</p>
                                    <p>Logistics solution for the delivery of small cargo. This service is useful for companie various effective logistics
                                        scale.transport logistic is the world´s biggest trade show for logistics, mobility, IT and supply chain management. It
                                        takes place every two years.</p>
                                    <div className="services-details-img">
                                        <img src="img/images/services_details_img03.jpg" alt />
                                    </div>

                                    <div className="services-details-list">
                                        <ul>
                                            <li><i className="fas fa-arrow-alt-circle-right" />Express delivery is an innovative service</li>
                                            <li><i className="fas fa-arrow-alt-circle-right" />Logistics scale transport innovative</li>
                                            <li><i className="fas fa-arrow-alt-circle-right" />Help transportation and logistics companies</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* services-details-end */}
        </main>

    );
};

export default ServiceDetail;