const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./data/chinook.db";

function connectToDatabase() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error('database connection error -', error.message);
            }
            // createTable(db);
            console.log("Connected to the database successfully");
        });
        return db;
    }
}

// function createTable(db) {
//     db.exec(`
//     CREATE TABLE migration
//     (
//       key       VARCHAR(100),
//       name VARCHAR(100),
//     )
//   `);
// }

module.exports = connectToDatabase();