import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Heading = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const DisplayText = ({ text, votes }) => {
  return (
    <div>
      {text} <br/>
      has {votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] =  useState({
    '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0
  })

  const generateRandomNum = (size) => {
    const randomInt = Math.floor(Math.random() * (size))
    setSelected(randomInt)
  }

  const putVote = (index) => {
    const newVote = {
      ...votes,
      [index]: votes[index] + 1
    }
    setVotes(newVote)
  }

  const mostVotes = (dict) => {
    let maxKey = 0
    let maxValue = -Infinity;

    for (const key in dict) {
      if (dict[key] > maxValue) {
        maxValue = dict[key];
        maxKey = key
      }
    }
    return maxKey
  }

  const topIndex = mostVotes(votes)

  return (
    <div>
      <Heading text='Anecdote of the day'/>
      <DisplayText 
        text={anecdotes[selected]} 
        votes={votes[selected]} 
      />
      <Button onClick={() => putVote(selected)} text='vote' />
      <Button onClick={() => generateRandomNum(anecdotes.length)} text='next anecdote' />
      <Heading text='Anecdote with most votes'/>
      <DisplayText 
        text={anecdotes[topIndex]} 
        votes={votes[topIndex]} 
      />
    </div>
  )
}

export default App