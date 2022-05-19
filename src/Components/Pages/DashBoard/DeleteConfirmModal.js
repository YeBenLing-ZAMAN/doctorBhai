import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({doctorModalShowing ,setDoctorModalShowing,refetch}) => {
    const {name, email} =doctorModalShowing;

    const handlDelete = () => {
        fetch(` https://sheltered-earth-75473.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted.`);
                    setDoctorModalShowing(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="deleteConfirmedModel" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl">Are you sure you want to delete <span className='text-red-500'>Dr. {name}</span></h3>
                    <p class="py-4">if your confirm then press delete button otherwise press cancel</p>
                    <div class="modal-action">
                        <label for="deleteConfirmedModel" class="btn btn-info btn-md">Cancel</label>
                        <button onClick={() => handlDelete()} class="btn btn-error btn-md">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;