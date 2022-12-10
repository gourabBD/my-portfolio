import React from "react";
import { Outlet } from "react-router-dom";
import ContactMe from "../components/ContactMe/ContactMe";
import Projects from "../components/Projects/Projects";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Projects></Projects>

      <div className="flex justify-center">
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
