import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointments = ({date}) => {
    // console.log('date:', date);
    const [services, setServices] = useState([]);
    const [treatment , setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='mt-14'>
          <h4 className='text-3xl font-bold text-secondary text-center py-10'> Available Appointment on {format(date, 'PP')}</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
              {
                  services.map(service=> <Services 
                    key={service._id} 
                    service={service}
                    setTreatment= {setTreatment}
                    ></Services>)
              }
              {treatment && <BookingModal 
              date={date}
              treatment={treatment}
              setTreatment={setTreatment}
              ></BookingModal>}
          </div>
        </div>
    );
};

export default AvailableAppointments;