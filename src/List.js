import React from "react";
import Button from './Button';

export default function List(props) {
  const { listItems, deleteList, headingText } = props;
  
  return (
    <>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {listItems.map((listItem) => (
          <li className="todo">
            <div className="todo stack-small">
              <div className="c-cb">
                <input id={listItem.id} type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor={listItem.id}>
                  { listItem.name }
                </label>
              </div>
              <Button
                type="button"
                classes="btn__danger"
                handleClick={() => deleteList(props.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
