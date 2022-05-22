import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service,setService]=useState([]);
    console.log(service)
    useEffect(()=>{
        fetch(`data.json`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                service.map(ser=><Service servic={ser} key={ser.id}></Service>)
            }
           </div>
        </div>
    );
};

export default Services;