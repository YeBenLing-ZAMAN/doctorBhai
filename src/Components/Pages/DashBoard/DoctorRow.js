import React from 'react';
import { toast } from 'react-toastify';



const DoctorRow = ({ doctor, index, refetch , setDoctorModalShowing}) => {
    const { name, email, specialty, img } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-10 rounded-full ring ring-green-300 ring-offset-red-300 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>Dr. {name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={()=>setDoctorModalShowing(doctor)} for="deleteConfirmedModel" class="btn  btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;