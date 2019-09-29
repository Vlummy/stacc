import React, { Component } from "react";
import { hentNedbetalingsplan } from "../../handlinger/apiHandlinger";
import { mapNedbetalingsplanÅr } from "../../utility/utilityFunctions";

// import style for this component
import "./style.css";
import NedbetalingsÅr from "./NedbetalingsÅr";

/**
 * Container komponent for alle sub komponenter av en nedbetalingskomponent.
 * Prosessen for å opprette en plan starter her.
 */
class NedbetalingplanContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nedbetalingsplan: [],
      unikeÅr: [],
      data: {
        laanebelop: 2000000,
        nominellRente: 3,
        terminGebyr: 30,
        utlopsDato: "",
        saldoDato: "",
        datoForsteInnbetaling: "",
        ukjentVerdi: 0
      },
      feilmelding: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Setter default dato for input
    this.settDefaultDato();
  }

  /**
   * Setter saldoDato og datoForsteInnbetaling til en default verdi av dato på dagen.
   * Hvis måned er i 12 vil datoForsteInnbetaling være samme dato året etter.
   */
  settDefaultDato() {
    const { data } = this.state;
    const date = new Date();
    var år = date.getFullYear();
    var måned = date.getMonth() + 1;
    var dag = date.getDate() + 1;
    let utlopsDato =
      år +
      10 +
      "-" +
      this.formaterMånedOgDag(måned) +
      "-" +
      this.formaterMånedOgDag(dag);
    let saldoDato =
      år +
      "-" +
      this.formaterMånedOgDag(måned) +
      "-" +
      this.formaterMånedOgDag(dag);
    let datoForsteInnbetaling = "";
    if (måned < 12)
      datoForsteInnbetaling =
        år +
        "-" +
        this.formaterMånedOgDag(måned + 1) +
        "-" +
        this.formaterMånedOgDag(dag);
    else
      datoForsteInnbetaling =
        år +
        1 +
        "-" +
        this.formaterMånedOgDag(måned) +
        "-" +
        this.formaterMånedOgDag(dag);

    data.saldoDato = saldoDato;
    data.datoForsteInnbetaling = datoForsteInnbetaling;
    data.utlopsDato = utlopsDato;
    this.setState({
      data: data
    });
  }

  /**
   * Formaterer dato med 0 i måned og dag, eller ikke.
   * Dette kommer an på om måned er under 10 eller om dag
   * @param {Måned eller Dag} verdi
   */
  formaterMånedOgDag(verdi) {
    if (verdi < 10) return "0" + verdi;
    return verdi;
  }

  /**
   * Henter og setter state til en plan basert på data.
   * Setter også unikeÅr i state.
   */
  opprettNedbetalingsplan() {
    const { data } = this.state;
    hentNedbetalingsplan(data).then(res => {
      console.log(res);
      const feilmelding = res.valideringsfeilmeldinger;
      const nedbetalingsplan = res.nedbetalingsplan.innbetalinger;
      if (feilmelding == null) {
        this.setState(
          { nedbetalingsplan: nedbetalingsplan, unikeÅr: [] },
          () => {
            let unikeÅr = mapNedbetalingsplanÅr(this.state.nedbetalingsplan);
            this.setState({
              unikeÅr: unikeÅr
            });
          }
        );
      } else {
        this.setState({
          feilmelding: feilmelding.feilmelding
        });
      }
    });
  }

  /**
   * Håndterer binding mellom state og input tags.
   * Oppdatarer state til input verdi.
   * @param {event} e
   */
  handleChange(e) {
    if (e.target.value != "") {
      const { data } = this.state;
      data[e.target.name] = e.target.value;
      this.setState({ data: data });
    }
  }

  render() {
    const { data, unikeÅr, nedbetalingsplan, feilmelding } = this.state;
    return (
      <div className="Wrapper">
        <div className="Container">
          <div className="NedbetalingsHeader">
            Lånebeløp
            <input
              placeholder="0"
              type="number"
              min="0"
              value={data.laanebelop}
              name="laanebelop"
              onChange={this.handleChange}
            />
            Nominell rente
            <input
              placeholder="0"
              type="number"
              min="0"
              max="20"
              value={data.nominellRente}
              name="nominellRente"
              onChange={this.handleChange}
            />
            Termin gebyr
            <input
              placeholder="0"
              type="number"
              min="0"
              max="100"
              value={data.terminGebyr}
              name="terminGebyr"
              onChange={this.handleChange}
            />
            Lånestart
            <input
              type="date"
              value={data.saldoDato}
              name="saldoDato"
              onChange={this.handleChange}
            />
            Første forfall
            <input
              type="date"
              value={data.datoForsteInnbetaling}
              name="datoForsteInnbetaling"
              onChange={this.handleChange}
            />
            Ferdig nedbetalt lån
            <input
              type="date"
              value={data.utlopsDato}
              name="utlopsDato"
              onChange={this.handleChange}
            />
            <button
              onClick={() => {
                this.opprettNedbetalingsplan();
              }}
            >
              Hent nedbetalingsplan
            </button>
          </div>
          {unikeÅr.length > 0 ? (
            <NedbetalingsÅr
              nedbetalingsplan={nedbetalingsplan}
              unikeÅr={unikeÅr}
            />
          ) : (
            ""
          )}
        </div>
        {feilmelding != null ? (
          <div className="FeilMelding">{feilmelding}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NedbetalingplanContainer;
