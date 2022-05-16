import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (true) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accesstoken');
                        navigate('/');
                    } else if (res.status)
                        return res.json()
                })
                .then(data => setAppointment(data))
        }
    }, [user])
    return (
        <div>
            <h2 className='text-xl text-right px-5 py-2'>Your padding appointment remaining: {appointment?.length}</h2>
            <div class="overflow-x-auto p-3">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointment?.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;