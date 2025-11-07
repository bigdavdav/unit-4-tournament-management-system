import { useState, type FormEvent } from 'react'
import { competitorsByEvent, updateScore } from '../../db/competitors'
import styles from './UpdateForms.module.css'

export function UpdateScores() {
  const [eventNumber, setEventNumber] = useState(1)
  const [points, setPoints] = useState(0)
  const [name, setName] = useState("")
  const competitorArray = competitorsByEvent(0)

  function handleEventNumberChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setEventNumber(Number(event.target.value))
  }

  function handlePointsChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setPoints(Number(event.target.value))
  }

  function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setName(event.target.value)
  }

  function handleFormSubmission(event: FormEvent) {
    updateScore(name, eventNumber, points)
  }
  return (
    <main>
      <h1>Update Scores</h1>

      <form onSubmit={handleFormSubmission} className={ styles.formContainer }>
        <p>Team/Competitor Name:</p>
        <select name="competitorName" id="competitorName" value={name} onChange={handleNameChange}>
          {
            competitorArray.map((competitor) => (
              <option value={ competitor.name } key={ competitor.name }>{ competitor.name }</option>
            ))
          }
        </select>

        <p>Event Number:</p>
        <select name="eventNumber" id="eventNumber" value={eventNumber} onChange={handleEventNumberChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <p>Amount Of Points:</p>
        <select name="typeOfCompetitor" id="typeOfCompetitor" value={points} onChange={handlePointsChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}