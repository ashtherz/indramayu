import sqlite3 from 'sqlite3';
import { join } from 'path';

const db = new sqlite3.Database(join(__dirname, '../../ledig.db'), (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to SQLite database');
        // Create table if it doesn't exist
        db.run(`
            CREATE TABLE IF NOT EXISTS ledig_data (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT NOT NULL,
                program TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }
});

export default db;