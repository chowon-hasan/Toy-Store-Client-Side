import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
