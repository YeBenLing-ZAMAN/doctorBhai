import React from 'react';
import InfoCard from './InfoCard';
import clockIcon from '../../../assets/icons/clock.svg'
import markerIcon from '../../../assets/icons/marker.svg'
import phoneIcon from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3'>
            <InfoCard cardTitle="Opening Hours" bgClass="font-bold bg-gradient-to-r from-primary to-secondary" img={clockIcon}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-accent" img={markerIcon}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="font-bold bg-gradient-to-r from-primary to-secondary" img={phoneIcon}></InfoCard>
        </div>
    );
};

export default Info;