import PhoneItem from './components/PhoneItem'
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const [contacts, setContacts] = useState([])
  const [newNumber, setNewNumber] = useState('')



  const addNameAndContact = (event) => {
    event.preventDefault()

    if (newName === ''){
    alert(`name should not be empty`)
    return
    }

    if (newNumber === ''){
      alert(`number should not be empty`)
      return
    }

    // for the name
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

    // for the contact
    const contactObject = {
      number: newNumber
    }

    setContacts(contacts.concat(contactObject))
    setNewNumber('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleContactChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameAndContact}>
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
        persons.map((person, i) =>
          <PhoneItem key={person.name} phone={person} number={contacts[i]}/>
        )
      }
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App