import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user , refetch, index}) => {
    const { email ,role } = user;
    const makeAdmin =()=>{
        fetch(`https://sheltered-earth-75473.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an Admin');
            }
            return res.json()
        })
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                refetch();
                toast.success('Successfully Make a Admin');
            }
        })
    }

    return (
        <tr>
            <th>{index+1}</th>
            {
              role === "admin"  ?<td>{email}<sup className='text-red-500'>Admin</sup></td> :<td>{email}</td>
            }
            <td>{role !== "admin" && <button  onClick={makeAdmin} class="btn btn-xs"> Admin</button>}</td>
            <td><button class="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default UserRow;