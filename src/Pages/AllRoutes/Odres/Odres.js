import React from 'react';
import { useParams } from 'react-router-dom';

const Odres = () => {
    const {Id}=useParams({});
    return (
        <div>
            <h3>THSI IS ODERS COMPONERT{Id}</h3>
        </div>
    );
};

export default Odres;