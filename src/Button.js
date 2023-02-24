
export default function Button(props) {
    const { handleClick, classes } = props;

    return (
      <button
        type="submit"
        className={`btn ${classes}`}
        onClick={handleClick}
      >
        {props.children}
      </button>
    )
}