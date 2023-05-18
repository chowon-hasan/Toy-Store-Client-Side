import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { TbHorseToy } from "react-icons/Tb";
import { MdToys } from "react-icons/Md";
import { MdOutlineToys } from "react-icons/Md";
import { MdOutlineSmartToy } from "react-icons/Md";
import { MdSmartToy } from "react-icons/Md";
import { SiToyota } from "react-icons/Si";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="bg-black py-1">
        <div className=" lg:w-1/4 mx-auto text-yellow-300">
          <Marquee>
            <p>
              Amazing discounts on sale! Don't miss out on our exclusive offers
              with unbeatable prices. Upgrade your shopping experience and save
              big with our limited-time discounts. Find incredible deals on a
              wide range of products and enjoy significant savings.
            </p>
          </Marquee>
        </div>
      </div>
      <div className="navbar lg:container mx-auto text-black py-5">
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
          <Link to="/">
            <img className="h-20" src="/public/img/logo.png" alt="" />
          </Link>
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
          <a className="btn bg-yellow-300 hover:bg-yellow-200 text-stone-950 border-0 px-10">
            Log In
          </a>
        </div>
      </div>
      <div className="bg-black py-1">
        <div className=" lg:w-1/4 mx-auto text-white">
          <Marquee direction="right">
            <TbHorseToy className="mx-5" />
            <MdToys className="mx-5" />
            <MdOutlineToys className="mx-5" />
            <MdOutlineSmartToy className="mx-5" />
            <MdSmartToy className="mx-5" />
            <SiToyota className="mx-5" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;
