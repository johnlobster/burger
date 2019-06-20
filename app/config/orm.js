// object reference module for burger database

// mysql = require("mysql");

const connection = require("./connection.js");


const orm= {
        selectAll:  (tableName) => {
            return new Promise((resolve, reject) => {
                let queryString = "SELECT * FROM ?? ";
                connection.query(queryString, [tableName],(err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            }
        )},       
        
        insertOne: (tableName, cols, burgerName, devoured) => {
            return new Promise((resolve, reject) => {
                var queryString = "INSERT INTO ?? (??, ??) VALUES ( ?, ? )";
                console.log(queryString);
                connection.query(queryString, [tableName, cols[0], cols[1], burgerName, devoured], (err, res) => {
                    if (err) {
                        console.log(err.sql);
                        reject(err);
                    }
                    resolve(res);
                });
            }
        )},
        // set the column name to true and return all burger data
        upDateOne: (tableName, cols, whereName, setBoolean) => {
            return new Promise((resolve, reject) => {
                let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
                connection.query(queryString, [tableName, cols[1], setBoolean, cols[0], whereName], (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
            }
        )}
        
}

// test code
// orm.insertOne("burger",["burger_name", "devoured"],"Veggie", false)
// .then( (res) => {
//     console.log("Insert One");
//     console.log(res);
// })
// .then( () => { 
//     return orm.selectAll("burger")
// })
// .then( (res) => {
//     console.log("Select all");
//     console.log(res);
// }) 
// .then(() => {
//     return orm.upDateOne("burger", ["burger_name", "devoured"], "Veggie", true)
// })
// .then((res) => {
//     console.log("Update One");
//     console.log(res);
// }) 
// .then(() => {
//     return orm.selectAll("burger")
// })
// .then((res) => {
//     console.log("Select all");
//     console.log(res);
//     console.log("\nTesting completed");
//     connection.end();
// });

module.exports = orm;
