
export default function Filters(props) {
  console.log('props', props);
  const { disabled } = props;

  return (
    <div className="filters btn-group stack-exception">
      <button type="button" className="btn toggle-btn" aria-pressed="false" disabled={disabled}>
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false" disabled={disabled}>
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" aria-pressed="false" disabled={disabled}>
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  )
}