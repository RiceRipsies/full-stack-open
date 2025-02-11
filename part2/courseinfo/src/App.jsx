import Course from './components/Course'

const App = () => {
  const course = [
    {
    name: 'Half Stack application development',
     id: 1, 
     parts: [
      { name: 'Fundamentals of React', exercises: 10, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 14, id: 3 },
      { name: 'MongoDB and Friends', exercises: 2, id: 4 }
    ]
  },
  {
    name: 'Node.js', 
    id: 2, 
    parts: [
      { name: 'Routing', exercises: 3, id: 1 },
      { name: 'Middlewares', exercises: 7, id: 2 }
    ]
  },
  {
    name: 'Some arbitrary stuff', 
    id: 3, 
    parts: [
      { name: 'Just for', exercises: 3, id: 1 },
      { name: 'The sake of', exercises: 7, id: 2 },
      { name: 'Testing', exercises: 7, id: 3 }
    ]
  },
]


  return (
    <>
      {course.map((courseItem, index) => (
        <Course key={index} course={courseItem} />
      ))}
    </>
  )
}

export default App