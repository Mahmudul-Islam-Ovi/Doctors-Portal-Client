import React from 'react';
import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chairBg from '../../../../assets/images/bg.png'

const AppointmentBanner = ({date,setDate}) => {
  
    return (
        <div style={{ background: `url(${chairBg})` }} className="hero min-h-screen mb-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className='lg:ml-20'>
               <img src={chair} className="max-w-sm rounded-lg shadow-3xl" alt='Dentist Chair' />
               </div>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                   
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;