import styles from "./Table.module.css"

interface TableProps {
  array: any[],
  typeOfTable: "Team" | "Individual" | "SingleEvent" | "EventResult",
  event?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Table({array, typeOfTable, event = 0}: TableProps) {
  function GenerateTableNameHeader() {
    switch ( typeOfTable ) {
      case "Team":
        return "Team Name"
      case "Individual":
        return "Individual Name"
      case "SingleEvent":
        return "Competitor Name"
      default:
        return "Team/Competitor Name"
    }
  }

  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th>{ GenerateTableNameHeader()} </th>
          <th>Total Points</th>
          { event == 0 && typeOfTable != "SingleEvent" ? <th>Events Completed</th> : "" }
          { event == 0 && typeOfTable == "SingleEvent" ? <th>Event Completed?</th> : "" }
          { typeOfTable != "EventResult" && typeOfTable != "SingleEvent" && typeOfTable != "Individual" ? <th>Amount Of Members</th> : "" }
        </tr>
      </thead>

      <tbody>
        { 
          array.map((competitor) => {
            // adding each value to variables so the return statement looks nicer
            const name = competitor.name
            const totalScore = competitor.totalScore
            const memberAmount = competitor.memberAmount
            let eventsCompleted
            
            switch ( undefined ) {
              case ( competitor.eventCompleted ):
                eventsCompleted = competitor.eventsCompleted
                break
              case ( competitor.eventsCompleted ):
                competitor.eventCompleted == true ? eventsCompleted = "Yes" : eventsCompleted = "No"
                break
            }

            return (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ totalScore }</td>
                { event == 0 && typeOfTable != "SingleEvent" ? <td>{ eventsCompleted }/5</td> : ""}
                { event == 0 && typeOfTable == "SingleEvent" ? <td>{ eventsCompleted }</td>  : "" }
                { typeOfTable != "EventResult" && typeOfTable != "SingleEvent" && typeOfTable != "Individual" ? <td>{ memberAmount }</td> : "" }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}