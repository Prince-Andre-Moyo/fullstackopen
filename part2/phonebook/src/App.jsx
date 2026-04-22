import { useState } from 'react'
import PhoneItem from './components/PhoneItem'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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

      <SearchFilter 
        value={searchName}
        onChange={handleSearchNameChange} 
      />

      <h2>add a new</h2>

      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleContactChange}
      />

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