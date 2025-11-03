import { TrophyIcon } from "@phosphor-icons/react"

import styles from "./TopThreeCard.module.css"

interface TopThreeCardProps {
  colorName: 'bronze' | 'silver' | 'gold'
  competitor: any
}

export function TopThreeCard({ colorName, competitor }: TopThreeCardProps) {
  return (
    <div className={` ${ styles.topThreeCard } ${ colorName == 'bronze' ? styles.bronze : '' } ${ colorName == 'silver' ? styles.silver : '' } ${ colorName == 'gold' ? styles.gold : '' } `}>

      <div className={ styles.teamName }>
        <TrophyIcon size={48} />
        <h2>{ competitor.name }</h2>
      </div>

      <div className={ styles.teamStats }>
        <span>
          <b>Total Points: </b>
          { competitor.totalScore }
        </span>

        <span>
          <b>Events Completed: </b>
          { competitor.eventsCompleted } / 5
        </span>
      </div>

    </div>
  )
}