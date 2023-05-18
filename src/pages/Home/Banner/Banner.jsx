import React from "react";
import "./banner.css";
import Lottie from "lottie-react";
import banner from "../../../../public/img/banner.json";
import scrollDown from "../../../../public/img/scroll.json";

const Banner = () => {
  return (
    <section className="banner_bg mx-auto">
      <div className="xl:container flex mx-auto items-center gap-4">
        <div className="lg:w-1/2 sm:w-full">
          <Lottie animationData={banner} loop={true}></Lottie>
        </div>
        <div className="lg:w-1/2 sm:w-full">
          <h1 className="text-5xl font-semibold text-yellow-300">
            Welcome To Toy Game Parlour
          </h1>
          <p className="py-3 text-white">
            Welcome to Video Parlour, your ultimate destination for all things
            video entertainment! At Video Parlour, we offer an extensive
            collection of movies, TV shows, documentaries, and more, catering to
            every taste and genre. Whether you're a fan of action-packed
            blockbusters, heartwarming dramas, thrilling suspense, or
            side-splitting comedies, we've got you covered
          </p>
          <div className="h-0 mt-5">
            <Lottie
              className="h-28"
              animationData={scrollDown}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
