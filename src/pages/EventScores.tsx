import { competitorsByEvent } from '../db/competitors'

import { NavLink } from 'react-router-dom'

import styles from './EventScores.module.css'

export function EventScores() {
  const events = [1, 2, 3, 4, 5]

  return (
    <main className={ styles.eventListContainer }>
      <h1>Scores By Event</h1>

      {
        events.map((i) => (
        <section key={i} className={ styles.eventListing }>
          <NavLink to={ `/event-scores/event-${i}` }>
            <div className={ styles.eventDetails }>
              <h2>Event {i}</h2>
              <p>Sporting Event</p>
            </div>

            <div className={ styles.podiumList }>
              <h3>Top Three:</h3>
              <p>{ competitorsByEvent(i)[0].name }</p>
              <p>{ competitorsByEvent(i)[1].name }</p>
              <p>{ competitorsByEvent(i)[2].name }</p>
            </div>
          </NavLink>
        </section>
        ))
      }
    </main>
  )
}