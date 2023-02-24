import { useState } from 'react';
import Button from './Button';

export default function Input(props) {
  const { addItem } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(value);
  }
  
  return(
    <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
      value={value}
      onChange={handleChange}
    />
    <Button handleClick={handleSubmit} classes='btn__primary btn__lg'>
      Add
    </Button>
  </form>
  )
}
