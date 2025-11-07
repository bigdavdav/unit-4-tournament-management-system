import { competitorsByEvent, findCompetitorIndex, updateScore, competitors, singleEventCompetitors } from '../../db/competitors'

import { useState, type FormEvent } from 'react'

import styles from './UpdateForms.module.css'

export function UpdateScores() {
  let competitorArray: any = [{name: ''}]
  if ( (competitors.length + singleEventCompetitors.length) >= 1 ) {
    competitorArray = competitorsByEvent(0)
  }

  const [eventNumber, setEventNumber] = useState(1)
  const [points, setPoints] = useState(0)
  const [name, setName] = useState(competitorArray[0].name)
  
  findCompetitorIndex("team1")
  
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

      {
        (competitors.length + singleEventCompetitors.length) >= 1 ?
          <form onSubmit={handleFormSubmission} className={ styles.formContainer }>
            <p>Team/Competitor Name:</p>
            <select name="competitorName" id="competitorName" value={name} onChange={handleNameChange}>
              {
                competitorArray.map((competitor: any) => (
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
              <option value="3">3</option>
            </select>
            <button type='submit'>Submit</button>
          </form>
        : <p>There are no players to update, please add a player and try again.</p>    
      
      }
    </main>
  )
}