import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppointments = ({data}) => {
    console.log('data:', data);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('appointmentOn.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='mt-14'>
          <h4 className='text-3xl font-bold text-secondary text-center py-10'> Available Appointment on {format(data, 'ppp')}</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
              {
                  services.map(service=> <Services key={service._id} service={service}></Services>)
              }
          </div>
        </div>
    );
};

export default AvailableAppointments;