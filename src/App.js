import './App.css';
import Filters from './Filters';
import Input from './Input';
import List from './List';
import React, { useState } from 'react';
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState([]);

  const addItem = (name) => {
    const newList = { id: "todo-" + nanoid(), name: name };
    setList([...list, newList]);
  }
  
  const deleteList = (id) => {
    const remainingList = list.filter((listItem) => id !== listItem.id);
    setList(remainingList);
  }
  
  const headingText = `${list.length} tasks remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Input addItem={addItem}/>
      <Filters disabled={true}/>
      <List
        headingText={headingText}
        listItems={list}
        deleteList={deleteList}
      />
    </div>
  );
}

export default App;
