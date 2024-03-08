import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigationAdd = ({ to, id, offset = 80, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    if (isMounted && id) {
      const clickHeaderButton = (id, offset = 80) => {
        const section = document.getElementById(id);
        console.log(id);
        console.log(section);

        if (section) {
          const sectionPosition = section.offsetTop;
          console.group(sectionPosition);
          window.scrollTo({
            top: sectionPosition - offset,
            behavior: "smooth",
          });
        }
      };
      clickHeaderButton(id, offset);
    }
    return () => {
      isMounted = false;
    };
  }, [id, offset]);

  const handleClick = () => {
    navigate(to);
  };

  return <span onClick={handleClick}>{children}</span>;
};

export default NavigationAdd;
