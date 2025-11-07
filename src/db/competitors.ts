// ---------- MAKING COMPETITORS ----------------

// Team/Individual Competitors
// export let competitors = [
//   {
//     ID: 1,
//     name: "team1",
//     teamOrIndividual: "Individual",
//     memberAmount: 1,
//     eventScores: [3, 0, 1, 0, 2],
//     eventsCompleted: 3
//   },
//   {
//     ID: 2,
//     name: "team2",
//     teamOrIndividual: "Team",
//     memberAmount: 3,
//     eventScores: [3, 0, 0, 0, 0],
//     eventsCompleted: 3
//   },
//     {
//     ID: 3,
//     name: "team3",
//     teamOrIndividual: "Individual",
//     memberAmount: 1,
//     eventScores: [3, 0, 2, 0, 0],
//     eventsCompleted: 3
//   },
//   {
//     ID: 4,
//     name: "team4",
//     teamOrIndividual: "Team",
//     memberAmount: 3,
//     eventScores: [3, 0, 1, 0, 0],
//     eventsCompleted: 3
//   },
//     {
//     ID: 5,
//     name: "team5",
//     teamOrIndividual: "Individual",
//     memberAmount: 1,
//     eventScores: [2, 0, 0, 0, 0],
//     eventsCompleted: 2
//   },
//   {
//     ID: 6,
//     name: "team6",
//     teamOrIndividual: "Team",
//     memberAmount: 3,
//     eventScores: [1, 0, 0, 0, 0],
//     eventsCompleted: 2
//   },
// ]

// Single Event Competitors
// export let singleEventCompetitors = [
//   {
//     ID: 1,
//     name: "se1",
//     eventSignedUpFor: 1,
//     totalScore: 0,
//     eventCompleted: true
//   },
//   {
//     ID: 2,
//     name: "se2",
//     eventSignedUpFor: 2,
//     totalScore: 0,
//     eventCompleted: false
//   },
//   {
//     ID: 3,
//     name: "se3",
//     eventSignedUpFor: 3,
//     totalScore: 0,
//     eventCompleted: true
//   },
//   {
//     ID: 4,
//     name: "se4",
//     eventSignedUpFor: 4,
//     totalScore: 0,
//     eventCompleted: false
//   },
//   {
//     ID: 5,
//     name: "se5",
//     eventSignedUpFor: 5,
//     totalScore: 0,
//     eventCompleted: true
//   },
//   {
//     ID: 6,
//     name: "se6",
//     eventSignedUpFor: 1,
//     totalScore: 1,
//     eventCompleted: false
//   },
// ]

export let competitors: any = localStorage.getItem('competitors')
competitors = JSON.parse(competitors)

export let singleEventCompetitors: any = localStorage.getItem('singleEventCompetitors')
singleEventCompetitors = JSON.parse(singleEventCompetitors)

// ------------ MAKING FUNCTIONS ----------------

// To be used when finding sum of points and the amount of events completed.
// Sum of points is very obvious how it will work.
//
// Since the competitor property is set to 1 if an event is completed, and 0 when its not,
// I was able to use the same function to find the amount of events completed by summing
// the array for events completed.
function sumOfArrayItems(array: number[]) {
  let totalPoints = 0

  array.forEach((number) => {
    totalPoints += number
  })

  return totalPoints
}

// Bubble sort used to sort out placements in ranking page.
// It is called bubbleSortDescending as it sorts items from largest to smallest.
function bubbleSortDescending(array: any[]) {
  for ( let i = 0; i < (array.length - 1); i++ ) {
    for ( let j = 0; j < (array.length - i - 1); j++ ) {
      if ( array[j].totalScore < array[j + 1].totalScore ) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }

  return array
}

export function findCompetitorIndex(name: string) {
  const competitor: any = competitorsByEvent(0).filter((competitor: any) => {
      return competitor.name == name
    })

  return (competitor[0].ID - 1)
}

function saveLocalStorage() {
  const saveComps = JSON.stringify(competitors)
  localStorage.setItem("competitors", saveComps)

  const saveSEC = JSON.stringify(singleEventCompetitors)
  localStorage.setItem("singleEventCompetitors", saveSEC)
}

// This just makes a new array but adds a total score instead of showing each score individually.
// It also give the total score for a singular event if an event number is specified.
function getTotalScores(array: any[], event = 0) {
  let newArray: object[] = []
  
  array.forEach((competitor) => {
    let totalScore
    if ( event == 0 ) {
      totalScore = sumOfArrayItems(competitor.eventScores)
    } else {
      totalScore = competitor.eventScores[event - 1]
    }

    newArray.push({
      ID: competitor.ID,
      name: competitor.name,
      memberAmount: competitor.memberAmount,
      totalScore: totalScore,
      eventsCompleted: competitor.eventsCompleted
    })
  })

  return newArray
}

// This combines normal competitors and single event competitors into one array so
// tables for each event can be displayed with every participant avaliable.
// This function will be exported so the event number can be specified to each component.
export function competitorsByEvent(event: number) {
  let combinedArray: any[] = []
  let filteredSingleEventCompetitors = singleEventCompetitors.filter((competitor: any) => {
    return competitor.eventSignedUpFor == event
  })

  if ( event == 0 ) {
    filteredSingleEventCompetitors = singleEventCompetitors
  }

  getTotalScores(competitors, event).forEach((competitor: any) => {
    combinedArray.push(competitor)
  })
  filteredSingleEventCompetitors.forEach((competitor: any) => {
    competitor.ID = competitor.ID + 1000 // added 1000 just so IDs don't clash with each other
    combinedArray.push(competitor)
  })

  return bubbleSortDescending(combinedArray)
}

export function updateScore(name: string, event: number, score: number) {
  const competitorIndex = findCompetitorIndex(name)
  const eventIndex = event - 1
  competitors[competitorIndex].eventScores[eventIndex] = score

  console.log(competitors[competitorIndex].eventScores)

  saveLocalStorage()
}

// --------- MAKING ARRAYS FOR GLOBAL EXPORTS --------------

// Filtered competitor arrays by team/individual
const individualCompetitors =  competitors.filter((competitor: any) => {
  return competitor.teamOrIndividual == 'Individual'
})

const teamCompetitors =  competitors.filter((competitor: any) => {
  return competitor.teamOrIndividual == 'Team'
})

// Filtered competitor arrays with total scores
export const totalScoresByIndividual = getTotalScores(individualCompetitors)
export const totalScoresByTeam = getTotalScores(teamCompetitors)

export const sortedTotalScoresByIndividual = bubbleSortDescending(totalScoresByIndividual)
export const sortedTotalScoresByTeam = bubbleSortDescending(totalScoresByTeam)
export const sortedSingleEventCompetitors = bubbleSortDescending(singleEventCompetitors)

// Unfiltered competitor array and their total scores
export const totalScoresByCompetitor = getTotalScores(competitors)

// Sorted version of the unfiltered array
export const sortedTotalsByCompetitor = bubbleSortDescending(totalScoresByCompetitor)