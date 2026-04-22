import PhoneItem from './PhoneItem'

const PersonsList = ({ persons }) => {
  return (
    <>
      {persons.map(person => (
        <PhoneItem key={person.id} person={person} />
      ))}
    </>
  )
}

export default PersonsList