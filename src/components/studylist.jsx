import React from 'react';
import { useState } from 'react'
import Studyform from './studyform';

const Studylist = () => {
    const [list, setList] = useState(
    [
        {title: 'preview' , subject:'english'},
    
        {title:'running', subject:'sadness'}
    ])

const onAddItem = (item) =>{
    const addNew = {...item, id:10}
   setList((list)=>[...list,addNew]);
}

  return(
    <>
    <ul>
        {list.map((l)=>(
            <div>
                <div>{l.title}</div>
                <div>{l.subject}</div>
            </div>
        ))}
    </ul>
    <Studyform onAdd={onAddItem}/>
    </>
  );
};

export default Studylist;