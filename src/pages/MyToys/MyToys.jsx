import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
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

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [user]);
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
                {myToys.map((toys) => (
                  <tr>
                    <td>{toys?.seller}</td>
                    <td>{toys?.toyName}</td>
                    <td>$ {toys?.price}</td>
                    <td>{toys?.category}</td>
                    <td>{toys?.quantity}</td>
                    <td>
                      <label htmlFor="my-modal-5" className="btn">
                        Edit
                      </label>

                      <input
                        type="checkbox"
                        id="my-modal-5"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                          <h3 className="font-bold text-lg">
                            Congratulations random Internet user!
                          </h3>

                          {/* moadl form statrt from here */}
                          <div className="">
                            <form>
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 me-3 mt-5"
                                defaultValue={toys.toyName}
                                {...register("toyName", { required: true })}
                              />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 mt-5"
                                defaultValue={toys.seller}
                                {...register("seller", { required: true })}
                              />
                              <br />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 me-3 mt-5"
                                defaultValue={toys.image}
                                {...register("image", { required: true })}
                              />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 mt-5"
                                defaultValue={toys.price}
                                {...register("price", { required: true })}
                              />
                              <br />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 me-3 mt-5"
                                defaultValue={toys.rating}
                                {...register("rating", { required: true })}
                              />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 mt-5"
                                defaultValue={toys.category}
                                {...register("category", { required: true })}
                              />
                              <br />
                              <input
                                className="text-yellow-300 input input-bordered w-1/2 me-3 mt-5"
                                defaultValue={toys.quantity}
                                {...register("quantity", { required: true })}
                              />

                              <input
                                className="text-yellow-300 input input-bordered w-1/2  mt-5"
                                defaultValue={user?.email}
                                {...register("email", { required: true })}
                              />
                              <br />
                              <textarea
                                className="text-yellow-300 input input-bordered w-full mt-5 pt-2"
                                defaultValue={toys.description}
                                {...register("description", { required: true })}
                              />

                              {errors.exampleRequired && (
                                <span>This field is required</span>
                              )}
                              <div className="text-center mt-5">
                                <input
                                  type="submit"
                                  className="btn btn-wide text-white"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <label htmlFor="my-modal-3" className="btn">
                        Delete
                      </label>

                      <input
                        type="checkbox"
                        id="my-modal-3"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="text-lg font-bold">
                            Congratulations random Internet user!
                          </h3>
                        </div>
                      </div>
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
