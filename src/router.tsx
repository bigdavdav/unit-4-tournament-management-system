import { Routes, Route } from "react-router-dom"

import { Competitors } from "./pages/Competitors"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { TourneyRanks } from "./pages/TourneyRanks"
import { EventScores } from "./pages/EventScores"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/competitors" element={ <Competitors /> } />
        <Route path="/tournament-rankings" element={ <TourneyRanks /> } />
        <Route path="/event-scores" element={ <EventScores /> } />

        {/* <Route path="*" element={<Error404 />}> make a 404 page at some point */}
      </Route>
    </Routes>
  )
}