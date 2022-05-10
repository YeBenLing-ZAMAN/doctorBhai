import React from 'react';
import bannarImage from '../../../assets/images/chair.png';
import bannarBGI from '../../../assets/images/bg.png';

const Bannar = () => {
    return (
        <div className="hero min-h-screen bg-base-100 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bannarBGI})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannarImage} className="max-w-lg rounded-lg shadow-3xl" alt=' Doctor treatment chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;