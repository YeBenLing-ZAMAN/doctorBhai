import React from 'react';
import doctorImage from "../../../assets/images/doctor.png";
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';
import { useNavigate } from 'react-router-dom';
const ServiceAppointment = () => {
    const navigate = useNavigate()
    const appointmentPage = () => {
        navigate('/appointment');
    }
    return (
        <section className='flex justify-center items-center my-20' style={{ background: `url(${appointment})` }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-180px]' src={doctorImage} alt="" />
            </div>
            <div className='flex-1 p-10 lg:p-2'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo optio voluptatem adipisci enim velit sapiente corporis, dolorum vero magnam porro sunt, laudantium iusto eos vitae omnis! Error aperiam delectus amet at ipsum fuga, in inventore quia quos quam nam modi.</p>
                <div onClick={appointmentPage} className='className="justify-start mt-5'>
                    <PrimaryButton>Get STARTED</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ServiceAppointment;