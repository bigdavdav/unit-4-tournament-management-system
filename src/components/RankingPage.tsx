import { TopThreeCard } from "./TopThreeCard"
import { competitorsByEvent, sortedTotalsByCompetitor } from "../db/competitors"

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

      <section className={ styles.topThreeContainer }>
        <TopThreeCard colorName="silver" competitor={ competitorsArray[1] } />
        <TopThreeCard colorName="gold" competitor={ competitorsArray[0] } />
        <TopThreeCard colorName="bronze" competitor={ competitorsArray[2] } />
      </section>

      <section className={ styles.tableContainer }>
        <Table 
          array={ competitorsArray }
          typeOfTable="EventResult"
          event={ event }
        />
      </section>
    </main>
  )
}