import React from "react";
import Footer from "./footer";
import DetailHeader from "./header2";

const DetailLayout = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <DetailHeader logoClick={handleLogoClick} />
      {children}
      <Footer />
    </div>
  );
};

export default DetailLayout;
