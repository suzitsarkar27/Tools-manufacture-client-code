import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBord = () => {
  return (
    <div class="drawer drawer-mobile  shadow-xl mt-5 ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col  ">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side static top-0 z-0">
        <label for="my-drawer-2" class="drawer-overlay "></label>
        <ul class=" menu p-4 overflow-y-auto w-80 bg-accent font-bold text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>  <Link to={'/dashbord'}>My Oders</Link> </li> 
          <li> <Link to={'/dashbord/profile'}>My Profile</Link></li>
          <li> <Link to={'/dashbord/review'}>My Review</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default DashBord;
