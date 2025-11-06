import styles from './UpdateForms.module.css'

export function DeleteCompetitor() {
  return (
    <main>
      <h1>Delete Competitor</h1>

      <form action="" className={ styles.formContainer }>
        <p>Team/Competitor Name:</p>
        <input type="text" id='competitorName' />
        <button>Submit</button>
      </form>
    </main>
  )
}