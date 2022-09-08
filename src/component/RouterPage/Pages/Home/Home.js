import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Details from './Details';
import MakeAppointment from './MakeAppointment';
import OurService from './OurService';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="px-12">
            <Banner></Banner>
            <Details></Details>
            <OurService></OurService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;