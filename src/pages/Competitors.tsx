import styles from "./Competitors.module.css"

export function Competitors() {
  return(
    <main className={ styles.mainContainer }>
      <h1>Competitors</h1>

      <section>
        <h2>Teams</h2>

        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Amount Of members</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Team 1</td>
              <td>4</td>
            </tr>

            <tr>
              <td>Team 2</td>
              <td>5</td>
            </tr>

            <tr>
              <td>Team 3</td>
              <td>3</td>
            </tr>

            <tr>
              <td>Team 4</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Individuals</h2>

        <table>
          <thead>
            <tr>
              <th>Individual Name</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Team 1</td>
            </tr>

            <tr>
              <td>Team 2</td>
            </tr>

            <tr>
              <td>Team 3</td>
            </tr>

            <tr>
              <td>Team 4</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Single Event Competitors</h2>

        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Events Signed Up For</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Person 1</td>
              <td>Event 1</td>
            </tr>

            <tr>
              <td>Person 2</td>
              <td>Event 2</td>
            </tr>

            <tr>
              <td>Person 3</td>
              <td>Event 1</td>
            </tr>

            <tr>
              <td>Person 4</td>
              <td>Event 2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}