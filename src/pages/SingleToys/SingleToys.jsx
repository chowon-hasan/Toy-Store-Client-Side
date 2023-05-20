import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

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
    <section className="bg-white py-24">
      <div className="xl:container mx-auto bg-white">
        <div className="lg:w-1/2 sm:w-full mx-auto border p-5">
          <h1 className="text-black">
            Toy Name :{" "}
            <span className="text-yellow-500 text-2xl">{toyName}</span>
          </h1>
          <div className="flex justify-center">
            <img className="h-96" src={image} alt="" />
          </div>
          <div className="flex justify-between">
            <h1 className="text-black">
              Price : $<span className="text-yellow-500">{price}</span>
            </h1>
            <div className="text-yellow-500 flex ">
              <h1 className="mr-5 text-black">Rating</h1>
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStarHalf />}
                readonly
              />
            </div>
            <h1 className="text-black">
              Quantity : <span className="text-yellow-500">{quantity}</span>
            </h1>
          </div>
          <div className="flex justify-between my-5">
            <h1 className="text-black">
              Seller Email : <span className="text-yellow-500">{email}</span>
            </h1>
            <h1 className="text-black">
              Seller : <span className="text-yellow-500">{seller}</span>
            </h1>
          </div>
          <h1 className="text-black">
            Description : <p className="mt-2">{description}</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SingleToys;
