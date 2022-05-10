import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate illum modi neque. Cupiditate, sequi.</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="rounded-full ring ring-primary ring-offset-base-100 w-16 mr-5">
                            <img className='' src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-l'>{review.name}</h4>
                        <p className=''>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;