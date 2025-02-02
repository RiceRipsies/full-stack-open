import { useState } from 'react'

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button> )

const StatisticsLine = (props) => ( <tr><td>{props.text}</td><td>{props.value}{props.symbol}</td></tr> )

const Statistics = (props) => {
  //Assign props to const to cleanup this component a bit
  const { good, neutral, bad, total } = props;

  //if no feedback given just return this
  if (total === 0) {
    return (
      <div>Press buttons to give feedback</div>
    )
  }

  //otherwise return this
  return (
    <div>
      <h2>Statistics</h2>
      <table>
      <tbody>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <StatisticsLine text='Total' value={good + neutral + bad} />
      <StatisticsLine text='Average' value={(good - bad) / (good + neutral + bad)} />
      <StatisticsLine text='Positive' value={(good / total) * 100} symbol='%' />
      </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good+1);
    setTotal(total+1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
    setTotal(total+1);
  }

  const handleBadClick = () => {
    setBad(bad+1);
    setTotal(total+1);
  }

  return (
    <div>
      <h1>Give Feeback</h1>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App