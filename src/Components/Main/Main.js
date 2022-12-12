import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default Main;
