// object reference module for burger database

// mysql = require("mysql");

connection = require("./connection.js");


// * `selectAll()`
    // * `insertOne()`
    // * `updateOne()`
var orm= {
        selectAll:  (tableName) => {
            return new Promise((resolve, reject) =>
            {
                var queryString = "SELECT * FROM ?? ";
                connection.query(queryString, [tableName],(err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            }
        )},       
        
        insertOne: (tableName, cols, burgerName, devoured) => {
            return new Promise((resolve, reject) => {
                var queryString = "INSERT INTO ?? (??, ??) VALUES ( ?, ? )";
                connection.query(queryString, [tableName, cols[0], cols[1], burgerName, devoured], (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            }
        )},
        // set the column name to true
        upDateOne: (tableName, cols, burgerName, devoured) => {
            return new Promise((resolve, reject) => {
                var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
                connection.query(queryString, [tableName, cols, devoured, burgerName], (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            }
        )}
        
}

module.exports = orm;
