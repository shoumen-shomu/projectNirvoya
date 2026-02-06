import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FooterTop from "./FooterTop";

const RootLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterTop/>
      <Footer />
    </>
  );
};

export default RootLayouts;
