import React from 'react';
import OurServiceCard from './OurServiceCard';
import cavity from '../../../../assets/images/cavity.png';
import teeth from '../../../../assets/images/whitening.png';
import fluoride from '../../../../assets/images/fluoride.png';
import treatment from '../../../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const OurService = () => {
    return (
        <div className="mb-20">
            <div className="text-center my-20 text-xl font-bold">
                <h3 className='text-primary text-xl font-bold'>OUR SERVICE</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                <OurServiceCard cardTitle="Fluoride Treatment" img={teeth}></OurServiceCard>
                <OurServiceCard cardTitle="Cavity Filling" img={cavity}></OurServiceCard>
                <OurServiceCard cardTitle="Teeth Whitening" img={fluoride}></OurServiceCard>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='treatment' />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;