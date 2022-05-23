import React from "react";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import RequreAuth from "../RequreAuth/RequreAuth";

const Header = () => {

   
        const [user] = useAuthState(auth);
        const handelSingOut = () => {
          signOut(auth);
        };

    const navbar = (
        <>
          
            <li> <Link to={"/home"}>Home</Link> </li>
            <li> <Link to={"/parches"}>Parches</Link> </li>
            <li> <Link to={"/dashbord"}>Dashbord</Link> </li>
            <li> <Link to={"/My Odres"}>My Oders</Link> </li>
            <li> <Link to={"/about"}>About</Link> </li>
            <li> <Link to={"/blogs"}>Blogs</Link> </li>
          {user ? (  <button onClick={() => handelSingOut()} 
           className="btn btn-secondary text-white ml-3"> SingOut </button> ) : (
            <li> <Link to={"/login"}>Login</Link> </li> )}
        </>)
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
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0"> {navbar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
