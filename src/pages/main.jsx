import React, { useEffect, useRef } from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import ToDoList from '../components/toDoList';
import Todo from '../components/todo';
import Footer from '../components/footer';
import AddTask from '../components/addTask';

const Main = () => {
 const testRef = useRef();
 console.log(testRef.current)

 const onClickRef = ((section)=>{
        if (section === 'banner'){
            testRef.current.scrollIntoView({behavior:'smooth'});
        }
    })

    return (
        <div>
     <Header onClickRef={onClickRef}/>
      <Banner testRef={testRef}/>
      
      <ToDoList />


      <Footer />
        </div>
    );
};


export default Main;