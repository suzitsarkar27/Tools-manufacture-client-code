import { updateProfile } from "firebase/auth";
import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../SHAREit/CoustomHoosk/useToken.js";
import auth from "../../SHAREit/Firebase/firebase.init";
import Loading from "../../SHAREit/Loading/Loading";

const SingUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const [token] = useToken(user || guser);

  let errorElement;

  if (token) {
    navigate("/dashbord");
  }

  if (user || guser) {
    navigate("/home");
  }

  if (user) {
    console.log("user", user);
  }

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (error || gerror) {
    errorElement = <p>Error:{error?.message}</p>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="hero-content flex-col  w-96">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-2xl font-bold text-secondary">
            Sign Up
          </h2>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />

              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered "
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered "
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {errorElement}
            <input
              className="btn btn-primary w-full max-w-xs text-white"
              type="submit"
              value="Sign Up"
            />

            <p>
              Allready have accound :
              <Link to={"/login"} className="text-secondary font-bold">
                Login Now{" "}
              </Link>
            </p>


            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <input
                type="submit"
                onClick={() => signInWithGoogle()}
                value={"Sing In Google"}
                className="input input-bordered btn btn-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
