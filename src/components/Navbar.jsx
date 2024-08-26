import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets?.logo} alt="logo" className="w-36" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/">
          <p className="uppercase">Home</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden transition-all" />
        </NavLink>
        <NavLink to="/collection">
          <p className="uppercase">Collection</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden transition-all" />
        </NavLink>
        <NavLink to="/aboout">
          <p className="uppercase">About</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden transition-all" />
        </NavLink>
        <NavLink to="/contact">
          <p className="uppercase">Contact</p>
          <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden transition-all" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
      <img src={assets?.search_icon} alt="logo" className="w-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
