import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

function Todo({ list }) {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return (
    <div id="myTodaySection">
      <ToDoLayer>
        <TextLayer>
          <AnimatedHeading className={isInViewport ? "frame-in" : ""} ref={ref}>
            <h2>{list?.[0]?.title}</h2>
          </AnimatedHeading>
          <hr />
          <p>{list?.[0]?.date}</p>
          <p>{list?.[0].category}</p>
          <p>{list?.[0].todo}</p>
        </TextLayer>
        <Img src={list?.[0].file} alt="img" />
      </ToDoLayer>
    </div>
  );
}

export default Todo;

const ToDoLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  padding: 50px;
  background-color: white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const TextLayer = styled.div`
  width: 40%;
  margin: 20px;
  line-height: 1.2;

  p {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedHeading = styled.div`
  &.frame-in {
    animation: ${fadeInUp} 0.5s;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 500px;

  @media (max-width: 768px) {
    width: 45%;
    height: auto;
    padding-top: 30px;
  }
`;
