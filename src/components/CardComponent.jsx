import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ todo }) => {
  const navigate = useNavigate();
  const clickButton = () => {
    navigate(`/todo/${String(todo?.id)}`, { state: "..." });
    window.scrollTo(0, 0);
  };
  return (
    <div key={todo?.id}>
      <TaskCard onClick={clickButton}>
        {/* <StyledLink to={`/todo/${String(todo?.id)}`}> */}

        <div>
          <h3>{todo?.title}</h3>
        </div>
        <div>
          <p>{todo?.date}</p>
        </div>
        <div>
          <img
            id="img"
            src={todo?.file[0]}
            alt="imgFile"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div>
          <p>{todo?.category}</p>
        </div>
        <div>
          <p>{todo?.todo}</p>
        </div>
        <p>Read More</p>
        {/* </StyledLink> */}
      </TaskCard>
    </div>
  );
};

export default CardComponent;

export const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
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
