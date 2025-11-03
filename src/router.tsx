import { Routes, Route } from "react-router-dom"

import { Competitors } from "./pages/Competitors"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { RankingPage } from "./components/RankingPage"
import { EventScores } from "./pages/EventScores"
import { UpdateScores } from "./pages/UpdatePages/UpdateScores"
import { UpdateCompetitorsMenu } from "./pages/UpdatePages/UpdateCompetitorsMenu"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        {/* Regular Navigation Routes */}
        <Route path="/competitors" element={ <Competitors /> } />
        <Route path="/tournament-rankings" element={ <RankingPage title={ "Tournament Ranking" } /> } />
        <Route path="/event-scores" element={ <EventScores /> } />


        {/* Event Score Routes */}
        <Route path="/event-scores/event-1" element={ <RankingPage title={ "Event 1" } event={1} /> } />
        <Route path="/event-scores/event-2" element={ <RankingPage title={ "Event 2" } event={2} /> } />
        <Route path="/event-scores/event-3" element={ <RankingPage title={ "Event 3" } event={3} /> } />
        <Route path="/event-scores/event-4" element={ <RankingPage title={ "Event 4" } event={4} /> } />
        <Route path="/event-scores/event-5" element={ <RankingPage title={ "Event 5" } event={5} /> } />
        
        {/* Admin Routes */}
        <Route path="/admin/update-scores" element={ <UpdateScores /> } />
        <Route path="/admin/update-competitors" element={ <UpdateCompetitorsMenu /> } />
        <Route path="/admin/update-competitors/delete-competitor" element={} />
        <Route path="/admin/update-competitors/delete-competitor" element={} />

        {/* <Route path="*" element={<Error404 />}> make a 404 page at some point */}
      </Route>
    </Routes>
  )
}