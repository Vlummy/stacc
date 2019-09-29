module.exports = {
  /**
   * Funksjon for å validere at alle nøkler i payload har en verdi.
   * Hvis ikke returner errorObjekt.
   *
   * Hvis fant feil er true, er ikke objektet akseptert.
   *
   * @param {Object} payload
   */
  nedbetalingsplanPayloadValidering: function(payload) {
    var errors = { fantFeil: false };
    for (key in payload) {
      if (this.erTom(payload[key])) {
        errors[key] = "Kan ikke være tom";
        errors.fantFeil = true;
      }
    }
    return errors;
  },

  /**
   * Funksjon som sjekker om en verdi av en nøkkel er tom.
   * @param {any} verdi
   */
  erTom: function(verdi) {
    if (
      verdi === undefined ||
      verdi === null ||
      (typeof verdi === "object" && Object.keys(verdi).length === 0) ||
      (typeof verdi === "string" && verdi.trim().length === 0)
    ) {
      return true;
    }
    return false;
  }
};
