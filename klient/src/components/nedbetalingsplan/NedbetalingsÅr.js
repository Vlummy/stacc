import React, { Component } from "react";
import BetalingsPlan from "./BetalingsPlan";
import { filtrerNedbetalingsplanVedÅr } from "../../utility/utilityFunctions";

/**
 * Komponent for å rendre og behandle buttons for å rendre nedbetalingsplan tabeller for de
 * alle årene.
 *
 * Props:
 *    nedbetalingsplan = er hele nedbetalingsplanen som skal filtreres og rendres.
 *    unikeÅr = alle unike år i som eksisterer i nedbetalingsplanen.
 */
class NedbetalingsÅr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synligPlan: [],
      nåværendeÅr: ""
    };
  }

  /**
   * Oppretter en synlig plan for det spesifikke året gitt som parameter.
   * Setter synligPlan i state avhengig av om hvilken år som velges av bruker.
   * @param {String} år
   */
  opprettSynligPlan(år) {
    const { nedbetalingsplan } = this.props;
    const { nåværendeÅr } = this.state;
    let synligPlan = filtrerNedbetalingsplanVedÅr(nedbetalingsplan, år);
    this.setState({
      synligPlan: synligPlan,
      nåværendeÅr: nåværendeÅr == år ? "" : år
    });
  }

  render() {
    const { synligPlan, nåværendeÅr } = this.state;
    return (
      <div className="NedbetalingsÅrContainer">
        <div className="NedbetalingsÅr">
          {this.props.unikeÅr.map((år, index) => {
            return (
              <button key={index} onClick={() => this.opprettSynligPlan(år)}>
                {år}
              </button>
            );
          })}
        </div>
        {synligPlan.length > 0 && nåværendeÅr != "" ? (
          <div>
            Nedbetalingsplan året {nåværendeÅr}
            <BetalingsPlan synligPlan={synligPlan} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NedbetalingsÅr;
