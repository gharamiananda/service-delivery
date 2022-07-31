import React from 'react';
import { Link, useNavigate } from "react-router-dom"

const Service = ({ service }) => {
    const { id, title, price, desc, img } = service;
    const des = desc.slice(0, 120);

    const navigate = useNavigate();


    const viewDetails = (title) => {

        const setUrl = title.toLowerCase().split(" ").join("-")
        navigate(`/services/${setUrl}`, { state: service })
    }


    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-services mb-30">
                <div className="services-thumb">
                    <a href="#"><img src={img} className='w-100' alt="img" /></a>
                </div>
                <div className="services-content">
                    <div className="services-icon">
                        <i className="flaticon-shipping-and-delivery" />
                    </div>
                    <h3><a href="#">{title}</a></h3>
                    <span>Rs. {price}/-</span>
                    <p>{des}</p>


                    <button onClick={() => viewDetails(title)} className="btn mt-5" >View Detail</button>
                </div>
            </div>
        </div >
    );
};

export default Service;