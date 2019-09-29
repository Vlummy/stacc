const axios = require("axios");
module.exports = {
  /**
   * Denne funksjonen brukes for å hente en nedbetalingsplan. Den tar inn et json payload object, deretter
   * sender et post request med payload til stacc sin nedbetalingsplan api. Hvis alle parameter i payload objektet
   * stemmer får vi en liste med objekter som holder på informasjon om nedbetalingsplanen over tid.
   *
   * Eksemple på input:
   *
   * {
   *  "laanebelop": 2000000,
   *  "nominellRente": 3,
   *  "terminGebyr":30,
   *  "utlopsDato":"2045-01-01",
   *  "saldoDato":"2020-01-01",
   *  "datoForsteInnbetaling":"2020-02-01",
   *  "ukjentVerdi":1
   * }
   *
   * @param {Object} payload
   */
  hentNedbetalingsplan: function(payload) {
    return axios
      .post(
        "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan",
        payload
      )
      .then(res => {
        return res.data.nedbetalingsplan;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
