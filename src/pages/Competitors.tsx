import { Table } from "../components/Table"
import { singleEventCompetitors, totalScoresByIndividual, totalScoresByTeam } from "../db/competitors"


import styles from "./Competitors.module.css"

export function Competitors() {
  return(
    <main className={ styles.competitorsContainer }>
      <h1>Competitors</h1>

      <section>
        <h2>Teams</h2>
        <Table 
          array={ totalScoresByTeam }
          typeOfTable="Team"
        />
      </section>

      <section>
        <h2>Individuals</h2>

        <Table 
          array={ totalScoresByIndividual }
          typeOfTable="Individual"
        />
      </section>

      <section>
        <h2>Single Event Competitors</h2>

        <Table 
          array={ singleEventCompetitors }
          typeOfTable="SingleEvent"
        />
      </section>
    </main>
  )
}