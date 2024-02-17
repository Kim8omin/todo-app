import React, { useRef } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import ToDoCRUD from "../components/ToDoCRUD";
import Footer from "../components/footer";

const Main = () => {
  const testRef = useRef();
  console.log(testRef.current);

  const onClickRef = (section) => {
    if (section === "banner") {
      testRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header onClickRef={onClickRef} />
      <Banner testRef={testRef} />
      <ToDoCRUD />
      <Footer />
    </div>
  );
};

export default Main;
