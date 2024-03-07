import React, { useRef } from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import ToDoCRUD from "../components/ToDoCRUD";
import Footer from "../components/footer";

const Main = () => {
  const testRef = useRef(null);
  const testRef2 = useRef(null);

  const onClickRef = (section) => {
    if (section === "banner") {
      testRef.current.scrollIntoView({ behavior: "smooth" });
      console.log(testRef.current);
      return;
    }
    if (section === "add")
      testRef2.current.scrollIntoView({ behavior: "smooth" });
    console.log(testRef2.current);
  };

  return (
    <div>
      <Header onClickRef={onClickRef} />
      <Banner testRef={testRef} />
      <ToDoCRUD testRef2={testRef2} />
      <Footer />
    </div>
  );
};

export default Main;
