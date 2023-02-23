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
  
  const editList = (id, newName) => {
    const editedListItem = list.map((listItem) => {
      // if this task has the same ID as the edited task
      if (id === listItem.id) {
        return { ...listItem, name: newName };
      }
      return listItem;
    });
    setList(editedListItem);
  }
  
  const headingText = `${list.length} tasks remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Input addItem={addItem}/>
      <Filters disabled={true}/>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {list.map((listItem) => (
          <List
            id={listItem.id}
            name={listItem.name}
            key={listItem.id}
            deleteList={deleteList}
            editList={editList}
        />))}
      </ul>
    </div>
  );
}

export default App;
