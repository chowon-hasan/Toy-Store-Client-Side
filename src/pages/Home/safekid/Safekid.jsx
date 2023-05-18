import React from "react";
import "./safekid.css";
import {
  FaRocket,
  FaRegLightbulb,
  FaRecycle,
  FaMonument,
} from "react-icons/fa";

const Safekid = () => {
  return (
    <section className="safeKid_bg">
      <div className="xl:container flex mx-auto items-center">
        <div className="lg:w-1/2 sm:w-full"></div>
        <div className="lg:w-1/2 sm:w-full">
          <h1 className="text-5xl font-semibold text-white">
            Safe toys for children
          </h1>
          <ul className="mt-5">
            <li className="flex gap-5 items-center text-white text-2xl mt-5">
              <span>
                <FaRocket />
              </span>{" "}
              Beautiful & well-designed
            </li>

            <li className="flex gap-5 items-center text-white text-2xl mt-5">
              <span>
                <FaRegLightbulb />
              </span>{" "}
              High durable toys
            </li>

            <li className="flex gap-5 items-center text-white text-2xl mt-5">
              <span>
                <FaRecycle />
              </span>{" "}
              Recyclable materials
            </li>

            <li className="flex gap-5 items-center text-white text-2xl mt-5">
              <span>
                <FaMonument />
              </span>{" "}
              Recyclable materials
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Safekid;
