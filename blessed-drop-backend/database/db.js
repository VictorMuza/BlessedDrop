const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/blessedDrop.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tenis (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      preco REAL,
      imagem TEXT,
      descricao TEXT
    )
  `);
});

module.exports = db;
