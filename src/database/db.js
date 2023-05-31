const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const Database = require('better-sqlite3');

const dbFileName = join(process.env.DB_FILE);
const db = new Database(dbFileName);

const schemaPath = join('src', 'database', 'schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

module.exports = db;
