import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="px-11 py-6  font-serif border-b bg-slate-500 text-cyan-50">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            <Link to="/">Navbar</Link>
          </h1>
          <ul className="flex justify-between space-x-6 text-xl">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/About">About & Project</Link>
            </li>
            <li className="">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
