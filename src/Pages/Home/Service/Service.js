import React from "react";

const Service = ({ servic ,}) => {
    const {name,image,price,quintity}=servic;
    console.log(servic)
  return (
    <div class="card  max-w:lg bg-base-100 shadow-xl mt-10">
      <figure>
      <img className="h-24" src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {name} </h2>
        <p>Price:{price}</p>
        <p>Quintity:{quintity}</p>
        <button class="btn btn-primary text-white">Button</button>
      </div>
    </div>
  );
};

export default Service;
