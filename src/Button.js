
export default function Button(props) {
    const { handleClick, classes, type } = props;

    return (
        <button onClick={handleClick} type={type ? type : 'submit'} className={`btn ${classes}`}>
            {props.children}
        </button>
    )
}