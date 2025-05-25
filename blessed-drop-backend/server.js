const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Rota teste
app.get("/", (req, res) => {
  res.send("API do BlessedDrop está online 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
