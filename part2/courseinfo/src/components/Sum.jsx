const Sum = (props) => {
    console.log(props)
    const sum = props.sum
    return (
        <div><b>total of {sum} exercises</b></div>
    )
}

export default Sum