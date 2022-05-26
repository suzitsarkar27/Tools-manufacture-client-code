import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
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
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content w-96 flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} class="card-body">
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

              <div class="form-control mt-6">
                <input class="btn btn-primary" type="submit" value={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
