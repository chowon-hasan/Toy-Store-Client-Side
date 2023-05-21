import React from "react";
import Banner from "./Home/Banner/Banner";
import Gallary from "./Home/gallary/Gallary";
import Safekid from "./Home/safekid/Safekid";
import Invest from "./Home/invest/Invest";
import Tabular from "./Home/Tabular/Tabular";
import useTitle from "./Hooks/Hooks";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Tabular></Tabular>
      <Safekid></Safekid>
      <Invest></Invest>
    </div>
  );
};

export default Home;
