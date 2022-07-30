import React from 'react';
import { useLocation } from 'react-router-dom';
// import innerbanner from '../../../public/img/images/inner-banner.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const ServiceDetail = () => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    const datas = location?.state;
    console.log(location?.state);

    const handleBuy = () => {
        toast(`Hello ${user?.displayName},Successfully Purchase your item `)
    }
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
                                        <li className="breadcrumb-item active" aria-current="page">{datas?.title}</li>
                                        <li className="dots2" />
                                    </ol>
                                </nav>
                                <h2>{datas?.title}</h2>
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
                            <div className="col-lg-5 order-2 order-lg-0">
                                <aside className="services-sidebar">
                                    <div className="services-widget mb-40">
                                        <div className="service-widget-title">
                                            <h3>Service :{datas?.title}</h3>
                                        </div>
                                        <div className="service-cat-list py-5">

                                            <div className="container">

                                                <div className="row justify-content-center">
                                                    <div className="col-lg-10">
                                                        <div className="support-form text-center">

                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <input type="text" readOnly placeholder={user?.displayName} />
                                                                </div>


                                                                <div className="col-md-12">
                                                                    <input type="email" placeholder="Phone" />
                                                                </div>
                                                            </div>
                                                            <textarea name="Address" id="message" column="2" placeholder="Your Address" defaultValue={""} />
                                                            <button onClick={handleBuy} className="btn red-btn">Buy Now</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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
                            <div className="col-lg-7">
                                <div className="services-details-content">
                                    <h4>{datas?.title}</h4>
                                    <p>{datas?.desc}</p>
                                    <div className="services-details-img">
                                        <img src={datas?.img} alt />
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