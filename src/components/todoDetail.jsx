import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = ({ list }) => {
  console.log("todoDetail의 첫번째줄", list);
  const { id } = useParams();

  // Find the item in the list based on the id parameter
  const selectedItem = list.find((item) => String(item.id) === String(id));
  console.log("id는 이거다", id);
  console.log("list는 이거다", list);
  console.log("selectitem은 이거다", selectedItem);
  if (!selectedItem) {
    // Handle the case where the item is not found
    return (
      <div>
        <p>Todo not found</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Todo Detail page</h2>
      <h2>{selectedItem?.title}</h2>
      <p>{selectedItem?.date}</p>
      <div>
        <img
          id="img"
          src={selectedItem?.file[0]}
          alt="imgFile"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <p>{selectedItem?.category}</p>
      <p>{selectedItem?.todo}</p>
    </div>
  );
};

export default TodoDetail;
