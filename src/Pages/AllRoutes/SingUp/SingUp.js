import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../SHAREit/Firebase/firebase.init";
import Loading from "../../SHAREit/Loading/Loading";

const SingUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  let errorElement;

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

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    await createUserWithEmailAndPassword(email, password, repassword);
    navigate("/home");
    console.log(email, password, repassword);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="hero-content flex-col  w-96">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSubmit} className="card-body">
          <h1 className="text-2xl text-center font-bold text-secondary">Reagister Now !</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                placeholder="Email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Re-Password</span>
              </label>
              <input
                type="password"
                ref={repasswordRef}
                placeholder="Re-Password"
                className="input input-bordered"
                required
              />
            </div>
            {errorElement}
            <div className="form-control mt-6">
              <input
                type="submit"
                value={"Login"}
                className="btn btn-primary text-white"
              />
            </div>

            <p>
              {" "}
              Allready have accound :{" "}
              <Link to={"/login"} className="text-secondary font-bold">
                {" "}
                Login Now{" "}
              </Link>{" "}
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
