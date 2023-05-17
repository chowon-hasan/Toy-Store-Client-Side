import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
// FaBars
const Header = () => {
  return (
    <div className="bg-cyan-500">
      <div className="navbar lg:container mx-auto text-neutral-50 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl">daisyUI</a>
        </div>

        {/* navbar for dextop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-yellow-300 hover:bg-yellow-200 text-stone-950 border-0">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
