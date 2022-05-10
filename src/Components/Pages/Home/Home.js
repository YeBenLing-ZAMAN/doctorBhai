import React from 'react';
import Service from '../Service/Service';
import ServiceAppointment from '../Service/ServiceAppointment';
import Bannar from './Bannar';
import Info from './Info';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
            <Info></Info>
            <Service></Service>
            <ServiceAppointment></ServiceAppointment>
        </>
    );
};

export default Home;