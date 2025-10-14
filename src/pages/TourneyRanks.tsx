import { TopThreeCard } from "../components/TopThreeCard"
import styles from "./TourneyRanks.module.css"

export function TourneyRanks() {
  return (
    <main>
      <h1>Tournament Ranking</h1>
      
      <section className={ styles.topThreeContainer }>
        <TopThreeCard colorName="silver" />
        <TopThreeCard colorName="gold" />
        <TopThreeCard colorName="bronze" />
      </section>

    </main>
  )
}