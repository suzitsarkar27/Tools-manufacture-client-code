import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ servic ,}) => {
    const {_id,name,image,price,quintity,minimun}=servic;
    const navigate = useNavigate();

    const navigetToServiceDatalic = (id) => {
      navigate(`/service/${id}`);
    };
  return (
    <div className="card  max-w:lg bg-base-100 shadow-xl mt-10">
      <figure>
      <img className="h-24" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>Price:{price}</p>
        <p>Quintity:{quintity}</p>
        <p>Minimun QUINTITY:{minimun}</p>
        <button onClick={()=>navigetToServiceDatalic(_id)} className="btn btn-primary text-white">Button</button>
      </div>
    </div>
  );
};

export default Service;
