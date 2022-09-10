import React from 'react';

const OurServiceCard = ({img,cardTitle}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className=""><img  style={{ height:"50px"}} src={img}alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolorem.</p>
                
            </div>
        </div>
    );
};

export default OurServiceCard;