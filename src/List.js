import React from "react";

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
        <div className="btn-group">
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteList(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </div>
    </li>
  );
}
