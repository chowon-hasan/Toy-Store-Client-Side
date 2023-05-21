import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchtext, setsearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toysearch/${searchtext}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <section className="bg-white py-24">
      <div className="xl:container mx-auto">
        <h1 className="text-5xl font-semibold text-yellow-500 text-center ">
          All toys Collection
        </h1>
        <div className="flex justify-between my-12 items-center">
          <h1 className="text-black mb-5">Total toys: {allToys?.length}</h1>
          <div className="form-control">
            <div className="input-group">
              <input
                onChange={(e) => setsearchText(e.target.value)}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-4">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Seller</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>

              {/* row 1 */}

              {allToys.map((toy, i) => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={toy?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-white">
                      {toy?.toyName}
                      <br />
                      <span className="badge badge-ghost badge-sm bg-yellow-500 text-white py-3">
                        Category: {toy?.category}
                      </span>
                    </td>
                    <td className="text-white">{toy?.seller}</td>
                    <td className="text-yellow-500">$ {toy?.price}</td>
                    <td className="text-yellow-500">{toy?.quantity}</td>
                    <th>
                      <Link to={`/singletoys/${toy?._id}`}>
                        <button className="btn  btn-md bg-yellow-500 text-white">
                          details
                        </button>
                      </Link>
                    </th>
                  </tr>
                </tbody>
              ))}
              {/* foot */}
              <tfoot>
                <tr>
                  <th>Image</th>
                  <th>Toy Name</th>
                  <th>Seller</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Details</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
