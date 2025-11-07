import { useState, type ChangeEvent } from 'react'
import styles from './UpdateForms.module.css'

export function AddCompetitor() {
  const [typeOfCompetitor, setTypeOfCompetitor] = useState("Individual")
  const [amountOfCompetitors, setAmountOfCompetitors] = useState(1)

  function handleTypeOfCompetitorChange(event: ChangeEvent<HTMLSelectElement>) {
    setTypeOfCompetitor(event.target.value)

    if ( event.target.value == "Individual" || event.target.value == "Single Event" ) {
      setAmountOfCompetitors(1)
      console.log(1)
    } else {
      setAmountOfCompetitors(2)
      console.log(2)
    }
  }

  function handleAmountOfCompetitorsChange(event: ChangeEvent<HTMLInputElement>) {
    setAmountOfCompetitors(Number(event.target.value))
  }

  const singleEventDropdown = () => {
    return (
      <select name="eventNumber" id="eventNumber" defaultValue={1}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="2">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    )
  }

  return (
    <main>
      <h1>Add Competitor</h1>

      <form action="" className={ styles.formContainer }>
        <p>Team/Competitor Name:</p>
        <input type="text" id='competitorName' />

        <p>Type of Competitor:</p>
        <select name="typeOfCompetitor" id="typeOfCompetitor" defaultValue={typeOfCompetitor} onChange={handleTypeOfCompetitorChange}>
          <option value="Individual">Individual</option>
          <option value="Team">Team</option>
          <option value="SingleEventCompetitor">Single Event</option>
        </select>

        { typeOfCompetitor == "Team" ? <p>Amount of members:</p> : "" }
        { typeOfCompetitor == "Team" ? <input type="number" id='memberAmount' min={2} value={amountOfCompetitors.toString()} onChange={handleAmountOfCompetitorsChange} /> : "" }

        { typeOfCompetitor == "Single Event" ? <p>Event Number</p> : "" }
        { typeOfCompetitor == "Single Event" ? singleEventDropdown() : "" }

        <button>Submit</button>
      </form>
    </main>
  )
}