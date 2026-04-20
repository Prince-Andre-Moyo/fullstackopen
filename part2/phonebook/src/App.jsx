import PhoneItem from './components/PhoneItem'
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    const exists = persons.some(item => item.name === nameObject.name)
    if (!exists) {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    else{
      alert(`${nameObject.name} is already added to phonebook!`)
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person =>
          <PhoneItem key={person.name} phone={person}/>
        )
      }
      <div>debug: {newName}</div>
    </div>
  )
}

export default App