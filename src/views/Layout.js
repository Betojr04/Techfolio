import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Home } from "./Home.js";
import { Footer } from "../components/Footer.js";
import { Resume } from "./Resume.js";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
