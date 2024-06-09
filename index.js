const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const port = 3000;

const db = mysql2.createConnection({
  host: "localhost",
  user: "user",
  password: "passwd",
  database: "db_aula",
});

app.get("/consulta-dados", (req, res) => {
  const query = "SELECT * FROM cidades";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Erro na consulta...");
      return;
    }
    res
      .status(200)
      .json({ message: "Dados encontrados!", data: results });
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
