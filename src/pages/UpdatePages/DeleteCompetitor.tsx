import { deleteCompetitor } from '../../db/competitors'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './UpdateForms.module.css'

export function DeleteCompetitor() {
  const [competitorName, setCompetitorName] = useState("")
  const navigate = useNavigate()

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setCompetitorName(event.target.value)
  }

  function handleFormSubmission(event: FormEvent) {
    event.preventDefault()
    deleteCompetitor(competitorName)
    navigate('/admin/update-competitors')
  }

  return (
    <main>
      <h1>Delete Competitor</h1>

      <form action="" className={ styles.formContainer } onSubmit={ handleFormSubmission }>
        <p>Team/Competitor Name:</p>
        <input type="text" id='competitorName' value={competitorName} onChange={ handleNameChange } />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}