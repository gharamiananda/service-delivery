import { Link } from 'react-router-dom';
import calculator from '../../img/icon/calculator-symbols.png';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import userimg from '../../img/logo/user.png';
import { NavLink } from "react-router-dom";
const Header = () => {

    const [user, loading] = useAuthState(auth);
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
                                    <li><i className="fas fa-headphones" />Call us +91 8420377092</li>
                                    <li><i className="far fa-envelope" />anandagharami@gmail.com</li>
                                    <li><i className="fas fa-map-marker" /> Kolkata, India</li>
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
                                        <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-pinterest-p" /></Link></li>
                                        <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
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
                                <a href="">
                                    <h3>Cargo Delivery</h3></a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-6 d-none d-md-block">
                            <div className="menu-area">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active"><NavLink to="/">Home</NavLink></li>
                                            <li  ><NavLink to="/services">Services</NavLink></li>
                                            <li  ><NavLink to="/blog">Blog</NavLink></li>

                                            <li  ><NavLink to="/portfolio">Portfolio</NavLink> </li>

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
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">


                                <h3>Cargo Delivery</h3>

                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li className="active"><NavLink to="/">Home</NavLink></li>
                                    <li  ><NavLink to="/services">Services</NavLink></li>
                                    <li  ><NavLink to="/blog">Blog</NavLink></li>

                                    <li  ><NavLink to="/portfolio">Portfolio</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;