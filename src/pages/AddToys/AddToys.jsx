import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    const form = event.target;
    form.reset();
    fetch("http://localhost:5000/addtoys", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="pt-12 pb-24 bg-white">
      <h1 className="text-5xl font-semibold text-yellow-500 text-center my-12">
        Add your Toy's Here
      </h1>
      <div className="xl:container mx-auto bg-white">
        <div className="lg:w-7/12 sm:w-full mx-auto text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="text-yellow-300 input input-bordered w-1/3 me-5 mt-5"
              placeholder="Toy Name"
              {...register("toyName", { required: true })}
            />
            <input
              className="text-yellow-300 input input-bordered w-1/3 mt-5"
              placeholder="Seller Name"
              {...register("seller", { required: true })}
            />
            <input
              className="text-yellow-300 input input-bordered w-1/3 me-5 mt-5"
              placeholder="Toy Picture"
              {...register("image", { required: true })}
            />
            <input
              className="text-yellow-300 input input-bordered w-1/3 mt-5"
              placeholder="$ Price"
              {...register("price", { required: true })}
            />
            <input
              className="text-yellow-300 input input-bordered w-1/3 me-5 mt-5"
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
            {/* <input
              className="text-yellow-300 input input-bordered w-1/3 mt-5"
              placeholder="Category"
              {...register("category", { required: true })}
            /> */}
            <select
              className="text-yellow-300 input input-bordered w-1/3 mt-5"
              {...register("category")}
            >
              <option value="pubg">Pubg</option>
              <option value="call of duty">Call of Duty</option>
              <option value="god of war">God of War</option>
              <option value="ben 10">Ben 10</option>
            </select>
            <input
              className="text-yellow-300 input input-bordered w-1/3 me-5 mt-5"
              placeholder="Available Quantity"
              {...register("quantity", { required: true })}
            />
            <input
              className="text-yellow-300 input input-bordered w-1/3  mt-5"
              defaultValue={user?.email}
              {...register("email", { required: true })}
            />
            <textarea
              className="text-yellow-300 input input-bordered w-9/12 mt-5 pt-2"
              placeholder="Description"
              {...register("description", { required: true })}
            />

            {errors.exampleRequired && <span>This field is required</span>}
            <div className="text-center mt-5">
              <input type="submit" className="btn btn-wide text-white" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddToys;
