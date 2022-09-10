import React from 'react';
import DetailsCard from './DetailsCard';
import clock from '../../../../assets/icons/clock.svg';
import map from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';

const Details = () => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10" >
            <DetailsCard bg="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardBody="10 AM -11 PM" iconImg={clock} ></DetailsCard>
            <DetailsCard bg="bg-accent" cardTitle="Visit our location" cardBody="Savar ,Dhaka" iconImg={map} ></DetailsCard>
            <DetailsCard bg="bg-secondary" cardTitle="Contact us now" cardBody="+8801931117186" iconImg={phone} ></DetailsCard>
        </div>
    );
};

export default Details;