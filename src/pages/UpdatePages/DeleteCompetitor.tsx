import { competitors, singleEventCompetitors, competitorsByEvent, deleteCompetitor } from '../../db/competitors'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './UpdateForms.module.css'

export function DeleteCompetitor() {
  let competitorArray: any = [{name: ''}]
  if ( (competitors.length + singleEventCompetitors.length) >= 1 ) {
    competitorArray = competitorsByEvent(0)
  }

  const [competitorName, setCompetitorName] = useState("")
  const navigate = useNavigate()

  function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setCompetitorName(event.target.value)
  }

  function handleFormSubmission() {
    deleteCompetitor(competitorName)
    navigate('/admin/update-competitors')
  }

  return (
    <main>
      <h1>Delete Competitor</h1>

      <form action="" className={ styles.formContainer } onSubmit={ handleFormSubmission }>
        <p>Team/Competitor Name:</p>
        <select name="competitorName" id="competitorName" value={competitorName} onChange={ handleNameChange }>
              {
                competitorArray.map((competitor: any) => (
                  <option value={ competitor.name } key={ competitor.name }>{ competitor.name }</option>
                ))
              }
            </select>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}