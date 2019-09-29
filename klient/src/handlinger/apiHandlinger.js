import axios from "axios";

/**
 * Funksjon for å hente en ny nedbetalingsplan.
 * Returnerer et array med objekter. Hvert objekt er en nedbetaling med informasjon om resterende lån og dato.
 * Hvis en feil skjer, returneres et errors objekt med informasjon om hvor feilen oppstår.
 * Dette objektet kan brukes for å visualisere feilen hos bruker.
 * @param {Object} payload
 */
export function hentNedbetalingsplan(payload) {
  return axios
    .post("api/laan/nedbetalingsplan", payload)
    .then(res => {
      return res.data.innbetalinger;
    })
    .catch(err => {
      return err.response.data;
    });
}
