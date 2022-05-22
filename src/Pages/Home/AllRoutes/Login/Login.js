import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../SHAREit/Firebase/firebase.init";

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => console.log(data);
  return (
        <div class="hero  min-h-screen ">
          <div class="hero-content flex-col  w-96">
            <div class="text-center ">
              <h1 class="text-4xl font-bold text-secondary">Login now!</h1>
            
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    placeholder="email"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    {...register("Password")}
                    placeholder="password"
                    class="input input-bordered"
                    required
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover"> Forgot password?</a>
                  </label>
                </div>
                <div class="form-control mt-6">
                 <input type="submit" class="btn btn-primary text-white v " value={'Login'} />
                </div>
                <p>
                l have a no account :
                <Link to={"/singup"} className="text-secondary font-bold">
                  Reagister Now
                </Link>{" "}
              </p>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary text-white"
              >
                Sing In Google
              </button>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Login;
