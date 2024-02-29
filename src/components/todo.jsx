import { useSelector } from "react-redux";
import styled from "styled-components";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";

function Todo() {
  const recentList = useSelector((state) => state.addTask.todos);

  return (
    <div id="myTodaySection">
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

const Img = styled.img`
  width: 500px;
  height: 500px;

  @media (max-width: 768px) {
    width: 45%;
    height: auto;
    padding-top: 30px;
  }
`;
