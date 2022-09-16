import { format } from 'date-fns';
import React, {useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState([]);

    const formateDate = format(date, 'PP');

    const { data : services ,isLoading , refetch} = useQuery(['available',formateDate], () =>
        fetch(`https://doctors-server-portal.herokuapp.com/available?date=${formateDate}`)
            .then(res => res.json()))
            if(isLoading) {
                return <Loading></Loading>
            }
  
    return (
        <div>
            <h4 className='text-xl text-secondary text-center mb-20'>Available Appointments on  {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch ={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;