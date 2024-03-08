import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <Header logoClick={handleLogoClick} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
