const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    excercises: 7
  }
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.excercises} part2={part2.name} exercises2={part2.excercises} part3={part3.name} exercises3={part3.excercises} />
      <Total exercises1={part1.excercises} exercises2={part2.excercises} exercises3={part3.excercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part part={props.part1} exercise={props.exercises1} />
    <Part part={props.part2} exercise={props.exercises2} />
    <Part part={props.part3} exercise={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>
      {props.part + " " + props.exercise}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

export default App