const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const tenisRoutes = require("./routes/tenisRoutes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", tenisRoutes); // prefixo de API

app.get("/", (req, res) => {
  res.send("API do BlessedDrop online 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
