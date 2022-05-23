import React from "react";

const Rewiew = () => {
  return (
    <div className="mt-10">
        <h2 className="text-center text-2xl text-secondary font-bold">COSTOMAR REWVIES</h2>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewiew;
