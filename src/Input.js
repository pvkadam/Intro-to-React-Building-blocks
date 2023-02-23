import { useState } from 'react';

export default function Input(props) {
  const { addItem } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ label: value });
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
    <button
      type="submit"
      className="btn btn__primary btn__lg"
      onClick={handleSubmit}
    >
      Add
    </button>
  </form>
  )
}