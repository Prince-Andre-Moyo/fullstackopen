
const Title = ({ title }) => <h1>{title}</h1>

const Header = ({ course }) => <h2>{course}</h2>

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(item => (
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
    <h4>total of {sum} exercises</h4>
  )
}

const Course = ({ courses }) => {

  if (courses.length === 0) return null

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content course={course} />
          <Total course={course} /> 
        </div>
    ))}
    </div>
  )
}

const App = () => {

  const title = 'Web development curriculum'

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Title title={title} />
      <Course courses={courses} />
    </div>
  )
}

export default App