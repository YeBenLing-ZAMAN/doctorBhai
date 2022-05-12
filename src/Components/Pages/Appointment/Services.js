import React from 'react';

const Services = ({ service, setTreatment }) => {
    const { slots, name } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-center text-primary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} is avilable</p>
                <div className="card-actions justify-start">
                    <label
                        htmlFor="booking-modal"
                        className="btn modal-button btn-secondary bg-gradient-to-r from-primary to-secondary text-white uppercase"
                        disabled={!slots.length}
                        onClick={() => setTreatment(service)}>
                        Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Services;