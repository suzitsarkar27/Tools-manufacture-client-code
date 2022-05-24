import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ servic ,}) => {
    const {_id,name,image,price,quintity}=servic;
    const navigate = useNavigate();

    const navigetToServiceDatalic = (id) => {
      navigate(`/service/${id}`);
    };
  return (
    <div class="card  max-w:lg bg-base-100 shadow-xl mt-10">
      <figure>
      <img className="h-24" src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {name} </h2>
        <p>Price:{price}</p>
        <p>Quintity:{quintity}</p>
        <button onClick={()=>navigetToServiceDatalic(_id)} class="btn btn-primary text-white">Button</button>
      </div>
    </div>
  );
};

export default Service;
