import React, { Component } from "react";
import BetalingsPlan from "./BetalingsPlan";
import { filtrerNedbetalingsplanVedÅr } from "../../utility/utilityFunctions";

import "./style.css";

class NedbetalingsÅr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      synligPlan: []
    };
  }

  /**
   * Oppretter en synlig plan for det spesifikke året gitt som parameter.
   * Setter synligPlan i state avhengig av om hvilken år som velges av bruker.
   * @param {String} år
   */
  opprettSynligPlan(år) {
    const { nedbetalingsplan } = this.props;
    let synligPlan = filtrerNedbetalingsplanVedÅr(nedbetalingsplan, år);
    this.setState({
      synligPlan: synligPlan
    });
  }

  render() {
    const { synligPlan } = this.state;
    return (
      <div className="NedbetalingsÅrContainer">
        <div className="NedbetalingsÅr">
          {this.props.unikeÅr.map(år => {
            return (
              <button onClick={() => this.opprettSynligPlan(år)}>{år}</button>
            );
          })}
        </div>
        {synligPlan.length > 0 ? <BetalingsPlan synligPlan={synligPlan} /> : ""}
      </div>
    );
  }
}

export default NedbetalingsÅr;
