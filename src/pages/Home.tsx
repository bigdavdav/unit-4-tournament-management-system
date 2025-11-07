import { competitorsByEvent, sortedTotalScoresByIndividual, sortedTotalScoresByTeam, sortedTotalsByCompetitor} from "../db/competitors"

import styles from "./Home.module.css"

export function Home() {
  return (
    <main>
      <h1>Welcome to the Tournament Dashboard</h1>

      <section className={ styles.topThreeByCategory }>
        <div>
          <h2>Top Three Teams:</h2>
          <p>{ sortedTotalScoresByTeam[0].name }</p>
          <p>{ sortedTotalScoresByTeam[1].name }</p>
          <p>{ sortedTotalScoresByTeam[2].name }</p>
        </div>
        <div>
          <h2>Top Three Individuals:</h2>
          <p>{ sortedTotalScoresByIndividual[0].name }</p>
          <p>{ sortedTotalScoresByIndividual[1].name }</p>
          <p>{ sortedTotalScoresByIndividual[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Tournament:</h2>
          <p>{ sortedTotalsByCompetitor[0].name }</p>
          <p>{ sortedTotalsByCompetitor[1].name }</p>
          <p>{ sortedTotalsByCompetitor[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Event 1:</h2>
          <p>{ competitorsByEvent(1)[0].name }</p>
          <p>{ competitorsByEvent(1)[1].name }</p>
          <p>{ competitorsByEvent(1)[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Event 2:</h2>
          <p>{ competitorsByEvent(2)[0].name }</p>
          <p>{ competitorsByEvent(2)[1].name }</p>
          <p>{ competitorsByEvent(2)[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Event 3:</h2>
          <p>{ competitorsByEvent(3)[0].name }</p>
          <p>{ competitorsByEvent(3)[1].name }</p>
          <p>{ competitorsByEvent(3)[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Event 4:</h2>
          <p>{ competitorsByEvent(4)[0].name }</p>
          <p>{ competitorsByEvent(4)[1].name }</p>
          <p>{ competitorsByEvent(4)[2].name }</p>
        </div>
        <div>
          <h2>Top Three In Event 5:</h2>
          <p>{ competitorsByEvent(5)[0].name }</p>
          <p>{ competitorsByEvent(5)[1].name }</p>
          <p>{ competitorsByEvent(5)[2].name }</p>
        </div>
      </section>
    </main>
  )
}