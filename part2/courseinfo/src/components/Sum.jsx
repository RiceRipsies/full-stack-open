const Sum = (props) => {
    console.log(props)
    const sum = props.sum
    return (
        <div>total of {sum} exercises</div>
    )
}

export default Sum