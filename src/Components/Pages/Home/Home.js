import React from 'react';
import Service from '../Service/Service';
import Bannar from './Bannar';
import Info from './Info';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
            <Info></Info>
            <Service></Service>
        </>
    );
};

export default Home;