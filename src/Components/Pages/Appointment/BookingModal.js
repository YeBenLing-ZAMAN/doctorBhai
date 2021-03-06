import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';



const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, slots, _id , price} = treatment;
    const formattedDate = format(date, 'PP');

    /* handle booking */
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name, slot);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(booking);

        fetch(' https://sheltered-earth-75473.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have a Appointment on, ${data.booking?.data} at ${data.booking?.slot}`)
                    console.log()
                }
                refetch();
                /* now for closed the modal */
                setTreatment(null);
            })

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl mb-5 text-center">Booking for : <span className='text-primary'>{name}</span> </h3>
                    {/* input form */}
                    <form onSubmit={handleBooking} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName || ' '} name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ' '} name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary bg-gradient-to-r from-primary to-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;