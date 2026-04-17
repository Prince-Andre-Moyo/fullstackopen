const Header = ({ course }) => <h1>{course}</h1>

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

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ course }) => {
  const items = course.parts
  const sum = items.reduce((sum, item) => sum + item.exercises, 0)

  return (
    <h3>total of {sum} exercises</h3>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App