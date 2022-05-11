import React from 'react';

const Services = ({ service, setTreatment }) => {
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
                    <label
                        for="booking-modal"
                        class="btn modal-button btn-secondary text-white uppercase"
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