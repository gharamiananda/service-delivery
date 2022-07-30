import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className="support-area support-bg pt-110 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-10">
                        <div className="s-section-title text-center mb-60">
                            <h2>Get In Touch</h2>
                            <p>Express delivery is an innovative service is effective logistics solution for the delivery of small
                                cargo. This service is useful for companies various.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="support-form text-center">
                            <form onSubmit={handleLogin}>
                                <div className="row">

                                    <div className="col-md-6">
                                        <input type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your E-mail *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Your Password *" />
                                    </div>


                                </div>

                                <button className="btn red-btn" type='submit'  > Register</button>
                            </form>
                        </div>

                        <div class="video-title text-black">

                            <Link to="/register">Create a new Account? <span></span></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default Login;