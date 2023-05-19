import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToys = () => {
  const singleToys = useLoaderData();
  const {
    _id,
    toyName,
    price,
    rating,
    seller,
    image,
    category,
    quantity,
    email,
    description,
  } = singleToys;
  console.log(singleToys);
  return (
    <section>
      <div className="xl:container mx-auto">
        <div className="lg:w-1/2 sm:w-full mx-auto">
          <h1>{toyName}</h1>
        </div>
      </div>
    </section>
  );
};

export default SingleToys;
