import { TopThreeCard } from "./TopThreeCard"
import { competitors, competitorsByEvent, singleEventCompetitors, sortedTotalsByCompetitor } from "../db/competitors"

import styles from "./RankingPage.module.css"
import { Table } from "./Table"

interface RankingPageProps {
  title: string,
  event?: 0 | 1 | 2 | 3 | 4 | 5
}

export function RankingPage({ title, event = 0 }: RankingPageProps) {
  return (
    <main>
      <h1>{ title }</h1>

      { (competitors.length + singleEventCompetitors.length) >= 3 ? 
        <section className={ styles.topThreeContainer }>
          <TopThreeCard colorName="silver" competitor={ event == 0 ? sortedTotalsByCompetitor[1] : competitorsByEvent(event)[1] } />
          <TopThreeCard colorName="gold" competitor={ event == 0 ? sortedTotalsByCompetitor[0] : competitorsByEvent(event)[0] } />
          <TopThreeCard colorName="bronze" competitor={ event == 0 ? sortedTotalsByCompetitor[2] : competitorsByEvent(event)[2] } />
        </section>
      : <p>There are not enough competitors to display the top 3 competitors.</p> }

      { (competitors.length + singleEventCompetitors.length) >= 3 ? 
      <section className={ styles.tableContainer }>
        <Table 
          array={ event == 0 ? sortedTotalsByCompetitor : competitorsByEvent(event) }
          typeOfTable="EventResult"
          event={ event }
        />
      </section>
      : <p>There are no competitors to display on the table.</p> }

    </main>
  )
}