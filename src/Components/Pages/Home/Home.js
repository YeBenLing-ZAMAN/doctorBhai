import React from 'react';
import Service from '../Service/Service';
import ServiceAppointment from '../Service/ServiceAppointment';
import Bannar from './Bannar';
import ContactUs from './ContactUs';
import Info from './Info';
import Testimonials from './Testimonials';
import Footer from "../../Shared/Footer";

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
            <Info></Info>
            <Service></Service>
            <ServiceAppointment></ServiceAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default Home;