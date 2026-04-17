
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

export default Course