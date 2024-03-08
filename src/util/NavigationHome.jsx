// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const NavigationHome = ({ to, id, offset = 80, children }) => {
//   const navigate = useNavigate();

// //   useEffect(() => {
// //     // let isMounted = true;
// //     if (id) {
// //       const clickHeaderButton = (id, offset = 80) => {
// //         const section = document.getElementById(id);
// //         console.log(id);
// //         console.log(section);

// //         if (section) {
// //           const sectionPosition = section.offsetTop;
// //           console.group(sectionPosition);
// //           window.scrollTo({
// //             top: sectionPosition - offset,
// //             behavior: "smooth",
// //           });
// //         }
// //       };
// //       clickHeaderButton(id, offset);
// //     }
// //     // return () => {
// //     //   isMounted = false;
// //     // };
// //   }, [id, offset]);

//   const handleClick = () => {
//     navigate(to);
//     useEffect(() => {
//         // let isMounted = true;
//         if (id) {
//           const clickHeaderButton = (id, offset = 80) => {
//             const section = document.getElementById(id);
//             console.log(id);
//             console.log(section);

//             if (section) {
//               const sectionPosition = section.offsetTop;
//               console.group(sectionPosition);
//               window.scrollTo({
//                 top: sectionPosition - offset,
//                 behavior: "smooth",
//               });
//             }
//           };
//           clickHeaderButton(id, offset);
//         }
//         // return () => {
//         //   isMounted = false;
//         // };
//       }, [id, offset]);
//   };

//   return (
//     <span
//       onClick={() => {
//         handleClick();
//       }}
//     >
//       {children}
//     </span>
//   );
// };

// export default NavigationHome;
import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationLink = ({ to, id, offset = 80, children }) => {
  const navigate = useNavigate();

  const clickHeaderButton = useCallback((id, offset = 80) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (id) {
      clickHeaderButton(id, offset);
    }

    // Cleanup function
    return () => {
      // Clear any asynchronous tasks or remove event listeners here if necessary
    };
  }, [id, offset, clickHeaderButton]);

  const handleClick = () => {
    navigate(to);
  };

  return <span onClick={handleClick}>{children}</span>;
};

export default NavigationLink;
