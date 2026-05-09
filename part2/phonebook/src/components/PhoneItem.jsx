const PhoneItem = ({ person, onPress }) => {
  return (
    <div>
      <p> {person.name} {person.number} <button onClick={() => onPress(person.id)}>delete</button> </p>
    </div>
  )
}

export default PhoneItem