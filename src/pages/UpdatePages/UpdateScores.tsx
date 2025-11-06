import styles from './UpdateForms.module.css'

export function UpdateScores() {
  return (
    <main>
      <h1>Update Scores</h1>

      <form action="" className={ styles.formContainer }>
        <p>Team/Competitor Name:</p>
        <input type="text" id='competitorName' />

        <p>Event Number:</p>
        <select name="eventNumber" id="eventNumber" defaultValue={1}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <p>Amount Of Points:</p>
        <select name="typeOfCompetitor" id="typeOfCompetitor" defaultValue={0}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
        </select>
        <button>Submit</button>
      </form>
    </main>
  )
}