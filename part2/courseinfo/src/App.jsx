const Header = (props) => <h1>{props.course}</h1>

const Content = ({ course }) => {
  const items = course.parts

  if (items.length === 0) return null
  
  return (
    <div>
      {items.map(item => (
        <Part key={item.id} name={item.name} exercises={item.exercises}/>
    ))}
    </div>
  )
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content course={props.course} />
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  )
}

export default App