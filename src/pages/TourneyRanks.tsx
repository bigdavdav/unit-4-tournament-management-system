import { TrophyIcon } from "@phosphor-icons/react"

import { TopThreeCard } from "../components/TopThreeCard"
import styles from "./TourneyRanks.module.css"

export function TourneyRanks() {
  return (
    <main>
      <TopThreeCard colorName="bronze" />
      <TopThreeCard colorName="silver" />
      <TopThreeCard colorName="gold" />
    </main>
  )
}