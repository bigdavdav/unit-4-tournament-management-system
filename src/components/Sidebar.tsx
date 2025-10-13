import { useState } from "react"
import { NavLink } from "react-router-dom"
import { UserCheckIcon, UsersThreeIcon, RankingIcon, TrophyIcon, ScrollIcon } from "@phosphor-icons/react"

import styles from "./Sidebar.module.css"

export function Sidebar() {
  // const [currentPage, setCurrentPage] = useState(0)
  // Add feature to only highlight selected page at some point

  return (
    <aside className={ styles.sidebarContainer }>
      <NavLink className={ styles.logo } to="/">Logo</NavLink>

      <nav className={ styles.navContainer }>
        <div className={ styles.mainNav }>
          <p>Menu</p>

          <NavLink to="/competitors">
            <UsersThreeIcon size={20} /> 
            Competitors
          </NavLink>

          <NavLink to="/tournament-rankings">
            <RankingIcon size={20} />
            Tournament Ranks
          </NavLink>

          <NavLink to="/event-scores">
            <TrophyIcon size={20} />
            Scores Per Event
          </NavLink>
        </div>

        <div className={ styles.adminNav }>
          <p>Admin Menu</p>

          <NavLink to="/">
          <ScrollIcon size={20} />
            Update Scores
          </NavLink>

          <NavLink to="/">
            <UserCheckIcon size={20} />
            Update Competitor
          </NavLink>
        </div>
      </nav>

    </aside>
  )
}