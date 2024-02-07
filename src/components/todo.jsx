import React from 'react';
import styled from 'styled-components';
import sunflower from '../assets/sunflower.jpg'


function Todo() {
    return (
        <ToDoLayer>
            <TextLayer>
                <h2>Today I Learn</h2> 
                <hr />
                <p>The About page is the core description of your website. Here is where you let clients know what your website is about. You can edit all of this text and replace it with what you want to write. For example you can let them know how long you have been in business, what makes your company special, what are its core values and more.
Edit your About page from the Pages tab by clicking the edit button.</p>
            </TextLayer>
            <Img src={sunflower} alt='sunflower'/>
        </ToDoLayer>
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
background-color: #F1E3D9;
`;

const TextLayer = styled.div`
width: 40%;
margin: 20px;
line-height: 1.2;

p {
  50px;
}

`;



const Title = styled.h2``;  // 적절한 헤딩 요소를 사용하고 스타일링
const P = styled.p``;
const Img= styled.img`
    width: 500px;
    height: 500px;

`