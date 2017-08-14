const { Pool } = require('pg');
const databaseConfiguration = require("config/database");

const pool = new Pool(databaseConfiguration);

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}