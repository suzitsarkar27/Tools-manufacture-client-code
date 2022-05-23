import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SHAREit/Loading/Loading';
import Service from '../Service/Service';

const Services = () => {
    // const [service,setService]=useState([]);
    // console.log(service)
    const {data:service, isLoading, error,  refetch  } = useQuery('repoData', () =>
    fetch(`data.json`)
    .then(res => res.json()
    )
  )

  if (isLoading) {
    return <Loading></Loading>;
  }

    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                service?.map(ser=><Service servic={ser}
                     refetch={refetch}
                     key={ser.id}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;