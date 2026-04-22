import PhoneItem from './components/PhoneItem'
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

 
  const addPerson = (event) => {
    event.preventDefault()

    if (newName === ''){
    alert(`name should not be empty`)
    return
    }

    if (newNumber === ''){
      alert(`number should not be empty`)
      return
    }

    const personObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber
    }

    const exists = persons.some(item => item.name === personObject.name)

    if (!exists) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${nameObject.name} is already added to phonebook!`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleContactChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }

  const foundNames = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )
  
  const namesToShow = foundNames.length !== 0 ? foundNames : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input 
          value={searchName}
          onChange={handleSearchNameChange}
        />
      </div>

      <h2>add a new</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleContactChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {
        namesToShow.map(person =>
         <PhoneItem key={person.id} person={person} />
        )
      }

    </div>
  )
}

export default App