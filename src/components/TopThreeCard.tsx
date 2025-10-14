import { TrophyIcon } from "@phosphor-icons/react"

import styles from "./TopThreeCard.module.css"

interface TopThreeCardProps {
  colorName: 'bronze' | 'silver' | 'gold'
}

export function TopThreeCard({ colorName }: TopThreeCardProps) {
  return (
    <div className={` ${ styles.topThreeCard } ${ colorName == 'bronze' ? styles.bronze : '' } ${ colorName == 'silver' ? styles.silver : '' } ${ colorName == 'gold' ? styles.gold : '' } `}>

      <div className={ styles.teamName }>
        <TrophyIcon size={48} />
        <h2>Team 1</h2>
      </div>

      <div className={ styles.teamStats }>
        <span>
          <b>Total Points: </b>
          25
        </span>

        <span>
          <b>Events Completed: </b>
          2
        </span>
      </div>

    </div>
  )
}