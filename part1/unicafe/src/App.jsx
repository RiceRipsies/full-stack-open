import { useState } from 'react'

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button>)

const Display = (props) => ( <div>{props.text} {props.value}</div>)

const Statistics = (props) => {
   

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feeback</h1>
      <Button onClick={() => setGood(good+1)} text='Good' />
      <Button onClick={() => setNeutral(neutral+1)} text='Neutral'/>
      <Button onClick={() => setBad(bad+1)} text='Bad'/>
      <h2>Statistics</h2>
      <Display text='Good' value={good} />
      <Display text='Neutral' value={neutral} />
      <Display text='Bad' value={bad} />
      <Display text='Total' value={good+neutral+bad} />
      <Display text='Average' value={(good-bad)/good+bad} />
      <Display text='Positive' value={good/good+bad} />
    </div>
  )
}

export default App