import './App.css';
import Filters from './Filters';
import Input from './Input';
import List from './List';
import { useState } from 'react';
import { nanoid } from "nanoid";

function App(props) {
  const [list, setList] = useState([]);

  const addItem = (name) => {
    const newListItem = { id: "todo-" + nanoid(), name: name };
    setList([...list, newListItem]);
    console.log('New List Items: ', [...list, newListItem]);
  }
  
  const deleteList = (id) => {
    const remainingList = list.filter((listItem) => id !== listItem.id);
    setList(remainingList);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Input */}
      <Input addItem={addItem} />

      {/* Filters for Challenge */}
      <Filters disabled={true}/>

      {/* List */}
      <List listItems={list} deleteList={deleteList}/>
    </div>
  );
}

export default App;
