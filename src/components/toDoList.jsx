import styled from "styled-components";
import { useSelector } from "react-redux";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";
import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import plus from "../assets/plus.png";

const ToDoList = () => {
  const recentList = useSelector((state) => state.addTask.todos);
  const [emptyList, setEmptyList] = useState(true);

  useEffect(() => {
    if (recentList.length === 0) {
      setEmptyList(false);
    } else if (recentList.length >= 1) {
      setEmptyList(true);
    }
  }, [recentList]);

  return (
    <div id="myTodoSection">
      {emptyList && (
        <ScrollAnimationContainer>
          <CardLayer>
            <h2>To do List</h2>
            <hr />
            <CardComponent />
          </CardLayer>
        </ScrollAnimationContainer>
      )}
      {!emptyList && (
        <ScrollAnimationContainer>
          <CardLayer>
            <h2>To do List</h2>
            <hr />
            <AddButton>
              <img src={plus} alt="plus" style={{ width: "80px" }} />
              <h2
                onClick={() => {
                  window.scrollTo({
                    top: 550,
                    behavior: "smooth",
                  });
                }}
              >
                Adding new tasks
              </h2>
            </AddButton>
          </CardLayer>
        </ScrollAnimationContainer>
      )}
    </div>
  );
};

export default ToDoList;

const CardLayer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #f1e3d9;
  padding: 100px;
  gap: 12px;
`;

const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 400px;

  img {
    cursor: pointer;
    transition: transform 0.2s;

    &: hover {
      transform: scale(1.1);
    }
  }

  h2 {
    font-size: 18.5px;
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
  }
`;
