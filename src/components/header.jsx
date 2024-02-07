import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderLayer>
        <Title>
            My task
        </Title>
        <MenuLayer>
            <span>Home</span>
            <span>Add Task</span>
            <span>My Todo</span>
            <span>Today I Learn</span>
        </MenuLayer>
        </HeaderLayer>
    );
};

export default Header;

const HeaderLayer=styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 99px;
background-color: #C07848;
`

const Title=styled.h2`
margin-left: 15px;
color: rgb(242, 227, 217);
cursor: pointer;
display: block;
font-family: "Open Sans", "Open Sans", Arial, sans-serif;
font-size: 29px;
font-weight: 700;
height: 39px;
letter-spacing: 3px;
line-height: normal;
margin-left: 80px;
`

const MenuLayer=styled.div`
display:flex;
gap: 30px;
margin-right: 80px;
font-size:19px;
color: #f2e3d9;
letter-spacing: 0.5px;
cursor: pointer;

span {
    &:hover {
        font-weight: bold;
    }
}
`