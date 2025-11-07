import { TopThreeCard } from "./TopThreeCard"
import { competitors, competitorsByEvent, singleEventCompetitors } from "../db/competitors"

import styles from "./RankingPage.module.css"
import { Table } from "./Table"

interface RankingPageProps {
  title: string,
  event?: 0 | 1 | 2 | 3 | 4 | 5
}

export function RankingPage({ title, event = 0 }: RankingPageProps) {
  const competitorsArray = competitorsByEvent(event)

  return (
    <main>
      <h1>{ title }</h1>

      { (competitors.length + singleEventCompetitors.length) >= 3 ? 
        <section className={ styles.topThreeContainer }>
          <TopThreeCard colorName="silver" competitor={ competitorsArray[1] } />
          <TopThreeCard colorName="gold" competitor={ competitorsArray[0] } />
          <TopThreeCard colorName="bronze" competitor={ competitorsArray[2] } />
        </section>
      : <p>There are not enough competitors to display the top 3 competitors.</p> }

      { (competitors.length + singleEventCompetitors.length) >= 3 ? 
      <section className={ styles.tableContainer }>
        <Table 
          array={ competitorsArray }
          typeOfTable="EventResult"
          event={ event }
        />
      </section>
      : <p>There are no competitors to display on the table.</p> }

    </main>
  )
}