import React from 'react';
import styled from 'styled-components';

const AddTask = () => {
    return (
        <TaskWrapper>
            <TitleLayer>
                <h2>ADD TASK</h2>
                <hr></hr>
                <p>Seoul, South Korea</p>
            </TitleLayer>
            <Form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Phone'/> 
            <input type='mail' placeholder='Email address'/>
            <input type='textarea' placeholder='Message'/>  
            <button>SUBMIT</button> 
            </Form>
        </TaskWrapper>
    );
};

export default AddTask;

const TaskWrapper=styled.div`
margin-top: -5px;
width: 100%
max-height: 545px;
background-color: #F1E3D9;
text-align: center;
padding: 50px;
`

const TitleLayer=styled.div`

h2 {
font-size: 32px;
font-weight: 500;
letter-spacing: 0.5px;
}
`


const Form=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:20px;
margin: 20px;

input {
    width: 620px;
    height: 43px;
    border:1px solid #D4D725;
}

hr {
   width: 50px;
}

button {
    background-color: #c07848;
    border: 1px solid #c07848;
    color: white;
    width: 628px;
    height: 45px;
    font-size: 16.5px;
    cursor: pointer;
}
`