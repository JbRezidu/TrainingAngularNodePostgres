"use strict";
// client creation for databaseconnction
const { Client } = require("pg");
const databaseConfiguration = require("config/database");


const createUser = (req, res, next) => {
    const client = new Client(databaseConfiguration);
    console.log(req.body);

    console.log(databaseConfiguration);
    // Insert use in database
    const query = "INSERT INTO applicationUser(lastName, firstName) VALUES($1, $2)";
    console.log(req.body.lastName);
    const values = [req.body.lastName, req.body.firstName];
    client.connect();
    client.query(query, values)
        .then(result => {
            console.log(result);
            client.end();
            return res.status(200).json(result);            
        }) 
        .catch(e => {
            console.log(e);
            client.end();
            return res.status(500).json(e);
        });
};

const getUsers = (req, res, next) => {
    console.log(databaseConfiguration);
    return res.status(200).json(databaseConfiguration);
};


module.exports = {
    createUser,
    getUsers
};