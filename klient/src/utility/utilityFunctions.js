/**
 * Funksjon som tar inn en nedbetalingsplan og Set konverterer år.
 * På denne måten får vi en liste med alle og bare år som er planlagt i nedbetalingsplanen.
 * Et "Set" kan bare ha unike verdier.
 * @param {Array} nedbetalingsplan
 */
export function mapNedbetalingsplanÅr(nedbetalingsplan) {
  var unikeÅr = [
    ...new Set(
      nedbetalingsplan.map(obj => {
        var split = obj.dato.split("-");
        var dato = new Date(split[0], split[1], split[2]);
        var år = dato.getFullYear();
        return år;
      })
    )
  ];
  return unikeÅr;
}

/**
 * Filtrer en nedbetalingsår for å hente ut gjeldene for år
 * @param {Array} nedbetalingsplan
 * @param {String} år
 */
export function filtrerNedbetalingsplanVedÅr(nedbetalingsplan, år) {
  var filtrertListe = nedbetalingsplan.filter(obj => {
    var split = obj.dato.split("-");
    if (split[0] == år) return obj;
  });
  return filtrertListe;
}

/**
 * Formaterer et desimaltall til gitt antall desimaler
 * @param {Number} desimalTall 
 */
export function formaterDesimaler(desimalTall, desimaler) {
  return parseFloat(Math.round(desimalTall * 100) / 100).toFixed(desimaler);
}
