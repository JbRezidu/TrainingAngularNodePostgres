"use strict";
const databaseConfiguration = require("config/database");
const createUser = (req, res, next) => {
    console.log(databaseConfiguration);
    return res.status(200).json(databaseConfiguration);
};

const getUsers = (req, res, next) => {
    console.log(databaseConfiguration);
    return res.status(200).json(databaseConfiguration);
};


module.exports = {
    createUser,
    getUsers
};