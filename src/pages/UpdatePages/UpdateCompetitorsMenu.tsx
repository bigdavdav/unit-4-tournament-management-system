import { NavLink } from 'react-router-dom'

import styles from './UpdateCompetitorsMenu.module.css'

export function UpdateCompetitorsMenu() {
  return (
    <main>
      <h1>Update Competitors</h1>

      <section className={ styles.functionListing }>
        <NavLink to={ '/admin/update-competitors/add-competitor' }>
          <h2>Add Competitor</h2>
        </NavLink>
      </section>

      <section className={ styles.functionListing }>
        <NavLink to={ '/admin/update-competitors/delete-competitor' }>
          <h2>Delete Competitor</h2>
        </NavLink>
      </section>
    </main>
  )
}