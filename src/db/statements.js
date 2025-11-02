import sqlite3 from 'sqlite3'
const db = new sqlite3.Database("./src/db/competition.db", (err) => {
  if (err) return console.error(err.message)
})


// Local Functions
function findCompetitorID(name) {
  const sqlFindCompetitorID = `
    SELECT competitorID
    FROM Competitors
    WHERE name = ?;
  `
  // Fetch competitor ID from query results
  const competitorID = (db.all(sqlFindCompetitorID, [name], (err, rows) => {
    if (err) return console.error(err.message)
    console.log(rows)
  }))
  // return competitorID
  console.log(competitorID)
}

findCompetitorID("Bob")

// Global Functions

// Team/Individual Functions
export function addCompetitor(name, teamOrIndividual, memberAmount) {
  const sqlCreateCompetitor = `
    INSERT INTO Competitors (name, teamOrIndividual, memberAmount)
    VALUES(?, ?, ?);
  `

  const sqlCreateScoresRecord = `
    INSERT INTO Scores (competitorID, event1Score, event2Score, event3Score, event4Score, event5Score)
    VALUES(?, 0, 0, 0, 0, 0);
  `

  // Add Competitor record
  db.run(sqlCreateCompetitor, [name, teamOrIndividual, memberAmount], (err) => {
    if (err) return console.error(err.message)
  })

  // Find competitor ID
  const competitorID = (findCompetitorID(name))
  
  // Add Scores record for competitor
  db.run(sqlCreateScoresRecord, [competitorID], (err) => {
    if (err) return console.error(err.message)
  })
}

export function deleteCompetitor(name) {
  const competitorID = findCompetitorID(name)

  const sqlDeleteCompetitor = `DELETE FROM Competitors WHERE competitorID = ?`
  const sqlDeleteCompetitorScores = `DELETE FROM Scores WHERE competitorID = ?`

  // Delete from competitors and Scores tables
  db.prepare(sqlDeleteCompetitor).run(competitorID)
  db.prepare(sqlDeleteCompetitorScores).run(competitorID)
}

export function changeScores(eventNumber, name, eventScore) {
  const competitorID = findCompetitorID(name)
  
  const sqlAddScores = `
    UPDATE Scores
    SET event${eventNumber}Score = ?
    WHERE competitorID = ?;
  `

  db.prepare(sqlAddScores).run(eventScore, competitorID)
}

// Single Event Competitor Functions
export function addSingleEventCompetitor(name, eventSignedUp) {
  const sqlCreateSingleEventCompetitor = `
    INSERT INTO SingleEventCompetitors (singleEventCompetitorName, eventSignedUp, scoreAchieved)
    VALUES(?, ?, 0);
  `

  // Add Competitor record
  db.prepare(sqlCreateSingleEventCompetitor).run(name, eventSignedUp)
}

export function deleteSingleEventCompetitor(name) {
  const sqlDeleteCompetitor = `DELETE FROM SingleEventCompetitors WHERE singleEventCompetitorName = ?`

  // Delete from SingleEventCompetitorsTable
  db.prepare(sqlDeleteCompetitor).run(name)
}

export function changeSingleEventScores(name, scoreAchieved) {
  const sqlAddScores = `
    UPDATE SingleEventCompetitors
    SET scoreAchieved = ?
    WHERE singleEventCompetitorName = ?;
  `

  db.prepare(sqlAddScores).run(scoreAchieved, name)
}

export function getCompetitorScores(event = 0) {
  // Creating select statement with event filter(singular event or overall)
  let eventFilterStatement
  if ( event != 0 ) {
    eventFilterStatement = `Scores.event${event}Score`
  } else {
    eventFilterStatement = `Scores.event1Score, Scores.event2Score, Scores.event3Score, Scores.event4Score, Scores.event5Score`
  }

  const sqlGetAllCompetitors = `
    SELECT Competitors.name, ${eventFilterStatement}
    FROM Competitors, Scores
    WHERE Competitors.competitorID = Scores.competitorID
  `

  const finalQuery = db.prepare(sqlGetAllCompetitors).all()
  return finalQuery
}

// testFunction()

// addCompetitor("Wowzers", "Team", 5)