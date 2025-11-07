// -------- IMPORTING/CREATING COMPETITORS FROM LOCAL STORAGE ----------

export let competitors: any

// If there are no competitors on the local storage, an empty array is made
if ( localStorage.getItem('competitors') == null ) {
  competitors = []
} else {
  const unparsedCompetitors: any = localStorage.getItem('competitors')
  competitors = JSON.parse(unparsedCompetitors)
}

export let singleEventCompetitors: any

// If there are no single event competitors on the local storage, an empty array is made
if ( localStorage.getItem('singleEventCompetitors') == null ) {
  singleEventCompetitors = []
} else {
  const unparsedSEC: any = localStorage.getItem('singleEventCompetitors')
  singleEventCompetitors = JSON.parse(unparsedSEC)
}

// ------------------------ MAKING FUNCTIONS -----------------------------

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

// Finds competitor array index by filtering a name
export function findCompetitorIndex(name: string) {
  const competitor: any = competitors.filter((competitor: any) => {
      return competitor.name == name
  })

  const sec: any = singleEventCompetitors.filter((competitor: any) => {
      return competitor.name == name
  })

  switch (0) {
    case competitor.length:
      return ([sec[0].ID - 1, 'singleEventCompetitor'])
    default:
      return ([competitor[0].ID - 1, 'competitor'])
  }
  

}

// Saves data to local storage
function saveLocalStorage() {
  const saveComps = JSON.stringify(competitors)
  localStorage.setItem("competitors", saveComps)

  const saveSEC = JSON.stringify(singleEventCompetitors)
  localStorage.setItem("singleEventCompetitors", saveSEC)
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
    competitor.ID = competitor.ID
    combinedArray.push(competitor)
  })

  return bubbleSortDescending(combinedArray)
}

export function listOfNames() {
  let listOfNames: any = []

  competitors.forEach((competitor: any) => {
    listOfNames.push(competitor.name)
  })

  singleEventCompetitors.forEach((competitor: any) => {
    listOfNames.push(competitor.name)
  })

  return listOfNames
}

// Updates a competitor's score
export function updateScore(name: string, event: number, score: number) {
  const competitorIndex = findCompetitorIndex(name)
  const eventIndex = event - 1

  if ( competitorIndex[1] == 'singleEventCompetitor' ) {
    singleEventCompetitors[competitorIndex[0]].totalScore = score
  } else {
    competitors[competitorIndex[0]].eventScores[eventIndex] = score
  }

  saveLocalStorage()
}

// Adds a competitor
export function addCompetitor(name: string, typeOfCompetitor: string, memberAmount : number, eventNumber: number) {
  if ( typeOfCompetitor != 'SingleEventCompetitor' ) {
    competitors.push({
      ID: competitors.length + 1,
      name: name,
      teamOrIndividual: typeOfCompetitor,
      memberAmount: memberAmount,
      eventScores: [0, 0, 0, 0, 0],
      eventsCompleted: 0
    })
  } else {
    singleEventCompetitors.push({
      ID: singleEventCompetitors.length + 1,
      name: name,
      eventSignedUpFor: eventNumber,
      totalScore: 0,
      eventCompleted: false
    })
  }

  saveLocalStorage()
}

// Deletes a competitor
export function deleteCompetitor(name: string) {
  let newCompetitorsList = competitors.filter((competitor: any) => {
    return competitor.name != name
  })

  let newSingleEventCompetitorsList = singleEventCompetitors.filter((competitor: any) => {
    return competitor.name != name
  })

  competitors = newCompetitorsList
  singleEventCompetitors = newSingleEventCompetitorsList

  saveLocalStorage()
}

// ---------------- MAKING ARRAYS FOR GLOBAL EXPORTS -----------------------

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

// Unfiltered competitor array and their total scores
export const totalScoresByCompetitor = getTotalScores(competitors)

// Sorted version of the unfiltered array
export const sortedTotalsByCompetitor = bubbleSortDescending(totalScoresByCompetitor)