import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabuler.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const Tabular = () => {
  const [pubgToys, setPubgToys] = useState([]);

  const [ben10, setBen10] = useState([]);
  const [godOfWar, setGodOfWar] = useState([]);
  const [cod, setCod] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        const pubgToys = data.filter(
          (toy) => toy.category.toLowerCase() === "pubg"
        );
        const ben10 = data.filter(
          (toy) => toy.category.toLowerCase() === "ben 10"
        );
        const godOfWar = data.filter(
          (toy) => toy.category.toLowerCase() === "god of war"
        );
        const cod = data.filter(
          (toy) => toy.category.toLowerCase() === "call of duty"
        );
        setPubgToys(pubgToys);
        setBen10(ben10);
        setGodOfWar(godOfWar);
        setCod(cod);
      });
  }, []);

  const handleDetails = () => {
    alert("no user found");
  };

  return (
    <section className="bg-slate-900 py-12">
      <div className="xl:container mx-auto">
        <div className="my-5" data-aos="zoom-in">
          <h1 className="text-5xl font-semibold text-yellow-500 text-center my-12 text-center">
            Shop Your Product from Categoty
          </h1>
        </div>
        <div className="lg:w-1/2 mx-auto">
          <Tabs>
            <TabList>
              <Tab>Pubg</Tab>
              <Tab>Ben10</Tab>
              <Tab>God of War</Tab>
              <Tab>Call Of Duty</Tab>
            </TabList>

            <TabPanel className="flex flex-wrap justify-between tab_panell">
              {pubgToys.map((toy, index) => (
                <div key={index} className="tab_box">
                  <div className="border p-5">
                    <img src={toy.image} className="h-48 mx-auto" alt="" />
                    <h3 className="text-yellow-500 py-3">{toy.toyName}</h3>
                    <div className="flex justify-between">
                      <p className="text-white">Price: ${toy.price}</p>
                      <p className="text-white">Rating: {toy.rating}</p>
                    </div>
                    {user ? (
                      <Link to={`/singletoys/${toy?._id}`}>
                        <button className="btn my-3 bg-yellow-500 text-white">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={handleDetails}
                        className="btn my-3 bg-yellow-500 text-white"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </TabPanel>

            <TabPanel className="flex flex-wrap justify-between">
              {ben10.map((toy, index) => (
                <div key={index} className="tab_box">
                  <div className="border p-5">
                    <img src={toy.image} className="h-48" alt="" />
                    <h3 className="text-yellow-500 py-3">{toy.toyName}</h3>
                    <div className="flex justify-between">
                      <p className="text-white">Price: ${toy.price}</p>
                      <p className="text-white">Rating: {toy.rating}</p>
                    </div>
                    {user ? (
                      <Link to={`/singletoys/${toy?._id}`}>
                        <button className="btn my-3 bg-yellow-500 text-white">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={handleDetails}
                        className="btn my-3 bg-yellow-500 text-white"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel className="flex flex-wrap justify-between">
              {godOfWar.map((toy, index) => (
                <div key={index} className="tab_box">
                  <div className="border p-5">
                    <img src={toy.image} className="h-48" alt="" />
                    <h3 className="text-yellow-500 py-3">{toy.toyName}</h3>
                    <div className="flex justify-between">
                      <p className="text-white">Price: ${toy.price}</p>
                      <p className="text-white">Rating: {toy.rating}</p>
                    </div>
                    {user ? (
                      <Link to={`/singletoys/${toy?._id}`}>
                        <button className="btn my-3 bg-yellow-500 text-white">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={handleDetails}
                        className="btn my-3 bg-yellow-500 text-white"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel className="flex flex-wrap justify-between">
              {cod.map((toy, index) => (
                <div key={index} className="tab_box">
                  <div className="border p-5">
                    <img src={toy.image} className="h-48" alt="" />
                    <h3 className="text-yellow-500 py-3">{toy.toyName}</h3>
                    <div className="flex justify-between">
                      <p className="text-white">Price: ${toy.price}</p>
                      <p className="text-white">Rating: {toy.rating}</p>
                    </div>
                    {user ? (
                      <Link to={`/singletoys/${toy?._id}`}>
                        <button className="btn my-3 bg-yellow-500 text-white">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={handleDetails}
                        className="btn my-3 bg-yellow-500 text-white"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Tabular;
