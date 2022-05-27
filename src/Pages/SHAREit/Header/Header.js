import React from "react";
import { Link, useLocation } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user)

  const {pathname}=useLocation();
  const handelSingOut = () => {
    signOut(auth);
  };

  const navbar = (
    <>
      <li  className="font-bold text-xl"> <Link to={"/home"}>Home</Link> </li>
      <li className="font-bold text-xl"> <Link to={"/dashbord"}>Dashbord</Link> </li>
      <li className="font-bold text-xl"><Link to={"/about"}>Portfolio</Link> </li>
      <li className="font-bold text-xl"> <Link to={"/blogs"}>Blogs</Link></li>
     
        {user ? (
         <span>
            <img className="inline h-14 rounded-full " src={user.photoURL} alt="" />
            <button
            onClick={() => handelSingOut()}
            className="btn btn-secondary text-white ml-3" > SingOut
           </button>
        </span>
          ):(
          <li> <Link to={"/login"}>Login</Link> </li>
      )}
    </>
  );
  return (
    <div className="position: sticky top-0 z-10 ">
      <div className="navbar bg-base-100  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>

        { pathname.includes('dashbord')&&( <label for="my-drawer-2" className="btn btn-square btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>)}
          <img className=" h-16" src="https://i.ibb.co/1rdQqzQ/387-3870161-power-tool-pro-logo-hd-png-download-removebg-preview-removebg-preview-1.png" alt="" /> 

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0"> {navbar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
