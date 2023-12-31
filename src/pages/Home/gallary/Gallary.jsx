import React from "react";
import "./gallary.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallary = () => {
  const image = [
    "/img/pubg.jpg",
    "/img/pubg-2.jpg",
    "/img/pubg-3.jpg",
    "/img/ben.jpg",
    "/img/ben-2.jpg",
    "/img/ben-3.jpg",
    "/img/cod.jpg",
    "/img/cod-2.jpg",
    "/img/cod-3.jpg",
    "/img/gow.jpg",
    "/img/gow-2.jpg",
    "/img/gow-3.jpg",
  ];

  return (
    <section className="py-8 bg-black gallary_bg">
      <div className="xl:container flex mx-auto">
        <div className="lg:w-6/12 sm:w-full mx-auto gallary_cont">
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
                    data-aos="zoom-in"
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
