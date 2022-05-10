import React from 'react';
import quoteIcon from '../../../assets/icons/quote.svg';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from './Review';
const Testimonials = () => {
    const reviews =[
        {
            id:1,
            name:"winson Herry",
            review:' ',
            location:"New York",
            img:people1

        },
        {
            id:2,
            name:"winson Herry",
            review:' ',
            location:"New York",
            img:people2

        },
        {
            id:3,
            name:"winson Herry",
            review:' ',
            location:"New York",
            img:people3

        },
    ]
    return (
        <section className='my-28 p-10'>
            <div className='flex justify-around items-center'>
                <div>
                    <div><h4 className='text-xl text-primary font-bold'>Testimonial</h4></div>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                    <div></div>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quoteIcon} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            </div>
        </section>
    );
};

export default Testimonials;