import { NavLink } from 'react-router-dom'

import styles from './UpdateCompetitorsMenu.module.css'
import { competitors, singleEventCompetitors } from '../../db/competitors'

export function UpdateCompetitorsMenu() {
  return (
    <main>
      <h1>Update Competitors</h1>

      <section className={ styles.functionListing }>
        <NavLink to={ '/admin/update-competitors/add-competitor' }>
          <h2>Add Competitor</h2>
        </NavLink>
      </section>
      
      {
        ( competitors.length + singleEventCompetitors.length ) >= 1 ?
          <section className={ styles.functionListing }>
            <NavLink to={ '/admin/update-competitors/delete-competitor' }>
              <h2>Delete Competitor</h2>
            </NavLink>
          </section>
        : <p>There are no competitors to delete, please add a competitor</p>
      }
    
    </main>
  )
}