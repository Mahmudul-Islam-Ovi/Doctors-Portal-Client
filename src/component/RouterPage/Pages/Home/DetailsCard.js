import React from 'react';

const DetailsCard = ({ iconImg, cardTitle, bg, cardBody }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bg} p-3`}>
            <figure className='pl-5'><img src={iconImg} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title  text-center ">{cardTitle}</h2>
                <p >{cardBody}</p>

            </div>
        </div>
    );
};

export default DetailsCard;