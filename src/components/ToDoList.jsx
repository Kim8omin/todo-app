import styled from "styled-components";
import { useSelector } from "react-redux";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";
import plus from "../assets/plus.png";
import { Hr } from "../styles/Hr";
import UseMoveToSection from "../util/UseMoveToSection";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../styles/Switch";

const ToDoList = () => {
  const recentList = useSelector((state) => state.addTask.todos);
  console.log("todoList에서 가져온 부분", recentList);
  const inProgressList = recentList.filter((item) => item.done === false);
  console.log(inProgressList);

  const { clickHeaderButton } = UseMoveToSection();

  return (
    <div id="myTodoSection">
      <ScrollAnimationContainer>
        <CardLayer>
          <h2>To do List</h2>
          <Hr />
          {/* <CustomizedSwitches
            inProgressList={inProgressList}
            recentList={recentList}
          /> */}
          {recentList?.length > 0 ? (
            <CardList>
              {/* {recentList?.map((todo) => {
                return ( */}
              <CustomizedSwitches
                inProgressList={inProgressList}
                recentList={recentList}
              />

              {/* // <CardComponent todo={todo} />; */}
              {/* })} */}
            </CardList>
          ) : (
            <AddButton>
              <img
                src={plus}
                alt="plus"
                style={{ width: "80px" }}
                onClick={() => {
                  clickHeaderButton("addTodoSection");
                }}
              />
              <h2>Adding new tasks</h2>
            </AddButton>
          )}
        </CardLayer>
      </ScrollAnimationContainer>
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

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-item: center;
  gap: 50px;
`;

export const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 400px;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
    font-size: 16px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    overflow: hidden;
    white-space: nowrap;
    max-width: 100px;
    max-height: 100px;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;

  &:hover {
    color: grey;
  }
`;
