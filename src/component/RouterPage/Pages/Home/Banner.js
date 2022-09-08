import React from 'react';
import chair from '../../../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt="chair" src={chair} className="max-w-sm rounded-lg shadow-3xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus ea illum perspiciatis qui quas quaerat alias officiis iure nobis?</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;