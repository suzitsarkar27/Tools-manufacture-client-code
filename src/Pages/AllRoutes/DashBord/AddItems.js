import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItems = () => {
    const { register,reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
      
    
      const proceed = toast("Your Data Is Post SuccessFull");
      if (proceed) {
        const url = `http://localhost:5000/data`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
          
      }
      reset();
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
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Type Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quintity"
                  placeholder="Type avilable quintity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("quintity")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">minimun</span>
                </label>
                <input
                  type="number"
                  name="minimun"
                  placeholder="Type minimun quintity"
                  className="input input-bordered w-full max-w-xs"
                  {...register("minimun")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Type Image url"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Discription</span>
                </label>
                  <textarea  {...register("discription")} 
                  class="textarea textarea-primary" 
                  placeholder="Type discription"></textarea>
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
