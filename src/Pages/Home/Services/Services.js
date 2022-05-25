import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SHAREit/Loading/Loading';
import Service from '../Service/Service';

const Services = () => {
    
    const [service,setService]=useState([]);
    const services=service.slice(0,6);

  useEffect(()=>{
      fetch(`http://localhost:5000/data`)
      .then(res=>res.json())
      .then(data=>setService(data))
  },[])
    
//     const {data:service, isLoading, error,  refetch  } = useQuery('repoData', () =>
//     fetch(`http://localhost:5000/data`)
//     .then(res => res.json()
//     )
//   )
  


//   if (isLoading) {
//     return <Loading></Loading>;
//   }


//   if (error) return 'An error has occurred: ' + error.message
 

    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {  
             services?.map(servic=><Service servic={servic}
                    //  refetch={refetch}
                     key={servic._id}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;