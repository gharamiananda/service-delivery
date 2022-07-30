import { Link } from 'react-router-dom';
import calculator from '../../img/icon/calculator-symbols.png';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import userimg from '../../img/logo/user.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const logout = () => {
        signOut(auth);
    };
    return (
        <header>
            <div className="header-top-wrap purple-bg d-none d-md-block">
                <div className="container-fluid header-container-p">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-6">
                            <div className="header-contact">
                                <ul>
                                    <li><i className="fas fa-headphones" />Call us +654 3048 9658</li>
                                    <li><i className="far fa-envelope" />Startask@info.com</li>
                                    <li><i className="fas fa-map-marker" />W84 wokin Street Park</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <div className="header-top-right d-flex justify-content-end align-items-center">
                                <div className="header-country">

                                </div>
                                <div className="header-social">
                                    <ul>
                                        <li>Follow us :</li>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="main-header">
                <div className="container-fluid header-container-p">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="logo">
                                <a href="index.html"><img src="img/logo/logo.png" className="mobile-logo" alt="Logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-6 d-none d-md-block">
                            <div className="menu-area">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active"><a href="index.html">Home</a>

                                            </li>
                                            <li><a href="about-us.html">Services</a></li>
                                            <li><a href="tracking.html">Blog</a></li>

                                            <li><a href="#">Portfolio</a>

                                            </li>

                                        </ul>
                                    </nav>
                                </div>

                                <div className="header-btn">
                                    {!user ? <Link to="/login" className="btn">
                                        <img src={calculator} alt="icon" />Login/Register
                                    </Link> : <>
                                        <li className="nav-item dropdown">
                                            <img src={userimg} className="usericon w-75" alt="icon" role="button" data-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu">

                                                <li><button className="dropdown-item"
                                                    onClick={logout}
                                                >Logout</button></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">{user?.displayName}</a></li>
                                            </ul>
                                        </li>

                                    </>}
                                </div>

                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu" />
                        </div>
                    </div>
                    {/* Modal Search */}
                    <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <form>
                                    <input type="text" placeholder="Search here..." />
                                    <button><i className="fa fa-search" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content fare-rate-modal">
                                <ul className="nav nav-tabs setup-panel">
                                    <li className="nav-item single-steps">
                                        <a className="nav-link btn-amber" href="#step-1">Select Your Destination</a>
                                    </li>
                                    <li className="nav-item single-steps">
                                        <a className="nav-link btn-blue-grey" href="#step-2">ITEMS TO BE SHIPPED</a>
                                    </li>
                                    <li className="nav-item single-steps">
                                        <a className="nav-link btn-blue-grey" href="#step-3">tracking information</a>
                                    </li>
                                </ul>
                                <form action="#" method="post">
                                    <div className="single-setup" id="step-1">
                                        <div className="fare-rate-tab-content">
                                            <div className="modal-shipping-info">
                                                <ul>
                                                    <li>
                                                        <div className="shipping-step-count">
                                                            <h5>A</h5>
                                                        </div>
                                                        <div className="shipping-address-form">
                                                            <div className="shipping-country-box form-group">
                                                                <label htmlFor="from-country">from country</label>
                                                                <input type="text" required="required" id="from-country" placeholder="Select Your Destination" />
                                                            </div>
                                                            <div className="shipping-address-box form-group">
                                                                <label htmlFor="from-country-location">add your location</label>
                                                                <input type="text" required="required" id="from-country-location" placeholder="Select Your Destination" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="shipping-step-count">
                                                            <h5>B</h5>
                                                        </div>
                                                        <div className="shipping-address-form">
                                                            <div className="shipping-country-box form-group">
                                                                <label htmlFor="to-country">TO country</label>
                                                                <input type="text" required="required" id="to-country" placeholder="Select Your Destination" />
                                                            </div>
                                                            <div className="shipping-address-box form-group">
                                                                <label htmlFor="to-country-location">add your location</label>
                                                                <input type="text" required="required" id="to-country-location" placeholder="Select Your Destination" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="modal-shipping-more-list">
                                                <ul>
                                                    <li><a href="#"><i className="flaticon-credit-card" /> Don't have an account? No problem Pay by credit card or cash.</a></li>
                                                    <li><a href="#"><i className="flaticon-sings" /> Get a quick quote and start shipping</a></li>
                                                    <li><a href="#"><i className="flaticon-track" /> Consult your packaging and delivery options</a></li>
                                                </ul>
                                            </div>
                                            <button className="btn f-right nextBtn-2 btn-success" type="button">one more step</button>
                                        </div>
                                    </div>
                                    <div className="single-setup" id="step-2">
                                        <div className="fare-rate-tab-content">
                                            <div className="modal-shipping-details">
                                                <div className="modal-shipping-title">
                                                    <h2>items <span>details</span></h2>
                                                    <h2 className="f-right">total cost : <span>$ 19.00</span></h2>
                                                </div>
                                                <div className="shipping-details-info">
                                                    <div className="single-shipping-details-box">
                                                        <label htmlFor="packaging-size">packaging size</label>
                                                        <select className="custom-select" id="packaging-size">
                                                            <option selected>Standart Size ( 42” x 36” )</option>
                                                            <option>Standart Size ( 82” x 86” )</option>
                                                            <option>Standart Size ( 102” x 165” )</option>
                                                            <option>Standart Size ( 110” x 205” )</option>
                                                            <option>Standart Size ( 120” x 250” )</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-shipping-details-box shipping-qty">
                                                        <label htmlFor="QTY-number">QTY</label>
                                                        <input type="number" defaultValue={1} id="QTY-number" required="required" />
                                                    </div>
                                                    <div className="single-shipping-details-box shipping-weight">
                                                        <label htmlFor="packaging-weight">TOTAL WEIGHT</label>
                                                        <select className="custom-select" id="packaging-weight">
                                                            <option selected>KG</option>
                                                            <option>20KG</option>
                                                            <option>30KG</option>
                                                            <option>50KG</option>
                                                            <option>80KG</option>
                                                            <option>100KG</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-shipping-details-box shipping-transport">
                                                        <label htmlFor="cargo-transport">cargo transport</label>
                                                        <select className="custom-select" id="cargo-transport">
                                                            <option selected>IN</option>
                                                            <option>1500in</option>
                                                            <option>2000in</option>
                                                            <option>2500in</option>
                                                            <option>3000in</option>
                                                            <option>3500in</option>
                                                            <option>4000in</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-shipping-details-box shipping-product">
                                                        <label htmlFor="product-category">product category</label>
                                                        <select className="custom-select" id="product-category">
                                                            <option selected>Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                            <option>Glass Product</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" required="required" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Logistics is generally the detailed organization and implementation of a complex operation. In a general business sense, logistics is the management of the flow of things between the point of origin and the point</label>
                                                </div>
                                            </div>
                                            <button className="btn f-left prevBtn-2 btn-success" type="button">Previous</button>
                                            <button className="btn f-right nextBtn-2 btn-success" type="button"><span>$19.00</span> Booking</button>
                                        </div>
                                    </div>
                                    <div className="single-setup" id="step-3">
                                        <div className="fare-rate-tab-content">
                                            <div className="modal-shipping-details">
                                                <div className="modal-shipping-title">
                                                    <h2>tracking <span>information</span></h2>
                                                </div>
                                                <div className="f-left pr-20">
                                                    <div className="shipping-details-info shipping-tracking-info">
                                                        <div className="modal-tracking-info">
                                                            <label htmlFor="invoice-id">invoice Id</label>
                                                            <input type="text" id="invoice-id" placeholder="Enter Your Id" />
                                                        </div>
                                                        <div className="modal-tracking-info">
                                                            <label>Search invoice</label>
                                                            <button className="btn nextBtn-2 btn-success">find your product</button>
                                                        </div>
                                                    </div>
                                                    <div className="tracking-quots-board">
                                                        <label>your happiness quotes</label>
                                                        <div className="tracking-quots-board-info">
                                                            <img src="img/bg/board_bg.jpg" alt="img" />
                                                            <h5>On Board Your Products. Now Product is
                                                                Malaysia Ocean</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tracking-modal-map">
                                                    <div id="contact-map" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;