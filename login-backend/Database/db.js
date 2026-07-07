const Database = require('better-sqlite3');
const path = require('path')
const db = new Database(path.join(__dirname, 'users.db'))
const bcrypt = require('bcrypt');
const { create } = require('domain');

// async function createTestUser(){
//     const hashedPassword = await bcrypt.hash('123', 10);
    
//     db.prepare(`
//         INSERT INTO users  (username, password) VALUES (?, ?)
//         `).run('testuser', hashedPassword);
// }

db.prepare(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING UNIQUE NOT NULL,
    password STRING NOT NULL
    )
    `).run();

    // db.prepare(`
    //     DELETE FROM users
    //     `).run()

// createTestUser();

module.exports = db;