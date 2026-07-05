const Database = require('better-sqlite3');

const db = new Database('users.db')

db.prepare(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING UNIQUE NOT NULL,
    password STRING NOT NULL
    )
    `).run();

db.prepare(`
    INSERT INTO users  (username, password) VALUES (?, ?)
    `).run('testuser', '123');