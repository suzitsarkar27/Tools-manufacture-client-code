import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../SHAREit/Firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../SHAREit/Loading/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (gloading || loading || sending) {
    return <Loading></Loading>;
  }

  if (user || guser) {
    navigate((from, { replace: true }));
  }

  if (error ||gerror) {
    errorElement = <p>Error:{error?.message}</p>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if(guser){
    navigate('/home')
  }

  const onSubmit =async (data) =>{
   await signInWithEmailAndPassword(data)
    console.log(data)
    navigate('/home')
  } ;

  const resetPassword = async (e) => {
    const email = e.target.email.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
  };

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
                name="email"
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
                <p> Forget Password?<button
                    className="btn btn-link text-primary text-decoration-none"
                    onClick={resetPassword} > Reset Password </button>
                </p>
              </label>
              {errorElement}
            </div>
            <div class="form-control mt-6">
              <input
                type="submit"
                class="btn btn-primary text-white v "
                value={"Login"}
              />
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
