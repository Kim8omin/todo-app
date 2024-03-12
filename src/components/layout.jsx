import React from "react";
import Header from "./header";
import Footer from "./footer";
import DetailHeader from "./header2";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const location = useLocation();

  console.log("useLocation:", location);

  return (
    <div>
      {location.pathname === "/" ? (
        <Header logoClick={handleLogoClick} />
      ) : (
        <DetailHeader logoClick={handleLogoClick} />
      )}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
