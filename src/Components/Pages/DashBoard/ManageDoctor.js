import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [doctorModalShowing, setDoctorModalShowing] = useState(false);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch(' https://sheltered-earth-75473.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-2xl text-right'>Manage Doctor : {doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDoctorModalShowing={setDoctorModalShowing}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                doctorModalShowing && <DeleteConfirmModal
                    doctorModalShowing={doctorModalShowing}
                    refetch={refetch}
                    setDoctorModalShowing={setDoctorModalShowing}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctor;