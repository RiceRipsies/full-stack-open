import Header from './Header'
import Sum from './Sum'

const Course = (props) => {
    const { course } = props
    console.log(course.name)
    const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    
    return (
      <>
          <Header header= {course.name} />
            {course.parts.map(part => 
              <li key={part.id}>{part.name} {part.exercises}</li>
            )}
          <Sum sum= {sum}/>
      </>
    )
  }

export default Course