import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CardComponent = () => {
  const list = useSelector((state) => state.addTask.todos);

  console.log(list);

  return (
    <CardList>
      <EachCard>
        {list?.map((todo) => {
          return (
            <div key={todo?.id}>
              <TaskCard>
                <StyledLink to={`/todo/${String(todo?.id)}`}>
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
                </StyledLink>
              </TaskCard>
            </div>
          );
        })}
      </EachCard>
    </CardList>
  );
};

export default CardComponent;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const EachCard = styled.div`
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
