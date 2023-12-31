import React from "react";
import "./invest.css";

const Invest = () => {
  return (
    <section className="py-10 bg-black invest_bg">
      <div className="">
        <h1 className="text-5xl font-semibold text-yellow-500 text-center mx-auto my-8">
          It's never been easier <br /> to invest in your kid's toys
        </h1>
        <div className="xl:container flex mx-auto text-center items-center invest_parent">
          <div className="lg:w-6/12 md:w-2xl">
            <div className="bg-slate-900 p-8 absolute w-1/2 border-2 border-yellow-300 invest_cont">
              <h2 className="text-3xl text-white font-semibold text-start mb-4">
                Toys are all your baby need better toys for better growth
              </h2>
              <p className="text-start">
                Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna. lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 md:w-full">
            <img src="/img/invest-1.jpg" alt="" />
          </div>
        </div>

        <div className="xl:container flex mx-auto text-center items-center invest_parent">
          <div className="lg:w-6/12 md:w-full">
            <img className="float-right" src="/img/invest-2.jpg" alt="" />
          </div>
          <div className="lg:w-6/12 sm:w-full">
            <div className="bg-slate-900 p-8 absolute right-36 w-1/2 border-2 border-yellow-300 invest_cont">
              <h2 className="text-3xl text-white font-semibold text-start mb-4">
                Toys are all your baby need better toys for better growth
              </h2>
              <p className="text-start">
                Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna. lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:container flex mx-auto text-center items-center invest_parent">
          <div className="lg:w-6/12 sm:w-full">
            <div className="bg-slate-900 p-8 absolute w-1/2 border-2 border-yellow-300 invest_cont">
              <h2 className="text-3xl text-white font-semibold text-start mb-4">
                Toys are all your baby need better toys for better growth
              </h2>
              <p className="text-start">
                Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna. lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu
                tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus
                magna.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 sm:w-full">
            <img src="/img/invest-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
