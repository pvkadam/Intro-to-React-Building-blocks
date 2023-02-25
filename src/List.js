
export default function List(props) {
	const { listItems, deleteList, headingText } = props;
	
	return(
		<>
			<h2 id="list-heading">Tasks Remaining</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{listItems.map((listItem) => (
					<li className="todo stack-small">
						<div className="c-cb">
							<input id={listItem.id} type="checkbox" defaultChecked={false} />
							<label className="todo-label" htmlFor={listItem.id}>
								{listItem.name}
							</label>
						</div>
						<button type="button" className="btn btn__danger" onClick={() => deleteList(listItem.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}
