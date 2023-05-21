import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../Hooks/Hooks";

const UpdateToys = () => {
  useTitle("Update Toys");
  const singleToys = useLoaderData();
  const { _id, toyName, price, quantity, description } = singleToys;
  console.log(singleToys);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToys = { price, quantity, description };
    console.log(updateToys);
    fetch(`http://localhost:5000/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.modifiedCount);
        if (data.modifiedCount > 0) {
          toast("You Updated product Information Succesfullty");
        }
      });
  };

  return (
    <section className="bg-white py-12">
      <div className="bg-white xl:container mx-auto">
        <div className="text-center py-5">
          <h1 className="text-black">
            Upadte your information for this product
          </h1>
          <h1 className="text-yellow-500 text-3xl">{toyName}</h1>
        </div>
        <div className="lg:w-1/2 sm:w-full mx-auto border p-5">
          <form onSubmit={handleUpdate}>
            <div className="flex">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-500">
                    Update Price
                  </span>
                </label>
                <label className="input-group">
                  <span>Price</span>
                  <input
                    name="price"
                    type="number"
                    defaultValue={price}
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-500">
                    Update Quantity
                  </span>
                </label>
                <label className="input-group">
                  <span>Quantity</span>
                  <input
                    defaultValue={quantity}
                    name="quantity"
                    type="number"
                    className="input input-bordered"
                  />
                </label>
              </div>
            </div>
            <textarea
              className="lg:w-full my-8 p-5 bg-slate-900 text-white"
              name="description"
              id=""
              cols="30"
              rows="10"
              defaultValue={description}
            ></textarea>
            <div className="text-center">
              <input
                type="submit"
                value="Submit"
                className="text-center btn btn-wide text-white"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateToys;
