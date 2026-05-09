import PhoneItem from './PhoneItem'

const PersonsList = ({ persons, onPress }) => {
  return (
    <>
      {persons.map(person => (
        <PhoneItem key={person.id} person={person} onPress={onPress} />
      ))}
    </>
  )
}

export default PersonsList