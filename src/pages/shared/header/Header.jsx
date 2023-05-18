import React, { useContext } from "react";
import "./header.css";
import { FaBars, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { TbHorseToy } from "react-icons/Tb";
import { MdToys } from "react-icons/Md";
import { MdOutlineToys } from "react-icons/Md";
import { MdOutlineSmartToy } from "react-icons/Md";
import { MdSmartToy } from "react-icons/Md";
import { SiToyota } from "react-icons/Si";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-white">
      <div className="bg-yellow-500">
        <div className=" lg:w-1/4 mx-auto text-black">
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
            <Link to="/" className="mx-2 text-black font-semibold">
              Home
            </Link>
            <Link to="/blog" className="mx-2 text-black font-semibold">
              Blog
            </Link>
            <Link to="/alltoys" className="mx-2 text-black font-semibold">
              All Toys
            </Link>
            {user ? (
              <Link to="myToys" className="mx-2 text-black font-semibold">
                My toys
              </Link>
            ) : (
              ""
            )}
            {user ? (
              <Link to="/addtoys" className="mx-2 text-black font-semibold">
                Add A toy
              </Link>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            {user ? (
              <button onClick={handleLogout} className="btn">
                Log Out
              </button>
            ) : (
              <button className="btn">Log in</button>
            )}
          </Link>
          <div className="">
            {user ? (
              <div className="avatar online">
                <div className="w-12 rounded-full ms-5">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : (
              <div className="avatar offline">
                <div className="w-12 rounded-full ms-5">
                  <img src="/public/img/noyUser.png" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-yellow-500">
        <div className=" lg:w-1/4 mx-auto text-black">
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
