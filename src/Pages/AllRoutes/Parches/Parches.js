import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseUpData from "../../SHAREit/CoustomHoosk/UseUpData";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../SHAREit/Firebase/firebase.init";
import { toast } from "react-toastify";

const Parches = () => {
  const { Id } = useParams({});
  const [service, setService] = UseUpData(Id);
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit=(event)=>{
    event.preventDefault();
    const order={
        email:user.email,
        userName:user.displayName,
        phone:event.target.phone.value,
        address:event.target.address.value,
        quantity:event.target.quintity.value,
        service
    }
   console.log(order)
   
   const proceed = toast("Your Data Is Post SuccessFull");
     if(proceed){
        
   fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(order),
  })
   .then(res=>res.json())
   .then(data=>{
     console.log(data)
     if(data.insertedId){
     <toast></toast>
     }
   })
     }
  }
  return (
    <div>
      <h2 className="text-2xl text-secondary">Product Code : {Id}</h2>

      <div class="hero min-h-screen rounded bg-base-100 lg:shadow-2xl p-5">
        <div class="hero-content flex-col lg:flex-row">
          <img src={service.image} class="max-w-sm mr-10 rounded-lg shadow-2xl" />
          
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
              <form onSubmit={handleSubmit} class="card-body ">
                <p>Discription :{service.discription}</p>
                <div class="form-control">
                  <input
                   type='text'
                    name='name'
                    value={user.displayName}
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <input
                  type='email'
                  name="email"
                  value={user.email}
                  class="input input-bordered"
                  required
                  />
                </div>

                <div class="form-control">
                  <input
                  type='text'
                    name='address'
                    placeholder="Type Your Address"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <input type="number"
                    name="phone"
                    placeholder="Type Your Phone Number"
                    class="input input-bordered"
                    required
                  />
                </div>
                <p>Available Quantity:{service.quintity}</p>

                <div class="form-control">
                  <input
                  type='number'
                    name="quintity"
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
