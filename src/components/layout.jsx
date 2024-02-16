import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <Header logoClick={handleLogoClick} />
      {children}
    </div>
  );
};

export default Layout;
