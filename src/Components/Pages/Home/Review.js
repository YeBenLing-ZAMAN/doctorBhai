import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate illum modi neque. Cupiditate, sequi.</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="rounded-full ring ring-primary ring-offset-base-100 w-16 mr-5">
                            <img className='' src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-l'>{review.name}</h4>
                        <p className=''>{review.location}</p>
                    </div>
                </div>
                <div className="rating">
                    <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input readOnly type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default Review;