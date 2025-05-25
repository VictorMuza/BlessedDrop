const express = require("express");
const router = express.Router();
const db = require("../database/db");

// Listar todos os tênis
router.get("/tenis", (req, res) => {
  db.all("SELECT * FROM tenis", [], (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(rows);
    }
  });
});

// Adicionar um tênis
router.post("/tenis", (req, res) => {
  const { nome, preco, imagem, descricao } = req.body;
  db.run(
    `INSERT INTO tenis (nome, preco, imagem, descricao) VALUES (?, ?, ?, ?)`,
    [nome, preco, imagem, descricao],
    function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Deletar um tênis
router.delete("/tenis/:id", (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM tenis WHERE id = ?`, [id], function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ message: "Tênis deletado com sucesso!" });
    }
  });
});

// Atualizar um tênis
router.put("/tenis/:id", (req, res) => {
  const { id } = req.params;
  const { nome, preco, imagem, descricao } = req.body;
  db.run(
    `UPDATE tenis SET nome = ?, preco = ?, imagem = ?, descricao = ? WHERE id = ?`,
    [nome, preco, imagem, descricao, id],
    function (err) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ message: "Tênis atualizado com sucesso!" });
      }
    }
  );
});

module.exports = router;
