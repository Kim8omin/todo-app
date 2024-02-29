//import { useSelector } from "react-redux";
import styled from "styled-components";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";

function Todo({ list }) {
  //const list = useSelector((state) => state);

  return (
    <div id="myTodaySection">
      <ScrollAnimationContainer>
        <ToDoLayer>
          <TextLayer>
            <h2>{list?.[0]?.title}</h2>
            <hr />
            <p>{list?.[0]?.date}</p>
            <p>{list?.[0].category}</p>
            <p>{list?.[0].todo}</p>
          </TextLayer>
          <Img src={list?.[0].file} alt="img" />
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
