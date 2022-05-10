import React from 'react';

const ServiceCard = ({img}) => {
    return (
        <div class="card lg:max-w-lg glass shadow-lg">
            <figure>
                <img className='pt-10' style={{"higth":"115px"}} src={img} alt="car!" /></figure>
            <div class="card-body">
                <h2 class="card-title">Fluoride Treatment</h2>
                <p>How to park your car at your garage?</p>
            </div>
        </div>
    );
};

export default ServiceCard;