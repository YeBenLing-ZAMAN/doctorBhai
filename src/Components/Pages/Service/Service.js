import React from 'react';
import ServiceCard from './ServiceCard';
import whitening from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import treatment from '../../../assets/images/treatment.png';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate()
    const appointmentPage=()=>{
        navigate('/appointment');
    }
    return (
        <div className='mt-28 mb-40'>
            <div className='text-center'>
                <h3 className='text-xl font-blod uppercase text-primary'>OUR SERVICE</h3>
                <h1 className='text-5xl'>Service We Provide</h1>
            </div>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-12'>
                <ServiceCard img={fluoride}></ServiceCard>
                <ServiceCard img={cavity}></ServiceCard>
                <ServiceCard img={whitening}></ServiceCard>
            </div>
            <div className="card lg:card-side bg-base-100 my-20 px-6 md:px-56">
                <figure><img className='max-w-full md:max-w-sm rounded-lg shadow-3xl' src={treatment} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms!</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <div className="card-actions justify-start mt-4">
                        <button onClick={appointmentPage} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;