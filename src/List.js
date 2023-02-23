import React, { useEffect, useRef, useState } from "react";

export default function List(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
  
    const usePrevious = (value) => {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    };
    
    const wasEditing = usePrevious(isEditing);
    
    const handleChange = (e) => {
      setNewName(e.target.value);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      props.editList(props.id, newName);
      setNewName("");
      setEditing(false);
    };
  
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName || props.name}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  
  const viewTemplate = (
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
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteList(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  
  useEffect(() => {
      if (!wasEditing && isEditing) {
          editFieldRef.current.focus();
      }
      if (wasEditing && !isEditing) {
          editButtonRef.current.focus();
      }
  }, [wasEditing, isEditing]);
  
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
