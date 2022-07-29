import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {


    const [services, setServices] = useState([]);



    useEffect(() => {
        const fetServices = async () => {
            const res = await axios.get("service.json")
                .catch(err => {
                    console.log(err)
                })

            setServices(res?.data)
        }


        fetServices();
    }, [])




    return (
        <section className="services-area pt-115 pb-90">
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
                </div>
            </div>
        </section>
    );
};

export default Services;