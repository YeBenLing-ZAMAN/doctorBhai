import React, { useState } from 'react';
import Footer from '../../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [data, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBannar data={data} setDate={setDate}/>
            <AvailableAppointments data={data}/>
            <Footer/>
        </div>
    );
};

export default Appointment;