import React from "react";
import "./gallary.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallary = () => {
  const image = [
    "/public/img/pubg.jpg",
    "/public/img/pubg-2.jpg",
    "/public/img/pubg-3.jpg",
    "/public/img/ben.jpg",
    "/public/img/ben-2.jpg",
    "/public/img/ben-3.jpg",
    "/public/img/cod.jpg",
    "/public/img/cod-2.jpg",
    "/public/img/cod-3.jpg",
    "/public/img/gow.jpg",
    "/public/img/gow-2.jpg",
    "/public/img/gow-3.jpg",
  ];

  return (
    <section className="py-8 bg-black gallary_bg">
      <div className="xl:container flex mx-auto">
        <div className="lg:w-6/12 sm:w-full mx-auto">
          <h1 className="text-5xl font-semibold text-yellow-500 text-center my-12">
            Hot Collections{" "}
          </h1>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {image.map((image, i) => {
                return (
                  <img
                    className="border-y-4 border-yellow-500"
                    key={i}
                    src={image}
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
