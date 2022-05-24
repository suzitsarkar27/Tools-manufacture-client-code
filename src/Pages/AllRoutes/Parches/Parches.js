import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseUpData from "../../SHAREit/CoustomHoosk/UseUpData";

const Parches = () => {
  const { Id } = useParams({});
  const [service, setService] = UseUpData(Id);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="text-2xl text-secondary">Product Code : {Id}</h2>

      <div class="hero min-h-screen rounded bg-base-100 lg:shadow-2xl p-5">
        <div class="hero-content flex-col lg:flex-row">
          <img src={service.image} class="max-w-sm mr-10 rounded-lg shadow-2xl" />
          
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <form onSubmit={handleSubmit(onSubmit)} class="card-body ">
                <p>Discription :{service.discription}</p>
                <div class="form-control">
                  <input
                    {...register("name")}
                    name="email"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <input
                    {...register("email")}
                    placeholder="email"
                    name="email"
                    class="input input-bordered"
                    required
                  />
                </div>

                <div class="form-control">
                  <input
                    {...register("address")}
                    placeholder="Type Your Adress"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <input
                    {...register("number")}
                    placeholder="Type Your Phone Number"
                    class="input input-bordered"
                    required
                  />
                </div>
                <p>Available Quantity:</p>

                <div class="form-control">
                  <input
                    {...register("number")}
                    placeholder="minimum Oder 3/pic"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control mt-6">
                  <input
                    type="submit"
                    class="btn btn-primary text-white v "
                    value={"PLACE ODER"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Parches;
