mysql = require("mysql");
require("dotenv").config();


// connect to the database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: String(process.env.MYSQL_PASSWORD),
    database: "burger_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports.connection=connection;
