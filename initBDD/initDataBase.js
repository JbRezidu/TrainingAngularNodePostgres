const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "testAngular",
    password: "admin",
    port: 5432
});

client.connect();

client.query(
    'CREATE TABLE applicationUser(id SERIAL PRIMARY KEY, lastName VARCHAR(40) not null, firstName VARCHAR(40) not null)',
    (err, res) => {
        console.log(err, res);
        client.end();
    }
);