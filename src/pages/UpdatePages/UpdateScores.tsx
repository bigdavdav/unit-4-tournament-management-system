import styles from './UpdateForms.module.css'

export function UpdateScores() {
  return (
    <main>
      <h1>Update Scores</h1>

      <form action="" className={ styles.formContainer }>
        <input type="text" id='competitorName' placeholder='Team/Competitor Name' />
        <input type="text" id='eventNumber' placeholder='Event' />
        <input type="text" id='totalScore' placeholder='Amount of Points' />
        <button>Submit</button>
      </form>
    </main>
  )
}