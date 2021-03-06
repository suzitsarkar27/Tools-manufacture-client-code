import React from "react";
import { useForm } from "react-hook-form";
import MyOders from "../Ordersm/Ordersms";

const MyProfile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(
      data.name,
      data.email,
      data.address,
      data.education,
      data.phone
    );
  };

  return (
    <div className="hero min-h-screen bg-base-200">
     
      <div className="hero-content w-96 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Adress"
                className="input input-bordered w-full max-w-xs"
                {...register("address")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                placeholder="Your Education"
                className="input input-bordered w-full max-w-xs"
                {...register("education")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Your Phone Number"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
