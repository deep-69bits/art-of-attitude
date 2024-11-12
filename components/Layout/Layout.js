import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = ({ children }) => {
  return (
    <div className="bg-darkBlue min-h-screen text-white">
      <ParallaxProvider>
        <Header/>
        {children}
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default Layout;
