import React from 'react';
import ananda from '../../img/ananda.jpg';

const Portfoilo = () => {
    return (
        <div className="single-about-wrap">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-img">
                        <img src={ananda} className='img-fluid' alt="img" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title about-title mb-25">
                            <h2>Hi, I'm Ananda Gharami</h2>

                            <h6>A freelancer,MERN developer</h6>
                        </div>
                        <p>Now I'm working in a company called Cogenhubs Private Limited.I have more than 1 years of experiance.I am hard working person.I make a schdule of practice and learning new day by day .My short term goal is to get a job as web developer and long term goal is to be a superviser in a comapny


                        </p>
                        <a href="#" className="btn">contact me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfoilo;