const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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
    <Part part={props.parts[0].name} exercise={props.parts[0].excercises} />
    <Part part={props.parts[1].name} exercise={props.parts[1].excercises} />
    <Part part={props.parts[2].name} exercise={props.parts[2].excercises} />
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
        Number of exercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}
      </p>
    </div>
  )
}

export default App