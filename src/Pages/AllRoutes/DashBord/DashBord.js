import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBord = () => {
  return (
    <div className="drawer drawer-mobile  shadow-xl mt-5 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        <h2 className="text-5xl text-center text-secondary font-bold">DashBoard</h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side static top-0 z-0">
        <label for="my-drawer-2" className="drawer-overlay "></label>
        <ul className=" menu p-4 overflow-y-auto w-80 bg-accent font-bold text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>  <Link to={'/dashbord'}>My Oders</Link> </li> 
          <li> <Link to={'/dashbord/profile'}>My Profile</Link></li>
          <li> <Link to={'/dashbord/review'}>My Review</Link></li>
          <li> <Link to={'/dashbord/additems'}>AddItmes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBord;
