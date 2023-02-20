import './App.css';
import Filters from './Filters';
import Input from './Input';
import List from './List';
import { useState } from 'react';

function App(props) {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList([...list, item]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Input addItem={addItem}/>
      <Filters disabled={true}/>
      <List listItems={list} />
    </div>
  );
}

export default App;
