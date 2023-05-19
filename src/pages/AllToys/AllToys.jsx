import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);
  return (
    <section className="bg-white py-24">
      <div className="xl:container mx-auto">
        <h1 className="text-5xl font-semibold text-yellow-500 text-center ">
          All toys Collection
        </h1>
        <h1 className="text-black">Total toys: {allToys?.length}</h1>
        <div className="flex flex-wrap mx-4">
          {allToys.map((toys, i) => (
            <div key={toys?._id} className="lg:w-1/3 sm:w-full my-12">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-64 object-cover"
                    src={toys?.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Toy Name :
                    <span className="text-yellow-500">{toys?.toyName}</span>
                  </h2>
                  <div className="flex ">
                    <p>
                      Seller:
                      <span className="text-yellow-300">{toys?.seller}</span>
                    </p>
                    <p>
                      Category:
                      <span className="text-yellow-300">{toys?.category}</span>
                    </p>
                  </div>
                  <div className="flex ">
                    <p>
                      Price:
                      <span className="text-yellow-300">{toys?.price}</span>
                    </p>
                    <p>
                      Stock:
                      <span className="text-yellow-300">{toys?.quantity}</span>
                    </p>
                  </div>
                  <p>
                    {toys?.description.length > 80 ? (
                      <p>{toys?.description.substring(0, 80)}...</p>
                    ) : (
                      <p>{toys?.description}</p>
                    )}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllToys;
