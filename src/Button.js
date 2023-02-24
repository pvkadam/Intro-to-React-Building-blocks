
export default function Button(props) {
    const { handleClick, classes, type } = props;

    return (
      <button
        type={type ? type : 'submit'}
        className={`btn ${classes}`}
        onClick={handleClick}
      >
        {props.children}
      </button>
    )
}