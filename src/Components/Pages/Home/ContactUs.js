import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import contactBGI from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{
            'backgroundRepeat': "no-repeat",
            'background': `url(${contactBGI})`,
            'backgroundAttachment': 'fiexd'
        }} className='flex flex-col justify-center items-center mb-20 py-20 px-3'>
            <div className=' mb-14'>
                <h3 className='text-xl font-blod uppercase text-primary text-center'>Contact Us</h3>
                <p className='text-5xl text-center'>Stay connected with us</p>
            </div>
            <div className='flex flex-col w-full lg:w-1/2'>
                <input type="text" placeholder="Email Address" class="my-2 input input-bordered input-success w-full max-w-full" />
                <input type="text" placeholder="Subject" class="my-2 input input-bordered input-success w-full max-w-full" />
                <textarea class="my-2 textarea textarea-success" placeholder="Your Message"></textarea>
                <div className='w-full'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;