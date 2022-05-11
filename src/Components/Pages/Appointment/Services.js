import React from 'react';

const Services = ({ service }) => {
    const { slots, name } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-center text-primary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} is avilable</p>
                <div class="card-actions justify-start">
                    <button disabled={!slots.length} class="btn btn-secondary text-white uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Services;