import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({data}) => {
    console.log('data:', data);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
          <h4 className='text-xl text-secondary text-center'> Available Appointment on {format(data, 'ppp')}</h4>
        </div>
    );
};

export default AvailableAppointments;