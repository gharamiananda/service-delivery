import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase/firebase.init';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(email, password);
    const handleRegister = async (e) => {

        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(email, password)

            await updateProfile({ displayName });
        } catch (error) {
            console.log(error);
        }



    }

    if (updating || loading) {
        return <p>Loading....</p>
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
                            <form onSubmit={handleRegister}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text"
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            placeholder="User Name *" />
                                    </div>
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
                                    <div className="col-md-6">
                                        <input type="password" placeholder="Your Confirm Password *" />
                                    </div>

                                </div>

                                <button className="btn red-btn" type='submit'  > Register</button>
                            </form>
                        </div>

                        <div class="video-title text-black">

                            <Link to="/login">Already have  an Account? <span></span></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;