import React from 'react';
import { useState } from 'react'; 

const Studyform = ({onAdd}) => {
    const [list, setList] = useState([
        {
         title:'',
         subject:''
        }
    ]);
    
    const handleChange = (e) =>{
        const {name,value} = e.target; 
      setList((list)=>{
        return {...list, [name]:value};
      })};

    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(list);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>title
            <input type='text' name='title' value={list.title} onChange={handleChange}/>
            </label>
            <label>subject
            <input type='text' name='subject' value={list.subject} onChange={handleChange}/>
            </label>
            <button type='submit'>submit</button>
        </form>
    );
};

export default Studyform;