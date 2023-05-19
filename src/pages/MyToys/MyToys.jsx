import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./mytoys.css";
import { useForm } from "react-hook-form";

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
            alert("deleted");
            const reamining = myToys.filter((toys) => toys._id !== id);
            setMyToys(reamining);
          }
        });
    }
  };

  return (
    <section>
      <div className="xl:container mx-auto">
        <div className="lg:w9/12 sm:w-full py-12">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Available Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myToys.map((toys, i) => (
                  <tr key={i}>
                    <td>{toys?.seller}</td>
                    <td>{toys?.toyName}</td>
                    <td>$ {toys?.price}</td>
                    <td>{toys?.category}</td>
                    <td>{toys?.quantity}</td>

                    <td>
                      {/* The button to open modal */}
                      <label htmlFor={`my-modal-${i}`} className="btn">
                        Edit
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id={`my-modal-${i}`}
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Category: {toys.toyName}
                          </h3>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input
                              {...register("name", { required: true })}
                              name="name"
                            />
                            <input
                              {...register("email", { required: true })}
                              name="email"
                            />
                            <input
                              {...register("maka", { required: true })}
                              name="maka"
                            />

                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}

                            <input type="submit" className="btn" />
                          </form>

                          <div className="modal-action">
                            <label htmlFor={`my-modal-${i}`} className="btn">
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Available Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
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
