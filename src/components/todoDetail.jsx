import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const { id } = useParams();

  const list = useSelector((state) => state.addTask.todos);
  console.log(list);

  const selectedItem = list.find((item) => String(item.id) === String(id));

  console.log("id는 이거다", id);
  console.log("list는 이거다", list);
  console.log("selectitem은 이거다", selectedItem);

  if (!selectedItem) {
    return (
      <div>
        <p>
          Todo not found : if you refresh the page the data is gone :/.
          restoring is coming soon.
        </p>
      </div>
    );
  }

  return (
    <DetailLayer>
      <h2>{selectedItem?.title}</h2>
      <hr />
      <p>{selectedItem?.date}</p>
      <div>
        <img id="img" src={selectedItem?.file[0]} alt="imgFile" />
      </div>
      <p>{selectedItem?.category}</p>
      <p>{selectedItem?.todo}</p>
    </DetailLayer>
  );
};

export default TodoDetail;

const DetailLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px;
  gap: 10px;
  line-height: 12px;

  hr {
    width: 300px;
    border: none;
    border-top: 2px solid #c07848;
    color: #c07848;
    overflow: visible;
    text-align: center;
    height: 5px;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
  }

  img {
    width: 400px;
  }
`;
