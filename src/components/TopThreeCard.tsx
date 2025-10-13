import { TrophyIcon } from "@phosphor-icons/react"

import styles from "./TopThreeCard.module.css"

interface ColorNameProps {
  colorName: 'bronze' | 'silver' | 'gold'
}

export function TopThreeCard({ colorName }: ColorNameProps) {
  return (
    <div className={` ${ styles.topThreeCard } ${ colorName == 'bronze' ? styles.bronze : '' } ${ colorName == 'silver' ? styles.silver : '' } ${ colorName == 'gold' ? styles.gold : '' } `}>
      <div className={ styles.teamName }>
        <TrophyIcon size={48} />
        <h3>Team 1</h3>
      </div>
    </div>
  )
}