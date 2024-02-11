import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import ToDoList from '../components/toDoList';
import Todo from '../components/todo';
import Footer from '../components/footer';

const Main = () => {
    return (
        <div>
     <Header />
      <Banner />
      <ToDoList />
      <Todo />
      <Footer />
        </div>
    );
};

export default Main;