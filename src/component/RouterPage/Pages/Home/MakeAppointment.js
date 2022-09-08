import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import appointment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ 
            background :`url(${appointment})`
        }} className='flex justify-center items-center mb-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold mb-2'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make Appointment Today</h2>
                <p className='text-white mt-5 mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos consequatur ad architecto similique facilis enim atque saepe consequuntur corrupti, aut error suscipit. Earum quod, assumenda similique facilis enim atque saepe consequuntur corrupti, aut error suscipit. Earum quod, assumenda vel in laudantium perferendis quasi amet recusandae repudiandae consequatur aut quidem obcaecati, id nihil.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;