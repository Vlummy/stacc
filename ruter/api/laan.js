const express = require("express");
const router = express.Router();
const eksterneAPIs = require("../api_functions/eksterneAPIs");
const payloadValidering = require("../validerings_funksjoner/payloadValidering");

/**
 * Lokal API rute for å bruke stacc sitt api som generer og responderer med en nedbetalingsplan.
 * Rute: "/api/laan/nedbetalingsplan"
 */
router.post("/nedbetalingsplan", (req, res) => {
  const payload = req.body;
  const errors = payloadValidering.nedbetalingsplanPayloadValidering(payload);

  if (errors.fantFeil) return res.status(400).json(errors);
  eksterneAPIs
    .hentNedbetalingsplan(payload)
    .then(resultat => res.status(200).json(resultat));
});

module.exports = router;
