import { addCompetitor, listOfNames } from '../../db/competitors'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './UpdateForms.module.css'

export function AddCompetitor() {
  const [competitorName, setCompetitorName] = useState("")
  const [typeOfCompetitor, setTypeOfCompetitor] = useState("Individual")
  const [amountOfCompetitors, setAmountOfCompetitors] = useState(1)
  const [eventNumber, setEventNumber] = useState(0)
  const listOfCompetitorNames = listOfNames()
  const navigate = useNavigate()

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setCompetitorName(event.target.value)
  }

  function handleTypeOfCompetitorChange(event: ChangeEvent<HTMLSelectElement>) {
    setTypeOfCompetitor(event.target.value)

    if ( event.target.value == "Individual" || event.target.value == "SingleEventCompetitor" ) {
      setAmountOfCompetitors(1)
    } else {
      setAmountOfCompetitors(2)
    }

    if ( event.target.value == "SingleEventCompetitor" ) {
      setEventNumber(1)
    } else [
      setEventNumber(0)
    ]
  }

  function handleAmountOfCompetitorsChange(event: ChangeEvent<HTMLInputElement>) {
    setAmountOfCompetitors(Number(event.target.value))
  }

  function handleEventNumberChange(event: ChangeEvent<HTMLSelectElement>) {
    setEventNumber(Number(event.target.value))
  }

  function checkForRepeatedNames(newName: string) {
    for ( let i = 0; i < listOfCompetitorNames.length; i++ ) {
      if ( listOfCompetitorNames[i] ==  newName ) {
        return true
      }

    }
    return false
  }

  function handleFormSubmission(event: FormEvent) {
    event.preventDefault()
    if ( checkForRepeatedNames(competitorName) ) {
      alert("This name is already in use, please choose another name.")
    } else {
      addCompetitor(competitorName, typeOfCompetitor, amountOfCompetitors, eventNumber)
      navigate('/admin/update-competitors')
    }
  }

  return (
    <main>
      <h1>Add Competitor</h1>

      <form action="" className={ styles.formContainer } onSubmit={handleFormSubmission}>
        <p>Team/Competitor Name:</p>
        <input type="text" id='competitorName' value={competitorName} onChange={handleNameChange} />

        <p>Type of Competitor:</p>
        <select name="typeOfCompetitor" id="typeOfCompetitor" defaultValue={typeOfCompetitor} onChange={handleTypeOfCompetitorChange}>
          <option value="Individual">Individual</option>
          <option value="Team">Team</option>
          <option value="SingleEventCompetitor">Single Event</option>
        </select>

        { typeOfCompetitor == "Team" ? <p>Amount of members:</p> : "" }
        { typeOfCompetitor == "Team" ? <input type="number" id='memberAmount' min={2} value={amountOfCompetitors.toString()} onChange={handleAmountOfCompetitorsChange} /> : "" }

        { typeOfCompetitor == "SingleEventCompetitor" ? <p>Event Number</p> : "" }
        { 
          typeOfCompetitor == "SingleEventCompetitor" ? 
            <select name="eventNumber" id="eventNumber" value={eventNumber} onChange={handleEventNumberChange}>
              <option value="0" hidden></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          : "" 
        }

        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}