const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

// API skripter
const laan = require("./ruter/api/laan");

app.use(bodyParser.json());
app.use("/api/laan", laan);

app.listen(port, () => console.log("Lytter på port", port));
