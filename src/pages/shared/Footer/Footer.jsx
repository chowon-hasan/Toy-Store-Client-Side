import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="bg-yellow-500 py-1">
        <div className=" lg:w-1/4 mx-auto text-black"></div>
      </div>
      <div className="xl:container mx-auto">
        <footer className="footer p-10 bg-white text-black">
          <div>
            <img src="/public/img/logo.png" className="h-12" alt="" />
            <p>
              Toy Parlour LTD
              <br />
              Providing reliable toys since 1992
            </p>
            <div className=" flex mt-5">
              <Link>
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link>
                <FaTwitter className="mx-12 text-2xl" />
              </Link>
              <Link>
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
      <div className="bg-yellow-500 py-1">
        <div className=" lg:w-1/4 mx-auto text-black"></div>
      </div>
    </section>
  );
};

export default Footer;
