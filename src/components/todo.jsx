import { useSelector } from "react-redux";
import styled from "styled-components";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";
import { useState, useEffect } from "react";
import arrow from "../assets/arrow.gif";

function Todo() {
  const recentList = useSelector((state) => state.addTask.todos);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    if (recentList?.length === 0) {
      setEmptyList(true);
    } else if (recentList?.length >= 1) {
      setEmptyList(false);
    }
  }, [recentList]);

  console.log(recentList);

  return (
    <div id="myTodaySection">
      {emptyList && (
        <ScrollAnimationContainer>
          <EmptyList>
            <img src={arrow} alt="arrow" />

            <p> Please fill out the form above</p>
          </EmptyList>
        </ScrollAnimationContainer>
      )}
      {!emptyList && (
        <>
          <ScrollAnimationContainer>
            <ToDoLayer>
              <TextLayer>
                <h2>{recentList?.[0]?.title}</h2>
                <hr />
                <p>{recentList?.[0]?.date}</p>
                <p>{recentList?.[0]?.category}</p>
                <p>{recentList?.[0]?.todo}</p>
              </TextLayer>
              <Img src={recentList?.[0]?.file} alt="img" />
            </ToDoLayer>
          </ScrollAnimationContainer>
        </>
      )}
    </div>
  );
}

export default Todo;

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 20px;
`;

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
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  margin: 20px;
  line-height: 1.2;

  p {
    margin-bottom: 10px;
  }

  hr {
    width: 70%;
    border: none;
    border-top: 2px solid #c07848;
    color: #c07848;
    overflow: visible;
    height: 5px;
  }

  @media (max-width: 768px) {
    width: 80%;
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
