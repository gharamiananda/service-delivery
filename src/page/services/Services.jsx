import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hook/useServices';
import Service from '../service/Service';

const Services = ({ number }) => {


    const [services, setServices] = useServices(number);





    return (
        <section className="services-area  pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center mb-60">
                            <h6>Delivery innovative service</h6>
                            <h2>About Cargo Delivery</h2>
                            <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                                is useful for companies of various effective logistics scale.</p>
                        </div>
                    </div>
                </div>
                <div className="services-wrapper">
                    <div className="row">
                        {services?.map(service => {
                            return (<Service service={service}></Service>
                            )
                        })}


                        {
                            !services && <p>Loading.....</p>
                        }

                    </div>
                    {number == 3 && <div className="text-center">
                        <Link to="/services" className="btn">View More</Link>
                    </div>}

                </div>
            </div>
        </section>
    );
};

export default Services;