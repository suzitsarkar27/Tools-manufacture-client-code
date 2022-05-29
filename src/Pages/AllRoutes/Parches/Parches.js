import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseUpData from "../../SHAREit/CoustomHoosk/UseUpData";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../SHAREit/Firebase/firebase.init";
import { toast } from "react-toastify";
import MyOders from "../Ordersm/Ordersms";

const Parches = () => {
  const { Id } = useParams({});
  const [service, setService] = UseUpData(Id);
  console.log(Id,service)
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const { quintity ,minimun} = service;

  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const order={
        data,
        name:data.name,
        price:data.price,
        service
    }
   console.log(order)

   const proceed = toast("Your Data Is Post SuccessFull");
    if(proceed){
        
   fetch("https://sleepy-eyrie-85757.herokuapp.com/order", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(order),
  })
   .then(res=>res.json())
   .then(data=>{
     console.log(data)
     reset();
     if(data.insertedId){
     <toast></toast>
     }
   })
     }
  }

  if(quintity > service.quintity){
    toast(`Plasse Order more than${service.quintity}`);
  }

  if(quintity<service.quintity){
    toast(`Plasse Order more than${service.minimun}`);
  }

  return (
    <div>
      <h2 className="text-2xl text-secondary">Product Code : {Id}</h2>

      <div className="hero min-h-screen rounded bg-base-100 lg:shadow-2xl p-5">
        <div className="hero-content flex-col lg:flex-row">
         
         <img src={service.image} className="max-w-sm mr-10 rounded-lg shadow-2xl" />
         <div className="pr-5">
           <p><span className="font-bold">Name</span>:{service.name}</p>
          <p className="font-bold">Price:{service.price}</p>
          <p ><span className="font-bold">Discription</span> :{service.discription}</p>
         </div>
                
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                {/* <p>Discription :{service.discription}</p> */}
                
                <p className="font-bold">Minimum Order Quantity:{service.minimun}</p>
                <p className="font-bold">Available Quantity:{service.quintity}</p>
                <div className="form-control">
                  <input
                   type='text'
                    name='name'
                    value={user.displayName}
                    className="input input-bordered"
                    {...register("name")}
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                  type='email'
                  name="email"
                  value={user.email}
                  {...register("email")}
                  className="input input-bordered"
                  required
                  />
                </div>

                <div className="form-control">
                  <input
                    type='text'
                    name='address'
                    {...register("address")}
                    placeholder="Type Your Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input type="number"
                    name="phone"
                    {...register("phone")}
                    placeholder="Type Your Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <p> Quantity:</p>

                <div className="form-control">
                  <input
                  type='number'
                    name="minimumquintity"
                    // value={minimun}
                    {...register("minimumquintity")}
                    placeholder="minimum Oder 3/pic"
                    className="input input-bordered"
                    required
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary text-white "
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
