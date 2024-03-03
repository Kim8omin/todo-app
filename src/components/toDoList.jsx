import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ScrollAnimationContainer } from "../util/ScrollAnimationContainer";

const ToDoList = () => {
  const list = useSelector((state) => state.addTask.todos);

  console.log(list);

  return (
    <div id="myTodoSection">
      <ScrollAnimationContainer>
        <CardLayer>
          <h2>To do List</h2>
          <hr />
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
              {/* //컴포넌트 만든다. (21~47) */}
              <AddButton>
                <h2
                  onClick={() => {
                    window.scrollTo({
                      top: 550,
                      behavior: "smooth",
                    });
                  }}
                >
                  add
                </h2>
              </AddButton>
            </EachCard>
          </CardList>
        </CardLayer>
      </ScrollAnimationContainer>
    </div>
  );
};

export default ToDoList;

const CardLayer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: #f1e3d9;
  padding: 100px;
`;

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

const TaskCard = styled.div`
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

const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: white;
  color: white;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 400px;

  h2 {
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 800;
    }
  }
`;
