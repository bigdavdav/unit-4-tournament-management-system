import { TopThreeCard } from "./TopThreeCard"
import { sortedTotalsByCompetitor } from "../db/competitors"

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

      <section className={ styles.topThreeContainer }>
        <TopThreeCard colorName="silver" />
        <TopThreeCard colorName="gold" />
        <TopThreeCard colorName="bronze" />
      </section>

      <section className={ styles.tableContainer }>
        <Table 
          array={ sortedTotalsByCompetitor }
          typeOfTable="EventResult"
          event={ event }
        />
      </section>
    </main>
  )
}