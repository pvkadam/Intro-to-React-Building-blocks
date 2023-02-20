import './App.css';
import Filters from './Filters';
import Input from './Input';
import List from './List';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Input */}
      <Input />

      {/* Filters for Challenge */}
      <Filters disabled={true}/>

      {/* List */}
      <List />
    </div>
  );
}

export default App;
