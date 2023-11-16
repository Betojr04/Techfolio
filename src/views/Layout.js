import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Home } from "./Home.js";
import { Footer } from "../components/Footer.js";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
