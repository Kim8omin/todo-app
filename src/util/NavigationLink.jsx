import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationLink = ({ to, id, offset = 80, children }) => {
  const navigate = useNavigate();

  const clickHeaderButton = useCallback((id, offset = 80) => {
    const section = document.getElementById(id);
    console.log(id);
    if (section) {
      const sectionPosition = section.offsetTop;
      console.log(sectionPosition);
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  //   useEffect(() => {
  //     if (id) {
  //       clickHeaderButton(id, offset);
  //     }

  //     // Cleanup function
  //     return () => {
  //       // Clear any asynchronous tasks or remove event listeners here if necessary
  //     };
  //   }, [id, offset, clickHeaderButton]);

  const handleClick = () => {
    navigate(to);
    clickHeaderButton(id);
  };

  return (
    <span
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </span>
  );
};

export default NavigationLink;
