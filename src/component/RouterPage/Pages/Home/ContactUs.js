import React from 'react';
import backgroundImg from '../../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${backgroundImg})`
        }} className='text-center my-10 p-10'>
            <h4 className='text-xl text-primary'>Contact Us</h4>
            <h4 className='text-3xl text-white'>Stay connected with us</h4>
            <div className='my-10'>
            <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />
            <br />
            <input type="text" placeholder="Subject" className="input  mt-5 input-bordered input-md w-full max-w-xs" />
           <br />
           <textarea className="textarea input  mt-5 input-bordered input-md w-full max-w-xs" placeholder="Your Message"></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default ContactUs;