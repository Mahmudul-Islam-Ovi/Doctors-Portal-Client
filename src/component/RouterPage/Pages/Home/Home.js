import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Details from './Details';
import MakeAppointment from './MakeAppointment';
import OurService from './OurService';
import Testimonial from './Testimonial';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Details></Details>
            <OurService></OurService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;