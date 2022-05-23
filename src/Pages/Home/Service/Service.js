import React from "react";

const Service = ({ servic ,refetch}) => {
    const {name,image,price,quintity}=servic;
  return (
    <div class="card max-w:lg bg-base-100 shadow-xl">
      <figure>
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {name} </h2>
        <p>Price:{price}</p>
        <p>Quintity:{quintity}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <button class="btn btn-primary text-white">Button</button>
      </div>
    </div>
  );
};

export default Service;
