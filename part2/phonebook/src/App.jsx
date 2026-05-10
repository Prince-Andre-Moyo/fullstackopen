import { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

 
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

    const personFound = persons.find(item => item.name === personObject.name)

    if (!personFound) {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Added ${personObject.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
    }
    else{
      const result = confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)

      if(result) {
        const updateNumberPerson = {...personFound, number: personObject.number}

        personService.update(updateNumberPerson.id, updateNumberPerson).then((returnedPerson) => {
          setPersons(prevPersons =>
            prevPersons.map(person =>
              person.id === returnedPerson.id ? returnedPerson : person
            )
          )
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Updated ${personObject.name}'s phone numbers`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
    } else {return}
    }
  }

  const handleDelete = (id) => {
    const foundPerson = persons.find(p => p.id === id)
    const result = confirm(`Delete ${foundPerson.name} ?`)

    if(result) {
      personService.remove(foundPerson.id).then((returnedPerson) => {
        setPersons(persons.filter(p => p.id !== id))
      })
    } else {
      return
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
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />

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

      <PersonsList persons={namesToShow} onPress={handleDelete}/>

    </div>
  )
}

export default App