import React from "react";
import styled from "styled-components";
import sunflower from "../assets/sunflower.jpg";

function Todo({ list }) {
  console.log(list);
  return (
    <div id="myTodaySection">
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
    </div>
  );
}

export default Todo;

const ToDoLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  aling-items: center;
  height: 500px;
  padding: 100px 0;
  background-color: #f1e3d9;
`;

const TextLayer = styled.div`
width: 40%;
margin: 20px;
line-height: 1.2;

p {
  50px;
}

`;

const Title = styled.h2``; // 적절한 헤딩 요소를 사용하고 스타일링
const P = styled.p``;
const Img = styled.img`
  width: 500px;
  height: 500px;
`;
