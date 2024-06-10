const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const port = 3000;

const db = mysql2.createConnection({
  host: "172.17.0.2",
  user: "user",
  password: "passwd",
  database: "db_aula",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/liveness", (req, res) => {
  res.status(200).send("OK");
});

app.get("/readiness", (req, res) => {
  res.status(200).send("Ready to handle requests");
});

app.get("/consulta-dados", (req, res) => {
  const query = "SELECT * FROM cidades";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Erro na consulta...");
      return;
    }
    res.status(200).json({ message: "Dados encontrados!", data: results });
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
