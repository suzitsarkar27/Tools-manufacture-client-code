import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBord = () => {
  return (
    <div class="drawer drawer-mobile bg-accent">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl text-secondary font-bold">Dashbord Componont</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li className="mb-3">  <Link to={'/dashbord'}>My Oders</Link> </li> 
          <li> <Link to={'/dashbord/profile'}>My Profile</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default DashBord;
