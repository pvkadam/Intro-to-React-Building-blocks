
export default function List(props) {
    const { listItems } = props;

    return (
      <>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">

          {listItems.map((item, index) => (
            <li className="todo stack-small" key={index}>
              <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                  { item.label }
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn">
                  Edit <span className="visually-hidden">Eat</span>
                </button>
                <button type="button" className="btn btn__danger">
                  Delete <span className="visually-hidden">Eat</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
}