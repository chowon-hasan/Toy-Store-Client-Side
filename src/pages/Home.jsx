import React from "react";
import Banner from "./Home/Banner/Banner";
import Gallary from "./Home/gallary/Gallary";
import Safekid from "./Home/safekid/Safekid";
import Invest from "./Home/invest/Invest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Safekid></Safekid>
      <Invest></Invest>
    </div>
  );
};

export default Home;
