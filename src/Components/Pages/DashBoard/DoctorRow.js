import React from 'react';
import { toast } from 'react-toastify';



const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, email, specialty, img } = doctor;

    const handlDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted.`);
                refetch();
            }
        })
    }

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
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button  onClick={()=>handlDelete(email)} class="btn btn-error btn-xs">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;