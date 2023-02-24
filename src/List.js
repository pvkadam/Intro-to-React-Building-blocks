import React from "react";
import Button from './Button';

export default function List(props) {
  return (
    <li className="todo">
      <div className="todo stack-small">
        <div className="c-cb">
          <input id={props.id} type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor={props.id}>
            { props.name }
          </label>
        </div>
        <Button
          handleClick={() => props.deleteList(props.id)}
          classes="btn__danger"
          type="button"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
