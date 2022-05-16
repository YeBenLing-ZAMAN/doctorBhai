import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div className={`card lg:card-side shadow-xl p-4 m-4 ${bgClass}`}>
                <figure>
                    <img src={img} className="pt-2 pl-2" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold text-white">{cardTitle}!</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
    );
};

export default InfoCard;