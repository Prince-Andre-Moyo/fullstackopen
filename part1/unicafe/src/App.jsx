import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const SubTitle = ({ subtitle }) => {
  return (
    <h2>{subtitle}</h2>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={props.scoreGood} />
      <StatisticLine text="neutral" value={props.scoreNeutral} />
      <StatisticLine text="bad" value={props.scoreBad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={props.mean} />
      <StatisticLine text="positive" value={props.positivePerc} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
    
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [scores, setScores] = useState([])

  const title = 'give feedback'
  const subtitle = 'statistics'

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
    setScores(scores.concat(1))
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
    setScores(scores.concat(0))
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
    setScores(scores.concat(-1))
  }

  const calculateTotal = () => {
    return allClicks.length
  }

  const calculateAverage = () => {
    if (scores.length === 0){
      return 0
    }
    const sum = scores.reduce((acc, currValue) => acc + currValue, 0)
    return (sum/scores.length).toFixed(1)
  }

  const calculatePositive = () => {
    if (allClicks.length === 0) return 0
    const count = allClicks.filter(item => item === 'G').length
    return ((count/allClicks.length) * 100).toFixed(1)
  }


  return (
    <div>
      <Title text={title} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <SubTitle subtitle={subtitle}/>
      <Statistics 
        allClicks={allClicks}
        scoreGood={good}
        scoreNeutral={neutral}
        scoreBad={bad}  
        total={calculateTotal()}
        mean={calculateAverage()}
        positivePerc={calculatePositive()}
      />
    </div>
  )
}

export default App