import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./mytoys.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log("clicked", id);
    const proceed = confirm("are you want to sure?");
    if (proceed) {
      fetch(`http://localhost:5000/mytoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            const reamining = myToys.filter((toys) => toys._id !== id);
            setMyToys(reamining);
            toast("Your Deleted a Product Succesfully");
          }
        });
    }
  };

  return (
    <section>
      <div className="xl:container mx-auto">
        <div className="lg:w9/12 sm:w-full py-12">
          <h1 className="text-5xl font-semibold text-yellow-500 text-center mb-8">
            My toys Collection
          </h1>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="text-center text-yellow-500">Seller</th>
                  <th className="text-center text-yellow-500">Toy Name</th>
                  <th className="text-center text-yellow-500">Price</th>
                  <th className="text-center text-yellow-500">Category</th>
                  <th className="text-center text-yellow-500">
                    Available Quantity
                  </th>
                  <th className="text-center text-yellow-500">Edit</th>
                  <th className="text-center text-yellow-500">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {myToys.map((toys, i) => (
                  <tr key={i}>
                    <td className="bg-white text-black font-semibold text-center text-lg">
                      {toys?.seller}
                    </td>
                    <td className="bg-white text-black font-semibold text-center text-lg">
                      {toys?.toyName}
                    </td>
                    <td className="bg-white text-black font-semibold text-center text-lg">
                      $ {toys?.price}
                    </td>
                    <td className="bg-white text-black font-semibold text-center text-lg">
                      {toys?.category}
                    </td>
                    <td className="bg-white text-black font-semibold text-center text-lg">
                      {toys?.quantity}
                    </td>

                    <td className="bg-white text-yellow-500 text-center">
                      <Link to={`/updateToys/${toys?._id}`}>
                        <button className="btn">Edit</button>
                      </Link>
                    </td>

                    <td className="bg-white text-yellow-500 text-center">
                      <button
                        onClick={() => handleDelete(toys._id)}
                        className="btn btn-circle btn-outline"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <ToastContainer />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="text-center text-yellow-500">Seller</th>
                  <th className="text-center text-yellow-500">Toy Name</th>
                  <th className="text-center text-yellow-500">Price</th>
                  <th className="text-center text-yellow-500">Category</th>
                  <th className="text-center text-yellow-500">
                    Available Quantity
                  </th>
                  <th className="text-center text-yellow-500">Edit</th>
                  <th className="text-center text-yellow-500">Delete</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyToys;
