import './App.css';
import Filters from './Filters';
import Input from './Input';
import { useState } from 'react';
import { nanoid } from "nanoid";

function App(props) {
  const [list, setList] = useState([]);

  const addItem = (name) => {
    const newListItem = { id: "todo-" + nanoid(), name: name };
    setList([...list, newListItem]);
    console.log('New List Items: ', [...list, newListItem]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Input */}
      <Input addItem={addItem} />

      {/* Filters for Challenge */}
      <Filters disabled={true}/>

      {/* List */}
      <h2 id="list-heading">Tasks</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <button type="button" className="btn btn__danger">
            Delete
          </button>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <button type="button" className="btn btn__danger">
            Delete
          </button>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <button type="button" className="btn btn__danger">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
