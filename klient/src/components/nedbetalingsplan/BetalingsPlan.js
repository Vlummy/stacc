import React, { Component } from "react";
import { formaterDesimaler } from "../../utility/utilityFunctions";

/**
 * Rendrer en tabell over all innbetalinger det gitte året.
 */
class BetalingsPlan extends Component {
  render() {
    const { synligPlan } = this.props;
    return (
      <div className="BetalingsPlan">
        <table>
          <thead>
            <tr>
              <th>Dato</th>
              <th>Restgjeld</th>
              <th>Innbetaling</th>
              <th>Gebyr</th>
              <th>Renter</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {synligPlan.map((data, index) => {
              let restgjeld = formaterDesimaler(data.restgjeld, 2);
              let innbetaling = formaterDesimaler(data.innbetaling, 2);
              let renter = formaterDesimaler(data.renter, 2);
              let total = formaterDesimaler(data.total, 2);
              return (
                <tr key={index}>
                  <td>{data.dato}</td>
                  <td>{restgjeld}</td>
                  <td>{innbetaling}</td>
                  <td>{data.gebyr}</td>
                  <td>{renter}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BetalingsPlan;
