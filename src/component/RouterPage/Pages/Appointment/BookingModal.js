import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment ,refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
      
        const formateDate = format(date,'PP');

        const booking = {
            treatmentId : _id,
            treatment: name,
            date:formateDate,
            slot,
            patientEmail :user.email,
            patientName :user.displayName,
            phone :event.target.phone.value
        }

        fetch('https://doctors-server-portal.herokuapp.com/booking',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
        .then(data =>{
           
            if(data.success){
                toast(`Appointment is set ,${formateDate} at ${slot} `)
            }
            else{
                toast.error(`You already have a appointment on ,${data.booking?.date} at ${data.booking?.slot} `)
            }

            refetch();
         // to close the modal
        setTreatment(null);
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;