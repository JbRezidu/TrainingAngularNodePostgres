"use strict";
// client creation for databaseconnction
const db = require("db");

const createUser = (req, res, next) => {
    // Insert use in database
    const query = "INSERT INTO applicationUser(lastName, firstName) VALUES($1, $2)";
    const values = [req.body.lastName, req.body.firstName];
    db.query(query, values)
        .then(result => {
            console.log(result);
            return res.status(200).json(result);            
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error);
        });
};

const getUsers = (req, res, next) => {
    // Get all users
    db.query("SELECT * FROM applicationUser")
        .then(result => {
            console.log(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error);
        });
};


module.exports = {
    createUser,
    getUsers
};