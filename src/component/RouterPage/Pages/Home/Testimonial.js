import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1  from '../../../../assets/images/people1.png';
import people2  from '../../../../assets/images/people2.png';
import people3  from '../../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            id:1,
            name: 'Winson Herry',
            review : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img :people1,
            location :'California'
        },
        {
            id:2,
            name: 'Winson Herry',
            review : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img :people2,
            location :'California'
        },
        {
            id:3,
            name: 'Winson Herry',
            review : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img :people3,
            location :'California'
        }
        
    ]
    return (
        <section className="my-24 ">
            <div className='flex justify-between'>
                <div>
                   <h3 className="text-xl text-primary">Testimonial</h3>
                   <h2 className="text-3xl"> What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
           {
             reviews.map(review=><Review
             key={review.id}
             review={review}
             ></Review>)
           }
            </div>
        </section>
    );
};

export default Testimonial;