import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Loading from '../../components/loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase/firebase.init';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setconPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating] = useUpdateProfile(auth);

    let customError;
    let customErrorTwo;
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(email, password);
    const handleRegister = async (e) => {

        e.preventDefault();

        if (password !== conpassword) {


            toast("Did not match password and Confirm PAssword!")
            return
        }


        try {
            await createUserWithEmailAndPassword(email, password)

            await updateProfile({ displayName })
                .then(() => {
                    navigate("/")

                })
        } catch (error) {
            console.log(error);
        }




    }


    if (error) {
        customError = error.message;
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
                                        <input type="text" required
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            placeholder="User Name *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" required
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your E-mail *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password" required
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Your Password *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password" required
                                            onChange={(e) => setconPassword(e.target.value)}
                                            placeholder="Your Confirm Password *" />
                                    </div>

                                </div>


                                <p className='text-danger'>{customErrorTwo}</p>

                                {
                                    customError && <p className='text-danger'>{customError}</p>
                                }
                                <button className="btn red-btn" type='submit' disabled={updating || loading && "true"} > Register{updating || loading && <Loading />}  </button>
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